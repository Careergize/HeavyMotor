import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Check, Award, PhoneCall } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FaqAndCabAssessment: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Kerala MVD Heavy License Guidelines & FAQs
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Everything you need to know about heavy commercial licensing (HGV/HPMV), age eligibility, medical criteria, and test preparation in Kayamkulam.
          </p>
        </div>

        {/* 2-Column Split Layout matching UI Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Accordion FAQs (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-amber-400 bg-amber-50/20 shadow-md ring-1 ring-amber-400/20'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-amber-400 text-slate-950 rotate-180' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Helpline box under FAQ */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-slate-900">Have specific questions about your LMV badge?</p>
                <p className="text-xs text-slate-500">Our RTO documentation officer is available on call.</p>
              </div>
              <a
                href="tel:+919876543210"
                className="shrink-0 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Helpdesk</span>
              </a>
            </div>
          </div>

          {/* Right Column: In-Cab Assessment Media Card (5 cols) matching UI screenshot */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-slate-900 group">
              {/* Photo of trainer conducting in-cab assessment with student */}
              <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1000&q=80"
                  alt="In-Cab Driving Assessment by Certified Hans Instructor"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Floating badge top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-amber-400 text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    Live In-Cab Evaluation
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-slate-950 text-[11px] font-black uppercase">
                    KL-29 Spec
                  </span>
                </div>

                {/* Overlay details bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-lg font-bold">1-on-1 Certified Cockpit Coaching</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Every commercial candidate receives real-time telemetric feedback on clutch modulation, air brake feathering, and blind-spot mirrors.
                  </p>
                </div>
              </div>

              {/* Assessment card features list */}
              <div className="p-5 sm:p-6 bg-slate-900 text-white space-y-3 border-t border-slate-800">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Dual-Control Pedals:</strong> Instructor can intervene instantly for 100% road safety.</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>MVD Marking Scorecard:</strong> Detailed 20-point rubrics covering 'H', '8', and highway habits.</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Night-Time Cabin Protocol:</strong> Instrument cluster reading and anti-glare mirror techniques.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
