import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';

export const TemplateLocationContact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('Heavy Commercial Trucks (HGV)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-6 pb-20">
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Office & Ground Location */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Ground & Office Location</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
              Visit Our 2-Acre Practice Ground at MSM College Junction
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Opposite MSM College Main Gate, NH-66 Bypass Junction, Kayamkulam, Kerala 690502.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-bold text-slate-900">+91 00000 00000</span>
                <span className="text-slate-400">/ 0479 - 000 0000</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Mon - Sat: 6:00 AM - 7:00 PM (Sunday Batches Available)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=MSM+College+Kayamkulam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors hover:border-amber-500 border border-transparent shadow-xs"
              >
                <span>Get Turn-by-Turn Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Right: Quick Callback Box */}
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200">
            {submitted ? (
              <div className="text-center py-4 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-amber-500 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Inquiry Received!</h4>
                <p className="text-xs text-slate-600">
                  Thank you <strong>{name}</strong>. Our chief instructor will call you at <strong>{phone}</strong> shortly.
                </p>
                <a
                  href={`https://wa.me/910000000000?text=Hi%20Hans%20Driving%2C%20I%20enquired%20for%20${encodeURIComponent(vehicle)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <h4 className="text-sm font-extrabold text-slate-900">Request Instant Callback</h4>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp (+91 00000 00000)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
                <div>
                  <select
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 font-medium"
                  >
                    <option>Heavy Commercial Trucks (HGV)</option>
                    <option>Passenger Buses (HPMV / Transit)</option>
                    <option>JCB & Heavy Earthmovers</option>
                    <option>Light Motor Vehicles (Car / LMV)</option>
                    <option>Two-Wheeler & Auto-Rickshaw</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-md hover:shadow-amber-500/20 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Callback (Free Consultation)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

