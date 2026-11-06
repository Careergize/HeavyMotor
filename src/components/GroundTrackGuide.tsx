import React, { useState } from 'react';
import { Compass, CheckCircle2, AlertTriangle, ShieldCheck, Target } from 'lucide-react';

export const GroundTrackGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'h-track' | 'gradient' | 'inspection' | 'eight-track'>('h-track');

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>2-Acre KL-29 Ground Track Specifications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kerala MVD Ground Clearance & Track Simulator
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Our private practice ground at MSM College Junction matches the exact dimensions of the Kayamkulam Sub-RT Office test site. Here is how we prepare you to clear every maneuver without touching a single pole.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveTab('h-track')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'h-track'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-102'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            The Commercial 'H' Track
          </button>

          <button
            onClick={() => setActiveTab('gradient')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'gradient'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-102'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            Gradient Hill Ramp Stop
          </button>

          <button
            onClick={() => setActiveTab('inspection')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'inspection'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-102'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            MVD Pre-Trip Inspection
          </button>

          <button
            onClick={() => setActiveTab('eight-track')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'eight-track'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-102'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            Figure '8' Track (2-Wheeler)
          </button>
        </div>

        {/* Tab Contents Card */}
        <div className="bg-slate-800/90 rounded-3xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
          {activeTab === 'h-track' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <span>Crucial Test for Truck (HGV) & Bus (HPMV)</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Precision Reverse 'H' Track Clearance
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  In Kerala MVD testing, the driver must maneuver a 10-meter rigid truck or 44-seater bus forward through the gate, reverse into the left bay, proceed forward through the crossbar, and reverse into the right bay without stopping the engine or touching any boundary poles.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Convex Mirror Calibration:</strong> We train you to judge rear tyre contact patches with zero reliance on side assistants.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Rear Overhang Calculation:</strong> Preventing the bus tail swing from clipping outside poles during lock-to-lock steering.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Clutch Creep Control:</strong> Maintaining consistent walking speed in 1st and Reverse without stalling air-brake vehicles.</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4 text-xs font-semibold text-amber-400">
                  <div className="flex items-center gap-1.5">
                    <Target className="w-4 h-4" />
                    <span>0 Pole Touches Rule</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Dual Instructor Override Pedals</span>
                  </div>
                </div>
              </div>

              {/* Visual Track Simulation Representation */}
              <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-6 border border-slate-700/80 text-center">
                <div className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-widest">
                  Track Layout & Sensor Grid
                </div>
                {/* SVG Illustration of H Track */}
                <div className="relative h-60 w-full flex items-center justify-center bg-slate-900 rounded-xl border border-slate-800 p-4">
                  <svg className="w-full h-full text-amber-400" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* H Track lines */}
                    <rect x="50" y="20" width="24" height="160" rx="3" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="226" y="20" width="24" height="160" rx="3" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="74" y="88" width="152" height="24" rx="3" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    
                    {/* Poles indicator dots */}
                    <circle cx="45" cy="20" r="4" fill="#ef4444" />
                    <circle cx="79" cy="20" r="4" fill="#ef4444" />
                    <circle cx="45" cy="180" r="4" fill="#ef4444" />
                    <circle cx="79" cy="180" r="4" fill="#ef4444" />
                    <circle cx="221" cy="20" r="4" fill="#ef4444" />
                    <circle cx="255" cy="20" r="4" fill="#ef4444" />
                    <circle cx="221" cy="180" r="4" fill="#ef4444" />
                    <circle cx="255" cy="180" r="4" fill="#ef4444" />

                    {/* Vehicle movement path */}
                    <path d="M62 170 L62 100 L238 100 L238 35" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                    <path d="M238 35 L234 45 M238 35 L242 45" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />

                    {/* Sensor Zone Label */}
                    <text x="150" y="145" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">
                      Center Crossing Gate
                    </text>
                  </svg>
                </div>
                <p className="text-[11px] text-slate-400 mt-3 font-medium">
                  Electronic timer and infrared pole sensor alerts installed at Hans ground.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'gradient' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <span>Ramp Test Clearance</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Gradient Hill-Stop & Zero Rollback Restart
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Conducted on a 15-degree concrete incline. The inspector requires the driver to come to a complete halt mid-slope, engage the mechanical handbrake / air-brake, release all foot controls, and smoothly pull forward without the vehicle rolling backward by even a single inch.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Clutch Friction Zone Mastery:</strong> Feeling the engine rumble at the bite point before disengaging the handbrake.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Exhaust Brake & Differential Lock Drills:</strong> Controlled descents without overheating foundation brake drums.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Fully-Loaded Simulation:</strong> Practical training with simulated ballast so you understand real-world weight transfer.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-6 border border-slate-700/80 text-center">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Gradient Angle</span>
                    <span className="font-bold text-amber-400">15° MVD Spec Ramp</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Allowable Roll-Back</span>
                    <span className="font-bold text-emerald-400">0.0 cm (Zero tolerance)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Brake Type Used</span>
                    <span className="font-bold text-white">Dual Air Circuit & Handbrake</span>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
                  <AlertTriangle className="w-4 h-4 inline mr-1 text-amber-400" />
                  Rolling back even 2 inches results in an instant test disqualification by the MVD Inspector. We train you until this maneuver is 100% second nature.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inspection' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">
                  <span>Inspector Viva & Pre-Drive Check</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  MVD Mandatory Pre-Trip Vehicle Walkaround
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Before you touch the ignition key on test day, the Kerala Motor Vehicle Inspector will question you on commercial vehicle safety systems. Hans instructors conduct mock viva sessions covering all 12 mandatory inspection check items.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60">
                    <p className="font-bold text-amber-400">1. Air Pressure Gauge</p>
                    <p className="text-slate-400 mt-0.5">Operating pressure: 7.5 to 8.5 bar before driving.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60">
                    <p className="font-bold text-amber-400">2. Dual Brake Fail-Safe</p>
                    <p className="text-slate-400 mt-0.5">Air loss buzzer, moisture drain valve check.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60">
                    <p className="font-bold text-amber-400">3. Wheel Lug Nuts & Tyres</p>
                    <p className="text-slate-400 mt-0.5">Thread depth, sidewall cuts, torque check.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60">
                    <p className="font-bold text-amber-400">4. Emergency First Aid & Tools</p>
                    <p className="text-slate-400 mt-0.5">Fire extinguisher, reflective hazard triangles.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-6 border border-slate-700/80 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Hans Mock Viva Scorecard</span>
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every candidate must score at least 18/20 in our internal pre-trip checklist assessment before we book the test appointment with the Kayamkulam Joint RTO.
                </p>
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-medium">
                  Result: 98% of our candidates clear the oral inspection round with zero negative marks!
                </div>
              </div>
            </div>
          )}

          {activeTab === 'eight-track' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <span>Motorcycle With Gear (MCWG)</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  The Official Kerala '8' Track Balance Run
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The motorcycle test requires traversing a continuous figure-8 painted on concrete within tight yellow boundary lines. Putting your foot down on the ground, touching a border line, or engine stalling triggers an immediate failure.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Body Weight Counter-Leaning:</strong> Shifting hip weight outward while motorcycle banks inward at slow crawling speeds.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Rear Brake Feathering:</strong> Stabilizing the bike using light rear foot-brake modulation while keeping throttle steady.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Sudden Stop Line Halt:</strong> Smooth emergency braking at the finish box without locking front wheel.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-6 border border-slate-700/80 text-center">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Figure-8 Golden Rule</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Never look down at your front wheel! Always keep your eyes focused on the center apex of the next curve.
                  </p>
                  <div className="pt-2 text-xs font-bold text-emerald-400">
                    100% Pass Record for Hans 2-Wheeler Students
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
