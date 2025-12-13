import React, { useState } from 'react';
import { Calculator, BookOpen, RotateCcw, HelpCircle, Info, Coins, MapPin, School, Building2, AlertTriangle } from 'lucide-react';

const Tools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'grade' | 'ects' | 'cost'>('grade');

  // --- Grade Calculator State ---
  const [maxScore, setMaxScore] = useState<string>('10');
  const [minScore, setMinScore] = useState<string>('4');
  const [currentScore, setCurrentScore] = useState<string>('');
  const [germanGrade, setGermanGrade] = useState<number | null>(null);

  // --- ECTS Calculator State ---
  const [hours, setHours] = useState<string>('');
  const [ects, setEcts] = useState<number | null>(null);

  // --- Cost Estimator State ---
  const [uniName, setUniName] = useState('');
  const [programName, setProgramName] = useState('');
  const [uniType, setUniType] = useState<'public' | 'private'>('public');
  const [tuitionPerSem, setTuitionPerSem] = useState<string>('');
  const [city, setCity] = useState<string>('average');
  const [costResult, setCostResult] = useState<{
    monthlyLiving: number;
    yearlyLiving: number;
    yearlyTuition: number;
    semesterContribution: number;
    totalYearly: number;
  } | null>(null);

  // Cities Data (Approximate monthly living costs including rent, food, insurance)
  const citiesData: Record<string, { name: string; baseCost: number }> = {
    munich: { name: 'Munich (München)', baseCost: 1450 },
    frankfurt: { name: 'Frankfurt am Main', baseCost: 1250 },
    hamburg: { name: 'Hamburg', baseCost: 1200 },
    berlin: { name: 'Berlin', baseCost: 1100 },
    stuttgart: { name: 'Stuttgart', baseCost: 1100 },
    cologne: { name: 'Cologne (Köln)', baseCost: 1050 },
    aachen: { name: 'Aachen', baseCost: 950 },
    leipzig: { name: 'Leipzig', baseCost: 850 },
    average: { name: 'Other / National Average', baseCost: 934 }, // Blocked account standard
  };

  // --- Grade Calculation Logic ---
  const calculateGrade = (e: React.FormEvent) => {
    e.preventDefault();
    const Nmax = parseFloat(maxScore);
    const Nmin = parseFloat(minScore);
    const Nd = parseFloat(currentScore);

    if (isNaN(Nmax) || isNaN(Nmin) || isNaN(Nd)) return;
    if (Nd > Nmax) {
      alert("Obtained score cannot be higher than Maximum score");
      return;
    }

    // Modified Bavarian Formula
    let result = 1 + 3 * ((Nmax - Nd) / (Nmax - Nmin));
    if (result < 1) result = 1.0;
    
    setGermanGrade(parseFloat(result.toFixed(2)));
  };

  const resetGrade = () => {
    setMaxScore('10');
    setMinScore('4');
    setCurrentScore('');
    setGermanGrade(null);
  };

  // --- ECTS Calculation Logic ---
  const calculateEcts = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(hours);
    if (isNaN(h)) return;
    const result = h / 30;
    setEcts(parseFloat(result.toFixed(1)));
  };

  const resetEcts = () => {
    setHours('');
    setEcts(null);
  };

  // --- Cost Calculation Logic ---
  const calculateCost = (e: React.FormEvent) => {
    e.preventDefault();
    const baseLiving = citiesData[city].baseCost;
    
    let tuitionYearly = 0;
    let semContributionYearly = 600; // Approx 300 EUR per semester

    if (uniType === 'private') {
      const tuitionInput = parseFloat(tuitionPerSem);
      if (!isNaN(tuitionInput)) {
        tuitionYearly = tuitionInput * 2;
      }
    }

    setCostResult({
      monthlyLiving: baseLiving,
      yearlyLiving: baseLiving * 12,
      yearlyTuition: tuitionYearly,
      semesterContribution: semContributionYearly,
      totalYearly: (baseLiving * 12) + tuitionYearly + semContributionYearly
    });
  };

  const resetCost = () => {
    setUniName('');
    setProgramName('');
    setUniType('public');
    setTuitionPerSem('');
    setCity('average');
    setCostResult(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-red-900 to-slate-900 opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Student Tools</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">Essential calculators for your study abroad journey.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden min-h-[500px]">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab('grade')}
              className={`flex-1 py-4 px-2 text-center font-semibold text-sm sm:text-base transition-colors flex items-center justify-center whitespace-nowrap ${
                activeTab === 'grade' 
                  ? 'bg-white text-red-600 border-b-2 border-red-600' 
                  : 'bg-gray-50 text-gray-500 hover:text-gray-800'
              }`}
            >
              <Calculator className="w-5 h-5 mr-2" />
              German Grade
            </button>
            <button
              onClick={() => setActiveTab('ects')}
              className={`flex-1 py-4 px-2 text-center font-semibold text-sm sm:text-base transition-colors flex items-center justify-center whitespace-nowrap ${
                activeTab === 'ects' 
                  ? 'bg-white text-red-600 border-b-2 border-red-600' 
                  : 'bg-gray-50 text-gray-500 hover:text-gray-800'
              }`}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              ECTS Converter
            </button>
            <button
              onClick={() => setActiveTab('cost')}
              className={`flex-1 py-4 px-2 text-center font-semibold text-sm sm:text-base transition-colors flex items-center justify-center whitespace-nowrap ${
                activeTab === 'cost' 
                  ? 'bg-white text-red-600 border-b-2 border-red-600' 
                  : 'bg-gray-50 text-gray-500 hover:text-gray-800'
              }`}
            >
              <Coins className="w-5 h-5 mr-2" />
              Cost Estimator
            </button>
          </div>

          <div className="p-6 sm:p-10">
            {/* ---------------- GRADE CALCULATOR ---------------- */}
            {activeTab === 'grade' && (
              <div className="animate-fadeIn space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Convert Your Grade to German Scale</h2>
                  <p className="text-gray-600 leading-relaxed">
                    The German grading system operates inversely to many other systems: <strong>1.0 is the best possible grade</strong> and <strong>4.0 is the minimum passing grade</strong>.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Info className="w-6 h-6 text-blue-700" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">Modified Bavarian Formula</h3>
                      <p className="text-sm text-blue-800 mt-1">
                        We use the standard formula accepted by most German universities:
                      </p>
                      <code className="block mt-2 p-2 bg-white rounded border border-blue-100 text-xs sm:text-sm font-mono text-blue-900 overflow-x-auto">
                        Grade = 1 + 3 × [(Max Score - Obtained Score) / (Max Score - Min Passing Score)]
                      </code>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-100" />

                <form onSubmit={calculateGrade} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Obtainable Score</label>
                      <input
                        type="number"
                        step="0.01"
                        value={maxScore}
                        onChange={(e) => setMaxScore(e.target.value)}
                        className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-3 bg-gray-50 transition-colors"
                        placeholder="e.g. 10 or 100"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Passing Score</label>
                      <input
                        type="number"
                        step="0.01"
                        value={minScore}
                        onChange={(e) => setMinScore(e.target.value)}
                        className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-3 bg-gray-50 transition-colors"
                        placeholder="e.g. 4 or 35"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Obtained Score</label>
                    <input
                      type="number"
                      step="0.01"
                      value={currentScore}
                      onChange={(e) => setCurrentScore(e.target.value)}
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-3 text-lg font-bold"
                      placeholder="Enter your CGPA or %"
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-red-700 transition-all active:scale-95"
                    >
                      Calculate Grade
                    </button>
                    <button
                      type="button"
                      onClick={resetGrade}
                      className="px-4 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                  </div>
                </form>

                {germanGrade !== null && (
                  <div className="mt-8 text-center bg-slate-50 rounded-2xl p-8 border border-slate-200 animate-fadeIn">
                    <p className="text-gray-500 font-medium uppercase tracking-wider text-sm mb-2">Your German Grade</p>
                    <div className={`text-6xl font-extrabold mb-4 ${
                      germanGrade <= 1.5 ? 'text-green-600' : 
                      germanGrade <= 2.5 ? 'text-blue-600' : 
                      germanGrade <= 3.5 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {germanGrade}
                    </div>
                    <div className="inline-block px-4 py-1 rounded-full text-sm font-bold bg-white shadow-sm border border-gray-200">
                      {germanGrade <= 1.5 ? 'Outstanding (Sehr Gut)' : 
                       germanGrade <= 2.5 ? 'Good (Gut)' : 
                       germanGrade <= 3.5 ? 'Satisfactory (Befriedigend)' : 
                       germanGrade <= 4.0 ? 'Sufficient (Ausreichend)' : 'Fail (Nicht ausreichend)'}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ---------------- ECTS CALCULATOR ---------------- */}
            {activeTab === 'ects' && (
              <div className="animate-fadeIn space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">ECTS Credit Calculator</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Calculate equivalent ECTS based on your study workload hours. In most German universities, <strong>1 ECTS = 30 hours</strong> of total workload (lectures + self-study).
                  </p>
                </div>

                <hr className="border-gray-100" />

                <div className="grid md:grid-cols-2 gap-8 mb-4">
                  <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                     <h3 className="font-bold text-yellow-800 mb-1">Bachelor's Degree</h3>
                     <p className="text-sm text-yellow-900">3 Years ≈ 180 ECTS</p>
                     <p className="text-sm text-yellow-900">4 Years ≈ 240 ECTS</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                     <h3 className="font-bold text-green-800 mb-1">Master's Degree</h3>
                     <p className="text-sm text-green-900">1 Year ≈ 60 ECTS</p>
                     <p className="text-sm text-green-900">2 Years ≈ 120 ECTS</p>
                  </div>
                </div>

                <form onSubmit={calculateEcts} className="space-y-6">
                   <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Total Workload Hours (Subject or Semester)</label>
                    <input
                      type="number"
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-3 bg-gray-50 transition-colors"
                      placeholder="e.g. 150 hours"
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-red-700 transition-all active:scale-95"
                    >
                      Convert to ECTS
                    </button>
                    <button
                      type="button"
                      onClick={resetEcts}
                      className="px-4 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                  </div>
                </form>

                {ects !== null && (
                  <div className="mt-8 text-center bg-slate-50 rounded-2xl p-8 border border-slate-200 animate-fadeIn">
                    <p className="text-gray-500 font-medium uppercase tracking-wider text-sm mb-2">Estimated Credits</p>
                    <div className="text-6xl font-extrabold text-slate-800 mb-2">
                      {ects} <span className="text-2xl text-slate-400 font-bold">ECTS</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ---------------- COST ESTIMATOR ---------------- */}
            {activeTab === 'cost' && (
              <div className="animate-fadeIn space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Tuition & Living Cost Estimator</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Estimate your annual budget for studying in Germany. While public universities are tuition-free, living costs vary significantly by city.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3 shadow-sm">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-800 leading-relaxed">
                      <strong>Disclaimer:</strong> The costs calculated below are <strong>estimates only</strong>. Actual tuition fees and living expenses may vary based on your personal lifestyle, city-specific inflation, and university policies.
                    </p>
                  </div>
                </div>

                <hr className="border-gray-100" />

                <form onSubmit={calculateCost} className="space-y-6">
                  {/* Uni & Program */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Target University (Optional)</label>
                        <div className="relative">
                            <School className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                            <input
                            type="text"
                            value={uniName}
                            onChange={(e) => setUniName(e.target.value)}
                            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 pl-10 pr-4 bg-gray-50 transition-colors"
                            placeholder="e.g. RWTH Aachen"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Program Name (Optional)</label>
                        <div className="relative">
                            <BookOpen className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                            <input
                            type="text"
                            value={programName}
                            onChange={(e) => setProgramName(e.target.value)}
                            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 pl-10 pr-4 bg-gray-50 transition-colors"
                            placeholder="e.g. Data Science"
                            />
                        </div>
                    </div>
                  </div>

                  {/* University Type Toggle */}
                  <div>
                    <span className="block text-sm font-medium text-gray-700 mb-3">University Type</span>
                    <div className="grid grid-cols-2 gap-4">
                        <label className={`cursor-pointer rounded-xl border p-4 flex items-center justify-center transition-all ${uniType === 'public' ? 'bg-red-50 border-red-200 text-red-700 ring-1 ring-red-500' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                            <input type="radio" name="uniType" value="public" checked={uniType === 'public'} onChange={() => setUniType('public')} className="sr-only" />
                            <Building2 className="h-5 w-5 mr-2" />
                            <span className="font-semibold">Public University</span>
                        </label>
                        <label className={`cursor-pointer rounded-xl border p-4 flex items-center justify-center transition-all ${uniType === 'private' ? 'bg-red-50 border-red-200 text-red-700 ring-1 ring-red-500' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                            <input type="radio" name="uniType" value="private" checked={uniType === 'private'} onChange={() => setUniType('private')} className="sr-only" />
                            <Building2 className="h-5 w-5 mr-2" />
                            <span className="font-semibold">Private University</span>
                        </label>
                    </div>
                    {uniType === 'public' ? (
                         <p className="text-xs text-green-600 mt-2 font-medium flex items-center"><Info className="h-3 w-3 mr-1"/> Most public universities have €0 tuition fees, only a semester contribution.</p>
                    ) : (
                         <div className="mt-4 animate-fadeIn">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tuition Fee per Semester (EUR)</label>
                            <input
                                type="number"
                                value={tuitionPerSem}
                                onChange={(e) => setTuitionPerSem(e.target.value)}
                                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 px-4 bg-white transition-colors"
                                placeholder="e.g. 5000"
                                required
                            />
                         </div>
                    )}
                  </div>

                  {/* City Selection */}
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Living City</label>
                     <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                        <select
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 pl-10 pr-10 bg-gray-50 appearance-none cursor-pointer"
                        >
                            {Object.entries(citiesData).map(([key, data]) => (
                                <option key={key} value={key}>{data.name}</option>
                            ))}
                        </select>
                     </div>
                     <p className="text-xs text-gray-500 mt-2">Includes rent, food, health insurance, and internet.</p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-red-700 transition-all active:scale-95"
                    >
                      Estimate Total Cost
                    </button>
                    <button
                      type="button"
                      onClick={resetCost}
                      className="px-4 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                  </div>
                </form>

                {costResult && (
                  <div className="mt-8 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white animate-fadeIn shadow-2xl">
                    <div className="text-center mb-6">
                        <h3 className="text-lg text-gray-400 font-medium">Estimated Annual Cost</h3>
                        <p className="text-4xl sm:text-5xl font-extrabold mt-2 text-white">€{costResult.totalYearly.toLocaleString()}</p>
                        {uniName && <p className="text-sm text-red-400 mt-2 font-medium">{uniName} • {programName}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-800/50 rounded-xl p-4 mb-4">
                        <div className="flex justify-between items-center p-2 border-b sm:border-b-0 sm:border-r border-slate-700/50">
                            <span className="text-gray-400 text-sm">Monthly Living</span>
                            <span className="font-bold">€{costResult.monthlyLiving}</span>
                        </div>
                         <div className="flex justify-between items-center p-2">
                            <span className="text-gray-400 text-sm">Yearly Living</span>
                            <span className="font-bold">€{costResult.yearlyLiving.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                             <span className="text-gray-400">Semester Contribution (Yearly)</span>
                             <span>€{costResult.semesterContribution}</span>
                        </div>
                        {costResult.yearlyTuition > 0 && (
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-400">Tuition Fees (Yearly)</span>
                                <span>€{costResult.yearlyTuition.toLocaleString()}</span>
                            </div>
                        )}
                         <div className="flex justify-between items-center text-sm pt-3 border-t border-slate-700">
                             <span className="text-yellow-500 font-medium">Blocked Account Req. (Ref)</span>
                             <span className="text-yellow-500 font-medium">~ €11,208 / yr</span>
                        </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;