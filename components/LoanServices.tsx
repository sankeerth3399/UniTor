import React from 'react';
import { NavPage } from '../types';
import { ArrowLeft, Landmark, Percent, CheckCircle, ShieldCheck, Banknote, Calendar } from 'lucide-react';

interface LoanServicesProps {
  setPage: (page: NavPage) => void;
}

const LoanServices: React.FC<LoanServicesProps> = ({ setPage }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-12 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 opacity-60"></div>
        <div className="relative z-10">
          <button 
            onClick={() => setPage(NavPage.SERVICES)}
            className="absolute left-4 top-8 sm:left-8 flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-1" /> Back
          </button>
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
             <Landmark className="h-8 w-8 text-green-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">Education Loan Assistance</h1>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">Fund your German dream with secured and unsecured loan options from top banks.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Intro Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why take an Education Loan for Germany?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Even though most public universities in Germany are tuition-free, you still need to prove financial stability for your visa (Blocked Account) and cover living expenses. An education loan is a smart way to manage these costs while availing tax benefits under <span className="font-semibold text-green-700">Section 80E</span> of the Income Tax Act.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
             <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <ShieldCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">100% Finance</h3>
                <p className="text-sm text-gray-500">Cover tuition (if any) + Living costs</p>
             </div>
             <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Pre-Visa Disbursement</h3>
                <p className="text-sm text-gray-500">Essential for Blocked Account</p>
             </div>
             <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <Percent className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Tax Benefits</h3>
                <p className="text-sm text-gray-500">Save money with Section 80E</p>
             </div>
          </div>
        </section>

        {/* Loan Types Comparison */}
        <section className="bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Types of Loans Available</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Unsecured Loans */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
               <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                 <Banknote className="h-6 w-6 text-blue-600 mr-2" />
                 Unsecured Loan
               </h3>
               <p className="text-sm text-gray-500 mb-6 font-medium uppercase tracking-wide">Non-Collateral Based</p>
               
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                   <span className="text-gray-700">No collateral or security required.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                   <span className="text-gray-700">Based on Co-applicant's income profile.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                   <span className="text-gray-700">Faster processing time (5-10 days).</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                   <span className="text-gray-700">Loan amount up to 40-50 Lakhs (varies by bank).</span>
                 </li>
               </ul>
            </div>

            {/* Secured Loans */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
               <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                 <Landmark className="h-6 w-6 text-green-600 mr-2" />
                 Secured Loan
               </h3>
               <p className="text-sm text-gray-500 mb-6 font-medium uppercase tracking-wide">Collateral Based</p>
               
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                   <span className="text-gray-700">Requires collateral (Property/FD/Gold).</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                   <span className="text-gray-700">Lower interest rates compared to unsecured.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                   <span className="text-gray-700">Higher loan amounts sanctioned.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                   <span className="text-gray-700">Longer repayment tenure options.</span>
                 </li>
               </ul>
            </div>
          </div>
        </section>

        {/* How UniTor Helps */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How UniTor Facilitates Your Loan</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mb-4">1</div>
                    <h3 className="font-bold text-gray-900 mb-2">Profile Analysis</h3>
                    <p className="text-sm text-gray-600">We analyze your profile to suggest the best banks and loan types.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mb-4">2</div>
                    <h3 className="font-bold text-gray-900 mb-2">Documentation</h3>
                    <p className="text-sm text-gray-600">We provide a checklist and verify all documents to prevent rejection.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mb-4">3</div>
                    <h3 className="font-bold text-gray-900 mb-2">Bank Negotiation</h3>
                    <p className="text-sm text-gray-600">We connect you with bank managers for faster processing and better rates.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mb-4">4</div>
                    <h3 className="font-bold text-gray-900 mb-2">Sanction</h3>
                    <p className="text-sm text-gray-600">Get your sanction letter on time to proceed with Blocked Account creation.</p>
                </div>
            </div>
        </section>

        <div className="flex justify-center pt-4">
            <button
              onClick={() => setPage(NavPage.CONTACT)}
              className="px-10 py-4 bg-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Check My Loan Eligibility
            </button>
        </div>

      </div>
    </div>
  );
};

export default LoanServices;