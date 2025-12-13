import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AICounselor from './components/AICounselor';
import ContactForm from './components/ContactForm';
import About from './components/About';
import UniversityShortlisting from './components/UniversityShortlisting';
import BlockedAccount from './components/BlockedAccount';
import VisaAssistance from './components/VisaAssistance';
import VisaProcessing from './components/VisaProcessing';
import APSAssistance from './components/APSAssistance';
import ApplicationAssistance from './components/ApplicationAssistance';
import GRESupport from './components/GRESupport';
import LoanServices from './components/LoanServices';
import CourierServices from './components/CourierServices';
import Tools from './components/Tools';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { NavPage } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<NavPage>(NavPage.HOME);

  // Automatically scroll to top when the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case NavPage.HOME:
        return (
          <div className="animate-fadeIn">
            <Hero setPage={setCurrentPage} />
            <Services setPage={setCurrentPage} />
            <ContactForm />
          </div>
        );
      case NavPage.SERVICES:
        return (
          <div className="animate-fadeIn">
            <div className="bg-slate-900 py-16 px-4 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-slate-900 opacity-50"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Our Services</h1>
                <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">Comprehensive solutions for your German education journey</p>
              </div>
            </div>
            <Services setPage={setCurrentPage} />
            <ContactForm />
          </div>
        );
      case NavPage.UNIVERSITY_SHORTLISTING:
        return <UniversityShortlisting setPage={setCurrentPage} />;
      case NavPage.APPLICATION_ASSISTANCE:
        return <ApplicationAssistance setPage={setCurrentPage} />;
      case NavPage.BLOCKED_ACCOUNT:
        return <BlockedAccount setPage={setCurrentPage} />;
      case NavPage.VISA_ASSISTANCE:
        return <VisaAssistance setPage={setCurrentPage} />;
      case NavPage.VISA_PROCESSING:
        return <VisaProcessing setPage={setCurrentPage} />;
      case NavPage.APS_ASSISTANCE:
        return <APSAssistance setPage={setCurrentPage} />;
      case NavPage.GRE_SUPPORT:
        return <GRESupport setPage={setCurrentPage} />;
      case NavPage.LOAN_SERVICES:
        return <LoanServices setPage={setCurrentPage} />;
      case NavPage.COURIER_SERVICES:
        return <CourierServices setPage={setCurrentPage} />;
      case NavPage.TOOLS:
        return <Tools />;
      case NavPage.AI_COUNSELOR:
        return <AICounselor />;
      case NavPage.ABOUT:
        return <About />;
      case NavPage.CONTACT:
        return (
          <div className="animate-fadeIn">
             <div className="bg-slate-900 py-16 px-4 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-red-900 opacity-50"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Contact Us</h1>
                <p className="text-gray-300 mt-4 text-lg">Get in touch with our expert counselors</p>
              </div>
            </div>
            <ContactForm />
          </div>
        );
      default:
        return <Hero setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 flex flex-col font-sans relative">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer setPage={setCurrentPage} />
      <WhatsAppButton />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;