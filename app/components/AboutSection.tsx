"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AboutSectionProps {
    data: {
        title: string;
        text: string;
    };
}

export default function AboutSection({ data }: AboutSectionProps) {
    return (
        <section className="relative py-16 pt-10 overflow-hidden">
            {/* Creative Header */}
            <div className="text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block relative"
                >
                    <h4 className="text-4xl md:text-4xl font-black text-[#C22220] tracking-tight leading-tight">
                        எங்களைப் <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c22220] to-[#ff4d4d]">பற்றி</span>
                    </h4>
                    <div className="h-2 w-full bg-gradient-to-r from-transparent via-[#c22220] to-transparent mt-4 opacity-30 rounded-full" />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto font-medium"
                >
                    150 ஆண்டுகளுக்கும் மேற்பட்ட RJR, இன்று 102-க்கும் மேற்பட்ட கிளைகளுடன் தென்னிந்தியா முழுவதும் விரிவடைந்துள்ளது.
                </motion.p>
            </div>
            {/* 🌿 BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                {/* Overlay removed as requested by user's last edit, 
            or can be added back if text contrast is low. 
            Currently keeping it clean as per last intention. */}
                <div className="absolute inset-0"></div>
            </div>

            <div className="relative container mx-auto px-4 z-10">
                {/* MAIN CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="overflow-hidden bg-[#C22220] text-white shadow-2xl
                     flex flex-col lg:flex-row"
                >
                    {/* LEFT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative w-full lg:w-1/2 h-[300px] lg:h-auto"
                    >
                        <Image
                            src="/images/exterior.jpg"
                            alt="Hospital exterior"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center"
                    >
                        {/* TITLE */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-yellow-300 text-sm font-bold tracking-wide mb-3">
                                ABOUT RJR HERBAL HOSPITALS
                            </span>
                            <h2 className="text-2xl lg:text-4xl font-bold leading-snug">
                                RJR மருத்துவமனையின் <br /> <span className="text-yellow-400">150 ஆண்டு கால</span> சேவை
                            </h2>
                        </motion.div>

                        {/* DESCRIPTION */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="text-lg leading-relaxed font-normal"
                        >
                            {data.text}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-lg leading-relaxed opacity-90 mt-4 font-normal "
                        >
                            ஐந்தாம் தலைமுறைக் குடும்பமாக, 150 ஆண்டுகளுக்கும் மேலான பாரம்பரிய
                            அறிவை நாங்கள் பாதுகாத்து வருகிறோம். 2008-ல் <br />டாக்டர். S.R.ஜெயதுரை
                            அவர்களால் சென்னையில் தொடங்கப்பட்ட RJR, இன்று 102-க்கும் மேற்பட்ட
                            கிளைகளுடன் தென்னிந்தியா முழுவதும் விரிவடைந்துள்ளது.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="text-yellow-400 leading-relaxed font-bold mt-4 mb-6"
                        >
                            “நோயில்லாத சமுதாயத்தை உருவாக்குவதே”. - RJR-யின் நோக்கம்
                        </motion.p>

                        <div><motion.a
                            href="/about"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -3, scale: 1.05 }}
                            transition={{ duration: 0.4, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="inline-block bg-yellow-400 text-black font-semibold
                         px-6 py-3 rounded-lg shadow-lg"
                        >
                            மேலும் அறிக →
                        </motion.a></div>  {/* BUTTON */}

                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
