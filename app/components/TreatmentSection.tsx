/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface MajorTreatment {
  title: string;
  image: string;
  points?: string[];
}

interface TreatmentSectionProps {
  data: MajorTreatment[];
}

const computeItemsPerSlide = (width: number) => {
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
};

export default function TreatmentSection({ data }: TreatmentSectionProps) {
  // Ensure we can support up to 10 cards if data has them
  const treatments = useMemo(() => data.slice(0, 10), [data]);

  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const updateItems = () => {
      setItemsPerSlide(computeItemsPerSlide(window.innerWidth));
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const slides = useMemo(() => {
    const chunks: MajorTreatment[][] = [];
    for (let i = 0; i < treatments.length; i += itemsPerSlide) {
      chunks.push(treatments.slice(i, i + itemsPerSlide));
    }
    return chunks;
  }, [treatments, itemsPerSlide]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    setCurrentSlide((prev) => {
      if (slides.length === 0) return 0;
      return Math.min(prev, slides.length - 1);
    });
  }, [slides.length]);

  const hasSlides = slides.length > 0;

  const nextSlide = () => {
    if (!hasSlides) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (!hasSlides) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-[#fffdf7]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 🌿 CREATIVE BACKGROUND: Floating Leaves & Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft gradient orb in top left */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-red-50/50 blur-[100px]" />
        {/* Soft gradient orb in bottom right */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-yellow-50/50 blur-[100px]" />

        {/* Floating Leaves Pattern */}
        <div className="absolute top-10 left-10 opacity-30 rotate-45 w-32 h-32">
          <Image src="/images/leaf.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-1/2 right-0 opacity-30 -rotate-12 w-64 h-64 translate-x-1/3">
          <Image src="/images/leaf.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-10 left-1/4 opacity-30 rotate-90 w-20 h-20">
          <Image src="/images/leaf.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-20 right-1/4 opacity-30 -rotate-45 w-24 h-24">
          <Image src="/images/leaf.png" alt="" fill className="object-contain" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-[#c22220] text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            முக்கிய சிகிச்சைகள்
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-900 leading-relaxed px-4">
            பலதரப்பட்ட மருத்துவ சிறப்புகளில் அனுபவம் வாய்ந்தவர்கள். எங்கள்
            நிபுணத்துவம் பெற்ற சில முக்கிய சிகிச்சைகள் கீழே கொடுக்கப்பட்டுள்ளன.
          </p>
        </div>

        {/* CAROUSEL */}
        {hasSlides && (
          <div className="relative">
            {/* Cards for current slide */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {slides[currentSlide].map((treatment, index) => {
                const globalIndex = currentSlide * itemsPerSlide + index;
                return (
                  <div key={treatment.title + globalIndex} className="h-full">
                    <div className="p-1 h-full">
                      <div className="h-full rounded-xl sm:rounded-2xl bg-white shadow-md hover:shadow-xl transform-gpu transition-all duration-300 hover:-translate-y-2">
                        <div className="p-5 sm:p-6 lg:p-8 relative flex flex-col h-full">
                          {/* INDEX NUMBER */}
                          <div className="absolute top-3 right-4 sm:top-4 sm:right-6 text-3xl sm:text-4xl font-bold text-gray-200">
                            {String(globalIndex + 1).padStart(2, "0")}
                          </div>

                          {/* IMAGE / ICON */}
                          <div className="mb-3 sm:mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-lg sm:rounded-xl bg-[#c22220] overflow-hidden">
                            <Image
                              src={treatment.image}
                              alt={treatment.title}
                              width={80}
                              height={80}
                              className="object-cover h-full w-full bg-white"
                            />
                          </div>

                          {/* TITLE */}
                          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#c22220] leading-tight pr-8">
                            {treatment.title}
                          </h3>

                          {/* DESCRIPTION POINTS */}
                          {treatment.points && treatment.points.length > 0 && (
                            <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 list-disc list-inside leading-relaxed">
                              {treatment.points.slice(0, 3).map((point, pointIndex) => (
                                <li key={pointIndex} className="text-left">{point}</li>
                              ))}
                            </ul>
                          )}

                          {/* ACTION BUTTON */}
                          <div className="mt-auto pt-3 sm:pt-4">
                            <Link
                              href="/treatments"
                              className="inline-flex items-center px-4 py-2 rounded-full border border-red-100 bg-red-50 text-red-700 text-sm font-semibold hover:bg-[#c22220] hover:text-white hover:border-[#c22220] transition-all duration-300 group"
                            > மேலும் விவரங்கள்
                              <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel controls */}
            {slides.length > 1 && (
              <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-all hover:scale-110 shadow-sm"
                  aria-label="Previous slide"
                >
                  <span className="text-lg sm:text-xl">‹</span>
                </button>
                <div className="flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2 sm:h-2.5 rounded-full transition-all ${i === currentSlide
                        ? "w-6 sm:w-8 bg-[#c22220]"
                        : "w-2.5 sm:w-3 bg-gray-300"
                        }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-all hover:scale-110 shadow-sm"
                  aria-label="Next slide"
                >
                  <span className="text-lg sm:text-xl">›</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* VIEW ALL BUTTON */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <Link
            href="/treatments"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#c22220] text-white font-semibold hover:bg-red-900 transition-all text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            அனைத்து சிகிச்சைகளையும் காண்க
            <span className="ml-2 text-base sm:text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
