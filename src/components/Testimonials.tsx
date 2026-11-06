import React from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ThumbsUp className="w-3.5 h-3.5 text-emerald-700" />
            <span>Real Student Stories & Career Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Hear From Drivers Trained at Hans
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Over 5,000+ drivers have earned their commercial and heavy licenses with us. Here is what our successful graduates in KSRTC, Gulf fleets, and commercial logistics say.
          </p>
        </div>

        {/* Testimonials 4-Card Grid matching UI Screenshot */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                {/* License Tag */}
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-1 rounded bg-amber-50 text-amber-800 text-[11px] font-bold border border-amber-200/80">
                    {t.licenseCategory}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-400 shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 truncate flex items-center gap-1">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate">{t.currentRole}</p>
                  <p className="text-[10px] text-amber-600 font-semibold">{t.badgeCleared}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge strip under testimonials */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 grid grid-cols-2 md:grid-cols-4 items-center justify-around gap-4 sm:gap-6 text-center">
          <div className="p-2 sm:p-0">
            <p className="text-xl sm:text-2xl font-black text-slate-900">4.9 / 5.0</p>
            <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Google Reviews Rating</p>
          </div>
          <div className="p-2 sm:p-0 border-l border-slate-100 sm:border-slate-200">
            <p className="text-xl sm:text-2xl font-black text-slate-900">KL-29</p>
            <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Kayamkulam RTO Authorized</p>
          </div>
          <div className="p-2 sm:p-0 border-t sm:border-t-0 sm:border-l border-slate-100 sm:border-slate-200">
            <p className="text-xl sm:text-2xl font-black text-slate-900">100%</p>
            <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Re-Test Vehicle Guarantee</p>
          </div>
          <div className="p-2 sm:p-0 border-t sm:border-t-0 border-l border-slate-100 sm:border-slate-200">
            <p className="text-xl sm:text-2xl font-black text-slate-900">Gulf Ready</p>
            <p className="text-[11px] sm:text-xs text-slate-500 font-medium">UAE / Saudi Trade Coaching</p>
          </div>
        </div>
      </div>
    </section>
  );
};
