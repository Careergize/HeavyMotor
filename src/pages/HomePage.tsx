import React, { useState } from 'react';
import { BrandNavbar } from '../components/BrandNavbar';
import { TemplateHeroBanner } from '../components/TemplateHeroBanner';
import { TemplateCategoryGrid } from '../components/TemplateCategoryGrid';
import { TemplateRecommendedGrid } from '../components/TemplateRecommendedGrid';
import { TemplateTrustRow } from '../components/TemplateTrustRow';
import { TemplateCourseDetails } from '../components/TemplateCourseDetails';
import { TemplatePathwaySection } from '../components/TemplatePathwaySection';
import { TemplateTestimonialsSection } from '../components/TemplateTestimonialsSection';
import { TemplateFaqCockpit } from '../components/TemplateFaqCockpit';
import { TemplateLocationContact } from '../components/TemplateLocationContact';
import { TemplateFooter } from '../components/TemplateFooter';
import { TemplateBottomNav } from '../components/TemplateBottomNav';
import type { VehicleCategoryId } from '../types';

interface HomePageProps {
  onOpenBooking: (courseName?: string, tierName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategoryId | 'all'>('heavy-truck');
  const [activeBottomTab, setActiveBottomTab] = useState<'home' | 'courses' | 'support' | 'account'>('home');

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20 sm:pb-0">
      {/* 1. Proper Brand Navbar with Logo, Animated Hover Links & Book Button */}
      <BrandNavbar onOpenBooking={onOpenBooking} />

      <main className="space-y-2">
        {/* 2. Hero Deep Navy Gradient Banner Card with Dual Buttons & Carousel Dots */}
        <TemplateHeroBanner onOpenBooking={onOpenBooking} />

        {/* 3. Popular Services / Vehicle Categories 4x2 Grid */}
        <div id="courses">
          <TemplateCategoryGrid
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onOpenBooking={() => onOpenBooking()}
          />
        </div>

        {/* 4. Recommended for You Cards with Bestseller Badges & Book Now Buttons */}
        <TemplateRecommendedGrid
          selectedCategory={selectedCategory}
          onOpenBooking={onOpenBooking}
        />

        {/* 6. 4-Item Trust Badges Row (Matches screenshot bottom strip) */}
        <TemplateTrustRow />

        {/* 7. In-Depth Detailed Course Tiers & Syllabus (Ground, Road, Complete) */}
        <TemplateCourseDetails
          selectedCategory={selectedCategory}
          onOpenBooking={onOpenBooking}
        />

        {/* 8. Why Choose Hans & 4-Step License Roadmap */}
        <div id="why-hans">
          <TemplatePathwaySection onOpenBooking={() => onOpenBooking()} />
        </div>

        {/* 9. Student Reviews & Career Success */}
        <div id="testimonials">
          <TemplateTestimonialsSection />
        </div>

        {/* 10. FAQs & Cockpit Evaluation Card */}
        <div id="faqs">
          <TemplateFaqCockpit />
        </div>

        {/* 11. Office & Ground Location + Instant Callback */}
        <TemplateLocationContact />
      </main>

      {/* 12. Clean Statutory Footer */}
      <TemplateFooter />

      {/* 13. Bottom App Navigation Bar (Matches screenshot navigation bar) */}
      <TemplateBottomNav
        activeTab={activeBottomTab}
        onTabChange={setActiveBottomTab}
        onOpenBooking={() => onOpenBooking()}
      />
    </div>
  );
};
