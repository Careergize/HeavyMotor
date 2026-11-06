import React, { useState, useEffect } from 'react';
import { Menu, X, Truck, Phone, ChevronRight, CalendarCheck, MapPin, ShieldCheck, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (courseName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
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
    { name: 'Pricing', href: '#pricing' },
    { name: 'Why Hans', href: '#why-hans' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-slate-950/25 border-b border-slate-800/80 py-3'
            : 'bg-slate-900 border-b border-slate-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with clean whitespace */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Truck className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    HANS
                  </span>
                  <span className="text-xl font-bold tracking-tight text-amber-400">
                    DRIVING
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-slate-400 mt-0.5 tracking-wider uppercase">
                  KL-29 Kayamkulam
                </span>
              </div>
            </a>

            {/* Desktop Navigation - Concise, Spaced & Uncluttered */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors py-1 relative group"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions - Single clean CTA with spacious layout */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <a
                href="tel:+910000000000"
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-slate-800/60"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+91 00000 00000</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-slate-950" />
                <span>Book Training</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs shadow-sm hover:bg-amber-400 cursor-pointer"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
                    <Truck className="w-5 h-5 text-slate-950" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base leading-tight">HANS DRIVING</h3>
                    <p className="text-[11px] text-amber-400 font-medium">Kayamkulam (KL-29)</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-800/70 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </nav>

              {/* Quick Info */}
              <div className="mt-6 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Govt. Authorized KL-29 MVD Institute</span>
                </div>
                <div className="flex items-start gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>MSM College Junction, NH 66, Kayamkulam</span>
                </div>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-5 border-t border-slate-800 space-y-2">
              <a
                href="tel:+910000000000"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call +91 00000 00000</span>
              </a>

              <a
                href="https://wa.me/910000000000?text=Hello%20Hans%20Driving%20School%2C%20I%20would%20like%20to%20enquire%20about%20heavy%20vehicle%20training."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider transition-colors min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Chat</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-all text-center block cursor-pointer min-h-[48px]"
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
