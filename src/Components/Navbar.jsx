import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'For Authors', path: 'authors' },
    { label: 'Speakers', path: 'speakers' },
    { label: 'Committee', path: 'commitee' },
    { label: 'Paper Submission', path: 'paperSubmission' },
    { label: 'Venue', path: 'venue' },
    { label: 'Registration', path: 'registration' },
    { label: 'Schedule', path: 'schedule' },
    { label: 'Contact Us', path: 'contactUs' }
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        
        <div className="text-xl font-bold ml-2">
          
        </div>

        
        <ul className="hidden sm:flex space-x-6 text-lg font-semibold">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? 'text-orange-400' : 'hover:text-orange-200 transition duration-200'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            {navItems.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'text-orange-400' : 'hover:text-orange-200 transition duration-200'
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
