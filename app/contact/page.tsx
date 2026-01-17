"use client";
import {
  Phone,
  Mail,
  User,
  MapPin,
  PhoneCall,
  MailOpen,
  Clock,
} from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* ----------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ----------------------------------------------------------- */}
      <section className="bg-[#C22220] py-16 md:py-20 text-center px-4 relative overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/contact-shape2.svg')] bg-repeat bg-center"></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
            தொடர்பு கொள்ள
          </h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            உங்கள் சந்தேகங்கள் மற்றும் ஆலோசனைகள் தொடர்பில் எங்களை அணுகவும்
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* MAIN CONTENT: INFO & FORM */}
      {/* ----------------------------------------------------------- */}
      <section className="container mx-auto px-4 mt-10 mb-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* LEFT: CONTACT INFO & MAP */}
          <div className="w-full lg:w-5/12 space-y-8">

            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#C22220] mb-6 border-b border-gray-100 pb-4">
                முகவரி & விவரங்கள்
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-full shrink-0">
                    <MapPin className="w-6 h-6 text-[#C22220]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg mb-1">முகவரி</p>
                    <p className="text-gray-600 leading-relaxed">
                      150, ஹபிபுல்‌லா ரோடு, டி நகர்,<br />
                      நார்த் உஸ்மான் ரோட் போஸ்ட் ஆபிஸ் பின்,<br />
                      சென்னை – 600017.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-full shrink-0">
                    <PhoneCall className="w-6 h-6 text-[#C22220]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg mb-1">தொலைபேசி</p>
                    <p className="text-gray-600 text-lg font-medium">
                      +91 7871111115
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-full shrink-0">
                    <MailOpen className="w-6 h-6 text-[#C22220]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg mb-1">மின்னஞ்சல்</p>
                    <p className="text-gray-600 break-all">
                      care@rjrherbalhospitals.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[300px] border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.758115990716!2d80.23218957500569!3d13.051062713131277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526658e09bc2b3%3A0xc767516c7971e56e!2sRJR%20Herbal%20Hospitals%20-%20T%20Nagar!5e0!3m2!1sen!2sin!4v1765626551925!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

          </div>

          {/* RIGHT: INQUIRY FORM */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-t-8 border-[#C22220]">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                நியமனத்தை பதிவு செய்யவும்
              </h3>
              <p className="text-gray-600 mb-8">
                கீழுள்ள படிவத்தை நிரப்பவும். எங்கள் மருத்துவக் குழு உங்களை விரைவில் தொடர்பு கொள்ளும்.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">பெயர்</label>
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#C22220] focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
                      placeholder="உங்கள் பெயர்"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">தொலைபேசி எண்</label>
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#C22220] focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
                      placeholder="உங்கள் எண்"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">மின்னஞ்சல்</label>
                  <input
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#C22220] focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">தகவல் / சந்தேகம்</label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#C22220] focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white resize-y min-h-[120px]"
                    rows={4}
                    placeholder="உங்கள் செய்தியை இங்கே தட்டச்சு செய்யவும்..."
                  />
                </div>

                <button className="w-full rounded-lg py-4 bg-[#C22220] text-white font-bold text-lg hover:bg-[#a01b1a] hover:shadow-lg transform transition-all active:scale-[0.98]">
                  செய்தி அனுப்பவும்
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>


      {/* ----------------------------------------------------------- */}
      {/* HIGHLIGHTS SECTION */}
      {/* ----------------------------------------------------------- */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Experience */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-red-100 transition-all duration-300 group">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C22220] transition-colors duration-300">
              <Clock className="w-7 h-7 text-[#C22220] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C22220] transition-colors">அனுபவம்</h3>
            <p className="text-gray-600 leading-relaxed">
              150+ ஆண்டுகளுக்கும் மேலான பாரம்பரிய சித்தா & ஆயுர்வேத மருத்துவ அனுபவம்.
            </p>
          </div>

          {/* Natural */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-red-100 transition-all duration-300 group">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C22220] transition-colors duration-300">
              <User className="w-7 h-7 text-[#C22220] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C22220] transition-colors">இயற்கை சிகிச்சை</h3>
            <p className="text-gray-600 leading-relaxed">
              ரசாயனங்கள் இல்லாமல், இயற்கை மூலிகைகள் மூலம் பாதுகாப்பான சிகிச்சை.
            </p>
          </div>

          {/* Trust */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-red-100 transition-all duration-300 group">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C22220] transition-colors duration-300">
              <User className="w-7 h-7 text-[#C22220] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C22220] transition-colors">நம்பகத்தன்மை</h3>
            <p className="text-gray-600 leading-relaxed">
              ஒவ்வொரு நோயாளிக்கும் தனிப்பட்ட கவனம் மற்றும் தொடர்ச்சியான பராமரிப்பு.
            </p>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* CEO QUOTE SECTION */}
      {/* ----------------------------------------------------------- */}
      <section className="bg-gray-900 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <Image src="/images/testimonial-icon.png" alt="Quote" width={48} height={48} className="opacity-80" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed italic">
            "RJR ஹெர்பல் மருத்துவமனையில், மனமும் உடலும் ஆரோக்கியமாக அமைய, பாரம்பரிய சித்தா மற்றும் ஆயுர்வேத சிகிச்சைகள் மூலம் முழுமையான குணமளிப்பை வழங்க நாங்கள் அர்ப்பணித்துள்ளோம்."
          </p>
          <div className="mt-8 text-yellow-500 font-bold text-lg tracking-wider">
            - RJR MANAGEMENT
          </div>
        </div>
      </section>

    </main>
  );
}    