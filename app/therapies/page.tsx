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
    Wind,
    CheckCircle2,
    Phone,
    Calendar
} from "lucide-react";

// Helper components for missing icons
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
    duration?: string;
    color: string;
    icon: ReactNode;
}

const therapies: Therapy[] = [
    {
        id: "snehavasti",
        titleTa: "சினேஹவஸ்தி",
        titleEn: "Snehavasti",
        shortDesc: "குடலை மென்மையாக்கி வாத நோய்களைக் குணப்படுத்தும் எண்ணெய் அல்லது நெய் எனிமா.",
        fullDesc: "சினேஹவஸ்தி என்பது எண்ணெய் அல்லது நெய் மூலம் செய்யப்படும் எனிமா சிகிச்சை. இது பெருங்குடலை மென்மையாக்க மிகவும் பயனுள்ளதாக இருக்கும். இது மலச்சிக்கல், நரம்பியல் கோளாறுகள், முதுகுவலி, கீல்வாதம் மற்றும் மூட்டுவலி போன்ற அனைத்து வாத நோய்களுக்கும் முக்கிய சிகிச்சையாகும். இது குடல் நச்சுகளை நீக்கி, உடலின் கீழ் பகுதியில் உள்ள கழிவுகளை வெளியேற்ற உதவுகிறது. அதிகபட்ச பலனுக்காக மூலிகை எண்ணெய் உடலில் 1-2 மணி நேரம் தங்கியிருக்கும்.",
        image: "/images/snehavasti.webp",
        benefits: ["சப்த தாதுக்களுக்கு ஊட்டம்", "வாத சமநிலை", "குடல் நச்சு நீக்கம்"],
        duration: "45-60 நிமிடங்கள்",
        color: "from-amber-50 to-amber-100/50",
        icon: <DropletsIcon className="w-6 h-6 text-amber-600" />
    },
    {
        id: "kashayavasti",
        titleTa: "கஷாய வஸ்தி",
        titleEn: "Kashaya Vasti",
        shortDesc: "மூலிகை கஷாயம் மற்றும் தேன் கலந்த சுத்தம் செய்யும் எனிமா.",
        fullDesc: "மூலிகை கஷாயம், தேன் மற்றும் இந்துப்பு கலந்த கலவையால் தயாரிக்கப்படும் சக்திவாய்ந்த குடல் சுத்தம் செய்யும் எனிமா. இது நாள்பட்ட மலச்சிக்கல், நரம்பியல் கோளாறுகள், தசை மற்றும் எலும்பு வலிகளுக்கு மிகவும் பயனுள்ளதாக இருக்கும். இது உடலின் ஜீரண சக்தியை சமநிலைப்படுத்தி, ஆழமான நச்சுகளை வெளியேற்றுகிறது.",
        image: "/images/kasyavasti.jpg",
        benefits: ["ஆழமான சுத்தம்", "நரம்பு மண்டலம்", "வலி நிவாரணம்"],
        duration: "30-45 நிமிடங்கள்",
        color: "from-red-50 to-red-100/50",
        icon: <FlaskIcon className="w-6 h-6 text-red-600" />
    },
    {
        id: "shirodhara",
        titleTa: "சிரோதாரா",
        titleEn: "Shirodhara",
        shortDesc: "நெற்றியில் தொடர்ச்சியாக மூலிகை எண்ணெய் ஊற்றும் சிகிச்சை.",
        fullDesc: "சிரோதாரா என்பது நெற்றியில் வெதுவெதுப்பான மூலிகை எண்ணெய், பால் அல்லது மோரை மெதுவாகவும் தொடர்ச்சியாகவும் ஊற்றுவதாகும். இது நரம்பு மண்டலத்தை ஆழமாக தளர்த்துகிறது, தூக்கமின்மையை குணப்படுத்துகிறது, மன அழுத்தத்தை குறைக்கிறது மற்றும் கவனத்தை மேம்படுத்துகிறது. ஆயுர்வேதத்தில் இது ஒரு தெய்வீகமான சிகிச்சையாக கருதப்படுகிறது.",
        image: "/images/siordhara.avif",
        benefits: ["மன அழுத்த நிவாரணம்", "தூக்கமின்மை தீர்வு", "மனத் தெளிவு"],
        duration: "60-90 நிமிடங்கள்",
        color: "from-blue-50 to-blue-100/50",
        icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
        id: "abhiyangham",
        titleTa: "அப்யங்கம்",
        titleEn: "Abhiyangham",
        shortDesc: "மூலிகை எண்ணெய்களுடன் கூடிய பாரம்பரிய ஆயுர்வேத முழு உடல் மசாஜ்.",
        fullDesc: "சிறப்பு மூலிகை எண்ணெய்களைப் பயன்படுத்தி பயிற்சி பெற்ற சிகிச்சையாளர்களால் செய்யப்படும் முழு உடல் மசாஜ். இது இரத்த ஓட்டத்தை மேம்படுத்துகிறது, நோய் எதிர்ப்பு சக்தியை பலப்படுத்துகிறது மற்றும் வளர்சிதை மாற்ற கழிவுகளை வெளியேற்ற உதவுகிறது. இளமையான சருமம் மற்றும் ஆரோக்கியமான தசைகளை பராமரிக்க இது அவசியம்.",
        image: "/images/thokkanam.jpg",
        benefits: ["இரத்த ஓட்டம்", "நோய் எதிர்ப்பு சக்தி", "உடல் தளர்வு"],
        duration: "45-60 நிமிடங்கள்",
        color: "from-emerald-50 to-emerald-100/50",
        icon: <Sparkles className="w-6 h-6 text-emerald-600" />
    },
    {
        id: "steambath",
        titleTa: "மூலிகை நீராவி",
        titleEn: "Herbal Steam Bath",
        shortDesc: "மூலிகை நீராவி மூலம் உடலில் உள்ள நச்சுகளை வியர்வை வழியாக வெளியேற்றுதல்.",
        fullDesc: "அரிதான மூலிகைகளின் நீராவி நிரப்பப்பட்ட அறையில் நோயாளி அமர வைக்கப்படும் ஒரு தனித்துவமான செயல்முறை. வெப்பம் தோல் துளைகளைத் திறந்து, மூலிகை குணங்களை ஆழமாக ஊடுருவச் செய்கிறது, அதே நேரத்தில் வியர்வை மூலம் நச்சுகளை வெளியேற்றுகிறது. தோல் நோய்கள் மற்றும் உடல் எடையைக் குறைக்க இது சிறந்தது.",
        image: "/images/herbal-bath.jpg",
        benefits: ["முழு உடல் நச்சு நீக்கம்", "சரும ஆரோக்கியம்", "எடை மேலாண்மை"],
        duration: "20-30 நிமிடங்கள்",
        color: "from-green-50 to-green-100/50",
        icon: <Wind className="w-6 h-6 text-green-600" />
    },
    {
        id: "pizhichil",
        titleTa: "பிழிச்சல்",
        titleEn: "Pizhichil",
        shortDesc: "சினேஹனா மற்றும் ஸ்வேதனாவை இணைக்கும் ராஜ சிகிச்சை.",
        fullDesc: "'மன்னர்களின் சிகிச்சை' என்று அழைக்கப்படும் பிழிச்சல், உடல் முழுவதும் ஒரு துணியிலிருந்து வெதுவெதுப்பான மருத்துவ எண்ணெயை ஊற்றுவதாகும். இது நரம்பியல் கோளாறுகள், தசை விறைப்பு மற்றும் வாத நோய்களுக்கு மிகவும் பயனுள்ளதாக இருக்கும். இது சருமத்தை மெருகூட்டுகிறது மற்றும் முழு உடலையும் புத்துணர்ச்சியூட்டுகிறது.",
        image: "/images/pizhichil.webp",
        benefits: ["தசை வலுவூட்டல்", "புத்துணர்ச்சி", "முதுமைத் தோற்றத் தடுப்பு"],
        duration: "60-75 நிமிடங்கள்",
        color: "from-purple-50 to-purple-100/50",
        icon: <CrownIcon className="w-6 h-6 text-purple-600" />
    },
    {
        id: "navarakizhi",
        titleTa: "நவரகிழி",
        titleEn: "Navara Kizhi",
        shortDesc: "மூலிகை பாலில் முக்கப்பட்ட நவரை அரிசி முடிச்சுகளைக் கொண்டு மசாஜ் செய்தல்.",
        fullDesc: "நவரகிழி என்பது மூலிகை கஷாயம் மற்றும் வெதுவெதுப்பான பாலில் வேகவைத்த நவரை அரிசி முடிச்சுகளைக் கொண்டு உடல் முழுவதும் ஒத்தடம் கொடுக்கும் சிகிச்சையாகும். இது நரம்புகள், தசைகள் மற்றும் எலும்புகளுக்கு வலிமை அளிக்கிறது. பக்கவாதம் மற்றும் நரம்பு தளர்ச்சி நோய்களுக்கு மிகவும் பரிந்துரைக்கப்படுகிறது.",
        image: "/images/varma.jpg",
        benefits: ["நரம்பு வலுவூட்டல்", "ஆழமான ஊட்டம்", "பக்கவாத உதவி"],
        duration: "45-60 நிமிடங்கள்",
        color: "from-orange-50 to-orange-100/50",
        icon: <Activity className="w-6 h-6 text-orange-600" />
    },
    {
        id: "colonhydro",
        titleTa: "கோலன் ஹைட்ரோ",
        titleEn: "Colonhydro Therapy",
        shortDesc: "முழுமையான நச்சு நீக்கத்திற்கான ஆழமான குடல் சுத்தம்.",
        fullDesc: "மருந்துகள் பயன்படுத்தாமல் பெருங்குடலில் இருந்து கழிவுகளை அகற்றும் பாதுகாப்பான மற்றும் பயனுள்ள முறை. சுத்திகரிக்கப்பட்ட நீரை குடலுக்குள் செலுத்துவதன் மூலம், கழிவுகள் மென்மையாக்கப்பட்டு வெளியேற்றப்படுகின்றன. இது செரிமானத்தை மேம்படுத்துகிறது, ஆற்றல் நிலைகளை அதிகரிக்கிறது மற்றும் சருமத்தை தெளிவாக்குகிறது.",
        image: "/images/colon1.jpg",
        benefits: ["உட்புற சுத்தம்", "செரிமான மேம்பாடு", "ஆற்றல் அதிகரிப்பு"],
        duration: "30-45 நிமிடங்கள்",
        color: "from-cyan-50 to-cyan-100/50",
        icon: <ShieldCheck className="w-6 h-6 text-cyan-600" />
    }
];

