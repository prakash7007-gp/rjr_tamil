"use client";

import { useEffect, useRef } from "react";
import {
    Calendar,
    Users,
    BarChart3,
    FlaskConical,
} from "lucide-react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

interface StatsProps {
    data: {
        icon: string;
        value: string;
        label: string;
    }[];
}

function AnimatedNumber({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Extract numeric part and non-numeric parts
    const numericPart = parseFloat(value.replace(/,/g, "")) || 0;
    const prefix = value.match(/^[^\d]+/)?.[0] || "";
    const suffix = value.match(/[^\d,.]+$/)?.[0] || "";
    const hasComma = value.includes(",");

    const count = useMotionValue(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, numericPart, {
                duration: 2, // 2 seconds for a visible but not dragging count
                ease: "easeOut"
            });
            return controls.stop;
        }
    }, [isInView, count, numericPart]);

    useEffect(() => {
        return count.on("change", (latest) => {
            if (ref.current) {
                const val = Math.floor(latest);
                const formatted = hasComma
                    ? val.toLocaleString('en-IN')
                    : val.toString();
                ref.current.textContent = `${prefix}${formatted}${suffix}`;
            }
        });
    }, [count, hasComma, prefix, suffix]);

    return (
        <span ref={ref}>
            {prefix}0{suffix}
        </span>
    );
}

export default function StatsSection({ data }: StatsProps) {
    const iconMap: any = {
        calendar: Calendar,
        users: Users,
        "bar-chart": BarChart3,
        flask: FlaskConical,
    };

    return (
        <section className="bg-[#c22220] py-12 sm:py-16 lg:py-24 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-center opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-10">
                    {data.map((stat, index) => {
                        const IconComp = iconMap[stat.icon];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.2, delay: index * 0.1 }}
                                className="flex flex-col items-center gap-3 sm:gap-4 text-white group"
                            >
                                <div className="p-4 rounded-2xl bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                                    <IconComp size={32} strokeWidth={1.5} className="text-yellow-400 sm:w-10 sm:h-10 lg:w-12 lg:h-12 group-hover:scale-110 transition-transform duration-300" />
                                </div>

                                <motion.h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white flex items-center gap-1">
                                    <AnimatedNumber value={stat.value} />
                                </motion.h3>

                                <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold uppercase tracking-wider text-yellow-100 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
