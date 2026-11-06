import React from 'react';
import { Truck } from 'lucide-react';

export const TemplateFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs pb-24 sm:pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-sm">
                <Truck className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <span className="font-extrabold text-white text-base">HANS <span className="text-amber-500">DRIVING</span></span>
                <p className="text-[10px] text-amber-400 font-bold">KL-29 MVD Kayamkulam</p>
              </div>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Govt. Authorized Heavy Motor Training Institute. Accredited under Section 12 of the Motor Vehicles Act 1988.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider">Courses</h5>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Heavy Commercial Trucks (HGV)</li>
              <li>Passenger Buses (HPMV / Stage Carriage)</li>
              <li>JCB & Heavy Earthmovers</li>
              <li>Articulated Trailer 40ft (Gulf Prep)</li>
              <li>Light Motor Vehicles (Car Manual & Auto)</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider">Kayamkulam Office</h5>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p>Opposite MSM College Main Gate, NH-66 Junction, Kayamkulam, Kerala 690502</p>
              <p className="text-white font-bold">Hotline: <span className="text-amber-400">+91 98765 43210</span></p>
              <p>Landline: 0479 - 000 0000</p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© 2026 Hans Heavy Motor Driving School. All Rights Reserved.</p>
          <p>Kerala MVD Reg. No: KL-29/DS/2009</p>
        </div>
      </div>
    </footer>
  );
};
