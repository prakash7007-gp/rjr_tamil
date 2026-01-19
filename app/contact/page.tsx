"use client";
import { useState } from "react";
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
  const [popup, setPopup] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "பெயர் அவசியம் *";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "தொலைபேசி எண் அவசியம் *";
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "சரியான 10 இலக்க எண்ணை உள்ளிடவும்";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "சரியான மின்னஞ்சலை உள்ளிடவும்";
    }

    if (!formData.message.trim()) {
      newErrors.message = "செய்தி அவசியம் *";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwPJhfIXrB8HwOA5YYtF0ofNI9yz6cFm2oPblq3fPH0X8muCoGCHdOWH-RqhlL5ITUp/exec";

    const form = new FormData();
    form.append("name", formData.name);
    form.append("phone", formData.phone);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: form,
      });

      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        setPopup({
          type: "error",
          message: "சேவையகத்தில் பிழை ஏற்பட்டுள்ளது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
        });
        return;
      }

      if (data.status === "success") {
        setPopup({
          type: "success",
          message: "உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!",
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
        setErrors({});
      } else {
        setPopup({
          type: "error",
          message: "செய்தியை அனுப்புவதில் பிழை ஏற்பட்டது.",
        });
      }
    } catch (err) {
      setPopup({
        type: "error",
        message: "இணைய இணைப்பு பிழை. தயவுசெய்து பின்னர் முயற்சிக்கவும்.",
      });
    } finally {
      setIsSubmitting(false);
    }

    // Auto close popup after 4 seconds
    setTimeout(() => {
      setPopup({ type: null, message: "" });
    }, 4000);
  };

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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label>பெயர் <span className="text-red-500">*</span></label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="உங்கள் பெயர்"
                      className={`w-full rounded-lg border px-4 py-3 ${errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-red-100"} outline-none focus:border-[#C22220] transition-all`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label>தொலைபேசி எண் <span className="text-red-500">*</span></label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="உங்கள் எண்"
                      className={`w-full rounded-lg border px-4 py-3 ${errors.phone ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-red-100"} outline-none focus:border-[#C22220] transition-all`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label>மின்னஞ்சல்</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className={`w-full rounded-lg border px-4 py-3 ${errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-red-100"} outline-none focus:border-[#C22220] transition-all`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label>தகவல் / சந்தேகம் <span className="text-red-500">*</span></label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="உங்கள் செய்தியை இங்கே தட்டச்சு செய்யவும்..."
                    className={`w-full rounded-lg border px-4 py-3 min-h-[120px] ${errors.message ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-red-100"} outline-none focus:border-[#C22220] transition-all`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                <button
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#C22220] text-white font-bold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      அனுப்புகிறது...
                    </>
                  ) : (
                    "செய்தி அனுப்பவும்"
                  )}
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
      {popup.type && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div
            className={`w-full max-w-md rounded-2xl shadow-2xl p-6 text-center animate-fadeIn
        ${popup.type === "success"
                ? "bg-green-50 border-t-8 border-green-600"
                : "bg-red-50 border-t-8 border-red-600"
              }`}
          >
            <div
              className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4
          ${popup.type === "success"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
                }`}
            >
              {popup.type === "success" ? "✓" : "✕"}
            </div>

            <h3
              className={`text-2xl font-bold mb-2
          ${popup.type === "success"
                  ? "text-green-700"
                  : "text-red-700"
                }`}
            >
              {popup.type === "success" ? "வெற்றி!" : "பிழை!"}
            </h3>

            <p className="text-gray-700 mb-6">{popup.message}</p>

            <button
              onClick={() => setPopup({ type: null, message: "" })}
              className={`px-6 py-2 rounded-lg font-semibold text-white
          ${popup.type === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-600 hover:bg-red-700"
                }`}
            >
              மூடவும்
            </button>
          </div>
        </div>
      )}



    </main>
  );
}