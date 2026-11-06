import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
          {/* Left: Location & Working hours */}
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>MSM College Junction, Kayamkulam, Kerala 690502</span>
            </div>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Mon - Sat: 6:00 AM - 7:00 PM (Sunday Batches Available)</span>
            </div>
          </div>

          {/* Right: Badge & Hotline */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-1.5 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800 text-amber-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Govt. Authorized Driving Institute & Heavy Vehicle Training (KL-29 MVD)</span>
            </div>
            <div className="flex items-center gap-1.5 font-semibold text-white">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hotline:</span>
              <a
                href="tel:+910000000000"
                className="hover:text-amber-400 transition-colors tracking-wide text-amber-300 font-bold"
              >
                +91 00000 00000
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
