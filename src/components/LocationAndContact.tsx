import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';

export const LocationAndContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: 'Heavy Commercial Trucks (HGV)',
    batchTime: 'Morning (6:00 AM - 9:00 AM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Our Ground & Office</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Conveniently Located at MSM College Junction, Kayamkulam
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Walk into our main office or visit our 2-acre private heavy training ground on NH-66 frontage. Free test-drive consultation for all aspirants.
          </p>
        </div>

        {/* 2-Column Grid: Contact/Map Info & Quick Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Ground Location, Directions & Contact Card (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Info Cards */}
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 text-base">Office & Training Ground Address</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    Hans Heavy Motor Driving Institute,
                    <br />
                    Opposite MSM College Main Gate, NH-66 Junction,
                    <br />
                    Kayamkulam, Alappuzha District, Kerala - 690502
                  </p>
                  <p className="text-xs text-amber-700 font-semibold mt-1">
                    Landmark: 50 meters south of MSM Higher Secondary School
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Direct Hotlines</p>
                    <a
                      href="tel:+919876543210"
                      className="text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors block"
                    >
                      +91 98765 43210
                    </a>
                    <a
                      href="tel:+914790000000"
                      className="text-xs font-medium text-slate-600 hover:text-amber-600 transition-colors block"
                    >
                      0479 - 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Training Ground Hours</p>
                    <p className="text-sm font-bold text-slate-900">6:00 AM - 7:00 PM</p>
                    <p className="text-xs text-slate-600">Monday through Saturday (Sunday on appointment)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Visual Card */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex-1 min-h-[220px] flex flex-col justify-between">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Kayamkulam NH-66 Ground Location Map</span>
                </div>
                <a
                  href="https://maps.google.com/?q=MSM+College+Kayamkulam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Styled interactive map preview representation */}
              <div className="relative h-48 sm:h-56 bg-slate-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-800/10 mix-blend-multiply pointer-events-none" />
                
                {/* Visual Map graphic overlay */}
                <div className="text-center p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-300 shadow-xl max-w-sm mx-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center mx-auto mb-2 shadow-md">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <h5 className="font-extrabold text-slate-950 text-sm">Hans Heavy Training Ground</h5>
                  <p className="text-xs text-slate-600 mt-1">MSM College Jn, Kayamkulam Bypass, Kerala</p>
                  <a
                    href="https://maps.google.com/?q=MSM+College+Kayamkulam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-slate-900 text-amber-400 text-xs font-bold hover:bg-slate-800 transition-colors"
                  >
                    <span>Get Turn-by-Turn Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Inquiry Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-sm h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-600">Fast Enrollment</p>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950">Quick Batch Inquiry & Consultation</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
                  Fill in your details below and our chief training instructor will call you back within 30 minutes with fee details and available driving slots.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 my-6">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-emerald-950">Inquiry Received Successfully!</h4>
                    <p className="text-sm text-emerald-800 max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Our admissions officer has reserved your priority consultation for <strong>{formData.vehicle}</strong>. We will call you on <strong>{formData.phone}</strong> shortly.
                    </p>
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/919876543210?text=${encodeURIComponent(
                          `Hi Hans Driving School, I submitted an inquiry for ${formData.vehicle} on your website. My name is ${formData.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat Instantly on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul S. Pillai"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-slate-50/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Vehicle of Interest
                        </label>
                        <select
                          value={formData.vehicle}
                          onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-white"
                        >
                          <option>Heavy Commercial Trucks (HGV)</option>
                          <option>Passenger Buses (HPMV / Stage Carriage)</option>
                          <option>JCB & Heavy Earthmovers</option>
                          <option>Articulated Trailers (Gulf Prep)</option>
                          <option>Light Motor Vehicles (Car / LMV)</option>
                          <option>Bike & Auto-Rickshaw (3W)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Batch Time
                      </label>
                      <select
                        value={formData.batchTime}
                        onChange={(e) => setFormData({ ...formData, batchTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-white"
                      >
                        <option>Early Morning (6:00 AM - 8:30 AM)</option>
                        <option>Morning (9:00 AM - 12:00 PM)</option>
                        <option>Afternoon (1:00 PM - 4:00 PM)</option>
                        <option>Evening Twilight (4:30 PM - 7:00 PM)</option>
                        <option>Weekends Only (Saturday & Sunday Intensive)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Specific Questions or License Background (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. I have held an LMV license for 1.5 years and need HGV endorsement for Gulf recruitment..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-slate-50/50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Submit Inquiry & Request Callback</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Privacy • No Spam Guarantee</span>
                </span>
                <span>Response in &lt; 30 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
