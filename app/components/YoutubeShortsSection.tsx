"use client";

import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";

const channels = [
    {
        name: "RJR Cured Patients",
        handle: "@rjrcuredpatientstamil",
        url: "https://www.youtube.com/@rjrcuredpatientstamil/shorts",
        videos: [
            { id: "MyGkk0ZcvLo", title: "Skin Treatment Success" },
            { id: "6zep2zB-Tcg", title: "Psoriasis Recovery" },
            { id: "CBe-oQcazhc", title: "Patient Testimony" },
            { id: "MKXs41ICdeo", title: "Advanced Healing" }
        ]
    },
    {
        name: "Herbal Tips",
        handle: "@rjrherbalhospitals",
        url: "https://www.youtube.com/@rjrherbalhospitals/shorts",
        videos: [
            { id: "65iEbHrk3LM", title: "Nasal Polyps Tips" },
            { id: "AZJeE5o-yv8", title: "Joint Pain Relief" },
            { id: "3LK2sq5TW3A", title: "Psoriasis Care" },
            { id: "aAtl24wmpqI", title: "Knee Pain Solution" }
        ]
    }
];

export default function YoutubeShortsSection() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#c22220] font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Video Success Stories & Tips
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
                    >
                        எங்கள் <span className="text-[#c22220]">யூடியூப்</span> சேனல்கள்
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-[#fdc700] mx-auto rounded-full" />
                </div>

                <div className="space-y-20">
                    {channels.map((channel, cIdx) => (
                        <div key={channel.handle} className="relative">
                            <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{channel.name}</h3>
                                    <p className="text-[#c22220] font-medium">{channel.handle}</p>
                                </div>
                                <a
                                    href={channel.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 bg-white border-2 border-[#c22220] text-[#c22220] px-6 py-3 rounded-full font-bold hover:bg-[#c22220] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#c22220]/20"
                                >
                                    Subscribe Now
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {channel.videos.map((video, vIdx) => (
                                    <motion.div
                                        key={video.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: vIdx * 0.1 }}
                                        className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-black group border-4 border-white"
                                    >
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                                            className="absolute inset-0 w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-white font-bold text-sm leading-tight">{video.title}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
