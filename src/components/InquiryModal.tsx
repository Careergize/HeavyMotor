import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, MessageSquare, ShieldCheck, Truck } from 'lucide-react';
import { VEHICLE_CATEGORIES } from '../data/mockData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
  initialTier?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialCourse,
  initialTier,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: initialCourse || 'Heavy Commercial Trucks',
    batch: 'Early Morning (6:00 AM - 8:30 AM)',
    experience: 'Holding LMV License (Ready for Heavy Upgrade)',
    notes: initialTier ? `Interested in: ${initialTier}` : '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const getWhatsAppBookingLink = () => {
    const text = encodeURIComponent(
      `Hello Hans Driving School, I want to book training for:\n• Category: ${formData.category}\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Batch: ${formData.batch}\n• License Status: ${formData.experience}\n• Notes: ${formData.notes}`
    );
    return `https://wa.me/910000000000?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="bg-slate-950 text-white p-4 sm:p-6 flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-xs">
              <Truck className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white">Book Your Training Slot</h3>
              <p className="text-[11px] sm:text-xs text-amber-400 font-semibold">Hans Driving School • Kayamkulam (KL-29)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto border border-amber-300">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Training Request Confirmed!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you <strong>{formData.name}</strong>. We have registered your request for{' '}
                <strong>{formData.category}</strong>. Our chief instructor will contact you shortly to confirm batch dates.
              </p>

              <div className="pt-4 flex flex-col gap-2.5">
                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-amber-500/20 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Details Instantly via WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Vehicle Course Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm font-semibold text-slate-900 bg-white"
                >
                  {VEHICLE_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name} ({cat.shortName})
                    </option>
                  ))}
                  <option value="Gulf Trade Test Special Prep">Gulf Trade Test Special Prep (UAE / Saudi)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-slate-900 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 00000 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-slate-900 bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Batch Time
                  </label>
                  <select
                    value={formData.batch}
                    onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs font-medium text-slate-900 bg-white"
                  >
                    <option>Early Morning (6:00 AM - 8:30 AM)</option>
                    <option>Morning (9:00 AM - 12:00 PM)</option>
                    <option>Afternoon (1:00 PM - 4:00 PM)</option>
                    <option>Evening Twilight (4:30 PM - 7:00 PM)</option>
                    <option>Weekend Intensive (Sat & Sun)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Current License Status
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs font-medium text-slate-900 bg-white"
                  >
                    <option>Holding LMV Over 1 Year (Eligible for Heavy)</option>
                    <option>Fresh Learner (Applying for LMV)</option>
                    <option>Looking for Badge Endorsement only</option>
                    <option>Preparing for Gulf Trade Test</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Package or Training Requirements
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ground test prep, on-road practice, or full badge"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-slate-900 bg-slate-50/50"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md hover:shadow-amber-500/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Confirm Training Registration</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Kerala MVD KL-29 Accredited • No Advance Required For Inquiry</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
