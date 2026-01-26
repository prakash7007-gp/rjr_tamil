"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send, User, Phone, MapPin, FileText, Minimize2 } from "lucide-react";

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        branch: "",
        message: "",
        treatment: "ChatBot Inquiry" // Default context
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    // Toggle Chat visibility
    const toggleChat = () => {
        setIsOpen(!isOpen);
        setMinimized(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
                    mode: "no-cors",
                }
            );

            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                setIsOpen(false); // Close after success
                setFormData({ name: "", phone: "", branch: "", message: "", treatment: "ChatBot Inquiry" });
            }, 3000);

        } catch (error) {
            console.error("Error submitting form", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Auto-open logic (optional) - maybe after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            // Uncomment to auto-open
            // setIsOpen(true); 
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-24 right-4 md:bottom-24 md:left-8 md:right-auto z-[9990] flex flex-col items-end md:items-start pointer-events-none">

            {/* CHAT WINDOW */}
            <div
                className={`pointer-events-auto bg-white w-[350px] md:w-[380px] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right md:origin-bottom-left transform border border-gray-100 ${isOpen && !minimized ? "scale-100 opacity-100 mb-4" : "scale-0 opacity-0 h-0 w-0 mb-0"
                    }`}
            >
                {/* Header */}
                <div className="bg-[#c22220] p-4 flex justify-between items-center text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <MessageCircle size={20} className="text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg leading-tight">RJR Assistant</h3>
                            <p className="text-xs text-red-100 flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setMinimized(true)} className="hover:bg-white/20 p-1.5 rounded-full transition">
                            <Minimize2 size={18} />
                        </button>
                        <button onClick={toggleChat} className="hover:bg-white/20 p-1.5 rounded-full transition">
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Body */}
                <div className="p-0 bg-gray-50 h-[450px] overflow-y-auto custom-scrollbar flex flex-col relative">

                    {/* Welcome Message */}
                    <div className="p-4 space-y-4">
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-[#c22220] font-bold text-xs">RJR</span>
                            </div>
                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-gray-700 text-sm border border-gray-100 max-w-[85%]">
                                <p>வணக்கம்! RJR Herbal மருத்துவமனைக்கு வரவேற்கிறோம். 👋</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-[#c22220] font-bold text-xs">RJR</span>
                            </div>
                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-gray-700 text-sm border border-gray-100 max-w-[85%]">
                                <p>மருத்துவர் ஆலோசனை அல்லது முன்பதிவுக்கு, உங்கள் விவரங்களை கீழே உள்ளிடவும்.</p>
                            </div>
                        </div>

                        {/* Success Message */}
                        {success ? (
                            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex flex-col items-center justify-center text-center space-y-2 animate-fade-in my-8">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                                    <Send className="text-green-600 ml-1" size={24} />
                                </div>
                                <h4 className="font-bold text-green-800">நன்றி!</h4>
                                <p className="text-sm text-green-700">உங்கள் விவரங்கள் பெறப்பட்டன. விரைவில் உங்களை அழைப்போம்.</p>
                            </div>
                        ) : (
                            /* Form */
                            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 space-y-3 mt-2 animate-fade-in-up">
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase ml-1">பெயர்</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 text-gray-400" size={16} />
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-red-500/20 focus:border-[#c22220] outline-none transition"
                                            placeholder="உங்கள் பெயரை உள்ளிடவும்"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase ml-1">தொலைபேசி எண்</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 text-gray-400" size={16} />
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            type="tel"
                                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-red-500/20 focus:border-[#c22220] outline-none transition"
                                            placeholder="உங்கள் மொபைல் எண்"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase ml-1">கிளை (Optional)</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3 text-gray-400" size={16} />
                                        <input
                                            name="branch"
                                            value={formData.branch}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-red-500/20 focus:border-[#c22220] outline-none transition"
                                            placeholder="எ.கா: சென்னை"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase ml-1">செய்தி (Optional)</label>
                                    <div className="relative">
                                        <FileText className="absolute left-3 top-3 text-gray-400" size={16} />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={2}
                                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-red-500/20 focus:border-[#c22220] outline-none transition resize-none"
                                            placeholder="வேறேனும் கேள்விகள்?"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#c22220] hover:bg-red-700 text-white font-bold py-3 rounded-xl shadow-md disabled:opacity-70 disabled:cursor-not-allowed transition flex items-center justify-center gap-2 mt-2"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            அனுப்புக <Send size={16} />
                                        </>
                                    )}
                                </button>

                                <p className="text-[10px] text-center text-gray-400 mt-2">
                                    உங்கள் தகவல்கள் பாதுகாப்பாக வைக்கப்படும்.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* FLOATING BUTTON (Visible when chat is closed or minimized) */}
            <button
                onClick={toggleChat}
                className={`pointer-events-auto bg-[#c22220] hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group z-[9999] ${isOpen && !minimized ? "translate-y-24 opacity-0" : "translate-y-0 opacity-100"
                    }`}
            >
                <div className="relative">
                    <MessageCircle size={28} className="fill-current" />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#c22220] rounded-full"></span>
                </div>
                <span className="absolute right-full mr-4 md:right-auto md:left-full md:mr-0 md:ml-4 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Chat Inquiry
                </span>
            </button>
        </div>
    );
}
