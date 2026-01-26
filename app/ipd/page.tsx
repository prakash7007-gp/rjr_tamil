"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    Bed,
    Home,
    Stethoscope,
    HeartPulse,
    ShieldCheck,
    Leaf,
    Users,
    Camera,
    ChevronRight,
    ArrowRight,
    Clock,
    Utensils
} from "lucide-react";
import Link from "next/link";

const facilities = [
    {
        icon: <Bed className="w-6 h-6" />,
        title: "20 Beds Capacity",
        desc: "Spacious and well-maintained beds for patient comfort.",
        titleTa: "20 படுக்கை வசதி"
    },
    {
        icon: <Home className="w-6 h-6" />,
        title: "Individual Rooms",
        desc: "Private separate rooms available for personalized care.",
        titleTa: "தனி அறை வசதி"
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Hygienic Infrastructure",
        desc: "Strict hygiene protocols and clean environment.",
        titleTa: "சுத்தமான உள்கட்டமைப்பு"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Expert Therapists",
        desc: "Experienced male and female qualified therapists.",
        titleTa: "நிபுணத்துவ தெரபிஸ்டுகள்"
    },
    {
        icon: <Utensils className="w-6 h-6" />,
        title: "Diet Management",
        desc: "In-house kitchen providing nutritious, recovery-focused diet.",
        titleTa: "சத்தான உணவு முறை"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "24/7 Monitoring",
        desc: "Vitals monitoring and round-the-clock patient care.",
        titleTa: "24/7 கண்காணிப்பு"
    }
];

const treatments = [
    "Snehavasti", "Kashaya Vasti", "Abhiyangham", "Ezhakizhi Treatment",
    "Herbal Steam Bath", "Udvarthanam", "Nasiyam & Steam", "Pizhichil",
    "Naranga Kizhi", "Pichu", "Vasti", "Shirodhara",
    "Special Kizhi", "Navara Kizhi", "Colonhydro Therapy", "FIR Therapy"
];

