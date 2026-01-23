"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  age: number;
  condition: string;
  treatment: string;
  testimonial: string;
  image: string;
  imageAlt: string;
}

interface SliderProps {
  testimonials: Testimonial[];
  button: string;
}

export default function TestimonialSlider({ testimonials, button }: SliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const previous = () =>
    setActiveIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);

  const next = () =>
    setActiveIndex(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);

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
      next();
    } else if (isRightSwipe) {
      previous();
    }
  };

  const t = testimonials[activeIndex];

  return (
    <div
      className="w-full  mx-auto  relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[500px] transition-all duration-300">

        {/* LEFT — IMAGE SECTION */}
        <div className="w-full md:w-[45%] relative bg-red-100 h-[350px] md:h-auto group">
          <Image
            src={t.image}
            alt={t.imageAlt}

            fill
            className="object-contain  transition-transform duration-700 group-hover:scale-105"
            priority
          />
          {/* Overlay gradient for mobile text readability if strictly overlaying, but here we split. Used for aesthetic depth. */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent opacity-60 md:hidden" />

          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm z-10 flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-gray-800 uppercase tracking-widest">Real Cured Patient</span>
          </div>
        </div>

        {/* RIGHT — CONTENT SECTION */}
        <div className="w-full md:w-[55%] p-6 md:p-12 flex flex-col justify-center relative bg-white">

          {/* Background decoration */}
          <div className="absolute top-0 right-0 p-6 md:p-10 opacity-5 pointer-events-none">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
            </svg>
          </div>

          <div className="mb-2">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              {t.name} <span className="text-lg font-normal text-gray-500 ml-2">({t.age} Years)</span>
            </h3>
            <p className="inline-block mt-2 bg-[#fdf2f2] text-[#c22220] px-3 py-1 rounded-md text-sm font-semibold tracking-wide">
              {t.condition}
            </p>
          </div>

          <div className="my-6 relative z-10">
            <p className="text-xl text-gray-700 italic font-light leading-relaxed">
              "{t.testimonial}"
            </p>
          </div>

          <div className="border-l-4 border-[#c22220] pl-4 mb-8 bg-gray-50 py-3 pr-3 rounded-r-lg">
            <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Success Treatment</p>
            <p className="text-lg font-medium text-gray-800">{t.treatment}</p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-gray-100">
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-[#c22220] w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={previous}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-[#c22220] hover:text-[#c22220] transition-all active:scale-95"
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>

              <button
                onClick={next}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-[#c22220] hover:text-[#c22220] transition-all active:scale-95"
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
