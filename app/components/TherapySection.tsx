"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface Therapy {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    color: string;
}

interface TherapySectionProps {
    data: Therapy[];
}

export default function TherapySection({ data }: TherapySectionProps) {
    const [activeId, setActiveId] = useState<string | null>(data[0]?.id || null);

    if (!data || data.length === 0) return null;

    return (
        <section className="py-24 relative overflow-hidden min-h-screen flex flex-col justify-center">

            {/* Professional Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/therapy-bg-new.png"
                    alt="Therapy Background"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                {/* Premium Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a18]/95 via-[#0d2520]/90 to-[#122a25]/85" />
                {/* Subtle Accent Gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(194,34,32,0.08),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.06),transparent_60%)]" />
            </div>

            {/* Background Ambience - Refined */}
            <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute top-0 left-0 w-full h-[250px] bg-gradient-to-b from-[#0a1a18] via-[#0a1a18]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-[#0a1a18] via-[#0a1a18]/50 to-transparent" />
            </div>

            <div className="max-w-[1600px] mx-auto px-4 md:px-6 relative z-20">

                {/* Header */}
                <div className="mb-12 md:mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-emerald-500/20 pb-8 backdrop-blur-md bg-white/[0.03] p-6 md:p-8 rounded-3xl border border-white/10">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400/80 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4"
                        >
                            <Sparkles size={12} className="text-emerald-400" />
                            <span>Wellness Center</span>
                        </motion.div>
                        <h2 className="text-3xl md:text-6xl font-black text-white leading-tight">
                            தெரபி<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300"> சிகிச்சைகள்</span>
                        </h2>
                    </div>
                    <p className="text-white/60 max-w-md text-sm md:text-base leading-relaxed text-left">
                        எங்களது தெரபி சிகிச்சைகள் ரத்த ஓட்டத்தைச் சீராக்கி, உடல் தசை நார்களை வலிமையாக்கி, புத்துணர்ச்சி அளிக்கிறது.இயற்கை முறைகளையும் பாரம்பரிய அறிவையும் அடிப்படையாகக் கொண்டு, முழுமையான நலனைக் கிடைக்கச் செய்வதே எங்களின் முக்கிய நோக்கமாகும்.
                    </p>
                </div>

                {/* Interactive Accordion */}
                <div className="flex flex-col md:flex-row gap-4 h-[700px] md:h-[600px] lg:h-[550px]">
                    {data.map((therapy) => (
                        <TherapyCard
                            key={therapy.id}
                            therapy={therapy}
                            isActive={activeId === therapy.id}
                            onClick={() => setActiveId(therapy.id)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

function TherapyCard({
    therapy,
    isActive,
    onClick,
}: {
    therapy: Therapy;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <motion.div
            layout
            onClick={onClick}
            initial={false}
            animate={{
                flex: isActive ? 4 : 1,
                opacity: isActive ? 1 : 0.6,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
            className={`relative rounded-3xl overflow-hidden cursor-pointer group transition-all duration-500 border border-white/10 ${isActive ? "ring-2 ring-emerald-500/40 shadow-2xl shadow-emerald-500/10" : "hover:flex-[1.5] hover:opacity-100"
                }`}
        >
            {/* Background Image */}
            <Image
                src={therapy.image}
                alt={therapy.title}
                fill
                className={`object-cover transition-transform duration-1000 ${isActive ? "scale-105" : "scale-110 group-hover:scale-105"
                    }`}
            />

            {/* Dark Gradient Overlay */}
            <div className={`absolute inset-0  duration-500 ${isActive ? 'opacity-90' : 'opacity-70 group-hover:opacity-40'}`} />

            {/* Content */}
            <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
                <motion.div layout className="relative z-10">

                    {/* Mobile/Inactive Title */}
                    <div className={`${isActive ? 'mb-4' : 'md:hidden'}`}>
                        <h3 className={`font-bold text-white transition-all duration-300 ${isActive ? 'text-xl md:text-3xl mb-1' : 'text-lg text-center md:text-left'}`}>
                            {therapy.title}
                        </h3>
                        {isActive && (
                            <p className="text-emerald-400 font-semibold text-[10px] md:text-xs uppercase tracking-[0.2em]">
                                {therapy.subtitle}
                            </p>
                        )}
                    </div>

                    {/* Desktop Vertical Text when inactive */}
                    {!isActive && (
                        <div className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 w-max">
                            <h3 className="text-xl font-bold text-white/80 whitespace-nowrap -rotate-90 origin-center transition-all group-hover:text-white">
                                {therapy.title}
                            </h3>
                        </div>
                    )}

                    {/* Active Content */}
                    <AnimatePresence mode="wait">
                        {isActive && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <p className="text-white/80 text-xs md:text-base leading-relaxed max-w-xl border-l-2 border-emerald-500 pl-4 italic">
                                    {therapy.description}
                                </p>

                                <Link
                                    href={`/therapies`}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 border border-emerald-500/30 rounded-full text-white text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all group/btn"
                                >
                                    <span>மேலும் அறிக</span>
                                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Number Indicator */}
            {isActive && (
                <div className="absolute top-4 right-6 text-emerald-500/20 font-black text-6xl md:text-8xl leading-none select-none pointer-events-none">
                    {therapy.id.replace('t', '0')}
                </div>
            )}

        </motion.div>
    );
}
