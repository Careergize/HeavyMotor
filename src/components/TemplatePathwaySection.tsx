import React from 'react';
import { Compass, Users2, ShieldCheck, Clock, FileText, Target, Milestone, Award, CheckCircle2 } from 'lucide-react';

interface TemplatePathwaySectionProps {
  onOpenBooking?: () => void;
}

export const TemplatePathwaySection: React.FC<TemplatePathwaySectionProps> = () => {
  const features = [
    {
      title: 'Dedicated Practice Ground',
      desc: '2-Acre private facility with official MVD ‘H’ & ‘8’ tracks and dual gradient ramps at MSM College Jn.',
      icon: Compass,
    },
    {
      title: 'Ex-KSRTC Master Trainers',
      desc: 'Coached by retired KSRTC and commercial interstate fleet captains with 20+ years crash-free pedigree.',
      icon: Users2,
    },
    {
      title: 'Real MVD Test Simulation',
      desc: 'Simulating exact KL-29 Kayamkulam testing protocols, oral viva checklist, and dual air-brake maneuvers.',
      icon: ShieldCheck,
    },
    {
      title: 'Sunrise & Evening Batches',
      desc: 'Early 6:00 AM slots, twilight evening batches, and weekend intensive sessions for working professionals.',
      icon: Clock,
    },
  ];

  const steps = [
    { step: '01', title: 'Sarathi LLR & Doctor Medical', desc: 'Form 1A medical fitness test with Govt. Assistant Surgeon.', icon: FileText },
    { step: '02', title: 'Ground ‘H’ & ‘8’ Maneuvers', desc: 'Precision reverse bay docking and clutch friction point mastery.', icon: Target },
    { step: '03', title: 'NH-66 Highway & Night Runs', desc: 'Real highway and passenger route driving with dual-control pedals.', icon: Milestone },
    { step: '04', title: 'KL-29 Test Day & Badge', desc: 'Official test vehicle escorted by Hans instructor for commercial badge.', icon: Award },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      {/* 4 Feature Cards Grid */}
      <div className="mb-8">
        <div className="text-center max-w-xl mx-auto mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 px-3 py-1 rounded-full border border-slate-200">
            Why Choose Hans Driving School
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mt-2">
            Central Kerala’s Trusted Heavy Vehicle Institute
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 border border-amber-500/20 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-950">{feat.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4-Step Pathway Card - Industrial Navy & Safety Amber */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-800">
        <div className="max-w-lg mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Roadmap to License
          </span>
          <h4 className="text-lg sm:text-2xl font-extrabold text-white mt-1">
            4-Step Journey to Your Kerala Commercial Badge
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            We handle Sarathi slot bookings and doctor appointments so you can focus on driving.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div key={i} className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 hover:border-amber-500/30 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-black text-amber-400 font-mono">{st.step}</span>
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <h5 className="text-xs sm:text-sm font-bold text-white">{st.title}</h5>
                  <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">{st.desc}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center text-[10px] text-amber-400 font-bold">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  <span>Hans Supervised</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
