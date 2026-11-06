import React from 'react';
import { Shield, Award, CheckCircle2, Phone, CalendarCheck, Users, ArrowRight, Gauge } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (courseName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-8 pb-16 sm:pb-24 border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top announcement pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs text-slate-200 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-amber-400">KL-29 MVD Approved</span>
            <span className="text-slate-500">•</span>
            <span>New Heavy Transport & Bus Batches Enrolling This Week</span>
          </div>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Master Heavy & Commercial Vehicles.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
              Get Licensed with Confidence.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            Comprehensive driver education in Kayamkulam for{' '}
            <strong className="text-white font-semibold">Heavy Goods Vehicles (HGV/Truck)</strong>,{' '}
            <strong className="text-white font-semibold">Passenger Buses</strong>,{' '}
            <strong className="text-white font-semibold">JCB Earthmovers</strong>, and{' '}
            <strong className="text-white font-semibold">Light Motor Vehicles (LMV)</strong>.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking('Heavy Commercial Trucks')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5 text-slate-950" />
              <span>Enroll in Heavy Vehicle Batch</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <a
              href="tel:+910000000000"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white font-bold text-base transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>Call Instructor: 00000 00000</span>
            </a>
          </div>
        </div>

        {/* Featured Vehicle Showcase Visual - Matches UI Reference Screenshot */}
        <div className="mt-12 sm:mt-16">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-800/80 shadow-2xl">
            {/* Main vehicle lineup visual banner */}
            <div className="relative h-72 sm:h-96 md:h-[420px] w-full overflow-hidden bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=80"
                alt="Hans Heavy Motor Driving School Commercial Truck Fleet and Ground"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
              />
              
              {/* Gradient overlays to match reference banner style */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/70" />

              {/* Floating banner on top of image matching reference layout */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700 text-amber-400 text-[11px] sm:text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-md">
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  MVD KL-29 Registered Training Ground
                </span>
                <span className="hidden sm:inline-flex px-3 py-1.5 rounded-lg bg-blue-950/90 backdrop-blur-md border border-blue-800/60 text-blue-300 text-xs font-bold items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-blue-400" />
                  Dual-Control Air Brake Fleet
                </span>
              </div>

              {/* Bottom vehicle fleet tags */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
                <div className="space-y-1">
                  <div className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-amber-500 text-slate-950 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider">
                    Our Training Fleet
                  </div>
                  <h3 className="text-base sm:text-2xl font-bold text-white drop-shadow-md">
                    Ashok Leyland 1618 • Tata Starbus 44-Seater • BharatBenz 2823R • JCB 3DX
                  </h3>
                  <p className="text-[11px] sm:text-sm text-slate-300 max-w-xl line-clamp-2 sm:line-clamp-none">
                    Specially adapted training vehicles with certified instructor dual-pedal brakes and wide-angle mirror rigs.
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 self-start md:self-end">
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-left sm:text-right">
                    <p className="text-[10px] sm:text-[11px] text-slate-400 uppercase font-semibold">Test Success</p>
                    <p className="text-sm sm:text-lg font-extrabold text-amber-400">98% 1st-Attempt</p>
                  </div>
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-left sm:text-right">
                    <p className="text-[10px] sm:text-[11px] text-slate-400 uppercase font-semibold">Ground Track</p>
                    <p className="text-sm sm:text-lg font-extrabold text-emerald-400">2-Acre Private</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust metrics counter strip matching reference */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-0 lg:divide-x divide-slate-800 bg-slate-950 p-3 sm:p-4 lg:py-6 lg:px-8">
              <div className="flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 bg-slate-900/60 lg:bg-transparent rounded-xl lg:rounded-none border border-slate-800/80 lg:border-none">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">15+ Years</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Training Pedigree</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 bg-slate-900/60 lg:bg-transparent rounded-xl lg:rounded-none border border-slate-800/80 lg:border-none">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">98%</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Pass Rate (1st Try)</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 bg-slate-900/60 lg:bg-transparent rounded-xl lg:rounded-none border border-slate-800/80 lg:border-none">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">MVD Spec</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium">KL-29 Test Ground</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 bg-slate-900/60 lg:bg-transparent rounded-xl lg:rounded-none border border-slate-800/80 lg:border-none">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">5,000+</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Licensed Drivers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

