"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { branchesData } from "../data/branchesData";
import { MapPin, Phone, User } from "lucide-react";
import Link from "next/link";

export default function BranchesSection() {
    const [activeRegion, setActiveRegion] = useState(branchesData[0].name);

    // Get current region data
    const currentRegion = branchesData.find((r) => r.name === activeRegion) || branchesData[0];

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* REGION TABS - Enhanced Styling */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {branchesData.map((region, idx) => (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            key={region.name}
                            onClick={() => setActiveRegion(region.name)}
                            className={`px-8 py-3 rounded-full font-bold text-sm transition-all shadow-sm border-2 ${activeRegion === region.name
                                ? "bg-[#c22220] text-white border-[#c22220] shadow-xl scale-105"
                                : "bg-white text-gray-600 border-gray-100 hover:border-[#c22220] hover:text-[#c22220] hover:bg-red-50"
                                }`}
                        >
                            {region.name}
                            <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] ${activeRegion === region.name ? 'bg-yellow-400 text-black' : 'bg-gray-100 text-gray-500'}`}>
                                {region.count}
                            </span>
                        </motion.button>
                    ))}
                </div>

                {/* BRANCHES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {currentRegion.branches.map((branch, index) => (
                            <motion.div
                                key={branch.id}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <Link
                                    href={`/branches/${branch.id}`}
                                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 block border border-gray-100 h-full flex flex-col group cursor-pointer"
                                >
                                    {/* BRANCH HEADER */}
                                    <div className="p-4 bg-gray-50 border-b flex justify-between items-start group-hover:bg-red-50/50 transition-colors">
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2 group-hover:text-[#c22220] transition-colors">
                                                <MapPin size={18} className="text-[#c22220]" />
                                                {branch.city}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1 ml-6">{branch.address}</p>
                                        </div>
                                    </div>

                                    {/* MAP SECTION POINTER */}
                                    <div className="h-48 w-full bg-gray-200 relative pointer-events-none">
                                        <iframe
                                            src={branch.mapUrl}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen={false}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="absolute inset-0 w-full h-full"
                                        ></iframe>
                                    </div>

                                    {/* DOCTOR & CONTENT */}
                                    <div className="p-4 flex gap-4 items-center bg-gray-50">
                                        <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-yellow-400 flex-shrink-0 bg-gray-100">
                                            {branch.doctors?.[0]?.image ? (
                                                <Image
                                                    src={branch.doctors[0].image}
                                                    alt={branch.doctors[0].name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                                                    <User size={24} />
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Doctor In-Charge</p>
                                            <p className="font-bold text-gray-900">
                                                {branch.doctors?.[0]?.name ?
                                                    branch.doctors[0].name.replace(/^DR\./i, 'Dr.').replace(/^DR\s/i, 'Dr. ') :
                                                    "Specialist"}
                                            </p>
                                            <div className="text-sm text-[#c22220] font-medium flex items-center gap-1 mt-1">
                                                <Phone size={14} /> {branch.phone}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* SHOW MORE/LESS (Optional logic could be added here if list is too long) */}
                {currentRegion.count > 6 && (
                    <div className="mt-8 text-center text-gray-500 text-sm">
                        Showing all {currentRegion.count} branches in {currentRegion.name}
                    </div>
                )}
            </div>
        </section>
    );
}
