import React, { useEffect, useState } from 'react';
import { NavPage } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { generateImage } from '../services/geminiService';

interface HeroProps {
  setPage: (page: NavPage) => void;
}

const Hero: React.FC<HeroProps> = ({ setPage }) => {
  const [blobs, setBlobs] = useState<(string | null)[]>([null, null, null]);

  useEffect(() => {
    const fetchBlobs = async () => {
      // Prompts for 3 distinct decorative blobs
      const prompts = [
        "A soft, abstract, organic 3D fluid shape, gradient of purple and indigo, isolated on pure white background, minimalist, smooth 3d render, high quality",
        "A soft, abstract, organic 3D fluid shape, gradient of yellow and amber, isolated on pure white background, minimalist, smooth 3d render, high quality",
        "A soft, abstract, organic 3D fluid shape, gradient of pink and rose, isolated on pure white background, minimalist, smooth 3d render, high quality"
      ];

      // Fetch individually to update UI as they arrive
      generateImage(prompts[0]).then(img => setBlobs(prev => [img, prev[1], prev[2]]));
      generateImage(prompts[1]).then(img => setBlobs(prev => [prev[0], img, prev[2]]));
      generateImage(prompts[2]).then(img => setBlobs(prev => [prev[0], prev[1], img]));
    };

    fetchBlobs();
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-white to-red-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
          {/* Abstract blobs - Dynamically generated or Fallback */}
          <div className="absolute top-0 -left-4 w-72 h-72 rounded-full mix-blend-multiply opacity-50 animate-blob flex items-center justify-center overflow-hidden">
            {blobs[0] ? (
              <img src={blobs[0]} alt="Decorative blob" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-purple-300 filter blur-2xl"></div>
            )}
          </div>
          
          <div className="absolute top-0 -right-4 w-72 h-72 rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-2000 flex items-center justify-center overflow-hidden">
             {blobs[1] ? (
              <img src={blobs[1]} alt="Decorative blob" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-yellow-300 filter blur-2xl"></div>
            )}
          </div>

          <div className="absolute -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-4000 flex items-center justify-center overflow-hidden">
             {blobs[2] ? (
              <img src={blobs[2]} alt="Decorative blob" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-pink-300 filter blur-2xl"></div>
            )}
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 relative">
            <div className="sm:text-center lg:text-left">
              <div className="hidden sm:inline-block mb-6 animate-fadeIn opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <span className="rounded-full bg-red-100/80 px-4 py-1.5 text-sm font-bold text-red-700 leading-6 ring-1 ring-inset ring-red-600/20 backdrop-blur-sm shadow-sm">
                  ✨ UniTor: Door for your Master's Dream
                </span>
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-fadeIn opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <span className="block xl:inline">Master Your Future</span>{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 xl:inline">in Germany</span>
              </h1>
              <p className="mt-5 text-base text-gray-600 sm:mt-8 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl lg:mx-0 animate-fadeIn opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                UniTor bridges the gap between your ambition and German universities. We provide comprehensive guidance from application to enrollment for Tuition-Free Education.
              </p>
              
              <div className="mt-8 space-y-3 animate-fadeIn opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                {['Tuition Free Universities', 'English Taught Programs', 'Post-Study Work Visa'].map((feat, idx) => (
                  <div key={idx} className="flex items-center sm:justify-center lg:justify-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 animate-fadeIn opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                <button
                  onClick={() => setPage(NavPage.CONTACT)}
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 md:text-lg transition-all shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-1"
                >
                  Free Consultation
                </button>
                <button
                  onClick={() => setPage(NavPage.AI_COUNSELOR)}
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-base font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-all hover:border-red-200 hover:text-red-600 shadow-sm hover:shadow-md group"
                >
                  Ask AI Assistant <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Hero Image Section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 overflow-hidden">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative group">
          <img
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            src="https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            alt="Student in Germany"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/90 lg:to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent lg:hidden"></div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
