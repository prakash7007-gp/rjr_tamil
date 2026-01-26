"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { div } from "framer-motion/client";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

interface Slide {
  image: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}

interface HeroCarouselProps {
  slides: Slide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in pixels) to trigger slide change
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (isRightSwipe) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };


  // Auto slide - 12 seconds per slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 20000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="relative w-full h-auto lg:h-[650px] flex flex-col lg:flex-row bg-[#f9f9f9]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 🖼️ RIGHT SIDE: IMAGE CAROUSEL */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden order-1 lg:order-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[current].image}
              alt="Hero Slide"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay for better mobile text integration if we overlaid, but here we split. 
                    Adding a subtle inner shadow though. */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Dots (Since arrows are on left side) */}
        <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 lg:hidden z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all ${idx === current ? "w-6 bg-yellow-400" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
      </div>
      {/* 🔴 LEFT SIDE: RED GRADIENT CONTENT */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#c22220] to-[#801010] flex flex-col  px-6 py-12 lg:px-16 lg:py-0 relative overflow-hidden z-10 order-1 lg:order-2 lg:py-12">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-white backdrop-blur-sm mb-6">
              <span className="text-black font-bold tracking-wider text-xs lg:text-sm uppercase">
                {slides[current].badge || "150 Years of Excellence"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight text-yellow-400 mb-8">
              {slides[current].title || "Providing World Class"} <br className="hidden lg:block" />

            </h1>

            {/* Description */}
            <p
              className="text-gray-100 text-base sm:text-lg max-w-lg mb-8 opacity-90 [&_strong]:text-yellow-400 [&_strong]:font-bold"
              dangerouslySetInnerHTML={{
                __html: slides[current].subtitle || "Experience the best traditional and modern medical treatments tailored for your well-being."
              }}
            />


          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows (Optional: Can also be placed here if side arrows are too much) */}
        {/* <div className="flex items-center gap-4 mt-8">
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-[#c22220] transition-all"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="w-11 h-11 rounded-full bg-white text-[#c22220] flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all shadow-lg"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div> */}

      </div>



      {/* 🏥 FLOATING CENTER CARD (Booking/Info) - BORDERLESS GLASS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-[95%] max-w-6xl bg-white/60 backdrop-blur-2xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] p-4 lg:p-6 hidden md:flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#c22220] shadow-md">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <div>
            <span className="block text-[#991b1b] text-xs font-extrabold uppercase tracking-wider">Location</span>
            <strong className="text-black text-lg font-bold">SOUTH INDIA</strong>
          </div>
        </div>

        <div className="w-px h-12 bg-gray-400/50"></div>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#c22220] shadow-md">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
          <div>
            <span className="block text-[#991b1b] text-xs font-extrabold uppercase tracking-wider">Appointment</span>
            <strong className="text-black text-lg font-bold">Mon - Sun (9am - 7pm)</strong>
          </div>
        </div>

        <div className="w-px h-12 bg-gray-400/50"></div>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#c22220] shadow-md">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          </div>
          <div>
            <span className="block text-[#991b1b] text-xs font-extrabold uppercase tracking-wider">Emergency</span>
            <strong className="text-black text-lg font-bold">7871111115</strong>
          </div>
        </div>

        <Link href="/contact" className="bg-[#c22220] hover:bg-black text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl text-base tracking-wide transform hover:-translate-y-1">
          Book Now
        </Link>
      </div>

      {/* 🧭 Navigation Arrows - Desktop Side Buttons */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 lg:px-10 flex justify-between items-center pointer-events-none z-40 hidden md:flex">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="group pointer-events-auto w-14 h-14 rounded-full bg-black/10 hover:bg-white backdrop-blur-md border border-white/20 text-white hover:text-[#c22220] transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.2)] flex items-center justify-center"
          aria-label="Previous Slide"
        >
          <ArrowLeftIcon className="w-7 h-7 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="group pointer-events-auto w-14 h-14 rounded-full bg-black/10 hover:bg-white backdrop-blur-md border border-white/20 text-white hover:text-[#c22220] transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.2)] flex items-center justify-center"
          aria-label="Next Slide"
        >
          <ArrowRightIcon className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
}
