import React, { useState, useEffect } from 'react';
import { Menu, X, Truck, Phone, ChevronRight, CalendarCheck, ShieldCheck, MapPin, MessageSquare } from 'lucide-react';

interface BrandNavbarProps {
  onOpenBooking: (courseName?: string) => void;
}

export const BrandNavbar: React.FC<BrandNavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'Pricing', href: '#all-courses' },
    { name: 'Why Hans', href: '#why-hans' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/60 border-b border-slate-200/80 py-2.5'
            : 'bg-slate-50/90 backdrop-blur-xs border-b border-slate-200 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo with hover animation */}
            <a href="#" className="flex items-center gap-2.5 group focus:outline-none shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex items-center justify-center text-amber-400 shadow-sm shadow-slate-950/20 group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300">
                <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" strokeWidth={2.3} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 leading-none">
                  <span className="text-lg sm:text-xl font-black tracking-tight text-slate-950 group-hover:text-amber-600 transition-colors">
                    HANS
                  </span>
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-amber-500">
                    DRIVING
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 text-[10px] font-semibold text-slate-500">
                  <span className="text-amber-600 font-bold tracking-wide">KL-29 MVD</span>
                  <span>•</span>
                  <span>Kayamkulam</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links with animated expanding underline hover effect */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs lg:text-sm font-bold text-slate-700 hover:text-amber-600 transition-colors py-1 relative group"
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Expanding underline animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 rounded-full transition-all duration-200 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions - Balanced, Uncluttered CTAs with hover lift */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              {/* Compact Call Icon on Medium/Laptop Screens */}
              <a
                href="tel:+919876543210"
                className="w-9 h-9 rounded-full bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-500 text-slate-700 hover:text-amber-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs group xl:hidden"
                title="Call +91 98765 43210"
              >
                <Phone className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
              </a>

              {/* Full Call Link on Extra Large Desktops */}
              <a
                href="tel:+919876543210"
                className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white hover:bg-amber-50/50 border border-slate-200 hover:border-amber-400 text-slate-800 hover:text-amber-600 text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs"
              >
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>+91 98765 43210</span>
              </a>

              {/* Primary "Book Training" button with hover elevation */}
              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2 px-4.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-amber-500/20 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-slate-950" />
                <span>Book Training</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href="tel:+919876543210"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-amber-500"
                title="Call Driving School"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm active:scale-95 transition-all cursor-pointer"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer border border-slate-200/80 active:scale-95"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white p-6 flex flex-col justify-between overflow-y-auto shadow-2xl z-10 border-l border-slate-200">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 flex items-center justify-center font-bold shadow-xs">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-950 text-base leading-tight">HANS <span className="text-amber-500">DRIVING</span></h3>
                    <p className="text-[11px] text-amber-600 font-bold">Kayamkulam (KL-29 MVD)</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-950 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links with hover highlight */}
              <nav className="mt-5 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold text-slate-800 hover:text-amber-600 hover:bg-amber-50/50 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>

              {/* Quick Info Box */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  <span>Govt. Authorized Driving School</span>
                </div>
                <div className="flex items-start gap-2 text-slate-600">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>MSM College Junction, NH 66, Kayamkulam</span>
                </div>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-5 border-t border-slate-100 space-y-2">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call +91 98765 43210</span>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hello%20Hans%20Driving%20School%2C%20I%20would%20like%20to%20enquire%20about%20heavy%20vehicle%20training."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-amber-500 font-bold text-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-amber-500" />
                <span>WhatsApp Chat</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-amber-500/20 transition-all text-center block cursor-pointer"
              >
                Book Training Slot Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

