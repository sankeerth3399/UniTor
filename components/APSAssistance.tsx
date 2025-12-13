import React from 'react';
import { NavPage } from '../types';
import { ArrowLeft, CheckCircle, Clock, FileText, Globe, ShieldCheck } from 'lucide-react';

interface APSAssistanceProps {
  setPage: (page: NavPage) => void;
}

const APSAssistance: React.FC<APSAssistanceProps> = ({ setPage }) => {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 sm:mt-0">APS Assistance Services</h1>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">Mandatory academic verification for Indian students applying to German universities.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* What is APS */}
        <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is APS?</h2>
            <p className="text-gray-700 leading-relaxed">
                The APS (Akademische Prüfstelle) certificate is a mandatory academic verification required for Indian students applying to German universities. Without APS, you cannot apply for a Germany student visa and most universities will not process your application.
            </p>
        </section>

        {/* What We Offer */}
        <section>
            <div className="text-center mb-10">
                <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Our Services</h2>
                <h3 className="mt-2 text-3xl font-extrabold text-gray-900">UniTor APS Assistance – What We Offer</h3>
                <p className="mt-4 text-xl text-gray-500">We provide end-to-end APS support so you don’t struggle with documentation, delays, or rejections.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* 1. Eligibility Check */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                        <div className="p-2 bg-red-100 rounded-lg mr-3">
                            <ShieldCheck className="h-6 w-6 text-red-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">1. APS Eligibility Check</h4>
                    </div>
                    <ul className="space-y-2 text-gray-600 ml-2">
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Degree / Diploma verification</li>
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Backlog & credit eligibility review</li>
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> University recognition check (Anabin)</li>
                    </ul>
                </div>

                {/* 2. Document Preparation */}
                 <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                        <div className="p-2 bg-red-100 rounded-lg mr-3">
                            <FileText className="h-6 w-6 text-red-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">2. Complete Document Preparation</h4>
                    </div>
                    <p className="text-sm text-gray-500 mb-2 font-medium">We guide and review:</p>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-sm text-gray-600 ml-2 mb-3">
                        <li>• 10th & 12th Mark Sheets</li>
                        <li>• All Semester Transcripts</li>
                        <li>• Provisional / Degree Cert</li>
                        <li>• Passport Copy</li>
                        <li>• Aadhaar</li>
                        <li>• Enrollment Proof</li>
                    </ul>
                    <div className="bg-green-50 p-2 rounded text-sm text-green-800 font-medium text-center">
                        We ensure: Correct format, scanning, no missing files & error-free upload.
                    </div>
                </div>

                {/* 3. Online Registration */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                         <div className="p-2 bg-red-100 rounded-lg mr-3">
                            <Globe className="h-6 w-6 text-red-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">3. APS Online Registration Support</h4>
                    </div>
                     <ul className="space-y-2 text-gray-600 ml-2">
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Account creation support</li>
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Correct form filling</li>
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> University & qualification entry</li>
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Upload & Payment guidance</li>
                    </ul>
                </div>

                 {/* 4. Fee Payment */}
                 <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                         <div className="p-2 bg-red-100 rounded-lg mr-3">
                            <CheckCircle className="h-6 w-6 text-red-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">4. APS Fee Payment Guidance</h4>
                    </div>
                     <ul className="space-y-2 text-gray-600 ml-2">
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> International payment support</li>
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Credit/Debit card assistance</li>
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Payment receipt verification</li>
                    </ul>
                </div>

                 {/* 5. Dispatch Guidance */}
                 <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                         <div className="p-2 bg-red-100 rounded-lg mr-3">
                            <FileText className="h-6 w-6 text-red-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">5. Physical Document Dispatch</h4>
                    </div>
                     <ul className="space-y-2 text-gray-600 ml-2">
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Courier checklist</li>
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Address verification</li>
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Track & follow-up help</li>
                    </ul>
                </div>

                 {/* 6. Tracking & Follow-up */}
                 <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                         <div className="p-2 bg-red-100 rounded-lg mr-3">
                            <Clock className="h-6 w-6 text-red-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">6. Tracking & Follow-up</h4>
                    </div>
                     <ul className="space-y-2 text-gray-600 ml-2">
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Application status monitoring</li>
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> Delay follow-up guidance</li>
                        <li className="flex items-start"><span className="mr-2 text-green-500">✓</span> APS response handling & Error correction</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Processing Time */}
        <section className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100 flex items-center justify-between flex-col sm:flex-row gap-6">
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                    <Clock className="h-6 w-6 text-yellow-600 mr-2" />
                    APS Processing Time
                </h3>
                <p className="text-gray-700">Normal timeline: <span className="font-bold">4–8 weeks</span></p>
                <p className="text-sm text-gray-600 mt-1">We help avoid rejections & delays due to document errors.</p>
            </div>
             <button
              onClick={() => setPage(NavPage.CONTACT)}
              className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition-all whitespace-nowrap"
            >
              Get APS Assistance
            </button>
        </section>
      </div>
    </div>
  );
};

export default APSAssistance;