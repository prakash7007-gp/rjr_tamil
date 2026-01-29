// app/gallery/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Play, Youtube, Filter } from "lucide-react";

/* ================= FILE ARRAYS ================= */

const beforeAfterImages = [
  "/Before_after_images/asthuma.png",
  "/Before_after_images/asthuma1.png",
  "/Before_after_images/handpain.png",
  "/Before_after_images/kneepain.png",
  "/Before_after_images/kneepain2.png",
  "/Before_after_images/parlaysis.png",
  "/Before_after_images/8.png",
  "/Before_after_images/9.png",
  "/Before_after_images/10.png",
  "/Before_after_images/11.png",
  "/Before_after_images/12.png",
];

const videoCategories = [
  { id: "all", label: "அனைத்தும்" },
  { id: "uterine-fibroids", label: "கர்ப்பப்பை கட்டிகள்" },
  { id: "psoriasis", label: "சொரியாசிஸ்" },
  { id: "arthritis", label: "மூட்டு வலி" },
  { id: "hip-pain", label: "இடுப்பு வலி" },
  { id: "nasal-polyps", label: "மூக்கு பாலிப்" },
  { id: "shoulder-pain", label: "தோள், கை, கால் வலி" },
  { id: "pcod", label: "பிசிஓடி" },
  { id: "knee-pain", label: "முட்டி வலி" },
  { id: "piles", label: "மூல நோய்" },
  { id: "asthma", label: "ஆஸ்துமா" },
  { id: "osteoarthritis", label: "எலும்பு தேய்மானம்" },
  { id: "wheezing", label: "வீசிங்" },
  { id: "diabetes", label: "சர்க்கரை நோய்" },
  { id: "paralysis", label: "பக்கவாதம்" },
  { id: "kidney-stones", label: "சிறுநீரக கல்" },
  { id: "disc-problem", label: "தண்டுவட பிரச்சனை" },
  { id: "sinus", label: "சைனஸ்" },
  { id: "kidney-problem", label: "சிறுநீரக பிரச்சனை" },
  { id: "others", label: "இதர சிகிச்சைகள்" }
];

