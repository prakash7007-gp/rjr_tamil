"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/bannercentre1.avif",
  "/images/banner2.png",
  "/images/banner3.png",
  "/images/banner5.png",
];

export default function PhotoBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-fluid mx-auto px-4">
        <div className="relative h-[360px] md:h-[380px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl">

          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Hospital Banner"
              fill
              priority={index === 0}
              className={`object-cover object-center transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}

        </div>
      </div>
    </section>
  );
}


