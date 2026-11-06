import React from 'react';
import { ShieldCheck, IndianRupee, RotateCcw, MapPin } from 'lucide-react';

export const TemplateTrustRow: React.FC = () => {
  const trustItems = [
    {
      title: 'Verified Professionals',
      subtitle: 'Ex-KSRTC & Fleet Instructors',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Pricing',
      subtitle: 'Includes Fuel & Ground Fee',
      icon: IndianRupee,
    },
    {
      title: '100% Re-Test Coverage',
      subtitle: 'Free test vehicle support',
      icon: RotateCcw,
    },
    {
      title: '2-Acre Practice Ground',
      subtitle: 'KL-29 Spec Sensor Track',
      icon: MapPin,
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
      {/* 4-Item Row matching Industrial Navy & Safety Amber theme */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3 ${
                  idx > 0 ? 'pt-3 md:pt-0 md:pl-4' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

