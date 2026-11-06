import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TemplateTestimonialsSection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
            Student Reviews & Career Success
          </h3>
          <p className="text-[11px] text-slate-500 font-medium">Over 5,000+ commercial drivers trained in Kayamkulam</p>
        </div>
        <span className="text-xs font-bold text-amber-700 bg-amber-500/15 border border-amber-500/30 px-2.5 py-1 rounded-full">
          ★ 4.9 Rating
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Rating stars */}
              <div className="flex items-center gap-0.5 mb-2">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* License Tag */}
              <div className="mb-2">
                <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold">
                  {t.licenseCategory}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-xs text-slate-600 leading-relaxed italic line-clamp-4">
                "{t.review}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2.5">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-9 h-9 rounded-full object-cover border border-amber-400 shrink-0"
              />
              <div className="min-w-0">
                <h5 className="text-xs font-extrabold text-slate-900 truncate flex items-center gap-1">
                  <span>{t.name}</span>
                  <CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" />
                </h5>
                <p className="text-[10px] text-slate-500 truncate">{t.currentRole}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

