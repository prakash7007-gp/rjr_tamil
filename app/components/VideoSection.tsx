"use client";

export default function VideoSection() {
    return (
        <section className="py-16 bg-white w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#c22220] mb-4">
                        சிகிச்சை வீடியோ
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                        எங்கள் சிகிச்சையின் சிறப்பம்சங்களைப் பாருங்கள்
                    </p>
                </div>

                <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video mb-12">
                    {/* Placeholder for Video - Replace src with actual video URL */}
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/shorts/wbDLSviL2eg"
                        title="Treatment Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Success Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {/* Story 1: Asthma */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-[#c22220] mb-2 flex items-center gap-2">
                            <span>🫁</span> ஆஸ்துமா (Asthma)
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            "ஆஸ்துமா பிரச்சனையால் அவதிப்பட்டவர்கள், எங்கள் சிகிச்சைக்குப் பின் முழுமையாக குணமடைந்துள்ளனர். இன்ஹேலர் பயன்பாடு முற்றிலும் நின்றுவிட்டது."
                        </p>
                    </div>

                    {/* Story 2: Knee Pain */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-[#c22220] mb-2 flex items-center gap-2">
                            <span>🦵</span> மூட்டு வலி (Knee Pain)
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            "மூட்டு மாற்று அறுவை சிகிச்சை பரிந்துரைக்கப்பட்டவர்கள் கூட, எங்களின் மூலிகை சிகிச்சையால் மூட்டு வலியில் இருந்து முழுமையான நிவாரணம் பெற்றுள்ளனர்."
                        </p>
                    </div>

                    {/* Story 3: Psoriasis */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-[#c22220] mb-2 flex items-center gap-2">
                            <span>✨</span> சொரியாசிஸ் (Psoriasis)
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            "வெகுகாலமாக இருந்த சொரியாசிஸ் தோல் நோயும், எங்களின் சில மாத சிகிச்சையில் முழுமையாக குணமடைந்து, மீண்டும் வராமல் தடுக்கப்பட்டுள்ளது."
                        </p>
                    </div>

                    {/* Story 4: Arthritis */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-[#c22220] mb-2 flex items-center gap-2">
                            <span>🦴</span> முடக்கு வாதம் (Arthritis)
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            "முடக்கு வாதம் மற்றும் மூட்டு வலி உள்ளவர்கள், குறுகிய காலத்தில் நல்ல முன்னேற்றத்தை கண்டு, வலியற்ற வாழ்க்கைக்கு திரும்பியுள்ளனர்."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
