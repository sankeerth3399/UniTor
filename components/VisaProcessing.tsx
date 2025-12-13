import React, { useState } from 'react';
import { NavPage } from '../types';
import { ArrowLeft, FileText, Lock } from 'lucide-react';
import VisaAssistance from './VisaAssistance';
import BlockedAccount from './BlockedAccount';

interface VisaProcessingProps {
  setPage: (page: NavPage) => void;
}

const VisaProcessing: React.FC<VisaProcessingProps> = ({ setPage }) => {
  const [activeTab, setActiveTab] = useState<'visa' | 'blocked'>('visa');

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-12 px-4 text-center relative">
        <button 
          onClick={() => setPage(NavPage.SERVICES)}
          className="absolute left-4 top-8 sm:left-8 flex items-center text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-1" /> Back
        </button>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 sm:mt-0">Visa Processing Services</h1>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">End-to-end support for your German Student Visa and Blocked Account.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-xl inline-flex shadow-inner">
            <button
              onClick={() => setActiveTab('visa')}
              className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'visa' 
                  ? 'bg-white text-red-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <FileText className="h-4 w-4 mr-2" />
              Visa Application
            </button>
            <button
              onClick={() => setActiveTab('blocked')}
              className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'blocked' 
                  ? 'bg-white text-red-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Lock className="h-4 w-4 mr-2" />
              Blocked Account
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="transition-opacity duration-300">
          {activeTab === 'visa' ? (
            <div className="animate-fadeIn">
              <VisaAssistance setPage={setPage} embedded={true} />
            </div>
          ) : (
            <div className="animate-fadeIn">
              <BlockedAccount setPage={setPage} embedded={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisaProcessing;