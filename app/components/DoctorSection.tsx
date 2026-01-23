/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import { Plus, MapPin, Phone, Clock } from "lucide-react";
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !isMobile) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  const visibleDoctors = isMobile && hasDoctors ? [data[currentIndex]] : data;

  return (
    <section
      className="py-12 sm:py-16 lg:py-24 bg-gray-50"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CHENNAI BRANCH HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-red-100 text-[#c22220] rounded-full text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
            Our Headquarters - Chennai (T.Nagar)
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            சென்னை (T.Nagar) கிளையின் <span className="text-[#c22220]">மருத்துவக் குழு</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-start gap-3 text-left">
              <MapPin className="text-[#c22220] shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-gray-900">Address:</p>
                <p className="text-gray-600">150, Habibulla Road, T.Nagar, Chennai - 600017.</p>
              </div>
            </div>

            <div className="h-12 w-[1px] bg-gray-200 hidden md:block"></div>

            <div className="flex items-start gap-3 text-left">
              <Phone className="text-[#c22220] shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-gray-900">Contact:</p>
                <p className="text-red-700 font-bold">+91 78711 11115</p>
              </div>
            </div>

            <div className="h-12 w-[1px] bg-gray-200 hidden md:block"></div>

            <div className="flex items-start gap-3 text-left">
              <Clock className="text-[#c22220] shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-gray-900">Timing:</p>
                <p className="text-gray-600">9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* DOCTORS GRID */}
        <div
          className={`grid gap-8 lg:gap-10 ${isMobile ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
        >
          {visibleDoctors.map((doctor, idx) => (
            <div
              key={doctor.name + idx}
              className="group bg-white rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* DIVIDER WITH PLUS BUTTON */}
              <div className="relative">
                <div className="w-full h-1 bg-gradient-to-r from-[#c22220] to-[#6e0f0f]" />
                <div className="absolute left-1/2 -translate-x-1/2 -top-6">
                  <div className="w-12 h-12 bg-white text-[#c22220] rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#c22220] group-hover:text-white transition-all duration-300 transform group-hover:rotate-90">
                    <Plus size={24} strokeWidth={3} />
                  </div>
                </div>
              </div>

              {/* DOCTOR INFO */}
              <div className="text-center px-6 pb-10 pt-10">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#c22220] transition-colors">{doctor.name}</h3>
                <p className="text-red-700 uppercase tracking-widest text-xs mt-2 font-black">
                  {doctor.qualification}
                </p>

                <div className="h-1 w-10 bg-gray-100 mx-auto my-4 group-hover:w-20 group-hover:bg-red-200 transition-all duration-500" />

                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {doctor.experience}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile slider controls */}
        {isMobile && hasDoctors && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              type="button"
              onClick={prev}
              className="h-12 w-12 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-[#c22220] hover:text-white transition-all hover:scale-110 shadow-md flex items-center justify-center"
            >
              <span className="text-2xl">‹</span>
            </button>
            <div className="flex items-center gap-3">
              {data.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${i === currentIndex ? "w-10 bg-[#c22220]" : "w-2.5 bg-gray-300"
                    }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="h-12 w-12 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-[#c22220] hover:text-white transition-all hover:scale-110 shadow-md flex items-center justify-center"
            >
              <span className="text-2xl">›</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
