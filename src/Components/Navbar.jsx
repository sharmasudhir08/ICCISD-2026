import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import shardalogo from '../assets/shardalogo.png';
import ieee from '../assets/ieeeup.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'For Authors', path: 'authors' },
    { label: 'Speakers', path: 'speakers' },
    { label: 'Committee', path: 'committee' },
    { label: 'Paper Submission', path: 'paperSubmission' },
    { label: 'Venue', path: 'venue' },
    { label: 'Registration', path: 'registration' },
    { label: 'Schedule', path: 'schedule' },
    { label: 'Contact Us', path: 'contactUs' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
      ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200'
      : 'bg-white/80 backdrop-blur-sm border-b border-white/20'
      }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">

        {/* Brand / Logos */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <img src={shardalogo} alt="Sharda University" className="h-10 md:h-12 w-auto object-contain" />
          <div className="hidden lg:block w-px h-10 bg-slate-200 mx-2"></div>
          <img src={ieee} alt="IEEE" className="h-8 md:h-10 w-auto object-contain" />
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none text-slate-900 p-2 rounded-md hover:bg-slate-100"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-1 ml-auto items-center">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-xs xl:text-sm font-medium transition-all duration-300 ${isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl transition-all duration-300 origin-top overflow-hidden ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <ul className="px-4 py-6 space-y-2 flex flex-col items-center">
          {navItems.map(({ label, path }) => (
            <li key={path} className="w-full">
              <NavLink
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-center px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
