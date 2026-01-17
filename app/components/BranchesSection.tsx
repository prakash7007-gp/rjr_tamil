"use client";

import { useState } from "react";
import Image from "next/image";
import { branchesData } from "../data/branchesData";
import { MapPin, Phone, User } from "lucide-react";
import Link from "next/link";

export default function BranchesSection() {
    const [activeRegion, setActiveRegion] = useState(branchesData[0].name);

    // Get current region data
    const currentRegion = branchesData.find((r) => r.name === activeRegion) || branchesData[0];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* HEADER */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#c22220] mb-4">
                        Our Branches
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We have a vast network of branches across multiple states to serve you better.
                        Find the nearest RJR Herbal Hospital to you.
                    </p>
                </div>

                {/* REGION TABS */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {branchesData.map((region) => (
                        <button
                            key={region.name}
                            onClick={() => setActiveRegion(region.name)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all shadow-sm border ${activeRegion === region.name
                                ? "bg-[#c22220] text-white border-[#c22220] shadow-md"
                                : "bg-white text-gray-700 border-gray-200 hover:border-[#c22220] hover:text-[#c22220]"
                                }`}
                        >
                            {region.name} <span className="text-xs ml-1 opacity-80">({region.count})</span>
                        </button>
                    ))}
                </div>

                {/* BRANCHES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentRegion.branches.map((branch, index) => (
                        <Link
                            href={`/branches/${branch.id}`}
                            key={branch.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 block border border-gray-100 flex flex-col group cursor-pointer"
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

                            {/* MAP SECTION POINTER (Visual only as clicking map might capture click) */}
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
                            <div className="p-4 flex gap-4 items-center">
                                {/* DOCTOR IMAGE */}
                                <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-yellow-400 flex-shrink-0 bg-gray-100">
                                    {/* Placeholder content if image fails or for design */}
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                                        <User size={24} />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Doctor In-Charge</p>
                                    <p className="font-bold text-gray-900">{branch.doctorName}</p>
                                    <div className="text-sm text-[#c22220] font-medium flex items-center gap-1 mt-1">
                                        <Phone size={14} /> {branch.phone}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
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
