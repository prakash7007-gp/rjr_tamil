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

                <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
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
            </div>
        </section>
    );
}