const youtubeVideos = [
  // Local Videos
  { src: "/Video_gallery/asthmanew.mp4", title: "ஆஸ்துமா சிகிச்சை", description: "வெற்றிகரமான மீட்பு", category: "asthma" },
  { src: "/Video_gallery/constipationnew.mp4", title: "மலச்சிக்கல் தீர்வு", description: "இயற்கை சிகிச்சை", category: "others" },
  { src: "/Video_gallery/diabetesnew.mp4", title: "சர்க்கரை நோய்", description: "மூலிகை மருத்துவம்", category: "diabetes" },
  { src: "/Video_gallery/digestionnew.mp4", title: "ஜீரண கோளாறு", description: "மூலிகை முறை", category: "others" },
  { src: "/Video_gallery/fibroidnew.mp4", title: "ஃபைப்ராய்டு சிகிச்சை", description: "நிரந்தர தீர்வு", category: "uterine-fibroids" },
  { src: "/Video_gallery/gallstonenew.mp4", title: "பித்தக்கல் தீர்வு", description: "அறுவை சிகிச்சையின்றி", category: "kidney-stones" },
  { src: "/Video_gallery/gastricnew.mp4", title: "காஸ்ட்ரிக் பிரச்சனை", description: "மூலிகை தீர்வு", category: "others" },
  { src: "/Video_gallery/hippainnew.mp4", title: "இடுப்பு வலி", description: "நிவாரணம்", category: "hip-pain" },
  { src: "/Video_gallery/kidneystonenew.mp4", title: "சிறுநீரக கல்", description: "மூலிகை சிகிச்சை", category: "kidney-stones" },
  { src: "/Video_gallery/kneepainnew.mp4", title: "முட்டி வலி", description: "இயற்கை தீர்வு", category: "knee-pain" },
  { src: "/Video_gallery/nasalpolypsnew.mp4", title: "மூக்கு பாலிப்", description: "சித்த மருத்துவம்", category: "nasal-polyps" },
  { src: "/Video_gallery/nervousproblemnew.mp4", title: "நரம்பு கோளாறு", description: "சித்த மருத்துவம்", category: "others" },
  { src: "/Video_gallery/pilesnew.mp4", title: "மூல நோய்", description: "நிரந்தர தீர்வு", category: "piles" },
  { src: "/Video_gallery/psoriasisnew.mp4", title: "சொரியாசிஸ்", description: "தோல் நோய் தீர்வு", category: "psoriasis" },
  { src: "/Video_gallery/ulcernew.mp4", title: "அல்சர் சிகிச்சை", description: "ஆரோக்கியமான மீட்பு", category: "others" },
  { src: "/Video_gallery/urinaryinfectionnew.mp4", title: "சிறுநீர் தொற்று", description: "நிபுணத்துவ சிகிச்சை", category: "others" },
  { src: "/Video_gallery/varicosenew.mp4", title: "வெரிகோஸ் வெயின்", description: "இயற்கை மருத்துவம்", category: "others" },

  // Uterine Fibroids
  { id: "x7tdlk6ulRs", title: "கர்ப்பப்பை கட்டிகள்", description: "RJR Cured Patients", category: "uterine-fibroids" },
  { id: "WXq9o9s_4z8", title: "கர்ப்பப்பை கட்டிகள்", description: "RJR Cured Patients", category: "uterine-fibroids" },
  { id: "zncr_JwE_JQ", title: "கர்ப்பப்பை கட்டிகள்", description: "RJR Cured Patients", category: "uterine-fibroids" },
  { id: "yuTsSEFrxNU", title: "கர்ப்பப்பை கட்டிகள்", description: "RJR Cured Patients", category: "uterine-fibroids" },
  { id: "9jsy1Uu2AMs", title: "கர்ப்பப்பை கட்டிகள்", description: "RJR Cured Patients", category: "uterine-fibroids" },

  // Psoriasis
  { id: "GoLnMMDXcFU", title: "சொரியாசிஸ்", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "3LK2sq5TW3A", title: "சொரியாசிஸ்", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "Ix7qywUMUio", title: "சொரியாசிஸ்", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "7HGOGQ1gyJg", title: "சொரியாசிஸ்", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "jOqXGm--Lx0", title: "சொரியாசிஸ்", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "Jb18x0aY82s", title: "சொரியாசிஸ்", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "7G0YAZulXKA", title: "சொரியாசிஸ்", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "J77fbX6iYlk", title: "சொரியாசிஸ்", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "AGI4Pb6psto", title: "சொரியாசிஸ்", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "ztfFlSWpwaM", title: "சொரியாசிஸ்", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "VSs2vQdszTY", title: "சொரியாசிஸ்", description: "RJR Cured Patients", category: "psoriasis" },

  // Arthritis
  { id: "jcmRsPVaH5U", title: "மூட்டு வலி", description: "RJR Cured Patients", category: "arthritis" },
  { id: "0oRtuMf6b34", title: "மூட்டு வலி", description: "RJR Cured Patients", category: "arthritis" },
  { id: "eEhfjEWTQ5Y", title: "மூட்டு வலி", description: "RJR Cured Patients", category: "arthritis" },
  { id: "aAtl24wmpqI", title: "மூட்டு வலி", description: "RJR Cured Patients", category: "arthritis" },
  { id: "qorYxk5Tsag", title: "மூட்டு வலி", description: "RJR Cured Patients", category: "arthritis" },
  { id: "s91mWZWeFF0", title: "மூட்டு வலி", description: "RJR Cured Patients", category: "arthritis" },
  { id: "PEL3ob7Ok38", title: "மூட்டு வலி", description: "RJR Cured Patients", category: "arthritis" },

  // Hip pain
  { id: "OvttXRhxbIk", title: "இடுப்பு வலி", description: "RJR Cured Patients", category: "hip-pain" },

  // Nasal polyps
  { id: "65iEbHrk3LM", title: "மூக்கு பாலிப்", description: "RJR Cured Patients", category: "nasal-polyps" },
  { id: "LY31UXUwvw4", title: "மூக்கு பாலிப்", description: "RJR Cured Patients", category: "nasal-polyps" },

  // Shoulder pain, leg, hand
  { id: "AZJeE5o-yv8", title: "தோள், கை, கால் வலி", description: "RJR Cured Patients", category: "shoulder-pain" },

  // PCOD
  { id: "kbIb8co8pnQ", title: "பிசிஓடி", description: "RJR Cured Patients", category: "pcod" },
  { id: "1LAY80IctQ0", title: "பிசிஓடி", description: "RJR Cured Patients", category: "pcod" },
  { id: "8ZJ1hhCqN3U", title: "பிசிஓடி", description: "RJR Cured Patients", category: "pcod" },

  // Knee pain
  { id: "jResJx54uWE", title: "முட்டி வலி", description: "RJR Cured Patients", category: "knee-pain" },
  { id: "hj4hP5LG5qI", title: "முட்டி வலி", description: "RJR Cured Patients", category: "knee-pain" },
  { id: "encMyJikTnk", title: "முட்டி வலி", description: "RJR Cured Patients", category: "knee-pain" },
  { id: "iVeWemlKHA4", title: "முட்டி வலி", description: "RJR Cured Patients", category: "knee-pain" },
  { id: "fM657Q5lMJI", title: "முட்டி வலி", description: "RJR Cured Patients", category: "knee-pain" },
  { id: "XmC5tuqF15A", title: "முட்டி வலி", description: "RJR Cured Patients", category: "knee-pain" },
  { id: "tWvNHCPPQ1g", title: "முட்டி வலி", description: "RJR Cured Patients", category: "knee-pain" },
  { id: "WwTsudlFxR0", title: "முட்டி வலி", description: "RJR Cured Patients", category: "knee-pain" },
  { id: "YvXXzr6XD90", title: "முட்டி வலி", description: "RJR Cured Patients", category: "knee-pain" },
  { id: "ZfFSKY8_z3Y", title: "முட்டி வலி", description: "RJR Cured Patients", category: "knee-pain" },
  { id: "X3mw2Ssiwws", title: "முட்டி வலி", description: "RJR Cured Patients", category: "knee-pain" },

  // Piles
  { id: "YI8Wqh2gNBY", title: "மூல நோய்", description: "RJR Cured Patients", category: "piles" },
  { id: "TEdHwJHWsEg", title: "மூல நோய்", description: "RJR Cured Patients", category: "piles" },

  // Asthma
  { id: "SkQAjkfrR0g", title: "ஆஸ்துமா", description: "RJR Cured Patients", category: "asthma" },
  { id: "SPnF3tE69Q8", title: "ஆஸ்துமா", description: "RJR Cured Patients", category: "asthma" },
  { id: "p12efStuCyE", title: "ஆஸ்துமா", description: "RJR Cured Patients", category: "asthma" },
  { id: "6zuvS5sumbY", title: "ஆஸ்துமா", description: "RJR Cured Patients", category: "asthma" },
  { id: "-ldTWweSYGA", title: "ஆஸ்துமா", description: "RJR Cured Patients", category: "asthma" },

  // Osteoarthritis
  { id: "khJrVYaVs6k", title: "எலும்பு தேய்மானம்", description: "RJR Cured Patients", category: "osteoarthritis" },
  { id: "V4YRzK0g_2g", title: "எலும்பு தேய்மானம்", description: "RJR Cured Patients", category: "osteoarthritis" },
  { id: "5rJzjGbO4B8", title: "எலும்பு தேய்மானம்", description: "RJR Cured Patients", category: "osteoarthritis" },

  // wheezing
  { id: "xHM4lD7_nN8", title: "வீசிங்", description: "RJR Cured Patients", category: "wheezing" },
  { id: "pfsjoKN9FS4", title: "வீசிங்", description: "RJR Cured Patients", category: "wheezing" },
  { id: "AAcAwheoI1U", title: "வீசிங்", description: "RJR Cured Patients", category: "wheezing" },
  { id: "ZArDOygL0Cw", title: "வீசிங்", description: "RJR Cured Patients", category: "wheezing" },
  { id: "PVwC53PVx1M", title: "வீசிங்", description: "RJR Cured Patients", category: "wheezing" },
  { id: "xvD3Bd8sPXM", title: "வீசிங்", description: "RJR Cured Patients", category: "wheezing" },
  { id: "sCNYbhP1iCg", title: "வீசிங்", description: "RJR Cured Patients", category: "wheezing" },
  { id: "AqWrTxJU5SM", title: "வீசிங்", description: "RJR Cured Patients", category: "wheezing" },
  { id: "vm3oSdm_5UY", title: "வீசிங்", description: "RJR Cured Patients", category: "wheezing" },
  { id: "j5D97TFUgPo", title: "வீசிங்", description: "RJR Cured Patients", category: "wheezing" },

  // Diabetes
  { id: "6_9UnTNuAeg", title: "சர்க்கரை நோய்", description: "RJR Cured Patients", category: "diabetes" },
  { id: "Dj3mnP8W4tk", title: "சர்க்கரை நோய்", description: "RJR Cured Patients", category: "diabetes" },
  { id: "l3jzlnx-zAw", title: "சர்க்கரை நோய்", description: "RJR Cured Patients", category: "diabetes" },
  { id: "upIti3p3w48", title: "சர்க்கரை நோய்", description: "RJR Cured Patients", category: "diabetes" },
  { id: "0DngvqHqr-o", title: "சர்க்கரை நோய்", description: "RJR Cured Patients", category: "diabetes" },

  // paralysis
  { id: "mtyXef6FoOk", title: "பக்கவாதம்", description: "RJR Cured Patients", category: "paralysis" },
  { id: "iAzWexlY6pc", title: "பக்கவாதம்", description: "RJR Cured Patients", category: "paralysis" },
  { id: "3aWHgjiCpHA", title: "பக்கவாதம்", description: "RJR Cured Patients", category: "paralysis" },

  // Kidney stones
  { id: "pvo8T528kUk", title: "சிறுநீரக கல்", description: "RJR Cured Patients", category: "kidney-stones" },
  { id: "VQOvsx3Hfe0", title: "சிறுநீரக கல்", description: "RJR Cured Patients", category: "kidney-stones" },

  // Disc problem
  { id: "eAX3AyhEtWs", title: "தண்டுவட பிரச்சனை", description: "RJR Cured Patients", category: "disc-problem" },

  // Lumbar disc herniation
  { id: "LRnR7MPLP-U", title: "முதுகு தண்டுவட ஜவ்வு விலகல்", description: "RJR Cured Patients", category: "disc-problem" },

  // Sinus
  { id: "MaXDB3CFsBo", title: "சைனஸ்", description: "RJR Cured Patients", category: "sinus" },

  // Kidney problem
  { id: "tQHs9OqR9sE", title: "சிறுநீரக பிரச்சனை", description: "RJR Cured Patients", category: "kidney-problem" },

  // More Psoriasis from existing
  { id: "MyGkk0ZcvLo", title: "லித்தேஷ் தோல் வியாதி", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "6zep2zB-Tcg", title: "சொரியாசிஸ்MARUTHI", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "CBe-oQcazhc", title: "SRI DEVI PSORIASIS 1080", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "MKXs41ICdeo", title: "SRI DEVI PSORIASIS 720", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "mF4Pz7k-HFI", title: "Psoriasis CURED PATIENT", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "jTkWCp50an8", title: "Psoriasis Recovery", description: "RJR Cured Patients", category: "psoriasis" },
  { id: "Qpo_edS0PPo", title: "Skin Treatment", description: "RJR Cured Patients", category: "psoriasis" },
];

