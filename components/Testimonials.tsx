import React from 'react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Aditya Kumar",
      university: "TU Munich",
      course: "M.Sc. Data Engineering",
      text: "UniTor made the impossible possible. Their help with the APS certificate and Uni-Assist was crucial. I'm now studying tuition-free!",
      image: "https://picsum.photos/100/100?random=1"
    },
    {
      name: "Priya Sharma",
      university: "RWTH Aachen",
      course: "M.Sc. Production Engineering",
      text: "The visa interview prep was outstanding. I was nervous about the blocked account process, but the UniTor team handled everything smoothly.",
      image: "https://picsum.photos/100/100?random=2"
    },
    {
      name: "Rahul Verma",
      university: "University of Stuttgart",
      course: "M.Sc. Computer Science",
      text: "The AI Counselor gave me quick answers, but the human mentors provided the strategy. Best consultancy for Germany in India.",
      image: "https://picsum.photos/100/100?random=3"
    }
  ];

  return (
    <div className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Join hundreds of students who are now living their dream in Germany.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-800 rounded-2xl p-8 shadow-xl relative">
              <div className="flex items-center mb-6">
                <img className="h-12 w-12 rounded-full border-2 border-yellow-500" src={t.image} alt={t.name} />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-yellow-500">{t.university}</p>
                </div>
              </div>
              <p className="text-slate-300 italic">"{t.text}"</p>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t.course}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;