"use client";

import Image from "next/image";
import {
  Clock,
  Activity,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Heart,
  Users,
  ShieldCheck,
  Medal,
  CheckCircle2,
  TrendingUp,
  Layout,
  Stethoscope,
  ListChecks,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type TreatmentDetails = {
  symptoms: string[];
  causes: string[];
  rjrTreatment: string[];
  duration: string;
  overview: string;
  treatmentMethodDescription?: string;
  badgeText?: string;
  successRate?: string;
  tips?: string[];
  common?: string;
};

type Treatment = {
  title: string;
  shortDescription: string;
  image: string;
  details: TreatmentDetails;
};

type Props = {
  treatment: Treatment;
};

// --- Animations ---
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

type Tab = "overview" | "analysis" | "protocol";

export default function TreatmentView({ treatment }: Props) {
  const { details } = treatment;
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  // Auto-scroll tabs on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      // Check if we are on mobile (less than 768px matches md breakpoint)
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        setActiveTab((prev) => {
          if (prev === "overview") return "analysis";
          if (prev === "analysis") return "protocol";
          return "overview";
        });
      }
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-orange-500 selection:text-white pb-20">
      {/* ====================================================================================
                                      HERO SECTION (PRESERVED)
         ==================================================================================== */}
      <section className="relative min-h-[600px] lg:h-[75vh] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white z-0">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-white to-orange-50/30 -z-10" />

        {/* Left Content Side */}
        <div className="flex-1 flex items-center relative z-10 px-6 lg:px-20 py-16 lg:py-0">
          <div className="max-w-2xl w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-8"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-sm font-bold uppercase tracking-widest"
              >
                <Sparkles size={16} />
                சிறப்பு சிகிச்சை
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-6xl font-black text-gray-950 leading-tight tracking-tight"
              >
                {treatment.title.split(" ").map((word, i) => (
                  <span key={i} className={i === 0 ? "text-[#C22220]" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-xl text-gray-600 leading-relaxed font-medium max-w-lg"
              >
                {treatment.shortDescription}
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Right Visual Side */}
        <div className="flex-1 min-h-[400px] lg:min-h-0 relative">
          <div className="absolute top-0 right-0 w-[95%] h-full bg-orange-500 -z-10 rounded-bl-[100px]" />
          <Image
            src={treatment.image}
            alt={treatment.title}
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </section>

      {/* ====================================================================================
                                      COMPACT MEDICAL DASHBOARD
          A unified, tabbed interface overlapping the Hero.
         ==================================================================================== */}

      <div className="relative z-30 -mt-12 md:-mt-24 px-4 container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 min-h-[600px] flex flex-col relative"
        >
          {/* 1. DASHBOARD HEADER (TABS) */}
          <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md rounded-t-3xl border-b border-gray-100 relative group">
            <div className="flex overflow-x-auto gap-2 p-2 no-scrollbar snap-x">
              <TabButton
                active={activeTab === "overview"}
                onClick={() => setActiveTab("overview")}
                icon={Layout}
                label="கண்ணோட்டம்"
              />
              <TabButton
                active={activeTab === "analysis"}
                onClick={() => setActiveTab("analysis")}
                icon={Stethoscope}
                label="மருத்துவ ஆய்வு"
                subLabel="அறிகுறிகள் & காரணங்கள்"
              />
              <TabButton
                active={activeTab === "protocol"}
                onClick={() => setActiveTab("protocol")}
                icon={ListChecks}
                label="சிகிச்சை முறை"
                subLabel="செயல்முறை & கால அளவு"
              />
            </div>
            {/* Scroll Hint Overlay for Mobile */}
          </div>

          {/* 2. DYNAMIC CONTENT AREA */}
          <div className="p-5 md:p-10 flex-1 bg-white relative rounded-b-3xl">
            <AnimatePresence mode="wait">
              {/* --- VIEW: OVERVIEW --- */}
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col lg:flex-row gap-10"
                >
                  <div className="flex-1 space-y-6 md:space-y-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight">
                      நோயைப் பற்றி அறிந்துகொள்ளுதல்
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                      {details.overview}
                    </p>
                    <div className="p-4 md:p-6 bg-orange-50 rounded-2xl border border-orange-100 flex items-start gap-4">
                      <Sparkles className="text-orange-500 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-orange-900 text-sm md:text-base">
                          நிபுணர் கருத்து
                        </h4>
                        <p className="text-sm text-orange-800 mt-1">
                          எங்கள் அணுகுமுறை அறிகுறிகளை அடக்குவதை விட மூல
                          காரணத்தைக் கண்டறிவதில் கவனம் செலுத்துகிறது.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats Grid */}
                  <div className="w-full lg:w-80 shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                    <StatCard
                      icon={Medal}
                      label="வெற்றி விகிதம்"
                      value={details.successRate || "98%"}
                      color="text-emerald-600"
                      bg="bg-emerald-50"
                    />
                    <StatCard
                      icon={Users}
                      label="குணமடைந்தவர்கள்"
                      value="10k+"
                      color="text-blue-600"
                      bg="bg-blue-50"
                    />
                    <StatCard
                      icon={Clock}
                      label="சராசரி காலம்"
                      value={(() => {
                        const num = details.duration.match(/\d+/);
                        return num ? num[0] : (details.duration.length > 10 ? details.duration.substring(0, 10) + "..." : details.duration);
                      })()}
                      subValue={details.duration.includes("மாதம்") || details.duration.includes("மாதங்கள்") ? "மாதங்கள்" : "வாரங்கள்"}
                      color="text-purple-600"
                      bg="bg-purple-50"
                    />
                  </div>
                </motion.div>
              )}

              {/* --- VIEW: ANALYSIS (SYMPTOMS & CAUSES) --- */}
              {activeTab === "analysis" && (
                <motion.div
                  key="analysis"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  {/* Symptoms Column */}
                  <div className="bg-gray-50 rounded-3xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-purple-600">
                        <Activity size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        அறிகுறிகள்
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {details.symptoms.map((s, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                          <span className="text-sm font-medium leading-relaxed">
                            {s}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Causes Column - Replaced Dark Theme with Light Theme */}
                  <div className="bg-red-50 rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col border border-red-100">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-50" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-red-600">
                          <AlertCircle size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          காரணங்கள்
                        </h3>
                      </div>
                      <ul className="space-y-4">
                        {details.causes.map((c, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-700 border-b border-red-100 pb-3 last:border-0 hover:bg-white/50 p-2 rounded-lg transition-colors"
                          >
                            <TrendingUp
                              size={16}
                              className="mt-1 shrink-0 text-red-500"
                            />
                            <span className="text-sm font-medium leading-relaxed">
                              {c}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* --- VIEW: PROTOCOL (STEPS) --- */}
              {activeTab === "protocol" && (
                <motion.div
                  key="protocol"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <div className="mb-8 flex flex-col md:flex-row justify-between md:items-end gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        சிகிச்சை முறை
                      </h3>
                      <p className="text-gray-500 text-sm">
                        முழுமையான குணமாகும் வரை முறையான அணுகுமுறை.
                      </p>
                    </div>
                    <div className="px-6 py-3 bg-blue-50 text-blue-700 rounded-xl font-bold text-sm flex items-center gap-2 self-start md:self-auto">
                      <Clock size={16} /> மொத்த காலம்: {details.common}
                    </div>
                  </div>

                  {/* Unified Grid Layout - No Scrolling */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {details.rjrTreatment.map((step, i) => (
                      <div
                        key={i}
                        className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start group"
                      >
                        <div className="shrink-0 w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium leading-relaxed text-sm md:text-base">
                            {step}
                          </p>
                        </div>
                        <CheckCircle2
                          className="text-gray-100 group-hover:text-emerald-100 transition-colors shrink-0"
                          size={24}
                        />
                      </div>
                    ))}

                    {/* Final Success Card - Full Width or Grid Item */}
                    <div className="md:col-span-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-6 flex items-center justify-between shadow-xl">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-500/20 rounded-full">
                          <ShieldCheck className="text-emerald-400" size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{details.duration}</p>
                          <p className="text-gray-400 text-xs">
                            உறுதியான தீர்வு
                          </p>
                        </div>
                      </div>
                      <button className="px-6 py-3 bg-white text-gray-900 text-xs font-bold rounded-full hover:bg-emerald-50 transition-colors">
                        பதிவு செய்க
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Footer Note */}
        <div className="text-center mt-12 mb-8">
          <p className="text-gray-400 text-sm">
            தனிப்பட்ட ஆலோசனை வேண்டுமா?{" "}
            <a href="#" className="font-bold text-[#C22220] hover:underline">
              சிறப்பு மருத்துவரிடம் பேசுங்கள்
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

function TabButton({ active, onClick, icon: Icon, label, subLabel }: any) {
  return (
    <button
      onClick={onClick}
      className={`snap-start shrink-0 md:flex-1 min-w-[110px] md:min-w-[140px] flex items-center justify-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 rounded-xl transition-all duration-300 relative group outline-none
                ${active
          ? "bg-white text-gray-900 shadow-sm md:shadow-none"
          : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        }
            `}
    >
      <div
        className={`p-2 rounded-lg transition-colors ${active
          ? "bg-[#C22220] text-white"
          : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
          }`}
      >
        <Icon size={20} />
      </div>
      <div className="text-left">
        <span
          className={`block font-bold text-sm ${active ? "text-gray-900" : "text-gray-500"
            }`}
        >
          {label}
        </span>
        {subLabel && (
          <span className="block text-[10px] uppercase tracking-wider opacity-60 font-semibold hidden md:block">
            {subLabel}
          </span>
        )}
      </div>

      {/* Active Indicator Line */}
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 w-full h-[3px] bg-[#C22220] rounded-t-full"
        />
      )}
    </button>
  );
}

function StatCard({ icon: Icon, label, value, subValue, color, bg }: any) {
  return (
    <div
      className={`p-4 md:p-5 rounded-2xl ${bg} flex items-center justify-between`}
    >
      <div>
        <div
          className={`text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60 mb-1 text-gray-500`}
        >
          {label}
        </div>
        <div className={`text-xl md:text-2xl font-black ${color}`}>
          {value}{" "}
          <span className="text-xs md:text-sm font-medium text-gray-500">
            {subValue}
          </span>
        </div>
      </div>
      <div className={`p-2 md:p-3 rounded-xl bg-white shadow-sm ${color}`}>
        <Icon size={20} />
      </div>
    </div>
  );
}
