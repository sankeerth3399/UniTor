import React from 'react';
import { NavPage } from '../types';
import { ArrowLeft, Target, BarChart2, BookOpen, PenTool, BrainCircuit, CheckCircle } from 'lucide-react';

interface GRESupportProps {
  setPage: (page: NavPage) => void;
}

const GRESupport: React.FC<GRESupportProps> = ({ setPage }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-12 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-0 right-0 p-12 opacity-5">
           <BrainCircuit className="h-64 w-64 text-white" />
        </div>
        <div className="relative z-10">
            <button 
            onClick={() => setPage(NavPage.SERVICES)}
            className="absolute left-4 top-8 sm:left-8 flex items-center text-gray-300 hover:text-white transition-colors group"
            >
            <ArrowLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" /> Back
            </button>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 sm:mt-0">UniTor GRE Training & Preparation Support</h1>
            <p className="text-gray-300 mt-2 max-w-2xl mx-auto">Boost your chances for top-ranked universities with result-oriented preparation.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why GRE matters?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Strong GRE scores significantly improve your chances for <span className="font-semibold text-red-600">top-ranked German and global universities</span>, scholarships, and competitive programs. UniTor offers structured, result-oriented GRE preparation tailored for busy students.
          </p>
        </section>

        {/* Feature 1: Evaluation */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="bg-red-50 p-8 md:w-1/3 flex flex-col justify-center items-center text-center">
                <div className="bg-white p-4 rounded-full shadow-md mb-4">
                    <Target className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">1. Free GRE Profile & Target Score Evaluation</h3>
            </div>
            <div className="p-8 md:w-2/3">
                <p className="text-gray-600 mb-4 font-medium">We provide a comprehensive initial assessment covering:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Academic background analysis</span>
                    </div>
                    <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Target universities & programs</span>
                    </div>
                    <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Current quant & verbal level</span>
                    </div>
                    <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Realistic GRE target score</span>
                    </div>
                </div>
                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <p className="text-sm text-yellow-800 font-semibold">📌 You get a personalized GRE roadmap before you even enroll.</p>
                </div>
            </div>
        </section>

        {/* Feature 2: Complete Program */}
        <section>
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-900">2. Complete GRE Exam Clearance Program</h2>
                <p className="text-gray-500 mt-2">Comprehensive coverage of all GRE sections</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all group">
                    <div className="flex items-center mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3 group-hover:bg-blue-200 transition-colors">
                            <BarChart2 className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">Quantitative Reasoning</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Master mathematical concepts, data interpretation, and problem-solving techniques tailored for the GRE format.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all group">
                    <div className="flex items-center mb-4">
                        <div className="p-2 bg-purple-100 rounded-lg mr-3 group-hover:bg-purple-200 transition-colors">
                            <BookOpen className="h-6 w-6 text-purple-600" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">Verbal Reasoning</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Enhance your vocabulary, reading comprehension, and critical reasoning skills to tackle complex verbal sections.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all group">
                    <div className="flex items-center mb-4">
                        <div className="p-2 bg-orange-100 rounded-lg mr-3 group-hover:bg-orange-200 transition-colors">
                            <PenTool className="h-6 w-6 text-orange-600" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">Analytical Writing (AWA)</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Learn structures and strategies to articulate complex ideas clearly and effectively under time constraints.</p>
                </div>
            </div>
        </section>

        {/* CTA */}
        <div className="flex justify-center pt-8 pb-8">
            <button
              onClick={() => setPage(NavPage.CONTACT)}
              className="px-10 py-4 bg-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Get Your Free GRE Evaluation
            </button>
        </div>

      </div>
    </div>
  );
};

export default GRESupport;