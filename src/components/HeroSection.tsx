'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { intervalToDuration, type Duration } from 'date-fns';

const TARGET_DATE = new Date('2026-05-03T08:00:00');

export default function HeroSection() {
    const [timeLeft, setTimeLeft] = useState<Duration | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            if (now < TARGET_DATE) {
                setTimeLeft(intervalToDuration({ start: now, end: TARGET_DATE }));
            } else {
                setTimeLeft(null);
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const revealVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0, 0, 0.2, 1] as const } }
    } as const;

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-soft-bg pt-20 pb-32 px-6">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center space-y-8"
            >
                <motion.div variants={revealVariants} className="space-y-2">
                    <p className="font-display text-lg text-accent font-medium">
                        السلام عليكم ورحمة الله وبركاته
                    </p>
                    <p className="font-display text-sm tracking-[0.2em] text-accent uppercase font-medium">
                        Walimatul Khitan
                    </p>
                </motion.div>

                <motion.h2
                    variants={revealVariants}
                    className="font-display text-5xl md:text-7xl font-bold text-primary"
                >
                    Albirru Arga <br /> Ramadhan
                </motion.h2>

                <motion.div variants={revealVariants} className="h-px w-24 bg-accent" />

                <motion.p variants={revealVariants} className="text-slate-600 max-w-md italic">
                    "Memberikan doa dan restu bagi putra kami dalam melangkah menuju ketaatan dan keberkahan."
                </motion.p>

                {/* Countdown Timer */}
                <motion.div
                    variants={revealVariants}
                    className="grid grid-cols-4 gap-4 md:gap-8 mt-12"
                >
                    {[
                        { label: 'Hari', value: timeLeft?.days ?? 0 },
                        { label: 'Jam', value: timeLeft?.hours ?? 0 },
                        { label: 'Menit', value: timeLeft?.minutes ?? 0 },
                        { label: 'Detik', value: timeLeft?.seconds ?? 0 },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100 min-w-[80px] md:min-w-[100px]">
                            <span className="text-2xl md:text-3xl font-bold text-primary font-display">{item.value}</span>
                            <span className="text-[10px] md:text-xs text-accent uppercase tracking-wider font-semibold mt-1">{item.label}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Hero Image Mockup */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mt-20 w-full max-w-4xl aspect-[16/9] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative"
            >
                <img
                    src="/img/Arga1.jpeg"
                    alt="Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </motion.div>
        </section>
    );
}
