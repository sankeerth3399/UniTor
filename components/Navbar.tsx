import React, { useState, useEffect } from 'react';
import { NavPage } from '../types';
import { GraduationCap, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: NavPage;
  setPage: (page: NavPage) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: NavPage.HOME },
    { label: 'Services', value: NavPage.SERVICES },
    { label: 'Tools', value: NavPage.TOOLS },
    { label: 'About', value: NavPage.ABOUT },
    { label: 'AI Counselor', value: NavPage.AI_COUNSELOR },
    { label: 'Contact', value: NavPage.CONTACT },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-1' : 'bg-white py-3 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => setPage(NavPage.HOME)}>
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-2.5 rounded-xl mr-3 shadow-md group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-2xl tracking-tight text-slate-800 leading-none group-hover:text-red-700 transition-colors">
                Uni<span className="text-yellow-500">Tor</span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-gray-500 tracking-wider uppercase mt-1">
                Door for your Master's Dream
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setPage(item.value)}
                className={`text-sm font-semibold transition-all duration-200 relative group px-2 py-1 ${
                  currentPage === item.value
                    ? 'text-red-600'
                    : 'text-gray-600 hover:text-red-600'
                } ${item.value === NavPage.AI_COUNSELOR ? 'hover:scale-110 inline-block' : ''}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${currentPage === item.value ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
            <button
              onClick={() => setPage(NavPage.CONTACT)}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-red-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                setPage(item.value);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                currentPage === item.value
                  ? 'text-red-600 bg-red-50 border-l-4 border-red-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;