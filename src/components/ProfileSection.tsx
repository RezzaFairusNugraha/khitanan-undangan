'use client';

import { motion } from 'framer-motion';

export default function ProfileSection() {
    const revealVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section className="bg-white py-24 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <motion.div variants={revealVariants} className="inline-block px-4 py-1 bg-accent/10 rounded-full text-accent text-xs font-bold tracking-widest uppercase mb-4">
                        Assalamu’alaikum Warahmatullahi Wabarakatuh
                    </motion.div>
                    <motion.p variants={revealVariants} className="text-slate-600 leading-relaxed text-sm md:text-base">
                        Dengan penuh rasa syukur kepada Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara syukuran khitanan putra kami:
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <motion.h3 variants={revealVariants} className="font-display text-4xl md:text-5xl font-bold text-primary">
                        Albirru Arga Ramadhan
                    </motion.h3>

                    <motion.div variants={revealVariants} className="flex items-center justify-center gap-4">
                        <div className="h-px flex-1 max-w-[60px] bg-slate-200" />
                        <p className="text-slate-500 font-medium">Putra dari:</p>
                        <div className="h-px flex-1 max-w-[60px] bg-slate-200" />
                    </motion.div>

                    <motion.div variants={revealVariants} className="space-y-1">
                        <p className="text-xl md:text-2xl font-display font-semibold text-slate-800">Bpk. Yusuf Syawali Hafidriawan</p>
                        <p className="text-slate-400">&</p>
                        <p className="text-xl md:text-2xl font-display font-semibold text-slate-800">Ibu Anita Purnamasari</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="pt-12"
                >
                    <motion.div variants={revealVariants} className="max-w-md mx-auto p-6 border border-accent/20 rounded-2xl bg-slate-50 relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 text-accent text-2xl">“</div>
                        <p className="italic text-slate-500 text-sm leading-8">
                            "Ya Allah, muliakanlah putra kami ini, kuatkanlah ketaatannya, dan jadikanlah dia anak yang sholeh, berbakti kepada orang tua, agama, dan nusa bangsa."
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
