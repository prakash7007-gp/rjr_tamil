import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTreatments } from "../lib/loadData";
import { Stethoscope, UserCheck, Clock, Leaf } from "lucide-react";
import TreatmentsGrid from "./TreatmentsGrid";

export const metadata: Metadata = {
  title: "Specialized Ayurveda & Siddha Treatments | Traditional Healing",
  description: "Explore our wide range of traditional Siddha and Ayurveda treatments at RJR Herbal Hospitals. We provide natural solutions for chronic ailments, joint pains, skin issues, and wellness therapies with 150 years of legacy.",
  keywords: [
    "Ayurveda treatments Tamil Nadu",
    "Siddha medicine specialist",
    "Herbal hospital Chennai",
    "Natural cure for chronic diseases",
    "Traditional healing India"
  ],
};

export default async function TreatmentsPage() {
  const treatments = await getTreatments();

  const stats = [
    { icon: Stethoscope, label: "சிகிச்சைகள்", value: "50+" },
    { icon: UserCheck, label: "நிபுணர்கள்", value: "20+" },
    { icon: Clock, label: "ஆதரவு", value: "24/7" },
    { icon: Leaf, label: "இயற்கை மருத்துவம்", value: "100%" },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO SECTION */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#c22220] via-[#a01b1a] to-[#7a1211]" />

        {/* Pattern Overlay (Optional for texture) */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/hero/pattern.png')] bg-repeat" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-[#c22220]/20 border border-[#c22220]/30 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
            பாரம்பரிய சித்த மருத்துவம்
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            எங்கள் சிறப்பு <span className="text-yellow-300">சிகிச்சைகள்</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            நவீன வசதிகளுடன் கூடிய பாரம்பரிய சித்த மருத்துவ சிகிச்சைகள் மூலம்
            நலம் பெறுங்கள்
          </p>
        </div>
      </section>

      {/* STATS SECTION (Overlapping) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 -mt-16 mb-12">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="w-12 h-12 rounded-full bg-[#c22220]/10 flex items-center justify-center text-[#c22220] mb-2">
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TREATMENTS GRID */}
      <section className="py-12 pb-24 min-h-screen">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            வழங்கப்படும் சிகிச்சைகள்
          </h2>
          <div className="w-20 h-1 bg-[#c22220] mx-auto rounded-full" />
        </div>
        <TreatmentsGrid treatments={treatments} />
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#1a1a1a] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c22220] rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c22220] rounded-full blur-[100px] opacity-20" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            உடல் நலப் பிரச்சனைகளுக்கு தீர்வு காண தயாரா?
          </h2>
          <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            எங்கள் மருத்துவ நிபுணர்களுடன் கலந்தாலோசித்து, உங்களுக்கானச் சிறந்த
            சிகிச்சை முறையைத் தேர்ந்தெடுங்கள்.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#c22220] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#a01b1a] transition-colors"
            >
              தொடர்பு கொள்ள
            </Link>
            <Link
              href="/enquire"
              className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors"
            >
              இலவச ஆலோசனை
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
