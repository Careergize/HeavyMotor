import React, { useState } from 'react';
import { ChevronDown, Check, Award } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const TemplateFaqCockpit: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: FAQs Accordion (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="mb-2">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
              Kerala MVD Guidelines & FAQs
            </h3>
            <p className="text-[11px] text-slate-500 font-medium">Official age criteria, badge prerequisites & test formats</p>
          </div>

          {FAQS.slice(0, 5).map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-amber-500 bg-amber-50/20 shadow-xs' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-4 sm:px-5 py-3.5 text-left flex items-center justify-between gap-3 focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-slate-600 text-xs leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: In-Cab Cockpit Assessment Card (5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
                alt="In-Cab Driving Assessment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-slate-950/90 text-amber-400 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 border border-amber-500/30">
                  <Award className="w-3 h-3 text-amber-400" />
                  In-Cab Assessment
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="font-extrabold text-sm sm:text-base">1-on-1 Cockpit Coaching</h4>
                <p className="text-[11px] text-slate-200 mt-0.5">Real-time clutch, air-brake and blind-spot telemetry</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Dual-control safety pedal override on all test rigs</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Official MVD 20-point scorecard test simulation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>St. John Ambulance First Aid certification guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