const galleryImages = [
  ...Array.from({ length: 27 }, (_, i) => `/Photo_gallery/${i + 1}.webp`),
  ...Array.from({ length: 8 }, (_, i) => `/Photo_gallery/r${i + 1}.webp`),
];

/* ================= COMPONENT ================= */

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"before" | "video" | "photo">("before");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | number | null>(null);
  const [videoCategory, setVideoCategory] = useState("all");

  const filteredVideos = videoCategory === "all"
    ? youtubeVideos
    : youtubeVideos.filter(v => v.category === videoCategory);

  return (
    <main className="min-h-screen bg-[#fafafa]">

      {/* Cinematic Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[#c22220]" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,#fdc700,transparent_30%)]" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Header Curve */}
        <div className="absolute -bottom-1 w-[110%] h-32 bg-[#fafafa] rounded-t-[100%] left-1/2 -translate-x-1/2" />

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#fdc700] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Visual Journey</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">கேலரி</h1>
            <div className="w-24 h-2 bg-[#fdc700] mx-auto rounded-full shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* Re-imagined Tabs */}
      <section className="max-w-4xl mx-auto px-6 -mt-16 relative z-20">
        <div className="p-1.5 bg-white/80 backdrop-blur-2xl border border-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex md:flex-row flex-col gap-1">
          {[
            { key: "photo", label: "புகைப்பட கேலரி", icon: "📸" },
            { key: "before", label: "சிகிச்சைக்கு முன் & பின்", icon: "✨" },
            { key: "video", label: "வீடியோ கேலரி", icon: "🎬" },

          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`relative flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-bold transition-all duration-500 overflow-hidden ${activeTab === tab.key
                ? "text-white"
                : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                }`}
            >
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#c22220] to-[#e6322f] shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 text-lg">{tab.icon}</span>
              <span className="relative z-10 text-sm md:text-base">{tab.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1400px] mx-auto px-6 py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -20 }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            {/* 1. BEFORE / AFTER GRID */}
            {activeTab === "before" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {beforeAfterImages.map((src, i) => (
                  <GalleryCard
                    key={i}
                    src={src}
                    index={i}
                    onClick={() => setLightboxImage(src)}
                    label="Before After"
                  />
                ))}
              </div>
            )}

            {/* 2. VIDEO GRID (Shorts/Vertical Style) */}
            {activeTab === "video" && (
              <div className="space-y-12">
                {/* Video Category Filter */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3 text-slate-800 mb-2">
                    <Filter className="w-5 h-5 text-[#c22220]" />
                    <span className="font-bold text-lg">பிரிவுகள்</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {videoCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setVideoCategory(cat.id)}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${videoCategory === cat.id
                          ? "bg-[#c22220] border-[#c22220] text-white shadow-lg shadow-[#c22220]/20"
                          : "bg-white border-gray-200 text-gray-600 hover:border-[#c22220] hover:text-[#c22220]"
                          }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Video Channel Call to Action */}
                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-[#c22220] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#c22220]/20 rotate-3 group-hover:rotate-0 transition-transform">
                      <Youtube size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">எங்கள் யூடியூப் சேனல்</h3>
                      <p className="text-slate-500 font-medium">மேலும் பல தகவல்களுக்கு குழுசேரவும்</p>
                    </div>
                  </div>
                  <a
                    href="https://www.youtube.com/@rjrcuredpatientstamil/shorts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#c22220] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#a01d1b] transition-all duration-300 group shadow-lg shadow-[#c22220]/20"
                  >
                    Subscribe Now
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  <AnimatePresence mode="popLayout">
                    {filteredVideos.map((video) => {
                      const videoId = video.id || video.src || "";
                      return (
                        <VideoGalleryCard
                          key={videoId}
                          video={video}
                          isActive={activeVideo === videoId}
                          onPlay={() => setActiveVideo(videoId)}
                        />
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {/* 3. PHOTO GRID */}
            {activeTab === "photo" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages.map((src, i) => (
                  <GalleryCard
                    key={i}
                    src={src}
                    index={i}
                    onClick={() => setLightboxImage(src)}
                    label="Hospital View"
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Premium Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, rotateX: 20 }}
              animate={{ scale: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
            >
              <Image
                src={lightboxImage}
                alt="Preview"
                width={1600}
                height={1000}
                className="w-full h-full object-contain rounded-xl shadow-2xl"
              />
              <button
                className="absolute -top-12 right-0 text-white text-4xl hover:text-[#fdc700] transition-colors"
                onClick={() => setLightboxImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}

/* ================= HELPER COMPONENTS ================= */

function GalleryCard({ src, index, onClick, label }: any) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      layout
      className="group relative cursor-pointer rounded-[40px] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)] bg-white aspect-video border border-gray-100"
      onClick={onClick}
    >
      <Image src={src} alt={label} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Floating Info */}
      <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <span className="text-[#fdc700] font-bold text-xs uppercase tracking-widest">{label}</span>
        <h3 className="text-white text-xl font-bold">View Detail</h3>
      </div>

      <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
        🔍
      </div>
    </motion.div>
  );
}

function VideoGalleryCard({ video, isActive, onPlay }: any) {
  const isYouTube = !!video.id;
  const videoSrc = isYouTube ? `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0` : video.src;
  const thumbnail = isYouTube ? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` : null;

  const handleMouseEnter = (e: React.MouseEvent<HTMLVideoElement>) => {
    const videoElement = e.currentTarget;
    videoElement.play().catch(() => {
      // Ignore autoplay errors
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden bg-black shadow-lg hover:shadow-2xl transition-all duration-500 group border-4 ${isActive ? "border-[#c22220]" : "border-white"}`}
    >
      {isActive ? (
        isYouTube ? (
          <iframe
            src={videoSrc}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={video.src}
            controls
            autoPlay
            className="absolute inset-0 w-full h-full object-cover"
          />
        )
      ) : (
        <div className="relative w-full h-full cursor-pointer flex flex-col justify-end" onClick={onPlay}>
          {isYouTube ? (
            <Image
              src={thumbnail || ""}
              alt={video.title}
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
            />
          ) : (
            <video
              src={video.src}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
              muted
              loop
              onMouseEnter={handleMouseEnter}
              onMouseLeave={(e) => {
                const videoElement = e.currentTarget;
                videoElement.pause();
                videoElement.currentTime = 0;
              }}
            />
          )}

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
              <div className="w-12 h-12 bg-[#c22220] rounded-full flex items-center justify-center shadow-lg">
                <Play fill="white" className="w-6 h-6 ml-1 text-white" />
              </div>
            </div>
          </div>

          {/* Info Overlay */}
          <div className="relative z-10 p-5 bg-gradient-to-t from-black via-black/50 to-transparent pt-12 pointer-events-none">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-[#fdc700] text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                {videoCategories.find(c => c.id === video.category)?.label || "சிகிச்சை"}
              </span>
            </div>
            <h4 className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-sm">{video.title}</h4>
            <p className="text-white/80 text-xs font-medium">{video.description}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

