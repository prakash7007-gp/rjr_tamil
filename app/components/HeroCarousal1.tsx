import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full">
            {/* Background Image */}
            <Image
                src="/images/RJR. 6.jpg" // put image in public folder
                alt="Doctor consulting patient"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 " />

            {/* Content */}
            <div className="relative z-10 h-full flex items-end">
                <div className="max-w-2xl mx-auto px-6 mt-100">
                    <div className="max-w-xl text-white">
                        <p className="text-4xl text-[#c22220] uppercase tracking-wide mb-2">
                            150 -ஆண்டுகால பாரம்பரிய அனுபவம்
                        </p>

                        <h1 className="text-sm md:text-xl font-extrabold leading-tight mb-6">
                            150 -ஆண்டுகால பாரம்பரிய அனுபவ மூலிகை  செய்முறைகள் மூலம் தயாரிக்கப்பட்ட எங்கள் மருந்துகள்,எந்தப் பக்கவிளைவும் இல்லாமல், நோயின் மூலத்தை முழுமையாக நீக்குகின்றன.மீண்டும் நோய்  திரும்ப வராத ஆரோக்கியமான வாழ்க்கையை RJR மூலிகை மருத்துவம் உங்களுக்கு உறுதியளிக்கிறது.
                        </h1>

                       
                    </div>
                </div>
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                <span className="w-2 h-2 rounded-full bg-white/50"></span>
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="w-2 h-2 rounded-full bg-white/50"></span>
            </div>
        </section>
    );
}