export default function TherapiesPage() {
    const [selectedTherapy, setSelectedTherapy] = useState<Therapy | null>(null);

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Hero Header Section */}
            <section className="relative bg-gradient-to-br from-[#c22220] via-[#991b1b] to-[#7f1d1d] pt-32 pb-24 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-6 relative z-10">
                    <Link
                        href="/ipd"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">ஐபிடி பிரிவுக்கு திரும்ப</span>
                    </Link>

                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <Leaf className="w-4 h-4 text-emerald-300" />
                                <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                                    பாரம்பரிய சிகிச்சைகள்
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                                மேம்பட்ட <span className="text-yellow-400">சிகிச்சை</span> முறைகள்
                            </h1>

                            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl font-light">
                                150 ஆண்டுகால மூலிகை மருத்துவ பாரம்பரியத்துடன் நவீன அறிவியலை இணைத்து,
                                உங்கள் ஆரோக்கியத்திற்கான முழுமையான தீர்வுகளை வழங்குகிறோம்.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-8">
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                                    <span className="text-white font-medium">100% இயற்கை</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                                    <span className="text-white font-medium">அனுபவம் வாய்ந்த மருத்துவர்கள்</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                                    <span className="text-white font-medium">நிரூபிக்கப்பட்ட முடிவுகள்</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Therapies Grid Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        எங்கள் சிறப்பு சிகிச்சைகள்
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        ஒவ்வொரு சிகிச்சையும் உங்கள் குறிப்பிட்ட தேவைகளுக்கு ஏற்ப வடிவமைக்கப்பட்டுள்ளது
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {therapies.map((therapy, index) => (
                        <motion.div
                            key={therapy.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedTherapy(therapy)}
                            className="group cursor-pointer"
                        >
                            <div className={`relative h-full bg-gradient-to-br ${therapy.color} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50`}>
                                {/* Card Header with Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={therapy.image}
                                        alt={therapy.titleEn}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                    {/* Icon Badge */}
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {therapy.icon}
                                    </div>

                                    {/* Duration Badge */}
                                    {therapy.duration && (
                                        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                            <Clock className="w-4 h-4 text-slate-600" />
                                            <span className="text-xs font-bold text-slate-700">{therapy.duration}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                                        {therapy.titleTa}
                                    </h3>
                                    <p className="text-sm font-semibold text-[#c22220] uppercase tracking-wider mb-4">
                                        {therapy.titleEn}
                                    </p>

                                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                                        {therapy.shortDesc}
                                    </p>

                                    {/* Benefits Pills */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {therapy.benefits.slice(0, 2).map((benefit, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700 border border-slate-200"
                                            >
                                                {benefit}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More Button */}
                                    <button className="w-full mt-4 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-[#c22220] transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                                        <span>மேலும் அறிக</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedTherapy && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTherapy(null)}
                            className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedTherapy(null)}
                                className="absolute top-6 right-6 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#c22220] hover:text-white transition-all group"
                            >
                                <X size={24} className="group-hover:rotate-90 transition-transform" />
                            </button>

                            {/* Modal Image Side */}
                            <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full">
                                <Image
                                    src={selectedTherapy.image}
                                    alt={selectedTherapy.titleEn}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider mb-4">
                                        <Sparkles className="w-4 h-4" />
                                        <span>சிறப்பு சிகிச்சை</span>
                                    </div>
                                    <h2 className="text-4xl font-black text-white mb-2">{selectedTherapy.titleTa}</h2>
                                    <p className="text-xl text-white/90 italic font-light">{selectedTherapy.titleEn}</p>

                                    {selectedTherapy.duration && (
                                        <div className="flex items-center gap-2 mt-4 text-white/80">
                                            <Clock className="w-5 h-5" />
                                            <span className="font-semibold">{selectedTherapy.duration}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Modal Content Side */}
                            <div className="lg:w-3/5 p-8 lg:p-12 overflow-y-auto">
                                <div className="space-y-8">
                                    {/* Description */}
                                    <div>
                                        <h3 className="text-sm font-black text-[#c22220] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                            <div className="w-8 h-0.5 bg-[#c22220]" />
                                            சிகிச்சை விவரம்
                                        </h3>
                                        <p className="text-lg text-slate-700 leading-relaxed">
                                            {selectedTherapy.fullDesc}
                                        </p>
                                    </div>

                                    {/* Benefits */}
                                    <div>
                                        <h3 className="text-sm font-black text-[#c22220] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                            <div className="w-8 h-0.5 bg-[#c22220]" />
                                            முக்கிய நன்மைகள்
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {selectedTherapy.benefits.map((benefit, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/50"
                                                >
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                                    <span className="font-semibold text-sm text-slate-800">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="pt-6 space-y-4">
                                        <button className="w-full py-4 bg-gradient-to-r from-[#c22220] to-[#991b1b] text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 flex items-center justify-center gap-3 group">
                                            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            <span>இந்த சிகிச்சையை முன்பதிவு செய்யவும்</span>
                                        </button>

                                        <a
                                            href="tel:+917871111115"
                                            className="w-full py-4 bg-slate-100 text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-3 group"
                                        >
                                            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            <span>மருத்துவரை அழைக்கவும்</span>
                                        </a>

                                        <p className="text-center text-slate-500 text-sm">
                                            அனைத்து சிகிச்சைகளுக்கும் மருத்துவ ஆலோசனை அவசியம்
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-12 md:p-20 overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#c22220]/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Leaf className="w-4 h-4 text-emerald-400" />
                            <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                                தனிப்பயனாக்கப்பட்ட பராமரிப்பு
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            உங்களுக்கு ஏற்ற சிகிச்சையை கண்டறியுங்கள்
                        </h2>

                        <p className="text-xl text-white/70 mb-10 leading-relaxed">
                            எங்கள் மருத்துவ நிபுணர்கள் உங்கள் குறிப்பிட்ட தேவைகளுக்கு ஏற்ப
                            தனிப்பயனாக்கப்பட்ட சிகிச்சை திட்டத்தை உருவாக்குவார்கள்
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+917871111115"
                                className="inline-flex items-center justify-center gap-3 bg-[#c22220] hover:bg-[#991b1b] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/30"
                            >
                                <Phone className="w-5 h-5" />
                                <span>உடனடி ஆலோசனை</span>
                            </a>

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
                            >
                                <Calendar className="w-5 h-5" />
                                <span>முன்பதிவு செய்யவும்</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
