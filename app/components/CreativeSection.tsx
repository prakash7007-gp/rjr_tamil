"use client";

import { Award, Users, Calendar, Sparkles, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function CreativeSection({ data }: { data: any }) {
    const mainStats = [
        {
            label: "ஆண்டுகள் பாரம்பரியம்",
            value: "150+",
            icon: <Calendar className="w-6 h-6" />,
            color: "bg-blue-50 text-blue-600",
        },
        {
            label: "சிகிச்சை பெற்ற நோயாளிகள்",
            value: "60L+",
            icon: <Users className="w-6 h-6" />,
            color: "bg-green-50 text-green-600",
        },
        {
            label: "வெற்றி விகிதம்",
            value: "98%",
            icon: <Award className="w-6 h-6" />,
            color: "bg-purple-50 text-purple-600",
        },
        {
            label: "மூலிகை சிகிச்சைகள்",
            value: "50+",
            icon: <Sparkles className="w-6 h-6" />,
            color: "bg-orange-50 text-orange-600",
        },
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-white">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-[#c22220] text-sm font-semibold tracking-wide uppercase">
                            <Sparkles className="w-4 h-4 mr-2" />
                            தலைமுறை கடந்த நம்பிக்கை
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                            150 ஆண்டுகால <span className="text-[#c22220]">பாரம்பரியம்</span>,
                            நவீன தொழில்நுட்பத்துடன்.
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            ஐந்து தலைமுறைகளாகத் தொடர்ந்து வரும் எங்களின் சித்த மருத்துவப் பயணம், பல லட்சம் மக்களின் வாழ்வில் ஆரோக்கிய ஒளியை ஏற்றியுள்ளது. இயற்கையின் சக்தியை அறிவியலோடு இணைத்து, நாங்கள் வழங்கும் சிகிச்சைகள் நிரந்தரத் தீர்வை அளிக்கின்றன.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="px-8 py-4 bg-[#c22220] text-white rounded-xl font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-all hover:scale-105 flex items-center group">
                                நிபுணரை அணுகவும்
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-xl font-bold hover:bg-gray-50 transition-all">
                                எங்கள் வரலாறு
                            </button>
                        </div>
                    </div>

                    {/* Right Visuals - Stats Cards */}
                    <div className="grid grid-cols-2 gap-6">
                        {mainStats.map((stat, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-b-4 border-transparent hover:border-[#c22220] shadow-xl shadow-gray-100 bg-white ${index % 2 === 1 ? 'lg:translate-y-8' : ''}`}
                            >
                                <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center mb-6`}>
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-gray-500 font-medium leading-tight">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Bottom Banner Component (Optional integration look) */}
                <div className="mt-24 p-8 sm:p-12 rounded-[2rem] bg-gradient-to-br from-[#c22220] to-red-800 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl text-center md:text-left">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4">உங்கள் ஆரோக்கியம், எங்கள் பொறுப்பு.</h3>
                            <p className="text-red-100 text-lg opacity-90">
                                இன்றே எங்களை அணுகி, பக்கவிளைவுகள் அற்ற இயற்கை மருத்துவத்தின் பலன்களைப் பெறுங்கள்.
                            </p>
                        </div>
                        <button className="whitespace-nowrap px-10 py-5 bg-white text-[#c22220] rounded-2xl font-black text-lg hover:bg-red-50 transition-colors shadow-2xl">
                            இலவச ஆலோசனை
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
