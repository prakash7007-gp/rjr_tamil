"use client";

import { useEffect, useState } from "react";
import { branchesData } from "../data/branchesData";
import { Sparkles } from "lucide-react";

export default function MarqueeBar() {
    const [text, setText] = useState("");

    useEffect(() => {
        const hospitalHighlights = [
            "தென்னிந்தியா முழுவதும் (தமிழ்நாடு, ஆந்திரா, தெலுங்கானா, மகாராஷ்டிரா, கர்நாடகா, பாண்டிச்சேரி) 102+ கிளைகள்.",
            "சொரியாசிஸ், முழங்கால் மூட்டு வலி, ஆஸ்துமா, PCOD, சர்க்கரை நோய், தண்டுவட பிரச்சனைகளுக்கு அறுவை சிகிச்சை இன்றி நிரந்தர தீர்வு.",
            "ஐந்து தலைமுறை (5th Generation) அனுபவத்துடன் 150 ஆண்டுகால மூலிகை வைத்தியப் பாரம்பரியம்.",
            "எந்தப் பக்கவிளைவும் இல்லாமல் நோயின் ஆணிவேருக்கே சிகிச்சை அளிக்கும் RJR மூலிகை மருத்துவம்.",
            "24/7 மருத்துவ ஆலோசனை மற்றும் ஆன்லைன் முன்பதிவு வசதி.",
            "நாடிப் பரிசோதனை முறை மூலம் துல்லியமான நோய் கண்டறிதல் மற்றும் சிகிச்சை."
        ];

        // Combine only highlights
        const combinedText = `🎉 RJR ஹெர்பல் மருத்துவமனைகள் • ${hospitalHighlights.join(" • ")} 🌿`;
        setText(combinedText);
    }, []);

    return (
        <div className="bg-gradient-to-r from-[#8B0000] via-[#c22220] to-[#8B0000] text-yellow-300 overflow-hidden py-3 relative z-[60] border-b-2 border-yellow-500/50 shadow-md flex">
            <style jsx>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
            }
            .animate-marquee {
                will-change: transform;
                animation: marquee 120s linear infinite;
            }
            .animate-marquee:hover {
                animation-play-state: paused;
            }
        `}</style>

            {/* Seamless scrolling wrapper */}
            <div className="flex w-fit items-center">
                {/* First copy */}
                <div className="animate-marquee whitespace-nowrap px-4 font-bold text-base md:text-lg tracking-wider flex items-center flex-shrink-0 drop-shadow-sm gap-4">
                    <Sparkles className="w-5 h-5 text-yellow-200 animate-pulse" />
                    <span>{text}</span>
                    <Sparkles className="w-5 h-5 text-yellow-200 animate-pulse" />
                    <span className="mx-8 text-yellow-500/50 text-xl">✦</span>
                </div>
                {/* Second copy for seamless loop */}
                <div className="animate-marquee whitespace-nowrap px-4 font-bold text-base md:text-lg tracking-wider flex items-center flex-shrink-0 drop-shadow-sm gap-4">
                    <Sparkles className="w-5 h-5 text-yellow-200 animate-pulse" />
                    <span>{text}</span>
                    <Sparkles className="w-5 h-5 text-yellow-200 animate-pulse" />
                    <span className="mx-8 text-yellow-500/50 text-xl">✦</span>
                </div>
            </div>
        </div>
    );
}