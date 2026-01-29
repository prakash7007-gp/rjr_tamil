"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Users2, Globe2, Sparkles } from "lucide-react";
import BranchesSection from "../components/BranchesSection";

export default function BranchesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 🏛️ PREMIUM BRANCHES HERO SECTION */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#c22220] via-[#8B0000] to-[#4a0808]">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 z-0">
                    {/* Large Abstract Circles */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                            rotate: [0, 90, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/10 blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.1, 0.15, 0.1],
                            rotate: [0, -90, 0]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-yellow-400/5 blur-[120px]"
                    />

                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.05] bg-center mt-20" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-white text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Animated Badge */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 w-fit px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.3em] mx-auto shadow-2xl"
                        >
                            <Globe2 size={16} className="text-yellow-400 animate-pulse" />
                            <span>South India's Largest Network</span>
                            <Sparkles size={14} className="text-yellow-400" />
                        </motion.div>

                        {/* Main Title */}
                        <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                            எங்கள் <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200">கிளைகள்</span>
                        </h1>

                        {/* Subtext */}
                        <p className="text-xl md:text-3xl text-white/90 leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md italic">
                            "தென்னிந்தியா முழுவதும் 102+ கிளைகளுடன் <br className="hidden md:block" /> உங்கள் ஆரோக்கியத்திற்காக நாங்கள் இருக்கிறோம்."
                        </p>

                        {/* Stats Overview */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto"
                        >
                            {[
                                { icon: <MapPin size={24} />, label: "States", val: "6+" },
                                { icon: <Building2 size={24} />, label: "Branches", val: "102+" },
                                { icon: <Users2 size={24} />, label: "Doctors", val: "150+" },
                                { icon: <Sparkles size={24} />, label: "Legacy", val: "150Y" },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="text-yellow-400 mb-2">{stat.icon}</div>
                                    <div className="text-2xl font-black">{stat.val}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Curve/Wave effect */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                    <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.41,167.73,131.14,257.6,115.82,284.28,111,308,103,321.39,56.44Z" className="fill-white"></path>
                    </svg>
                </div>
            </section>

            {/* 📍 BRANCHES LIST SECTION */}
            <div className="py-20 lg:py-32">
                <BranchesSection />
            </div>

        </main>
    );
}
