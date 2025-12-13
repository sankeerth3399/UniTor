import React from 'react';
import { NavPage } from '../types';
import { ArrowLeft, CheckCircle, HelpCircle, FileText, Calendar, Shield, Clock } from 'lucide-react';

interface VisaAssistanceProps {
  setPage: (page: NavPage) => void;
  embedded?: boolean;
}

const VisaAssistance: React.FC<VisaAssistanceProps> = ({ setPage, embedded = false }) => {
  return (
    <div className={`bg-white ${!embedded ? 'min-h-screen' : ''}`}>
      {/* Header - Only show if not embedded */}
      {!embedded && (
        <div className="bg-slate-900 py-12 px-4 text-center relative">
          <button 
            onClick={() => setPage(NavPage.SERVICES)}
            className="absolute left-4 top-8 sm:left-8 flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-1" /> Back
          </button>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 sm:mt-0">German Student Visa Application Service</h1>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">Complete support for your CSP/VFS Process and National Visa Application.</p>
        </div>
      )}

      <div className={`mx-auto ${embedded ? '' : 'max-w-5xl px-4 sm:px-6 lg:px-8 py-12'} space-y-16`}>
        
        {/* Intro */}
        <section>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Service</h2>
            <p className="text-gray-700 leading-relaxed">
              The German Student Visa Application Service offers full-scale support for your Germany National Visa (long-term student visa) application. From registering on the Consular Services Portal (CSP), uploading documents to preparing for your VFS appointment and visa interview, our experts help you navigate every step efficiently, ensuring a streamlined and accurate application process.
            </p>
          </div>
        </section>

        {/* Detailed Service List */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Support Includes</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "CSP Portal Registration Assistance",
              "Entry Form Filling",
              "VIDEX Form Completion",
              "Document Upload Support",
              "LOM (Letter of Motivation) Drafting",
              "Visa Cover Letter Preparation",
              "Blocked Account Creation",
              "Health and Travel Insurance Application",
              "Service Provider Payment",
              "Embassy Correction & Additional Documents Support",
              "VFS Appointment Booking",
              "Visa Interview Preparation",
              "On-Call & Priority Support"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Timeline</h2>
            <h3 className="mt-2 text-3xl font-extrabold text-gray-900">Visa Application Workflow</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {/* Step 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="text-slate-900 font-bold">1</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Apply Online</div>
                </div>
                <div className="text-slate-500">Place your order for the visa assistance package through the link on this page.</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="text-slate-900 font-bold">2</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Submit Your Details</div>
                </div>
                <div className="text-slate-500">You will receive a form via email to submit your university admission letter, personal details and preferences.</div>
              </div>
            </div>

            {/* Step 3 - Detailed Workflow */}
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="text-slate-900 font-bold">3</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-4">
                  <div className="font-bold text-slate-900 text-lg">Execution Workflow</div>
                </div>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex gap-3"><span className="font-semibold text-gray-900 w-32 shrink-0">Order Creation:</span> <span>We initiate your CSP visa application and allocate a visa expert.</span></li>
                  <li className="flex gap-3"><span className="font-semibold text-gray-900 w-32 shrink-0">CSP & VIDEX:</span> <span>Registration on CSP portal and accurate filling of VIDEX form.</span></li>
                  <li className="flex gap-3"><span className="font-semibold text-gray-900 w-32 shrink-0">Documents:</span> <span>Personalized checklist and support for formatting/uploading to CSP.</span></li>
                  <li className="flex gap-3"><span className="font-semibold text-gray-900 w-32 shrink-0">LOM & Cover Letter:</span> <span>Custom drafting based on your background and goals.</span></li>
                  <li className="flex gap-3"><span className="font-semibold text-gray-900 w-32 shrink-0">Embassy Corrections:</span> <span>Handling any queries or missing document requests from the embassy.</span></li>
                  <li className="flex gap-3"><span className="font-semibold text-gray-900 w-32 shrink-0">VFS Appointment:</span> <span>Booking biometric appointment and handling fee payments.</span></li>
                  <li className="flex gap-3"><span className="font-semibold text-gray-900 w-32 shrink-0">Interview Prep:</span> <span>One-on-one coaching with mock questions.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Info Grid */}
        <section className="grid md:grid-cols-2 gap-8">
           <div className="bg-gray-50 p-6 rounded-xl">
             <h3 className="text-xl font-bold text-gray-900 mb-3">What is a German Student Visa via CSP?</h3>
             <p className="text-gray-600">The CSP (Consular Services Portal) is Germany’s official digital platform for student visa applications. It replaces traditional paperwork with an online application system. Our service helps you complete this process accurately and efficiently, ensuring you don’t miss critical steps or deadlines.</p>
           </div>
           
           <div className="bg-gray-50 p-6 rounded-xl">
             <h3 className="text-xl font-bold text-gray-900 mb-3">Who should apply?</h3>
             <ul className="space-y-2 text-gray-600 list-disc pl-5">
               <li>You have a German university admission letter.</li>
               <li>You need professional help with the online CSP application.</li>
               <li>You want to avoid rejections due to documentation errors.</li>
               <li>You need guidance for the VFS interview.</li>
             </ul>
           </div>
        </section>

        {/* Benefits */}
        <section className="bg-red-50 p-8 rounded-2xl border border-red-100">
           <h3 className="text-xl font-bold text-gray-900 mb-4">How can this service help me?</h3>
           <div className="grid sm:grid-cols-2 gap-6">
             <div className="flex">
               <Clock className="h-6 w-6 text-red-600 mr-3 shrink-0" />
               <p className="text-gray-700">Saves time and eliminates guesswork in the CSP and VFS process.</p>
             </div>
             <div className="flex">
               <Shield className="h-6 w-6 text-red-600 mr-3 shrink-0" />
               <p className="text-gray-700">Ensures error-free applications with expert assistance at each stage.</p>
             </div>
             <div className="flex">
               <CheckCircle className="h-6 w-6 text-red-600 mr-3 shrink-0" />
               <p className="text-gray-700">Helps avoid common pitfalls that can lead to rejection or delays.</p>
             </div>
             <div className="flex">
               <FileText className="h-6 w-6 text-red-600 mr-3 shrink-0" />
               <p className="text-gray-700">Provides peace of mind and clarity about your visa status.</p>
             </div>
           </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <HelpCircle className="h-7 w-7 text-yellow-500 mr-2" />
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">1. DO I STILL NEED TO GO TO VFS?</h3>
              <p className="text-gray-600">Yes, while CSP covers the online part, you must attend a physical appointment at VFS for biometrics and document verification.</p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">2. HOW LONG DOES THIS PROCESS TAKE?</h3>
              <div className="text-gray-600 space-y-1">
                <p><span className="font-semibold">Digital process:</span> 3–5 days (if your documents are ready).</p>
                <p><span className="font-semibold">Embassy review:</span> 6–8 weeks.</p>
                <p><span className="font-semibold">Visa delivery after appointment:</span> 2–4 weeks.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center pt-8">
            <button
              onClick={() => setPage(NavPage.CONTACT)}
              className="px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all"
            >
              Start Visa Application Process
            </button>
        </div>

      </div>
    </div>
  );
};

export default VisaAssistance;