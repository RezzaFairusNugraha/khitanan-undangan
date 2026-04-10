'use client';

import { useState, useEffect, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import LandingPage from '@/components/LandingPage';
import HeroSection from '@/components/HeroSection';
import ProfileSection from '@/components/ProfileSection';
import GallerySection from '@/components/GallerySection';
import EventDetails from '@/components/EventDetails';

function InvitationContent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Lock scroll when landing page is active
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <main className="relative min-h-screen bg-soft-bg overflow-x-hidden">
      <AnimatePresence>
        {!isOpen && (
          <LandingPage key="landing" onOpen={() => setIsOpen(true)} />
        )}
      </AnimatePresence>

      <div className={isOpen ? 'block' : 'hidden'}>
        <HeroSection />
        <ProfileSection />
        <EventDetails />
        <GallerySection />

        {/* Footer */}
        <footer className="py-12 bg-primary text-center text-white/60 text-sm">
          <p>© 2026 Khitanan Albirru Arga Ramadhan. All rights reserved.</p>
          <p className="mt-2 text-accent/80 font-medium tracking-widest uppercase text-[10px]">
            Created with Rezza Fairus Nugraha
          </p>
        </footer>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center bg-primary text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    }>
      <InvitationContent />
    </Suspense>
  );
}
