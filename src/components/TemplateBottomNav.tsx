import React from 'react';
import { Home, Calendar, Headphones, Truck } from 'lucide-react';

interface TemplateBottomNavProps {
  activeTab: 'home' | 'courses' | 'support' | 'account';
  onTabChange: (tab: 'home' | 'courses' | 'support' | 'account') => void;
  onOpenBooking: () => void;
}

export const TemplateBottomNav: React.FC<TemplateBottomNavProps> = ({
  activeTab,
  onTabChange,
  onOpenBooking,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl py-2 px-4 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="max-w-md mx-auto flex items-center justify-around gap-1">
        {/* Home Item (Active Pill matching Industrial Navy & Safety Amber theme) */}
        <button
          onClick={() => {
            onTabChange('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
            activeTab === 'home'
              ? 'bg-slate-900 text-amber-400 font-extrabold shadow-sm border border-amber-500/30'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Home className={`w-4 h-4 ${activeTab === 'home' ? 'text-amber-400' : 'text-slate-500'}`} />
          <span className="text-xs font-bold">Home</span>
        </button>

        {/* Courses Item */}
        <button
          onClick={() => {
            onTabChange('courses');
            const el = document.getElementById('all-courses');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`flex flex-col sm:flex-row items-center gap-1 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
            activeTab === 'courses'
              ? 'bg-slate-900 text-amber-400 font-bold border border-amber-500/30'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Truck className={`w-4 h-4 ${activeTab === 'courses' ? 'text-amber-400' : 'text-slate-500'}`} />
          <span className="text-[11px] font-semibold">Courses</span>
        </button>

        {/* Support / Helpdesk */}
        <a
          href="tel:+919876543210"
          className="flex flex-col sm:flex-row items-center gap-1 px-3 py-1.5 rounded-full text-slate-500 hover:text-amber-600 transition-all cursor-pointer"
        >
          <Headphones className="w-4 h-4" />
          <span className="text-[11px] font-semibold">Support</span>
        </a>

        {/* Book Slot Item */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col sm:flex-row items-center gap-1 px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-md hover:shadow-amber-500/20 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-slate-950" />
          <span className="text-[11px] font-bold">Book Slot</span>
        </button>
      </div>
    </div>
  );
};
