// app/gallery/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

const youtubeVideos = [
  { src: "/Video_gallery/asthmanew.mp4", title: "ஆஸ்துமா சிகிச்சை", description: "வெற்றிகரமான மீட்பு" },
  { src: "/Video_gallery/constipationnew.mp4", title: "மலச்சிக்கல் தீர்வு", description: "இயற்கை சிகிச்சை" },
  { src: "/Video_gallery/diabetesnew.mp4", title: "சர்க்கரை நோய்", description: "மூலிகை மருத்துவம்" },
  { src: "/Video_gallery/digestionnew.mp4", title: "ஜீரண கோளாறு", description: "மூலிகை முறை" },
  { src: "/Video_gallery/fibroidnew.mp4", title: "ஃபைப்ராய்டு சிகிச்சை", description: "நிரந்தர தீர்வு" },
  { src: "/Video_gallery/gallstonenew.mp4", title: "பித்தக்கல் தீர்வு", description: "அறுவை சிகிச்சையின்றி" },
  { src: "/Video_gallery/gastricnew.mp4", title: "காஸ்ட்ரிக் பிரச்சனை", description: "மூலிகை தீர்வு" },
  { src: "/Video_gallery/hippainnew.mp4", title: "இடுப்பு வலி", description: "நிவாரணம்" },
  { src: "/Video_gallery/kidneystonenew.mp4", title: "சிறுநீரக கல்", description: "மூலிகை சிகிச்சை" },
  { src: "/Video_gallery/kneepainnew.mp4", title: "முட்டி வலி", description: "இயற்கை தீர்வு" },
  { src: "/Video_gallery/nasalpolypsnew.mp4", title: "மூக்கு பாலிப்", description: "சித்த மருத்துவம்" },
  { src: "/Video_gallery/nervousproblemnew.mp4", title: "நரம்பு கோளாறு", description: "சித்த மருத்துவம்" },
  { src: "/Video_gallery/pilesnew.mp4", title: "மூல நோய்", description: "நிரந்தர தீர்வு" },
  { src: "/Video_gallery/psoriasisnew.mp4", title: "சொரியாசிஸ்", description: "தோல் நோய் தீர்வு" },
  { src: "/Video_gallery/ulcernew.mp4", title: "அல்சர் சிகிச்சை", description: "ஆரோக்கியமான மீட்பு" },
  { src: "/Video_gallery/urinaryinfectionnew.mp4", title: "சிறுநீர் தொற்று", description: "நிபுணத்துவ சிகிச்சை" },
  { src: "/Video_gallery/varicosenew.mp4", title: "வெரிகோஸ் வெயின்", description: "இயற்கை மருத்துவம்" },
];

const galleryImages = [
  ...Array.from({ length: 27 }, (_, i) => `/Photo_gallery/${i + 1}.webp`),
  ...Array.from({ length: 8 }, (_, i) => `/Photo_gallery/r${i + 1}.webp`),
];

/* ================= COMPONENT ================= */

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"before" | "video" | "photo">("before");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {youtubeVideos.map((video, i) => (
                  <VideoGalleryCard
                    key={i}
                    video={video}
                    isActive={activeVideo === i}
                    onPlay={() => setActiveVideo(i)}
                  />
                ))}
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative w-full aspect-[9/16] rounded-3xl overflow-hidden bg-black shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-200 ${isActive ? "ring-4 ring-[#c22220]" : ""}`}
    >
      {isActive ? (
        <video
          src={video.src}
          controls
          autoPlay
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="relative w-full h-full cursor-pointer flex flex-col justify-end" onClick={onPlay}>
          <video
            src={video.src}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
            muted
            loop
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
              <div className="w-12 h-12 bg-[#c22220] rounded-full flex items-center justify-center shadow-lg">
                <svg fill="white" viewBox="0 0 24 24" className="w-6 h-6 ml-1"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </div>

          {/* Info Overlay */}
          <div className="relative z-10 p-5 bg-gradient-to-t from-black via-black/50 to-transparent pt-12 pointer-events-none">
            <h4 className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-sm">{video.title}</h4>
            <p className="text-white/80 text-xs font-medium">{video.description}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
