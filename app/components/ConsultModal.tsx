"use client";
 
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, User, MessageSquare, MapPin, Activity, Calendar } from "lucide-react";
 
interface ConsultModalProps {
    isOpen: boolean;
    onClose: () => void;
}
 
export default function ConsultModal({ isOpen, onClose }: ConsultModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        treatment: "",
        branch: "",
        message: ""
    });
 
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
 
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
 
        try {
            await fetch(
                "https://script.google.com/macros/s/AKfycbwRtOtth67So6dDZaqoCWvuKV9dhOLGJ8hb0ln-_W-jXrOab9-zfsXm2SSL9Zc/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                    mode: "no-cors", // Important for Google Apps Script
                }
            );
 
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({
                    name: "",
                    phone: "",
                    treatment: "",
                    branch: "",
                    message: ""
                });
                onClose();
            }, 3000);
 
        } catch (error) {
            console.error("Error:", error);
            alert("Network error. Try again!");
        } finally {
            setIsSubmitting(false);
        }
    };
 
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />
 
                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
                    >
                        {/* Left Side - Info */}
                        <div className="w-full md:w-2/5 bg-[#c22220] p-6 md:p-8 text-white flex flex-col justify-between overflow-hidden shrink-0">
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight">ஆலோசனை பெறுங்கள்</h3>
                                <p className="text-sm md:text-base text-white/80 mb-6 md:mb-8 font-light leading-relaxed">
                                    உங்கள் உடல்நலம் தொடர்பான பிரச்சனைகளுக்கு எங்களது மருத்துவ நிபுணர்களிடம் இருந்து சரியான ஆலோசனை பெற உங்கள் விவரங்களை பகிரவும்.
                                </p>
 
                                <div className="space-y-4 md:space-y-6">
                                    <div className="flex items-center gap-3 md:gap-4 group">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                            <Phone className="w-4 h-4 md:w-5 md:h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] md:text-xs text-white/60">அவசர அழைப்பிற்கு</p>
                                            <p className="text-sm md:text-base font-semibold">+91 7871111115</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 md:gap-4 group">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                            <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] md:text-xs text-white/60">மருத்துவமனை நேரம்</p>
                                            <p className="text-sm md:text-base font-semibold">9 AM - 7 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
 
                            {/* Decorative elements */}
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                        </div>
 
                        {/* Right Side - Form */}
                        <div className="w-full md:w-3/5 p-6 md:p-8 bg-white relative">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100 z-20"
                            >
                                <X className="w-6 h-6" />
                            </button>
 
                            {isSuccess ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 md:mb-6"
                                    >
                                        <Activity className="w-8 h-8 md:w-10 md:h-10" />
                                    </motion.div>
                                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">நன்றி!</h4>
                                    <p className="text-sm md:text-base text-gray-600">உங்கள் விவரங்கள் சேகரிக்கப்பட்டன. எங்களது பிரதிநிதி விரைவில் உங்களை தொடர்புகொள்வார்.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                                    <div className="mb-2">
                                        <h4 className="text-lg md:text-xl font-bold text-gray-900">விவரங்களை உள்ளிடவும்</h4>
                                        <p className="text-xs md:text-sm text-gray-500">அனைத்து விவரங்களும் பாதுகாப்பாக வைக்கப்படும்.</p>
                                    </div>
 
                                    {/* Name */}
                                    <div className="relative">
                                        <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1 block">உங்கள் பெயர்</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                required
                                                type="text"
                                                placeholder="எ.கா: குமார்"
                                                className="w-full pl-10 pr-4 py-2 md:py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c22220]/20 focus:border-[#c22220] transition-all outline-none text-gray-900 text-sm"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </div>
 
                                    {/* Phone */}
                                    <div className="relative">
                                        <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1 block">செல்போன் எண்</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                required
                                                type="tel"
                                                placeholder="எ.கா: +91 98765 43210"
                                                className="w-full pl-10 pr-4 py-2 md:py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c22220]/20 focus:border-[#c22220] transition-all outline-none text-gray-900 text-sm"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
 
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Treatment */}
                                        <div>
                                            <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1 block">சிகிச்சை தேவை</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="சிகிச்சை பதிவு செய்யவும்"
                                                className="w-full px-3 py-2 md:py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c22220]/20 focus:border-[#c22220] transition-all outline-none text-gray-900 text-sm"
                                                value={formData.treatment}
                                                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                                            />
                                        </div>
 
                                        {/* Branch */}
                                        <div>
                                            <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1 block">அருகிலுள்ள கிளை</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="கிளை பெயரை உள்ளிடவும்"
                                                className="w-full px-3 py-2 md:py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c22220]/20 focus:border-[#c22220] transition-all outline-none text-gray-900 text-sm"
                                                value={formData.branch}
                                                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                                            />
                                        </div>
                                    </div>
 
                                    {/* Message */}
                                    <div className="relative">
                                        <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1 block">குறிப்புகள் (விருப்பமான)</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                            <textarea
                                                rows={2}
                                                placeholder="உங்கள் உடல்நிலை குறித்து சில வார்த்தைகள்..."
                                                className="w-full pl-10 pr-4 py-2 md:py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c22220]/20 focus:border-[#c22220] transition-all outline-none text-gray-900 text-sm resize-none"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>
                                    </div>
 
                                    {/* Submit */}
                                    <button
                                        disabled={isSubmitting}
                                        className="w-full bg-[#c22220] text-white py-3 md:py-3.5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-black transition-all transform active:scale-[0.98] shadow-lg shadow-red-900/10 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                />
                                                பதிவு செய்யப்படுகிறது...
                                            </>
                                        ) : (
                                            "ஆலோசனைக்கு பதிவு செய்"
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}