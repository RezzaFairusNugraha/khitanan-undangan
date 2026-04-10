'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

export default function EventDetails() {
    const revealVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const handleSaveToCalendar = () => {
        const event = {
            title: 'Syukuran Khitanan Albirru Arga Ramadhan',
            start: '20260503T080000',
            end: '20260503T130000',
            description: 'Acara Syukuran Khitanan putra dari Yusuf & Anita',
            location: 'Kp Pamuncatan RT 04 RW 01,Desa Gunung Masigit'
        };

        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="event" className="bg-white py-24 px-6 relative">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.div variants={revealVariants} className="space-y-4">
                            <h3 className="font-display text-4xl font-bold text-primary italic">Waktu & Lokasi</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir di acara kami.
                            </p>
                        </motion.div>

                        <motion.div variants={revealVariants} className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-primary">Hari & Tanggal</h4>
                                    <p className="text-slate-600">Minggu, 03 Mei 2026</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-primary">Waktu</h4>
                                    <p className="text-slate-600">08:00 WIB - Selesai</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-primary">Lokasi</h4>
                                    <p className="text-slate-600">Kp Pamuncatan RT 04 RW 01, Desa Gunung Masigit</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.button
                            variants={revealVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSaveToCalendar}
                            className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all"
                        >
                            <Calendar size={20} />
                            Simpan di Kalender
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
                    >
                        {/* Google Maps Placeholder */}
                        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center flex-col p-8 text-center bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop')] bg-cover grayscale opacity-30">
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                            <div className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl">
                                <MapPin className="text-accent h-12 w-12 mx-auto mb-4" />
                                <p className="text-primary font-bold mb-4">Integrasi Google Maps</p>
                                <a
                                    href="https://maps.app.goo.gl/t4rkMhukEEoUpSsM6"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-accent font-bold hover:underline"
                                >
                                    Buka di Maps <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
