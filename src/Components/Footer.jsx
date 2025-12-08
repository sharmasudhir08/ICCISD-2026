import React from 'react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Column 1: About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">ICCISD-2026</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              International Conference on Computational Intelligence Systems and Devices.
              Bringing together researchers and practitioners to share knowledge and innovation.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/registration" className="hover:text-blue-400 transition-colors">Registration</a></li>
              <li><a href="/paperSubmission" className="hover:text-blue-400 transition-colors">Paper Submission</a></li>
              <li><a href="/schedule" className="hover:text-blue-400 transition-colors">Schedule</a></li>
              <li><a href="/contactUs" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>Sharda University, Greater Noida, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:iccisd@sharda.ac.in" className="hover:text-white">iccisd@sharda.ac.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+91-1234567890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2026 ICCISD. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;