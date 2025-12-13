import React from 'react';
import { NavPage } from '../types';
import { ArrowLeft, CheckCircle, HelpCircle } from 'lucide-react';

interface UniversityShortlistingProps {
  setPage: (page: NavPage) => void;
}

const UniversityShortlisting: React.FC<UniversityShortlistingProps> = ({ setPage }) => {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 sm:mt-0">University Shortlisting</h1>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">Expert guidance to match your profile with the best German universities.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Intro */}
        <section>
          <p className="text-lg text-gray-700 leading-relaxed">
            University shortlisting is a crucial stage of your application process, which involves an in-depth evaluation of your profile and preferences and selecting the courses for which you meet the eligibility criteria specified by the university.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Our University Shortlisting service ensures we only shortlist the courses that align with your qualifications. We curate a list of programs where you meet the requirements to maximize your chances of successful admission.
          </p>
        </section>

        {/* Who should apply */}
        <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who should apply for the University Shortlisting service?</h2>
          <p className="mb-4 text-gray-600">You should avail the University Shortlisting service for any of the following reasons:</p>
          <ul className="space-y-4">
            {[
              "You have decided to pursue higher studies in Germany and need expert guidance for shortlisting programs that match your profile and requirements.",
              "You tried shortlisting universities on your own, but you are unsure if you have selected the right programs; you wish to seek professional help in cross-verifying your list.",
              "You are either a working professional or still studying and cannot dedicate time and effort to selecting the appropriate courses for your Master’s studies.",
              "You do not want to compromise on the accuracy of shortlisted universities and wish to seek professional help and expert guidance."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1 mr-3" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How can it help */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How can the University Shortlisting service help me?</h2>
          <p className="mb-4 text-gray-600">The University Shortlisting service will benefit you in several ways:</p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "It will help you save valuable time and effort and let you focus on other application-related tasks.",
              "By focusing solely on programs relevant to your profile, the service helps you avoid unnecessary costs and efforts associated with applying to irrelevant courses.",
              "You will receive a carefully curated list of universities that match your qualifications, enhancing your chances of securing admission where you meet the admission criteria effectively."
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                 <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <HelpCircle className="h-7 w-7 text-yellow-500 mr-2" />
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">1. HOW MANY UNIVERSITIES/COURSES ARE SHORTLISTED?</h3>
              <p className="text-gray-600">The number of universities shortlisted depends entirely on your profile and eligibility. We focus on quality over quantity, ensuring that we only shortlist universities where you meet the admission criteria to maximize your success rate.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">2. HOW LONG DOES THE WHOLE PROCESS TAKE?</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li><span className="font-medium">Standard Order</span> - First draft delivery in 3 working days, final draft delivery upon Student Review completion</li>
                <li><span className="font-medium">Express Order</span> - First draft delivery in 1 working day, final draft delivery upon Student Review completion</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">3. WHAT ARE THE DELIVERABLES?</h3>
              <p className="text-gray-600 mb-2">We will deliver a professional curated list of Shortlisted Universities relevant to your profile and preferences along with the following details:</p>
              <ul className="list-disc pl-5 text-gray-600 grid sm:grid-cols-2 gap-2">
                <li>Intake Deadline</li>
                <li>Eligibility Requirements - German Grade, IELTS, German Language</li>
                <li>Course Website Link</li>
                <li>Admission Semester Information</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="flex justify-center pt-8">
            <button
              onClick={() => setPage(NavPage.CONTACT)}
              className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors"
            >
              Get Started with Shortlisting
            </button>
        </div>

      </div>
    </div>
  );
};

export default UniversityShortlisting;