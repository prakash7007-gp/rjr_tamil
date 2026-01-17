"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronLeft,
    Sparkles,
    Leaf,
    Clock,
    Activity,
    ArrowRight,
    X,
    Zap,
    ShieldCheck,
    Wind
} from "lucide-react";

// Helper components for missing icons (Defined first to avoid TDZ)
const DropletsIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 18a6 6 0 100-12 6 6 0 000 12z" />
    </svg>
);

const FlaskIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104l-.5 1.5M14.25 3.104l.5 1.5M4.5 9h15M6.3 16h11.4M7.2 19h9.6M9 9l1 10M15 9l-1 10" />
    </svg>
);

const CrownIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3L9 7l-5 1 4 4-1 5 6-3 6 3-1-5 4-4-5-1-3-4z" />
    </svg>
);

interface Therapy {
    id: string;
    titleTa: string;
    titleEn: string;
    shortDesc: string;
    fullDesc: string;
    image: string;
    benefits: string[];
    color: string;
    icon: ReactNode;
}

const therapies: Therapy[] = [
    {
        id: "snehavasti",
        titleTa: "சினேஹவஸ்தி",
        titleEn: "Snehavasti",
        shortDesc: "Oil or ghee enema to lubricate the colon and treat Vata disorders.",
        fullDesc: "Snehavasti is an oil or ghee enema which is very useful in lubricating the colon. It is the main therapy for all Vata disorders such as constipation, neurological ailments, back ache, gout, and arthritis. It causes colonic detoxification and helps flush out toxins from the lower body. The medicated oil stays in the body for 1-2 hours for maximum effectiveness.",
        image: "/images/streambath.JPG",
        benefits: ["Nourishes Saptha Thathu", "Vata Balance", "Colon Detox"],
        color: "bg-amber-500/10 border-amber-500/20",
        icon: <DropletsIcon className="w-6 h-6 text-amber-500" />
    },
    {
        id: "kashayavasti",
        titleTa: "கஷாய வஸ்தி",
        titleEn: "Kashaya Vasti",
        shortDesc: "Cleansing enema prepared with herbal decoctions and honey.",
        fullDesc: "A potent cleansing enema prepared with a mix of herbal decoctions, honey, and rock salt. It is highly effective for treating chronic constipation, neurological disorders, and musculoskeletal pains. It works deeply to balance the body's digestive fire and eliminate deep-rooted toxins.",
        image: "/images/therpy-1.JPG",
        benefits: ["Deep Cleansing", "Nervous System Support", "Pain Relief"],
        color: "bg-red-500/10 border-red-500/20",
        icon: <FlaskIcon className="w-6 h-6 text-red-500" />
    },
    {
        id: "shirodhara",
        titleTa: "சிரோதாரா",
        titleEn: "Shirodhara",
        shortDesc: "Continuous stream of warm medicinal oil on the forehead.",
        fullDesc: "Shirodhara involves the gentle, continuous pouring of warm medicated oil, milk, or buttermilk onto the forehead. It deeply relaxes the nervous system, cures insomnia, reduces stress, and improves concentration. It is considered one of the most divine relaxing treatments in Ayurveda.",
        image: "/images/therpy-1.JPG",
        benefits: ["Stress Relief", "Insomnia Cure", "Mental Clarity"],
        color: "bg-blue-500/10 border-blue-500/20",
        icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
        id: "abhiyangham",
        titleTa: "அப்யங்கம்",
        titleEn: "Abhiyangham",
        shortDesc: "Traditional Ayurvedic full body massage with herbal oils.",
        fullDesc: "A rhythmic and relaxing full-body massage performed by trained therapists using specialized herbal oils. It improves blood circulation, strengthens the immune system, and helps in the removal of metabolic wastes. It is essential for maintaining youthful skin and healthy muscles.",
        image: "/images/thokkanam.jpg",
        benefits: ["Blood Circulation", "Immunity Booster", "Relaxation"],
        color: "bg-emerald-500/10 border-emerald-500/20",
        icon: <Sparkles className="w-6 h-6 text-emerald-500" />
    },
    {
        id: "steambath",
        titleTa: "மூலிகை நீராவி",
        titleEn: "Herbal Steam Bath",
        shortDesc: "Sweat out toxins in a chamber of herbal vapor.",
        fullDesc: "A unique procedure where the patient is made to sit in a steam chamber filled with the vapors of rare medicinal herbs. The heat opens the skin pores, allowing the herbal properties to penetrate deeply while flushing out toxins through sweat. Excellent for skin diseases and weight loss.",
        image: "/images/streambath.JPG",
        benefits: ["Full Body Detox", "Skin Health", "Weight Management"],
        color: "bg-green-500/10 border-green-500/20",
        icon: <Wind className="w-6 h-6 text-green-500" />
    },
    {
        id: "pizhichil",
        titleTa: "பிழிச்சல்",
        titleEn: "Pizhichil",
        shortDesc: "The Royal Treatment combining Snehana and Swedana.",
        fullDesc: "Known as the 'King's Treatment', Pizhichil involves squeezing streams of warm medicated oil from a cloth over the entire body. It is highly effective for neurological disorders, muscle stiffness, and rheumatic diseases. It tones the skin and rejuvenates the entire system.",
        image: "/images/therpy-2.jpg",
        benefits: ["Muscle Strengthening", "Rejuvenation", "Anti-Aging"],
        color: "bg-purple-500/10 border-purple-500/20",
        icon: <CrownIcon className="w-6 h-6 text-purple-500" />
    },
    {
        id: "navarakizhi",
        titleTa: "நவரகிழி",
        titleEn: "Navara Kizhi",
        shortDesc: "Massage with medicated rice boluses dipped in milk.",
        fullDesc: "Navara Kizhi is a unique strengthening treatment where boluses of cooked Navara rice are dipped in a herbal decoction and warm milk, then applied across the body. It provides strength to the nerves, muscles, and bones. Highly recommended for paralysis and degenerative diseases.",
        image: "/images/varma.jpg",
        benefits: ["Nerve Strengthening", "Deep Nourishment", "Para-analysis Help"],
        color: "bg-orange-500/10 border-orange-500/20",
        icon: <Activity className="w-6 h-6 text-orange-500" />
    },
    {
        id: "colonhydro",
        titleTa: "கோலன் ஹைட்ரோ",
        titleEn: "Colonhydro Therapy",
        shortDesc: "Deep colon cleansing for ultimate detoxification.",
        fullDesc: "A safe and effective method of removing waste from the large intestine without using drugs. By introducing filtered water into the colon, waste is softened and loosened, resulting in its evacuation. This improves digestion, enhances energy levels, and clears the skin.",
        image: "/images/therpy-1.JPG",
        benefits: ["Internal Cleansing", "Improved Digestion", "Energy Boost"],
        color: "bg-cyan-500/10 border-cyan-500/20",
        icon: <ShieldCheck className="w-6 h-6 text-cyan-500" />
    }
];

