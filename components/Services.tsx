import React from 'react';
import { BookOpen, Plane, FileText, School, ArrowRight, TrendingUp, Landmark, Package } from 'lucide-react';
import { ServiceItem, NavPage } from '../types';

interface ServicesProps {
  setPage?: (page: NavPage) => void;
}

const Services: React.FC<ServicesProps> = ({ setPage }) => {
  const services: ServiceItem[] = [
    {
      title: "University Shortlisting",
      description: "Expert profile evaluation to match you with the best public universities in Germany based on your academic background.",
      icon: <School className="h-8 w-8 text-white" />
    },
    {
      title: "Application Assistance",
      description: "Complete guidance on Uni-Assist applications, motivational letters (SOP), and Letters of Recommendation (LOR).",
      icon: <FileText className="h-8 w-8 text-white" />
    },
    {
      title: "Visa Processing",
      description: "End-to-end support for Blocked Accounts (Sperrkonto), Health Insurance, and Embassy interview preparation.",
      icon: <Plane className="h-8 w-8 text-white" />
    },
    {
      title: "APS Certification",
      description: "Detailed guidance on the Academic Evaluation Centre (APS) certificate process mandatory for Indian students.",
      icon: <BookOpen className="h-8 w-8 text-white" />
    },
    {
      title: "Education Loan",
      description: "Assistance with Secured and Unsecured loans from top banks to cover your Blocked Account and living expenses.",
      icon: <Landmark className="h-8 w-8 text-white" />
    },
    {
      title: "Courier Services",
      description: "Reliable and discounted international shipping for sending your documents to Uni-Assist, APS, or Universities.",
      icon: <Package className="h-8 w-8 text-white" />
    },
    {
      title: "GRE Training & Support",
      description: "Join our comprehensive Exam Clearance Program with free Profile Evaluation to secure your target score for top German universities.",
      icon: <TrendingUp className="h-8 w-8 text-white" />
    }
  ];

  return (
    <div className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-red-600 tracking-wider uppercase bg-red-50 inline-block px-3 py-1 rounded-full border border-red-100">Our Expertise</h2>
          <p className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Complete Guidance for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Germany</span>
          </p>
          <p className="mt-4 text-xl text-gray-500">
            From your first thought of studying abroad to your first day at a German university, UniTor is with you at every step.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const isShortlisting = service.title === "University Shortlisting";
              const isVisa = service.title === "Visa Processing";
              const isAPS = service.title === "APS Certification";
              const isAppAssistance = service.title === "Application Assistance";
              const isGRE = service.title === "GRE Training & Support";
              const isLoan = service.title === "Education Loan";
              const isCourier = service.title === "Courier Services";
              
              const isClickable = isShortlisting || isVisa || isAPS || isAppAssistance || isGRE || isLoan || isCourier;
              
              return (
                <div key={index} className="group h-full">
                  <div 
                    onClick={() => {
                        if (isShortlisting) setPage?.(NavPage.UNIVERSITY_SHORTLISTING);
                        if (isVisa) setPage?.(NavPage.VISA_PROCESSING);
                        if (isAPS) setPage?.(NavPage.APS_ASSISTANCE);
                        if (isAppAssistance) setPage?.(NavPage.APPLICATION_ASSISTANCE);
                        if (isGRE) setPage?.(NavPage.GRE_SUPPORT);
                        if (isLoan) setPage?.(NavPage.LOAN_SERVICES);
                        if (isCourier) setPage?.(NavPage.COURIER_SERVICES);
                    }}
                    className={`relative bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden transform group-hover:-translate-y-2 ${isClickable ? 'cursor-pointer' : ''}`}
                  >
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-red-50 to-yellow-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                    
                    <div className="relative">
                      <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-red-600 to-red-800 rounded-xl shadow-lg group-hover:shadow-red-500/30 transition-shadow duration-300">
                        {service.icon}
                      </div>
                      
                      <h3 className={`mt-6 text-2xl font-bold tracking-tight ${isClickable ? 'text-gray-900 group-hover:text-red-600 transition-colors' : 'text-gray-900'}`}>
                        {service.title}
                      </h3>
                      
                      <p className="mt-4 text-base text-gray-500 leading-relaxed">
                        {service.description}
                      </p>

                      {isClickable && (
                        <div className="mt-6 flex items-center text-red-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;