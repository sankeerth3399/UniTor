import React from 'react';
import { NavPage } from '../types';
import { ArrowLeft, CheckCircle, Clock, FileText, UserCheck, Search, PenTool, Briefcase, Globe, Send, Award, Calendar } from 'lucide-react';

interface ApplicationAssistanceProps {
  setPage: (page: NavPage) => void;
}

const ApplicationAssistance: React.FC<ApplicationAssistanceProps> = ({ setPage }) => {
  const steps = [
    {
      title: "1. Profile Evaluation",
      icon: <UserCheck className="h-6 w-6 text-red-600" />,
      content: [
        "Academic background check",
        "CGPA & credit system (ECTS conversion)",
        "Backlogs & Work experience review",
        "IELTS/German language level assessment",
        "Career goals alignment"
      ],
      outcome: "You receive a realistic admit probability & course strategy."
    },
    {
      title: "2. University & Course Shortlisting",
      icon: <Search className="h-6 w-6 text-red-600" />,
      content: [
        "Based on your profile & goals",
        "Public vs Private universities comparison",
        "Tuition fees & cost of living analysis",
        "Course curriculum relevance check",
        "Research & job opportunities review"
      ],
      outcome: "Best-fit universities (Safe, Moderate & Ambitious mix)"
    },
    {
      title: "3. SOP (Statement of Purpose) Assistance",
      icon: <PenTool className="h-6 w-6 text-red-600" />,
      content: [
        "No templates used – strictly personalized",
        "Professional story structuring",
        "Alignment with German academic standards",
        "Emphasis on academics, internships & goals",
        "Multiple revision rounds"
      ],
      outcome: "Final admission-ready SOP & University-specific versions"
    },
    {
      title: "4. LOR (Letter of Recommendation) Assistance",
      icon: <FileText className="h-6 w-6 text-red-600" />,
      content: [
        "Selection of right recommenders",
        "Drafting high-impact LOR content",
        "Formatting per German expectations",
        "Customization for specific universities"
      ],
      outcome: "Academic LOR & Professional LOR (for work exp holders)"
    },
    {
      title: "5. CV / Resume Creation",
      icon: <Briefcase className="h-6 w-6 text-red-600" />,
      content: [
        "Europass CV Format (German-style)",
        "ATS-friendly format",
        "Academic + professional versions",
        "Project-focused structure"
      ],
      outcome: "Professional CV ready for application portals"
    },
    {
      title: "6. Uni-Assist Application Support",
      icon: <Globe className="h-6 w-6 text-red-600" />,
      content: [
        "Uni-Assist account creation",
        "Course matching",
        "Document upload guidance",
        "Fee payment assistance",
        "Communication with Uni-Assist"
      ],
      outcome: "Error-free submission & Status tracking support"
    },
    {
      title: "7. Direct University Applications",
      icon: <Send className="h-6 w-6 text-red-600" />,
      content: [
        "For universities not using Uni-Assist",
        "University portal registration",
        "Manual document upload",
        "Email communication assistance",
        "Deadline tracking"
      ],
      outcome: "Complete submission for direct entry universities"
    },
    {
      title: "8. Application Review & Final Submission",
      icon: <CheckCircle className="h-6 w-6 text-red-600" />,
      content: [
        "Verification of all documents",
        "Translations & Transcripts check",
        "SOP & LOR formatting review",
        "Course matching verification"
      ],
      outcome: "Zero-error final submission"
    },
    {
      title: "9. Admit Handling & Guidance",
      icon: <Award className="h-6 w-6 text-red-600" />,
      content: [
        "Offer letter evaluation",
        "Accept/reject decision guidance",
        "Enrollment support",
        "Next-step planning (APS + Visa)"
      ],
      outcome: "Smooth transition from applicant to student"
    }
  ];

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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 sm:mt-0">University Application Assistance</h1>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">Complete Masters & Bachelors Application Support for Germany.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Intro */}
        <section className="bg-red-50 rounded-2xl p-8 border border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Application Support</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
                Applying to German universities can be complex, competitive, and document-heavy. UniTor provides end-to-end university application assistance to ensure your profile is presented strongly and your applications are error-free, competitive, and successful.
            </p>
        </section>

        {/* What We Cover - Grid */}
        <section>
            <div className="text-center mb-10">
                <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Scope of Work</h2>
                <h3 className="mt-2 text-3xl font-extrabold text-gray-900">What UniTor Covers</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-red-50 rounded-lg mr-3">
                                {step.icon}
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 leading-tight">{step.title}</h4>
                        </div>
                        <ul className="space-y-2 mb-4 flex-grow">
                            {step.content.map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-600">
                                    <span className="mr-2 text-red-400 mt-1">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        {step.outcome && (
                            <div className="mt-auto pt-4 border-t border-gray-100">
                                <p className="text-xs font-semibold text-green-700 bg-green-50 p-2 rounded inline-block">
                                    Outcome: {step.outcome}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>

        {/* Timeline */}
        <section className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
                <Calendar className="h-64 w-64 text-white" />
            </div>
            <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Clock className="h-6 w-6 text-yellow-500 mr-3" />
                    Typical Application Timeline
                </h2>
                
                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300 font-medium">Profile Evaluation</span>
                        <span className="text-yellow-500 font-bold">2 Days</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300 font-medium">University Shortlisting</span>
                        <span className="text-yellow-500 font-bold">3–5 Days</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300 font-medium">SOP / LOR / CV Creation</span>
                        <span className="text-yellow-500 font-bold">10–15 Days</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300 font-medium">Uni-Assist / Direct Applications</span>
                        <span className="text-yellow-500 font-bold">3–7 Days</span>
                    </div>
                    <div className="pt-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <span className="text-lg font-bold text-white">Total Estimated Process</span>
                            <span className="text-xl font-extrabold text-green-400">3–5 Weeks</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-8">
             <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to start your application?</h3>
             <button
              onClick={() => setPage(NavPage.CONTACT)}
              className="px-10 py-4 bg-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Start Free Profile Evaluation
            </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationAssistance;