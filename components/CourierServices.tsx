import React from 'react';
import { NavPage } from '../types';
import { ArrowLeft, Package, Truck, Globe, MapPin, BadgePercent, Clock } from 'lucide-react';

interface CourierServicesProps {
  setPage: (page: NavPage) => void;
}

const CourierServices: React.FC<CourierServicesProps> = ({ setPage }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-12 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-yellow-900 to-slate-900 opacity-40"></div>
        <div className="relative z-10">
          <button 
            onClick={() => setPage(NavPage.SERVICES)}
            className="absolute left-4 top-8 sm:left-8 flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-1" /> Back
          </button>
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
             <Package className="h-8 w-8 text-yellow-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">International Courier Services</h1>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">Fast, trackable, and discounted shipping for your university documents.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Why Courier */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col md:flex-row items-center gap-8">
           <div className="md:w-1/2">
             <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Documents to Germany with Ease</h2>
             <p className="text-gray-600 mb-4 leading-relaxed">
               Applying to Germany often involves sending hard copies of certified documents to <strong>Uni-Assist</strong> in Berlin or directly to University admission offices. Domestic postal services can be slow and unreliable for these critical documents.
             </p>
             <p className="text-gray-600 leading-relaxed">
               UniTor partners with premium carriers like <strong>DHL, FedEx, and UPS</strong> to offer you student-friendly rates that are significantly cheaper than booking directly.
             </p>
           </div>
           <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <MapPin className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Uni-Assist</p>
                  <p className="text-xs text-gray-500">Berlin, Germany</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <MapPin className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">APS India</p>
                  <p className="text-xs text-gray-500">New Delhi, India</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <MapPin className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Universities</p>
                  <p className="text-xs text-gray-500">Direct Admissions</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <MapPin className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">VFS Global</p>
                  <p className="text-xs text-gray-500">Visa Application</p>
              </div>
           </div>
        </section>

        {/* Benefits */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Why choose UniTor Logistics?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-t-4 border-red-600 shadow-sm hover:shadow-md transition-shadow">
               <BadgePercent className="h-10 w-10 text-red-600 mb-4" />
               <h3 className="text-lg font-bold text-gray-900 mb-2">Student Discounts</h3>
               <p className="text-gray-600 text-sm">Save up to 40-50% on standard international shipping rates compared to retail prices.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-yellow-500 shadow-sm hover:shadow-md transition-shadow">
               <Globe className="h-10 w-10 text-yellow-500 mb-4" />
               <h3 className="text-lg font-bold text-gray-900 mb-2">Global Tracking</h3>
               <p className="text-gray-600 text-sm">Real-time tracking of your transcripts and application documents from pickup to delivery.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
               <Clock className="h-10 w-10 text-blue-600 mb-4" />
               <h3 className="text-lg font-bold text-gray-900 mb-2">Express Delivery</h3>
               <p className="text-gray-600 text-sm">Documents typically reach Germany in 3-5 working days, ensuring you never miss a deadline.</p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-gray-50 rounded-2xl p-8">
           <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
             <Truck className="h-6 w-6 text-gray-700 mr-3" />
             Simple Booking Process
           </h2>
           <div className="space-y-4">
             <div className="flex items-start">
               <div className="flex-shrink-0 h-8 w-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
               <div className="ml-4">
                 <h4 className="font-bold text-gray-900">Request a Pickup</h4>
                 <p className="text-gray-600 text-sm">Fill our contact form or WhatsApp us with your pickup location and destination.</p>
               </div>
             </div>
             <div className="flex items-start">
               <div className="flex-shrink-0 h-8 w-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
               <div className="ml-4">
                 <h4 className="font-bold text-gray-900">Payment & Label</h4>
                 <p className="text-gray-600 text-sm">Pay the discounted fee online. We will generate the shipping label for you.</p>
               </div>
             </div>
             <div className="flex items-start">
               <div className="flex-shrink-0 h-8 w-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
               <div className="ml-4">
                 <h4 className="font-bold text-gray-900">Doorstep Pickup</h4>
                 <p className="text-gray-600 text-sm">The courier partner (DHL/FedEx) collects the envelope from your home.</p>
               </div>
             </div>
             <div className="flex items-start">
               <div className="flex-shrink-0 h-8 w-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
               <div className="ml-4">
                 <h4 className="font-bold text-gray-900">Delivery</h4>
                 <p className="text-gray-600 text-sm">Your documents are delivered to the university or agency in Germany.</p>
               </div>
             </div>
           </div>
        </section>

        <div className="flex justify-center pt-4">
            <button
              onClick={() => setPage(NavPage.CONTACT)}
              className="px-10 py-4 bg-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Book a Courier Pickup
            </button>
        </div>

      </div>
    </div>
  );
};

export default CourierServices;