/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

interface DoctorProps {
  data: {
    name: string;
    qualification: string;
    image: string;
    experience: string;
  }[];
}

export default function DoctorSection({ data }: DoctorProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hasDoctors = data && data.length > 0;

  const next = () => {
    if (!hasDoctors) return;
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    if (!hasDoctors) return;
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const visibleDoctors = isMobile && hasDoctors ? [data[currentIndex]] : data;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c22220] text-center mb-8 sm:mb-10 lg:mb-12">
          அனுபவம் வாய்ந்த மருத்துவர் குழு 
        </h2>

        <div
          className={`grid gap-6 sm:gap-8 lg:gap-10 ${
            isMobile ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {visibleDoctors.map((doctor, idx) => (
            <div
              key={doctor.name + idx}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              {/* TOP IMAGE */}
              <div className="relative h-64 sm:h-72 lg:h-80 w-full">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* DIVIDER WITH CIRCLE BUTTON */}
              <div className="relative">
                <div className="w-full h-[3px] bg-[#c22220]" />
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 sm:-top-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c22220] rounded-full flex items-center justify-center shadow-xl">
                    <Plus className="text-white" size={22} strokeWidth={3} />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="text-center px-4 sm:px-6 pb-6 sm:pb-8 pt-8 sm:pt-10">
                <h3 className="text-lg sm:text-xl font-semibold">{doctor.name}</h3>
                <p className="text-red-600 uppercase tracking-wide text-xs sm:text-sm mt-2 font-bold">
                  {doctor.qualification}
                </p>

                <p className="text-gray-600 mt-2 text-xs sm:text-sm">{doctor.experience}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile slider controls */}
        {isMobile && hasDoctors && (
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              type="button"
              onClick={prev}
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-all hover:scale-110 shadow-sm"
              aria-label="Previous doctor"
            >
              <span className="text-lg sm:text-xl">‹</span>
            </button>
            <div className="flex items-center gap-2">
              {data.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all ${
                    i === currentIndex ? "w-6 sm:w-8 bg-[#c22220]" : "w-2.5 sm:w-3 bg-gray-300"
                  }`}
                  aria-label={`Go to doctor ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-all hover:scale-110 shadow-sm"
              aria-label="Next doctor"
            >
              <span className="text-lg sm:text-xl">›</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
