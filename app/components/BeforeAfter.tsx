"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface ShortItem {
  videoId: string;
  title: string;
  description: string;
}

interface BeforeAfterProps {
  data: ShortItem[];
}

export default function BeforeAfter({ data }: BeforeAfterProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Responsive items per view
  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerView(1);
      else if (width < 1024) setItemsPerView(2);
      else if (width < 1280) setItemsPerView(3);
      else setItemsPerView(4);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = Math.max(0, data.length - itemsPerView);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (!data || data.length === 0) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-gray-50 to-white -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16 relative">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-red-50 rounded-full">
              <Quote className="text-[#c22220] w-8 h-8 fill-current opacity-20" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            வெற்றி கதைகள் (Success Stories)
          </h2>
          <div className="w-20 h-1 bg-[#c22220] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            எங்கள் சிகிச்சையின் மூலம் குணமடைந்தவர்களின் நேரடி அனுபவங்கள் மற்றும் மகிழ்ச்சியான தருணங்கள்.
          </p>
        </div>

        {/* ================= SLIDER CONTAINER ================= */}
        <div className="relative group/slider">

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#c22220] hover:text-white hover:border-[#c22220] disabled:opacity-0 disabled:cursor-not-allowed text-gray-700`}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20">
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#c22220] hover:text-white hover:border-[#c22220] disabled:opacity-0 disabled:cursor-not-allowed text-gray-700`}
              aria-label="Next Slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Slider Windows */}
          <div className="overflow-hidden py-4 -mx-4 px-4">
            <motion.div
              className="flex gap-6 md:gap-8"
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {data.map((item, idx) => (
                <div
                  key={idx}
                  className="shrink-0"
                  style={{ width: `calc((100% - ${(itemsPerView - 1) * 24}px) / ${itemsPerView})` }}
                >
                  <SuccessCard
                    item={item}
                    isActive={activeVideo === item.videoId}
                    onPlay={() => setActiveVideo(item.videoId)}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-[#c22220]" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ================= INDIVIDUAL CARD COMPONENT =================
function SuccessCard({ item, isActive, onPlay }: { item: ShortItem; isActive: boolean; onPlay: () => void }) {
  return (
    <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100 bg-black">
      <AnimatePresence mode="wait">
        {isActive ? (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 bg-black"
          >
            <iframe
              className="w-full h-full object-cover"
              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        ) : (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 cursor-pointer"
            onClick={onPlay}
          >
            {/* Thumbnail Image */}
            <img
              src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              onError={(e) => {
                // Fallback if maxres is unavailable
                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`;
              }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

            {/* Content Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex justify-end">
                <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                  Result
                </div>
              </div>

              {/* Center Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                  <div className="w-12 h-12 bg-[#c22220] rounded-full flex items-center justify-center shadow-lg">
                    <Play className="text-white ml-1 fill-white" size={20} />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg leading-snug mb-2 line-clamp-2 drop-shadow-md group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/80 text-xs line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}