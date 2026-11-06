import React from 'react';
import { Check, Clock, MessageCircle, Award, Truck, ArrowRight } from 'lucide-react';
import { VEHICLE_CATEGORIES, COURSE_PACKAGES } from '../data/mockData';
import type { VehicleCategoryId, CoursePackage } from '../types';

interface CoursePricingGridProps {
  selectedCategory: VehicleCategoryId;
  onOpenBooking: (courseName?: string, tierName?: string) => void;
}

export const CoursePricingGrid: React.FC<CoursePricingGridProps> = ({
  selectedCategory,
  onOpenBooking,
}) => {
  const currentCategory = VEHICLE_CATEGORIES.find((c) => c.id === selectedCategory) || VEHICLE_CATEGORIES[0];
  const packages = COURSE_PACKAGES.filter((p) => p.categoryId === selectedCategory);

  // Quick WhatsApp link generator
  const getWhatsAppLink = (pkg: CoursePackage) => {
    const text = encodeURIComponent(
      `Hello Hans Driving School, I am interested in the ${currentCategory.name} - ${pkg.title} (${pkg.duration}) priced at ₹${pkg.price}. Please provide batch timings and admission details.`
    );
    return `https://wa.me/910000000000?text=${text}`;
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Active Category Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 lg:p-8 shadow-sm mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
                <Truck className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider">
                    {currentCategory.badge}
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    KL-29 RTO Standard Course
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-extrabold text-slate-950 mt-1">
                  {currentCategory.name} Training Packages
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  {currentCategory.description}
                </p>
              </div>
            </div>

            {/* Vehicle Model Callout */}
            <div className="bg-slate-50 rounded-xl p-3 sm:p-4 border border-slate-200/80 flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                MVD
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase">Assigned Training Fleet</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900">{currentCategory.vehicleModel}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Tier Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-2xl bg-white border transition-all duration-300 course-card-transition ${
                  isPopular
                    ? 'border-amber-500 shadow-xl shadow-amber-500/10 ring-2 ring-amber-500/20 md:-translate-y-2'
                    : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                {/* Popular Ribbon if marked */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
                      Most Popular Choice
                    </span>
                  </div>
                )}

                <div className="p-5 sm:p-7 lg:p-8">
                  {/* Tier Badge & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                      {pkg.tierLabel.split(':')[0]}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h4 className="text-xl font-extrabold text-slate-950 leading-tight">
                    {pkg.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-500 min-h-[34px]">
                    {pkg.subTitle}
                  </p>

                  {/* Price Box */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-sm font-semibold text-slate-400 line-through">
                          ₹{pkg.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Transparent Fee
                      </span>
                      <span className="text-xs text-slate-400">• Includes Fuel & Ground</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                      <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>Practical:</span>
                      <span className="font-normal text-slate-600">{pkg.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-slate-900 truncate">
                      <Truck className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>Model:</span>
                      <span className="font-normal text-slate-600 truncate">{pkg.vehicleType}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                      Syllabus & Training Coverage:
                    </p>
                    <ul className="space-y-3">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-5 sm:p-7 lg:p-8 pt-0 border-t border-slate-100 mt-6 bg-slate-50/50 rounded-b-2xl">
                  <div className="space-y-2.5 pt-4">
                    <button
                      onClick={() => onOpenBooking(currentCategory.name, pkg.title)}
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer ${
                        isPopular
                          ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                          : 'bg-slate-950 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <span>Enroll in Batch</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={getWhatsAppLink(pkg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-700 hover:text-emerald-700 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-center text-slate-400 mt-3 font-medium">
                    KL-29 Kayamkulam RTO Test Vehicle Assistance
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom package / Gulf Trade Test Callout Bar */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 border border-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
              <Award className="w-3.5 h-3.5" />
              Gulf Placement & Commercial Fleets
            </div>
            <h4 className="text-xl sm:text-2xl font-bold">
              Preparing for UAE, Saudi, or Qatar Commercial Heavy Driver Tests?
            </h4>
            <p className="text-slate-300 text-sm max-w-2xl">
              We provide customized Left-Hand Drive orientation, international trailer reverse dock training, and official trade test verification certificates for Gulf-bound candidates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onOpenBooking('Gulf Trade Test Special Prep')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer text-center"
            >
              Consult Chief Instructor
            </button>
            <a
              href="tel:+910000000000"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm transition-all text-center"
            >
              Call +91 00000 00000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
