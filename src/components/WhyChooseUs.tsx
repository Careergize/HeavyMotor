import React from 'react';
import { ShieldCheck, Compass, Users2, Clock, CheckCircle2, Award, FileText, Target, Milestone, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const features = [
    {
      icon: Compass,
      title: 'Dedicated Private Practice Ground',
      description:
        'Spacious 2-acre private facility equipped with exact Kerala MVD specification ‘H’ and ‘8’ tracks, dual gradient ramps, and electronic dock parking sensors.',
      metric: '2-Acre Practice Ground',
    },
    {
      icon: Users2,
      title: 'Govt. Certified Master Instructors',
      description:
        'Taught by veteran ex-KSRTC master trainers and interstate heavy transport captains with 20+ years of crash-free commercial driving records.',
      metric: 'Ex-KSRTC Chief Trainers',
    },
    {
      icon: ShieldCheck,
      title: 'Real MVD Exam Preparation',
      description:
        'Authentic mock trials simulating the exact Kayamkulam KL-29 Sub-RT Office testing protocols, vehicle pre-inspection, and road inspector tests.',
      metric: '98% 1st-Attempt Pass Rate',
    },
    {
      icon: Clock,
      title: 'Flexible Batches for Professionals',
      description:
        'Early sunrise 6:00 AM slots, twilight evening batches, and weekend-only intensive sessions designed for job-goers, mechanics, and Gulf job applicants.',
      metric: '6 AM - 7 PM Daily Slots',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Sarathi LLR & Medical',
      desc: 'Form 1A medical fitness test with govt. approved doctor and online learner permit issuance.',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Theory & Ground ‘H’ / ‘8’',
      desc: 'Master the Kerala RTO track dimensions, reverse maneuvers, and clutch biting point.',
      icon: Target,
    },
    {
      step: '03',
      title: 'Highway & Night Runs',
      desc: 'Intensive on-road driving on NH-66 with dual-control air-brake training trucks and buses.',
      icon: Milestone,
    },
    {
      step: '04',
      title: 'KL-29 Test & Badge',
      desc: 'Official test vehicle provided at Kayamkulam RTO ground and commercial badge endorsement.',
      icon: Award,
    },
  ];

  return (
    <section id="why-hans" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Kayamkulam's Trusted Heavy Vehicle Training Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Discover Why We’re the #1 Choice for Heavy Driving in Central Kerala
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            From first-time heavy vehicle drivers to experienced drivers upgrading their licenses for Gulf careers, Hans Driving School delivers rigorous safety training, authentic MVD test tracks, and dedicated instructor support.
          </p>
        </div>

        {/* 4-Column Feature Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-7 rounded-2xl bg-slate-50 hover:bg-slate-900 border border-slate-200 hover:border-slate-800 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-slate-800 border border-slate-200 group-hover:border-slate-700 flex items-center justify-center text-amber-500 group-hover:text-amber-400 shadow-sm transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 group-hover:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600 group-hover:text-amber-400 uppercase tracking-wider">
                    {item.metric}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Graphic Section: The 4-Step Road to License (Matches UI Screenshot) */}
        <div className="mt-14 sm:mt-20 rounded-3xl bg-slate-900 text-white p-5 sm:p-8 lg:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Structured Curriculum
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Your Clear 4-Step Journey to a Kerala Commercial Badge
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              We handle the bureaucracy, the doctor appointments, and the RTO bookings so you can focus entirely on mastering the steering wheel.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => {
              const StepIcon = st.icon;
              return (
                <div
                  key={i}
                  className="relative p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-400 font-mono">{st.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-slate-300">
                      <StepIcon className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{st.title}</h4>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">{st.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center text-[11px] font-semibold text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    <span>Hans Supervised Step</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative z-10 mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
              Ready to begin? Next batch registration closes this Friday.
            </p>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>Reserve Your Training Slot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Why Practical is Critical Cards (Matches bottom section of value prop in screenshot) */}
        <div className="mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-8">
            Why Hands-On Heavy Practice is Critical
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <p className="text-2xl sm:text-3xl font-black text-slate-900">40+ Ton</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Momentum & braking inertia awareness</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <p className="text-2xl sm:text-3xl font-black text-amber-600">4 Blind Zones</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Eliminating mirrors blind-spot collisions</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <p className="text-2xl sm:text-3xl font-black text-blue-600">Dual Air Brakes</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Compressor pressure & fail-safe locks</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <p className="text-2xl sm:text-3xl font-black text-emerald-600">100%</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Zero-penalty road test confidence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

