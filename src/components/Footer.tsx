import React from 'react';
import { Truck, MapPin, Phone, Mail, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Accreditation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
                <Truck className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white">HANS DRIVING</span>
                <span className="text-xl font-bold tracking-tight text-amber-400 ml-1.5">SCHOOL</span>
                <p className="text-[11px] text-slate-400">Govt. Authorized Heavy Motor Training Institute</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs pr-4">
              Pioneering commercial transport and heavy vehicle driver education in Kayamkulam, Kerala. Authorized under Section 12 of the Motor Vehicles Act, 1988, and Central Motor Vehicle Rules (CMVR) 1989.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Kerala MVD Reg. No: KL-29/DS/2009</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Sub-Regional Transport Office, Kayamkulam Jurisdiction. Validated Ground Track with dual electronic sensor checkpoints.
              </p>
            </div>
          </div>

          {/* Col 3: Vehicle Courses */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              Training Categories
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  Heavy Goods Vehicles (HGV / 10-Wheeler)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  Passenger Buses (HPMV / KSRTC Prep)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  JCB 3DX & Excavator Machinery
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  40ft Articulated Trailer (Gulf Trade Test)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  Light Motor Vehicles (Car Manual & Auto)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  Two-Wheeler ('8' Track Figure Mastery)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Resources */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              Quick Links & Help
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">
                  Course Packages & Fee Structure
                </a>
              </li>
              <li>
                <a href="#why-hans" className="hover:text-amber-400 transition-colors">
                  Private Practice Ground (2-Acre)
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-400 transition-colors">
                  Student Reviews & Career Records
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-amber-400 transition-colors">
                  Kerala RTO Eligibility & Form 1A
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Directions to MSM College Ground
                </a>
              </li>
              <li>
                <a href="https://parivahan.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Parivahan Sarathi Portal (Govt. of India)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              Kayamkulam Office
            </h5>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Opposite MSM College, NH-66, Kayamkulam, Kerala 690502</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919876543210" className="text-white hover:text-amber-400 font-bold">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>0479 - 000 0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@hansdrivingschool.in" className="hover:text-amber-400">
                  info@hansdrivingschool.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Disclaimers Strip matching reference */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-slate-500 text-[11px] leading-relaxed space-y-3">
          <p>
            <strong>Statutory Disclaimer:</strong> Hans Heavy Motor Driving School is an accredited driving training school registered under the Motor Vehicles Act 1988 with the Motor Vehicles Department (MVD), Government of Kerala (KL-29). Granting of driving licenses and public commercial badges is the sole statutory prerogative of the Licensing Authority (RTO / Joint RTO) following the official driving skills test.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>© 2026 Hans Heavy Motor Driving School, Kayamkulam. All Rights Reserved.</p>
            <div className="flex items-center gap-4 text-slate-400">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer">Terms of Admission</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer">Syllabus & Code of Conduct</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