export default function IPDPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - Gradient Style */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#c22220] via-[#801010] to-[#4a0808]">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

                <div className="container mx-auto px-6 relative z-10 text-white text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 w-fit px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mx-auto">
                            <HeartPulse size={16} className="text-yellow-400" />
                            <span>In-Patient Department (IPD)</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            உள்நோயாளி <span className="text-yellow-400">சிகிச்சை</span> பிரிவு
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
                            நாள்பட்ட நோய்களுக்குப் பாரம்பரிய முறையில் தங்கி சிகிச்சை பெற்று <br className="hidden md:block" /> விரைவாகக் குணம் பெற எங்களின் சிறப்பு உள்நோயாளி பிரிவு உதவுகிறது.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                                முழுமையான கவனிப்பு மற்றும் <br />
                                <span className="text-[#c22220]">நிரந்தர தீர்வு</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed text-left md:text-justify lg:text-left">
                                <p>
                                    உள்நோயாளி சிகிச்சை (IPD) என்பது மருத்துவமனையில் தங்கி சிகிச்சை பெற வேண்டிய அவசியம் உள்ளவர்களுக்கான ஒரு சிறப்புப் பிரிவாகும். நோயாளிகள் மற்றும் அவர்களின் குடும்பத்தினரின் வசதிக்காக, பல்வேறு வார்டுகள் ஒன்றோடொன்று அருகருகே அமைக்கப்பட்டுள்ளன.
                                </p>
                                <p>
                                    நோயாளி உள்நோயாளி பிரிவில் அனுமதிக்கப்பட்டவுடன், சிறப்பு மருத்துவர்கள் நோயாளியை நேரில் சந்தித்து பரிசோதித்து, மேலதிக சிகிச்சை முறைகளைத் திட்டமிடுகின்றனர். நோயாளிகளைக் கண்காணிக்கவும், மருந்துகள் மற்றும் சத்தான உணவுகளைச் சரியான நேரத்தில் வழங்கவும் சுழற்சி முறையில் பிரத்யேக மருத்துவப் பணியாளர்கள் நியமிக்கப்படுகிறார்கள்.
                                </p>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold">
                                        <Leaf size={16} /> 100% இயற்கை சிகிச்சைகள்
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold">
                                        <ShieldCheck size={16} /> பக்கவிளைவுகள் அற்றது
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/ipd/r1.jpg"
                                alt="Therapy Room"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="font-bold text-xl">Advanced Therapy Rooms</p>
                                <p className="text-white/80">Equipped with 6 specialized treatment rooms</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* IPD Ward Photo Gallery */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-100 text-[#c22220] rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                            <Camera size={14} />
                            <span>Facility Tour</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">எங்கள் உள்நோயாளி <span className="text-[#c22220]">பிரிவின் தோற்றம்</span></h2>
                        <p className="text-gray-500">சுத்தமான மற்றும் சுகாதாரமான முறையில் பராமரிக்கப்படும் எங்களது உள்நோயாளி அறைகள்.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
                            <motion.div
                                key={num}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: num * 0.05 }}
                                viewport={{ once: true }}
                                className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden group shadow-lg"
                            >
                                <Image
                                    src={`/ipd/r${num}.jpg`}
                                    alt={`IPD Ward Photo ${num}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">வசதிகள் & சிறப்பம்சங்கள்</h2>
                        <p className="text-gray-500">எங்கள் உள்நோயாளி பிரிவில் நோயாளிகளுக்கு வழங்கப்படும் உயர்தர வசதிகள்</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilities.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#c22220] shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.titleTa}</h3>
                                <h4 className="text-sm font-semibold text-[#c22220] mb-3 uppercase tracking-wider">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Treatments Section */}
            <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-black mb-6 leading-tight">
                                கிடைக்கக்கூடிய <br />
                                <span className="text-[#c22220]">சிறப்பு சிகிச்சைகள்</span>
                            </h2>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                ஒவ்வொரு வாரமும் நூற்றுக்கணக்கான நோயாளிகள் எங்களின் இந்தச் சிறப்பு முறைகள் மூலம் தங்களின் தீராத நோய்களுக்குத் தீர்வு காண்கின்றனர்.
                            </p>
                            <button className="px-8 py-4 bg-[#c22220] hover:bg-red-700 text-white rounded-full font-bold transition-all shadow-lg flex items-center gap-3">
                                சிகிச்சை விவரங்கள் <ChevronRight size={20} />
                            </button>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {treatments.map((treatment, idx) => (
                                <Link key={idx} href="/therapies">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        whileHover={{
                                            scale: 1.02,
                                            backgroundColor: "rgba(194,34,32,0.15)",
                                            borderColor: "rgba(194,34,32,0.4)"
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 10,
                                            delay: idx * 0.05
                                        }}
                                        viewport={{ once: true }}
                                        className="flex items-center justify-between group cursor-pointer bg-white/5 border border-white/10 p-5 rounded-2xl transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-[#c22220] group-hover:scale-150 transition-transform" />
                                            <span className="font-semibold tracking-wide">{treatment}</span>
                                        </div>
                                        <ArrowRight size={16} className="text-white/20 group-hover:text-[#c22220] group-hover:translate-x-1 transition-all" />
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Therapy Explore Banner */}
            <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black">
                <div className="container mx-auto px-6">
                    <div className="relative group overflow-hidden rounded-[3rem] aspect-[21/9] flex items-center justify-center">
                        <Image
                            src="/images/therpy-2.jpg"
                            alt="Explore All Therapies"
                            fill
                            className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative z-10 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="max-w-2xl px-6"
                            >
                                <h2 className="text-4xl md:text-6xl font-black text-white mb-6">எங்கள் அனைத்து சிகிச்சைகளையும் காணுங்கள்</h2>
                                <Link href="/therapies" className="inline-flex items-center gap-3 px-10 py-5 bg-[#c22220] hover:bg-red-700 text-white rounded-full font-bold text-lg transition-all shadow-2xl">
                                    Explore Full Therapy Gallery <ChevronRight size={22} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-[#c22220] to-red-800 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-black mb-6">இன்றே ஆலோசனை பெறுங்கள்</h2>
                            <p className="text-xl text-white/80 mb-10">
                                எங்கள் மருத்துவர்களிடம் உங்கள் உடல்நலம் குறித்து ஆலோசனை பெற மற்றும் தங்கி சிகிச்சை பெறுவதற்கான விவரங்களை அறிய அழையுங்கள்.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a href="tel:+917871111115" className="w-full sm:w-auto px-10 py-5 bg-white text-[#c22220] rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-transform">
                                    +91 78711 11115
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
