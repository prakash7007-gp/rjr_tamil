"use client";
import {
    Phone,
    Mail,
    User,
    MapPin,
    PhoneCall,
    MailOpen,
    Clock,
    Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function EnquirePage() {
    return (
        <main className="bg-gray-50 min-h-screen">
            {/* ----------------------------------------------------------- */}
            {/* HERO SECTION */}
            {/* ----------------------------------------------------------- */}
            <section className="bg-emerald-700 py-16 md:py-20 text-center px-4 relative overflow-hidden">
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('/images/contact-shape2.svg')] bg-repeat bg-center"></div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
                        இலவச ஆலோசனை
                    </h1>
                    <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                    <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        எங்கள் மருத்துவ நிபுணர்களுடன் உங்கள் உடல்நலம் குறித்து இலவசமாக கலந்தாலோசிக்கவும்
                    </p>
                </div>
            </section>

            {/* ----------------------------------------------------------- */}
            {/* MAIN CONTENT: INFO & FORM */}
            {/* ----------------------------------------------------------- */}
            <section className="container mx-auto px-4 mt-10 mb-20 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                    {/* LEFT: BENEFITS INFO */}
                    <div className="w-full lg:w-5/12 space-y-8">

                        {/* Benefits Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-emerald-700 mb-6 border-b border-gray-100 pb-4">
                                ஏன் ஆலோசனை பெற வேண்டும்?
                            </h3>

                            <div className="space-y-6">
                                {/* 1 */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-emerald-50 p-3 rounded-full shrink-0">
                                        <Sparkles className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-lg mb-1">துல்லியமான நாடிப் பரிசோதனை</p>
                                        <p className="text-gray-600 leading-relaxed">
                                            வியாதியின் மூல காரணத்தை அறிய உதவும் பாரம்பரிய நாடிப் பரிசோதனை முறை.
                                        </p>
                                    </div>
                                </div>

                                {/* 2 */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-emerald-50 p-3 rounded-full shrink-0">
                                        <User className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-lg mb-1">அனுபவம் வாய்ந்த மருத்துவர்கள்</p>
                                        <p className="text-gray-600">
                                            15+ ஆண்டுகால அனுபவம் கொண்ட சித்த மருத்துவ நிபுணர்களின் நேரடி ஆலோசனை.
                                        </p>
                                    </div>
                                </div>

                                {/* 3 */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-emerald-50 p-3 rounded-full shrink-0">
                                        <Clock className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-lg mb-1">நேர விரயம் இல்லை</p>
                                        <p className="text-gray-600">
                                            உங்கள் வசதிக்கேற்ப தொலைபேசி அல்லது நேரில் சந்திப்பதற்கான முன்பதிவு.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info Mini Card */}
                        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                            <div className="flex items-center gap-4 text-emerald-800">
                                <PhoneCall className="w-8 h-8" />
                                <div>
                                    <p className="text-sm font-bold opacity-70">இப்போதே அழைக்கவும்</p>
                                    <p className="text-xl font-black">+91 7871111115</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT: INQUIRY FORM */}
                    <div className="w-full lg:w-7/12">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-t-8 border-emerald-600">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                ஆலோசனைக்கு பதிவு செய்ய
                            </h3>
                            <p className="text-gray-600 mb-8">
                                கீழுள்ள படிவத்தை நிரப்பவும். உங்கள் உடல்நலம் சார்ந்த விவரங்களை ரகசியமாக பகிரலாம்.
                            </p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">பெயர்</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
                                            placeholder="உங்கள் பெயர்"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">தொலைபேசி எண்</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
                                            placeholder="உங்கள் எண்"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">மின்னஞ்சல் (விருப்பமான)</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
                                        placeholder="example@email.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">சிகிச்சை தேவை / பிரச்சனை</label>
                                    <select
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white text-gray-700"
                                    >
                                        <option>பிரச்சனையைத் தேர்ந்தெடுக்கவும்</option>
                                        <option>மூட்டு வலி / Joint Pain</option>
                                        <option>சரும பிரச்சனை / Skin Issues</option>
                                        <option>நீரிழிவு / Diabetes</option>
                                        <option>PCOD / PCOS</option>
                                        <option>ஆஸ்துமா / Asthma</option>
                                        <option>வேறு / Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">கூடுதல் விவரங்கள்</label>
                                    <textarea
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white resize-y min-h-[120px]"
                                        rows={4}
                                        placeholder="உங்கள் பிரச்சனையை சுருக்கமாக விவரிக்கவும்..."
                                    />
                                </div>

                                <button className="w-full rounded-lg py-4 bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 hover:shadow-lg transform transition-all active:scale-[0.98]">
                                    இலவச ஆலோசனை பெறவும்
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}
