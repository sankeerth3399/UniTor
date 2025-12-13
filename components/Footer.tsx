import React from 'react';
import { GraduationCap } from 'lucide-react';
import { NavPage } from '../types';

interface FooterProps {
    setPage: (page: NavPage) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-2">
              <GraduationCap className="h-8 w-8 text-yellow-500 mr-2" />
              <span className="font-bold text-2xl tracking-tight">
                Uni<span className="text-red-600">Tor</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 font-medium tracking-wider uppercase pl-1">Door for your Master's Dream</p>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Empowering students to achieve their dreams of tuition-free education in Germany through expert guidance and personalized support.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li><button onClick={() => setPage(NavPage.UNIVERSITY_SHORTLISTING)} className="text-base text-gray-300 hover:text-white text-left transition-colors">University Search</button></li>
              <li><button onClick={() => setPage(NavPage.APPLICATION_ASSISTANCE)} className="text-base text-gray-300 hover:text-white text-left transition-colors">Application Assistance</button></li>
              <li><button onClick={() => setPage(NavPage.VISA_PROCESSING)} className="text-base text-gray-300 hover:text-white transition-colors">Visa Processing</button></li>
              <li><button onClick={() => setPage(NavPage.BLOCKED_ACCOUNT)} className="text-base text-gray-300 hover:text-white transition-colors">Blocked Account</button></li>
              <li><button onClick={() => setPage(NavPage.LOAN_SERVICES)} className="text-base text-gray-300 hover:text-white transition-colors">Education Loans</button></li>
              <li><button onClick={() => setPage(NavPage.COURIER_SERVICES)} className="text-base text-gray-300 hover:text-white transition-colors">Courier Services</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><button onClick={() => setPage(NavPage.ABOUT)} className="text-base text-gray-300 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setPage(NavPage.TOOLS)} className="text-base text-gray-300 hover:text-white transition-colors">Student Tools</button></li>
              <li><button onClick={() => setPage(NavPage.CONTACT)} className="text-base text-gray-300 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;