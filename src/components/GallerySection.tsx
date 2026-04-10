'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const PHOTOS = [
    '/img/Arga2.jpeg',
    '/img/Arga3.jpeg',
    '/img/Arga4.jpeg',
    '/img/Arga5.jpeg',
    '/img/Arga6.jpeg',
    '/img/Arga7.jpeg',
    '/img/Arga8.jpeg',
    '/img/Arga9.jpeg',
    '/img/Arga10.jpeg',
];

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="bg-soft-bg py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl font-bold text-primary"
                    >
                        Galeri Foto
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500"
                    >
                        Momen bahagia pertumbuhan putra kami
                    </motion.p>
                </div>

                {/* Masonry-like Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {PHOTOS.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedImage(src)}
                            className="relative rounded-3xl overflow-hidden cursor-zoom-in shadow-xl bg-slate-200 group"
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-8 right-8 text-white p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </motion.button>
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            src={selectedImage}
                            alt="Full size"
                            className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
