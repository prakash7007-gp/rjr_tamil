"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "அனைத்தும்" },
  { id: "pain", label: "வலி நிவாரணம்" },
  { id: "skin", label: "தோல் & முடி" },
  { id: "digestion", label: "செரிமானம்" },
  { id: "lifestyle", label: "வாழ்வியல்" },
  { id: "general", label: "பொது" },
];

export default function TreatmentsGrid({ treatments }: { treatments: any[] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTreatments =
    activeCategory === "all"
      ? treatments
      : treatments.filter((t) => t.category === activeCategory);

  return (
    <div className="w-full">
      {/* Sticky Filter Bar */}
      <div className="sticky top-0 z-30 bg-[#fafafa]/80 backdrop-blur-md py-6 mb-8 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex space-x-3 md:justify-center min-w-max pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  border
                  ${
                    activeCategory === cat.id
                      ? "bg-[#c22220] text-white border-[#c22220] shadow-lg shadow-[#c22220]/20 scale-105"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[#c22220] hover:text-[#c22220] hover:shadow-md"
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredTreatments.map((t: any) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={t.id}
                className="relative bg-white rounded-3xl overflow-hidden
                         border border-gray-100
                         shadow-sm
                         hover:shadow-xl hover:-translate-y-1
                         before:absolute before:top-0 before:left-0
                         before:h-full before:w-1
                         before:bg-[#c22220]
                         before:scale-y-0 before:origin-top
                         before:transition-transform before:duration-300
                         hover:before:scale-y-100
                         flex flex-col h-full group"
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* CONTENT */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-100">
                      {categories.find((c) => c.id === t.category)?.label ||
                        "General"}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#c22220] transition-colors">
                    {t.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {t.shortDescription}
                  </p>

                  <Link
                    href={`/treatments/${t.slug}`}
                    className="inline-flex items-center justify-between
                              w-full px-6 py-3.5 rounded-xl
                              border border-[#c22220]
                              text-[#c22220] font-medium text-sm
                              hover:bg-[#c22220] hover:text-white
                              transition-all duration-300 group/btn mt-auto"
                  >
                    மேலும் அறிய
                    <span className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
