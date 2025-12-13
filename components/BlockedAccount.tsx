import React from 'react';
import { NavPage } from '../types';
import { ArrowLeft, PhoneCall, FileText, CheckCircle, HelpCircle, Wallet } from 'lucide-react';

interface BlockedAccountProps {
  setPage: (page: NavPage) => void;
  embedded?: boolean;
}

const BlockedAccount: React.FC<BlockedAccountProps> = ({ setPage, embedded = false }) => {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 sm:mt-0">Blocked Account For Germany</h1>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">All international students must open a blocked account before attending the visa interview.</p>
        </div>
      )}

      <div className={`mx-auto ${embedded ? '' : 'max-w-6xl px-4 sm:px-6 lg:px-8 py-16'} space-y-16`}>
        
        {/* Process Steps */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Process</h2>
            <h3 className="mt-2 text-3xl font-extrabold text-gray-900">How Does This Process Work?</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 bg-red-100 text-red-600 font-bold px-3 py-1 rounded-bl-lg text-sm">Step 1</div>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white rounded-full shadow-sm">
                  <PhoneCall className="h-8 w-8 text-red-600" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-2">Talk to Executive</h4>
              <p className="text-gray-600 text-center">You will receive a call from us within 60 minutes (during working hours).</p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 bg-red-100 text-red-600 font-bold px-3 py-1 rounded-bl-lg text-sm">Step 2</div>
              <div className="flex justify-center mb-6">
                 <div className="p-4 bg-white rounded-full shadow-sm">
                  <FileText className="h-8 w-8 text-red-600" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-2">Submit Details</h4>
              <p className="text-gray-600 text-center">Submit necessary details for the Blocked Account through an online form.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 bg-red-100 text-red-600 font-bold px-3 py-1 rounded-bl-lg text-sm">Step 3</div>
              <div className="flex justify-center mb-6">
                 <div className="p-4 bg-white rounded-full shadow-sm">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-2">Blocking Confirmation</h4>
              <p className="text-gray-600 text-center">Receive Blocked Account opening Confirmation within 24 Hours.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mx-auto border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
            <HelpCircle className="h-7 w-7 text-yellow-500 mr-2" />
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 flex items-start">
                <Wallet className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                What Is A Blocked Account?
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed pl-7">
                A blocked account is basically a proof of payment that shows you will be able to support your own living expenses while in Germany. The money is 'blocked' until you have arrived in Germany. To release the funds, all you have to do is show a proof of address and or enrolment. They will then be deposited monthly into your own German bank account that is accessible for your living expenses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 flex items-start">
                 <Wallet className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                 Do I have to pay the administration fees separately?
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed pl-7">
                No. The set-up and service fees will be included in the Total Blocked Amount. No need for additional transfers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 flex items-start">
                 <Wallet className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                 Can I use the blocked account to pay my monthly rent and other expenses?
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed pl-7">
                No, you cannot. You cannot use your Blocked Account to pay your monthly rent or other daily expenses. The Blocked Account is not available for any transfers or payments except for the monthly disbursement to your German Current Account. This is the case because of the Blocked Account’s sole purpose is to secure the living costs of a foreign student while studying in Germany.
              </p>
            </div>
          </div>
        </section>

        <div className="flex justify-center pt-4 pb-8">
            <button
              onClick={() => setPage(NavPage.CONTACT)}
              className="px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Open Your Blocked Account Now
            </button>
        </div>

      </div>
    </div>
  );
};

export default BlockedAccount;