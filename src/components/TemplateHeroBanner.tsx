import React, { useState } from 'react';
import { CalendarCheck, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

interface TemplateHeroBannerProps {
  onOpenBooking: (courseName?: string) => void;
}

export const TemplateHeroBanner: React.FC<TemplateHeroBannerProps> = ({ onOpenBooking }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      badge: 'KL-29 MVD Approved Institute',
      title: 'Want Heavy License Fast? We’ll Train You to Pass.',
      bullet1: 'Instant batch starting this Monday (6:00 AM & Evening)',
      bullet2: 'Govt. Certified ex-KSRTC instructors • Dual-pedal fleet',
      primaryBtn: 'Instant Enrollment',
      secondaryBtn: 'Schedule Practice',
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    },
    {
      badge: '98% First-Attempt Clearance',
      title: 'Master the Kerala RTO ‘H’ & ‘8’ Ground Test.',
      bullet1: '2-Acre private practice track matching KL-29 specifications',
      bullet2: 'Zero-penalty reverse bay docking & gradient stop coaching',
      primaryBtn: 'Explore Ground',
      secondaryBtn: 'View Pricing',
      img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    },
    {
      badge: 'Gulf Placement Ready',
      title: 'UAE & Saudi Heavy Commercial Trade Test Prep.',
      bullet1: 'Multi-axle articulated rigs & container reverse docking',
      bullet2: 'Official trade verification certificates for Dubai RTA',
      primaryBtn: 'Gulf Consultation',
      secondaryBtn: 'Call Instructor',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const current = slides[activeSlide];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-2">
      {/* Industrial Deep Navy Banner Card */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white shadow-2xl min-h-[220px] sm:min-h-[250px] flex items-center">
        {/* Amber Ambient lighting glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full p-4 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Main Content Area */}
          <div className="flex-1 w-full space-y-3 sm:space-y-4 text-left">
            {/* Top Row on mobile: Badge & Title with Mobile Image Cutout */}
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-2 sm:space-y-3 flex-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                  <span>{current.badge}</span>
                </div>

                <h2 className="text-lg sm:text-3xl font-extrabold text-white tracking-tight leading-snug max-w-lg">
                  {current.title}
                </h2>
              </div>

              {/* Mobile Right Visual Cutout (visible on mobile only) */}
              <div className="md:hidden w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-slate-700/80 shadow-md relative group mt-0.5">
                <img
                  src={current.img}
                  alt="Hans Driving School Vehicle Training"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-1 left-1 right-1 px-1 py-0.5 rounded bg-black/60 backdrop-blur-md text-[8px] text-amber-400 font-semibold text-center border border-amber-500/20">
                  KL-29 Fleet
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-[11px] sm:text-xs">{current.bullet1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="text-[11px] sm:text-xs">{current.bullet2}</span>
              </div>
            </div>

            {/* Dual Action Buttons side-by-side on both mobile and web view */}
            <div className="flex flex-row items-center gap-2 sm:gap-2.5 pt-1.5 sm:pt-2 w-full md:w-auto">
              <button
                onClick={() => onOpenBooking()}
                className="flex-1 sm:flex-initial justify-center px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold hover:-translate-y-0.5 text-[11px] sm:text-xs flex items-center gap-1.5 shadow-md hover:shadow-amber-500/25 transition-all duration-300 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-950 fill-slate-950" />
                <span>{current.primaryBtn}</span>
              </button>

              <a
                href="#all-courses"
                className="flex-1 sm:flex-initial justify-center px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:-translate-y-0.5 font-semibold text-[11px] sm:text-xs flex items-center gap-1.5 backdrop-blur-sm shadow-xs hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <CalendarCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                <span>{current.secondaryBtn}</span>
              </a>
            </div>
          </div>

          {/* Desktop Right Visual Cutout (Unchanged for md: and desktop view) */}
          <div className="hidden md:block w-44 md:w-56 h-40 md:h-48 rounded-2xl overflow-hidden shrink-0 border border-slate-700/80 shadow-lg relative group">
            <img
              src={current.img}
              alt="Hans Driving School Vehicle Training"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] text-amber-400 font-semibold text-center border border-amber-500/20">
              KL-29 Dual-Control Fleet
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Carousel Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              activeSlide === idx
                ? 'w-6 h-1.5 bg-amber-500'
                : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
