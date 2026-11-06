import React, { useState } from 'react';
import { InquiryModal } from '../components/InquiryModal';

interface AppLayoutProps {
  children: (props: { onOpenBooking: (courseName?: string, tierName?: string) => void }) => React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>();
  const [selectedTier, setSelectedTier] = useState<string | undefined>();

  const handleOpenBooking = (courseName?: string, tierName?: string) => {
    setSelectedCourse(courseName);
    setSelectedTier(tierName);
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      {children({ onOpenBooking: handleOpenBooking })}

      <InquiryModal
        key={`${selectedCourse || 'default'}-${selectedTier || 'none'}-${modalOpen}`}
        isOpen={modalOpen}
        onClose={handleCloseBooking}
        initialCourse={selectedCourse}
        initialTier={selectedTier}
      />
    </div>
  );
};
