import { Metadata } from "next";
import Image from "next/image";
import { Search, Leaf, Droplets, Sun, Wind, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Herbal Health Tips & Home Remedies | Siddha Medicine in Tamil",
    description: "Discover simple and effective herbal remedies for cough, throat pain, cold, and indigestion. Authentic Siddha medicine and Patti Vaithiyam tips for daily wellness from RJR Herbal Hospitals.",
    keywords: ["herbal tips tamil", "home remedies for cough", "siddha medicine tips", "natural healing", "patti vaithiyam for cold", "herbal health guide"],
};

const tips = [
    {
        id: "cough",
        title: "இருமல் (Cough)",
        icon: <Wind className="w-8 h-8 text-blue-500" />,
        remedy: "மிளகு பால்",
        ingredients: ["மிளகு தூள் - 1/2 தேக்கரண்டி", "மஞ்சள் தூள் - 1/4 தேக்கரண்டி", "பனங்கற்கண்டு - தேவைக்கேற்ப", "பால் - 1 டம்ளர்"],
        instructions: "வாணலியில் மிளகு தூள், மஞ்சள் தூள் மற்றும் பனங்கற்கண்டு சேர்த்து பாலில் நன்கு காய்ச்சி குடிக்கவும். இது வறட்டு இருமல் மற்றும் சளிக்கு சிறந்த நிவாரணம் அளிக்கும்.",
        color: "bg-blue-50 border-blue-100"
    },
    {
        id: "throat-pain",
        title: "தொண்டை வலி (Throat Pain)",
        icon: <Droplets className="w-8 h-8 text-red-500" />,
        remedy: "உப்பு நீர் கொப்பளித்தல்",
        ingredients: ["கல்லுப்பு - 1 தேக்கரண்டி", "வெதுவெதுப்பான நீர் - 1 டம்ளர்", "மஞ்சள் - சிறிது"],
        instructions: "வெதுவெதுப்பான நீரில் கல்லுப்பு மற்றும் சிறிது மஞ்சள் கலந்து, அந்த நீரை தொண்டையில் படுமாறு நன்கு கொப்பளிக்கவும் (Gargle). இதை தினமும் காலை மற்றும் இரவு செய்து வந்தால் தொண்டை வலி, கரகரப்பு நீங்கும்.",
        color: "bg-red-50 border-red-100"
    },
    {
        id: "cold",
        title: "ஜலதோஷம் (Cold)",
        icon: <Leaf className="w-8 h-8 text-emerald-500" />,
        remedy: "துளசி கஷாயம்",
        ingredients: ["துளசி இலைகள் - 10", "மிளகு - 5", "இஞ்சி - சிறு துண்டு", "தேன் - 1 தேக்கரண்டி"],
        instructions: "துளசி, மிளகு, இஞ்சி ஆகியவற்றை நீரில் போட்டு நன்கு கொதிக்க வைத்து, வடிகட்டி அதனுடன் தேன் கலந்து குடிக்கவும். இது நெஞ்சு சளியை கரைத்து ஜலதோஷத்தை போக்கும்.",
        color: "bg-emerald-50 border-emerald-100"
    },
    {
        id: "indigestion",
        title: "அஜீரணம் (Indigestion)",
        icon: <Sun className="w-8 h-8 text-orange-500" />,
        remedy: "இஞ்சி சாறு & தேன்",
        ingredients: ["இஞ்சி சாறு - 1 தேக்கரண்டி", "தேன் - 1 தேக்கரண்டி", "எலுமிச்சை சாறு - சிறிது"],
        instructions: "இஞ்சி சாறுடன் சம அளவு தேன் மற்றும் சிறிது எலுமிச்சை சாறு கலந்து உணவுக்கு முன் அருந்தவும். இது செரிமானத்தை தூண்டி, பசியின்மையைப் போக்கும்.",
        color: "bg-orange-50 border-orange-100"
    }
];

export default function HerbalTipsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-900 to-emerald-800 py-20 px-6 overflow-hidden">
                {/* Abstract Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-emerald-800/50 border border-emerald-700/50 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                        <Leaf className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-100 text-sm font-medium">இயற்கை மருத்துவம்</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        எளிய <span className="text-yellow-400">மூலிகை மருத்துவ</span> குறிப்புகள்
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        தினசரி வாழ்வில் ஏற்படும் சிறு உடல்நலக் கோளாறுகளுக்கு நம் வீட்டிலேயே செய்யக்கூடிய எளிய மற்றும் பாதுகாப்பான பாட்டி வைத்தியங்கள்.
                    </p>

                    {/* Search Bar Placeholder (Visual only for now) */}
                    <div className="max-w-xl mx-auto relative group">
                        <div className="absolute inset-0 bg-emerald-400 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative bg-white rounded-full p-2 flex items-center shadow-xl">
                            <Search className="w-6 h-6 text-slate-400 ml-4" />
                            <input
                                type="text"
                                placeholder="எந்த நோய்க்கு தீர்வு வேண்டும்? (எ.கா: இருமல்)"
                                className="w-full px-4 py-2 outline-none text-slate-700 placeholder:text-slate-400 bg-transparent"
                            />
                            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                                தேடுக
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tips.map((tip) => (
                        <div key={tip.id} className={`rounded-3xl p-8 border ${tip.color} hover:shadow-lg transition-all duration-300 bg-white group`}>
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                                    {tip.icon}
                                </div>
                                <div className="bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wide">
                                    Home Remedy
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                {tip.title}
                            </h2>
                            <p className="text-slate-500 font-medium mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                தீர்வு: {tip.remedy}
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <Leaf className="w-4 h-4 text-emerald-500" />
                                        தேவையான பொருட்கள்
                                    </h3>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {tip.ingredients.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-slate-600 text-sm bg-slate-50 p-2 rounded-lg">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <Sun className="w-4 h-4 text-orange-500" />
                                        செய்முறை
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm">
                                        {tip.instructions}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Disclaimer */}
                <div className="mt-16 bg-amber-50 border border-amber-100 rounded-2xl p-6 flex gap-4 items-start">
                    <div className="p-2 bg-amber-100 rounded-full shrink-0">
                        <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-amber-800 mb-1">முக்கிய குறிப்பு</h4>
                        <p className="text-amber-700 text-sm leading-relaxed">
                            இவை அனைத்தும் முதலுதவி மற்றும் சிறு உபாதைகளுக்கான பாட்டி வைத்தியக் குறிப்புகளே. தொடர்ந்து பிரச்சனை இருந்தால் அல்லது தீவிர உடல்நலக் குறைவு ஏற்பட்டால் உடனடியாக மருத்துவரை அணுகவும். சுய மருத்துவம் தீவிர நோய்களுக்குத் தீர்வாகாது.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
