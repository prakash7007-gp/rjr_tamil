import { branchesData } from "../../data/branchesData";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin, Phone, User, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getData } from "../../lib/loadData";
import DoctorSection from "../../components/DoctorSection";

// Helper to find a branch by ID across all regions
const getBranchById = (id: string) => {
    for (const region of branchesData) {
        const branch = region.branches.find((b) => b.id === id);
        if (branch) return { branch, regionName: region.name };
    }
    return null;
};

// Generate all possible branch paths at build time
export async function generateStaticParams() {
    const params = [];
    for (const region of branchesData) {
        for (const branch of region.branches) {
            params.push({ branchId: branch.id });
        }
    }
    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ branchId: string }> }) {
    const resolvedParams = await params;
    const data = getBranchById(resolvedParams.branchId);
    if (!data) return { title: "Branch Not Found" };

    return {
        title: `${data.branch.city} Branch | Best Siddha & Ayurveda Treatment in ${data.regionName}`,
        description: `Visit RJR Herbal Hospitals in ${data.branch.city}, ${data.regionName}. We offer traditional Siddha and Ayurveda treatments for Asthma, Psoriasis, and Arthritis under the care of ${data.branch.doctorName}. Contact: ${data.branch.phone}`,
        keywords: [
            `${data.branch.city} Ayurveda hospital`,
            `Siddha medicine ${data.branch.city}`,
            `Ayurvedic clinic in ${data.branch.city}`,
            `Best herbal hospital ${data.regionName}`,
            `Natural treatment ${data.branch.city}`
        ]
    };
}

export default async function BranchDetailPage(props: { params: Promise<{ branchId: string }> }) {
    const params = await props.params;
    const data = getBranchById(params.branchId);
    const siteData = await getData();

    if (!data) {
        notFound();
    }

    const { branch, regionName } = data;
    const isChennai = branch.id === "chennai";

    return (
        <main className="bg-gray-50 min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Breadcrumb / Back */}
                <div className="mb-6">
                    <Link href="/branches" className="inline-flex items-center text-gray-600 hover:text-[#c22220] transition font-medium">
                        <ArrowLeft size={18} className="mr-2" /> Back to All Branches
                    </Link>
                </div>

                {/* HEADER SECTION */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <span className="inline-block px-3 py-1 bg-red-50 text-[#c22220] rounded-full text-sm font-bold tracking-wide mb-3">
                                {regionName}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                                {branch.city} Branch
                            </h1>
                            <p className="text-lg text-gray-600 flex items-center gap-2">
                                <MapPin size={20} className="text-[#c22220]" />
                                {branch.address}
                            </p>
                        </div>

                        <a
                            href={`tel:${branch.phone}`}
                            className="bg-[#c22220] hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition flex items-center gap-2"
                        >
                            <Phone size={20} />
                            Call Now
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* LEFT COLUMN - MAIN INFO & MAP */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* MAP CARD */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-4 border-b border-gray-100 bg-gray-50">
                                <h2 className="font-bold text-xl text-gray-800">Location Map</h2>
                            </div>
                            <div className="w-full h-[400px] relative bg-gray-200">
                                <iframe
                                    src={branch.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            </div>
                        </div>

                        {/* FACILITIES / ABOUT (Placeholder) */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">About this Branch</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Welcome to our RJR Herbal Hospital in {branch.city}. We provide world-class herbal treatments
                                for various ailments including Asthma, Psoriasis, Arthritis, and more. Our facility is equipped
                                with modern amenities and staffed by experienced professionals dedicated to your well-being.
                            </p>

                            <h4 className="font-bold text-gray-800 mb-3">Treatments Available Here:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                                {["Asthma Care", "Psoriasis Treatment", "Arthritis Relief", "Diabetes Management", "Hypertension", "Skin Care", "Joint Pain", "General Wellness"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#c22220]"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* DUMMY REVIEWS */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Patient Reviews</h3>
                            <div className="space-y-6">
                                {[1, 2].map((i) => (
                                    <div key={i} className="border-b last:border-0 pb-6 last:pb-0">
                                        <div className="flex items-center gap-1 text-yellow-500 mb-2">
                                            {"★".repeat(5)}
                                        </div>
                                        <p className="text-gray-600 italic mb-3">
                                            "Excellent treatment and very caring staff. The doctor at {branch.city} branch was very knowledgeable and helped me recover quickly."
                                        </p>
                                        <p className="text-sm font-bold text-gray-800">- Happy Patient</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - DOCTOR & HOURS */}
                    <div className="space-y-8">
                        {/* DOCTOR PROFILE - Only show if not Chennai (Chennai shows full team below) */}
                        {!isChennai && (
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#c22220]/10 to-transparent"></div>

                                <div className="w-32 h-32 mx-auto relative rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100 mb-4 z-10">
                                    {/* Use next/image correctly if you have real images, for now placeholder */}
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                                        <User size={48} />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900">{branch.doctorName}</h3>
                                <p className="text-[#c22220] font-medium mb-4">Senior Consultant</p>

                                <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                                    "Dedicated to providing the best herbal care with over 15 years of experience."
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-500 text-sm">Experience</span>
                                        <span className="font-bold text-gray-800">15+ Years</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 text-sm">Languages</span>
                                        <span className="font-bold text-gray-800">Tamil, English</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TIMINGS */}
                        <div className="bg-[#c22220] text-white rounded-2xl shadow-lg p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="w-6 h-6 text-yellow-400" />
                                <h3 className="text-xl font-bold">Opening Hours</h3>
                            </div>

                            <div className="space-y-3 font-medium opacity-90">
                                <div className="flex justify-between border-b border-white/20 pb-2">
                                    <span>Monday - Saturday</span>
                                    <span>9:00 AM - 7:00 PM</span>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <span>Sunday</span>
                                    <span>9:00 AM - 1:00 PM</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/20 text-center">
                                <p className="text-yellow-400 text-sm font-semibold">Emergency? Call us anytime.</p>
                                <p className="text-2xl font-bold mt-1">{branch.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DOCTOR TEAM SECTION - ONLY FOR CHENNAI */}
                {isChennai && (
                    <div className="mt-12">
                        <DoctorSection data={siteData.doctors} />
                    </div>
                )}
            </div>
        </main>
    );
}
