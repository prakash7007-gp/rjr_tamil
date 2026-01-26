"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowUp } from "lucide-react";

export default function FloatingActionButtons() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    const [scrollProgress, setScrollProgress] = useState(0);

    // Toggle visibility of Scroll-to-Top button and update progress
    useEffect(() => {
        const handleScroll = () => {
            // Visibility Check
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }

            // Progress Calculation
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollProgress(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const phoneNumber = "917871111115"; // Using Headquarters number
    const whatsappNumber = "917871111115";

    return (
        <>
            {/* Desktop & Tab View (md and up) */}
            <div className="hidden md:block z-[9999]">
                {/* Phone - Left Corner (Bottom Left) */}
                <a
                    href={`tel:${phoneNumber}`}
                    className="fixed bottom-6 left-6 z-[9999] bg-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 border-2 border-green-500 group flex items-center justify-center w-14 h-14"
                    aria-label="Call us"
                >
                    <Phone className="w-7 h-7 text-green-600 fill-green-100" />
                </a>

                {/* WhatsApp - Right Corner (Bottom Right) */}
                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 z-[9999] bg-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 border-2 border-green-500 flex items-center justify-center w-14 h-14"
                    aria-label="WhatsApp"
                >
                    <WhatsAppIcon />
                </a>


            </div>

            {/* Scroll Top - Global (Right Corner) */}
            <div
                className={`fixed bottom-4 right-4 md:bottom-24 md:right-6 z-[9999] transition-opacity duration-300 ${showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                <button
                    onClick={scrollToTop}
                    className="relative bg-white rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center w-12 h-12 border-2 border-white"
                    aria-label="Scroll to top"
                >
                    {/* Progress Border SVG */}
                    <svg className="absolute w-full h-full -rotate-90" width="48" height="48" viewBox="0 0 48 48">
                        <circle
                            cx="24"
                            cy="24"
                            r="22"
                            fill="none"
                            stroke="#fee2e2" // Light red for background track
                            strokeWidth="3"
                        />
                        <circle
                            cx="24"
                            cy="24"
                            r="22"
                            fill="none"
                            stroke="#ef4444" // Red-500
                            strokeWidth="3"
                            strokeDasharray="138.23" // 2 * PI * 22
                            strokeDashoffset={138.23 - (138.23 * scrollProgress) / 100}
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Arrow Icon */}
                    <ArrowUp className="w-6 h-6 text-red-600 z-10" />
                </button>
            </div>

            {/* Mobile View (< md) */}
            <div className="md:hidden fixed bottom-4 left-4 z-[9999] flex flex-col gap-3">
                {/* WhatsApp (Top in stack) */}
                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full shadow-xl border-2 border-green-500 flex items-center justify-center w-12 h-12"
                    aria-label="WhatsApp"
                >
                    <WhatsAppIcon />
                </a>

                {/* Phone (Bottom in stack) */}
                <a
                    href={`tel:${phoneNumber}`}
                    className="bg-white p-3 rounded-full shadow-xl border-2 border-green-500 flex items-center justify-center w-12 h-12"
                    aria-label="Call us"
                >
                    <Phone className="w-6 h-6 text-green-600 fill-green-100" />
                </a>
            </div>
        </>
    );
}

function WhatsAppIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#25D366" // WhatsApp Green
            stroke="none"
            className="w-full h-full"
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}