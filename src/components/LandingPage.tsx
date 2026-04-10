'use client';

import { motion } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface LandingPageProps {
    onOpen: () => void;
}

export default function LandingPage({ onOpen }: LandingPageProps) {
    const searchParams = useSearchParams();
    const guestName = searchParams.get('to') || 'Tamu Undangan';

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary p-6 text-center"
        >
            {/* Background Pattern/Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center gap-6"
            >
                <p className="font-display text-sm tracking-[0.3em] text-accent uppercase">
                    Walimatul Khitan
                </p>

                <h1 className="font-display text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                    Albirru Arga <br /> Ramadhan
                </h1>

                <div className="mt-8 space-y-2">
                    <p className="text-blue-100/80 text-sm">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
                    <h2 className="text-2xl font-semibold text-white">{guestName}</h2>
                </div>

                <p className="mt-4 text-sm text-blue-100/60 italic max-w-xs">
                    Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir di acara khitanan putra kami.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpen}
                    className="mt-8 flex items-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-white shadow-xl transition-all hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                >
                    <MailOpen className="h-5 w-5" />
                    Buka Undangan
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
