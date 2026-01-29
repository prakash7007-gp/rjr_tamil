"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, HeartPulse, Activity, Sparkles, Award } from "lucide-react";

const iconMap: { [key: string]: any } = {
  "நிரந்தரமான தீர்வு": Award,
  "பக்க விளைவு அற்றது": Leaf,
  "பாதுகாப்பானது": ShieldCheck,
  "நோய் எதிர்ப்புச் சக்தி மேம்பாடு": Activity,
  "நாடி மருத்துவம்": HeartPulse,
  "மீண்டும் வராமல் தடுக்கும்": Sparkles,
};

export default function WhyChooseUs({ data }: { data: any[] }) {
  const items = data || [];

  // Split items for left and right columns
  const midPoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midPoint);
  const rightItems = items.slice(midPoint);

  return (
    <section className="relative  py-20 bg-[#fffafa] overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-[100px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header - Creative Typography */}
        <div className="text-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block relative"
          >

            <h2 className="text-4xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              AYUSH - மருத்துவத்தில் <span className="text-[#c22220]"> ஏன் RJR மருத்துவமனையை தேர்ந்தெடுக்கிறார்கள்?</span>
            </h2>
            <div className="h-2 w-full bg-gradient-to-r from-transparent via-[#c22220] to-transparent mt-4 opacity-30 rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className=" text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >

          </motion.p>
        </div>

        {/* Main Content - Hub Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center relative">

          {/* CENTER IMAGE (Mobile: Top, Desktop: Center) */}
          <div className="lg:col-start-2 lg:row-start-1 h-[400px] lg:h-[500px] flex items-center justify-center relative order-first lg:order-none lg:mb-0 sm:pt-10 ">

            {/* Product Floating Animation */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full max-w-sm mx-auto z-20"
            >
              <Image
                src="/images/whyrjrphotos1.png"
                alt="RJR Herbal Product"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />

              {/* Glowing Aura behind bottle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-b from-yellow-200/40 to-red-200/40 blur-3xl -z-10 rounded-full" />
            </motion.div>

            {/* Connecting Circles (Decorative for Desktop) */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* We could add connecting lines here if exact coordinates were known, keeping it cleaner with simpler shapes */}
                <circle cx="50" cy="50" r="30" stroke="#fecaca" strokeWidth="0.2" fill="none" className="animate-spin-slow" />
                <circle cx="50" cy="50" r="40" stroke="#fecaca" strokeWidth="0.1" fill="none" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          <div className="lg:col-start-1 lg:row-start-1 space-y-12 lg:space-y-16 lg:pr-12 relative z-10 sm:pt-10">
            {leftItems.map((item, idx) => (
              <FeatureItem
                key={idx}
                item={item}
                align="right"
                delay={idx * 0.2}
              />
            ))}
          </div>

          <div className=" lg:col-start-3 lg:row-start-1 space-y-12 lg:space-y-16 lg:pl-12 relative z-10 pt-12 lg:pt-0">
            {rightItems.map((item, idx) => (
              <FeatureItem
                key={idx}
                item={item}
                align="left"
                delay={(idx + leftItems.length) * 0.2}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-component for individual feature
function FeatureItem({ item, align, delay }: { item: any, align: 'left' | 'right', delay: number }) {
  const isRightAlign = align === 'right';
  const IconComponent = iconMap[item.title] || ShieldCheck;

  return (
    <motion.div
      initial={{ opacity: 0, x: isRightAlign ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, type: "spring" }}
      viewport={{ once: true, margin: "-50px" }}
      className={`flex items-center gap-6 ${isRightAlign ? "lg:flex-row-reverse text-left lg:text-right" : "flex-row text-left"} group`}
    >
      {/* TEXT CONTENT */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#c22220] transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          {item.desc}
        </p>
      </div>

      {/* ICON BUBBLE */}
      <div className="shrink-0 relative">
        <div className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-red-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#c22220] transition-all duration-300 z-10 relative">
          <IconComponent
            className="w-8 h-8 text-[#c22220] transition-all duration-300 group-hover:text-white group-hover:scale-110"
          />
        </div>
        {/* Pulse Effect on Icon */}
        <div className="absolute inset-0 bg-red-100 rounded-2xl -z-10 animate-ping opacity-0 group-hover:opacity-30" />
      </div>
    </motion.div>
  )
}