export default function TherapiesPage() {
    const [selectedTherapy, setSelectedTherapy] = useState<Therapy | null>(null);

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
            {/* Dynamic Header */}
            <section className="bg-white border-b border-slate-200 pt-32 pb-16">
                <div className="container mx-auto px-6">
                    <Link href="/ipd" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#c22220] transition-colors mb-8 group">
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to IPD Department</span>
                    </Link>

                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                            Advanced <span className="text-[#c22220]">Healing</span> Modalities
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Experience our flagship IPD treatments. We blend 150 years of herbal wisdom with clinical precision to offer life-changing recovery results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bento Grid Explorer */}
            <section className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {therapies.map((therapy) => (
                        <motion.div
                            layoutId={therapy.id}
                            key={therapy.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            onClick={() => setSelectedTherapy(therapy)}
                            className={`p-8 rounded-[2rem] border ${therapy.color} cursor-pointer hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group relative overflow-hidden bg-white shadow-sm h-full flex flex-col`}
                        >
                            <div className="mb-6 w-14 h-14 rounded-2xl bg-white shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                {therapy.icon}
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">{therapy.titleTa}</h3>
                                <h4 className="text-sm font-bold text-[#c22220] uppercase tracking-widest mb-4 opacity-70">{therapy.titleEn}</h4>
                                <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-900 transition-colors">
                                    {therapy.shortDesc}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {therapy.benefits.slice(0, 2).map((benefit, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/50 border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                        {benefit}
                                    </span>
                                ))}
                            </div>

                            <div className="absolute top-8 right-8 text-slate-300 group-hover:text-[#c22220] transition-colors">
                                <ArrowRight size={20} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Detail Modal Overlay */}
            <AnimatePresence>
                {selectedTherapy && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTherapy(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl"
                        />

                        <motion.div
                            layoutId={selectedTherapy.id}
                            className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedTherapy(null)}
                                className="absolute top-8 right-8 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#c22220] hover:text-white transition-all group"
                            >
                                <X size={24} className="group-hover:rotate-90 transition-transform" />
                            </button>

                            {/* Modal Image */}
                            <div className="md:w-1/2 relative min-h-[300px] md:min-h-full overflow-hidden">
                                <Image
                                    src={selectedTherapy.image}
                                    alt={selectedTherapy.titleEn}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-12 left-12">
                                    <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                                        Clinical Excellence
                                    </div>
                                    <h2 className="text-4xl font-black text-white">{selectedTherapy.titleTa}</h2>
                                    <p className="text-xl text-white/80 italic">{selectedTherapy.titleEn}</p>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="md:w-1/2 p-8 md:p-16 overflow-y-auto">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-sm font-black text-[#c22220] uppercase tracking-[0.2em] mb-4">The Procedure</h3>
                                        <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                            {selectedTherapy.fullDesc}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-black text-[#c22220] uppercase tracking-[0.2em] mb-4">Key Benefits</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {selectedTherapy.benefits.map((benefit, i) => (
                                                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                                    <span className="font-bold text-sm text-slate-800 tracking-wide">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <button className="w-full py-5 bg-[#c22220] text-white rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl shadow-red-900/10">
                                            Request This Treatment
                                        </button>
                                        <p className="text-center mt-4 text-slate-400 text-sm"> Consultation required before all IPD therapies. </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Featured Banner */}
            <section className="container mx-auto px-6 mt-20">
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#c22220]/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="relative z-10 max-w-2xl">
                        <div className="flex items-center gap-3 mb-8">
                            <Leaf className="text-emerald-400" />
                            <span className="font-bold uppercase tracking-widest text-emerald-400">Holistic Care</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Can&apos;t find what you are looking for?</h2>
                        <p className="text-xl text-white/60 mb-12">
                            Our specialists customize treatments for every patient. Talk to us for a personalized detoxification and recovery plan.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <a href="tel:+917871111115" className="bg-[#c22220] px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all">
                                Call Consultant
                            </a>
                            <button className="border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
