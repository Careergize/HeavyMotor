import React from 'react';
import { Phone, MessageSquare, CalendarCheck } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/90 px-3 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href="tel:+910000000000"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors min-h-[48px] active:scale-95"
        >
          <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/910000000000?text=Hello%20Hans%20Driving%20School%2C%20I%20would%20like%20to%20enquire%20about%20heavy%20vehicle%20driving%20courses%20in%20Kayamkulam."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white transition-colors min-h-[48px] active:scale-95 shadow-sm"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Button */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-extrabold transition-all min-h-[48px] active:scale-95 shadow-md shadow-amber-500/20 cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4 mb-0.5 text-slate-950" />
          <span className="text-[11px] font-extrabold tracking-tight">Book Slot</span>
        </button>
      </div>
    </div>
  );
};

