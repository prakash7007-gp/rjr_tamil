"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Menu,
    X,
    Phone,
    FileText,
    Contact,
    Leaf,
    MapPin,
    Info,
} from "lucide-react";
import data from "@/app/data/data.json";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = data.site.navLinks;

    /* BODY SCROLL LOCK */
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    /* CLOSE ON DESKTOP */
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    /* 🔥 SCROLL EFFECT */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100); // hero height trigger
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const iconMap: any = {
        "எங்கள் பற்றி": Info,
        "சிகிச்சைகள்": Leaf,
        "தொடர்பு": Phone,
        "கிளைகள்": MapPin,
        "கேலரி": FileText,
        "எங்களை அணுக": Contact,
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
                    ? "bg-[#c22220] shadow-lg"
                    : "bg-[#c22220] backdrop-blur-xl"
                }`}
        >
            <div className="max-w-8xl mx-auto px-4 lg:px-6 xl:px-8">
                <div className="h-16 flex items-center justify-between">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo1.png"
                            width={50}
                            height={50}
                            alt="Logo"
                        />
                        <div className="leading-tight">
                            <p className="text-white font-bold text-xl">RJR</p>
                            <p className="text-white text-sm">மூலிகை மருத்துவமனை</p>
                        </div>
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex gap-8">
                        {navLinks.map((link: any) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-white font-semibold hover:text-[#fcd700] transition"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* DESKTOP BUTTON */}
                    <div className="hidden md:block">
                        <Link
                            href="/enquiry"
                            className="border border-white text-white px-5 py-2 rounded-lg hover:bg-white hover:text-[#c22220] transition"
                        >
                            விசாரிக்க
                        </Link>
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE SIDEBAR */}
            <div
                className={`fixed top-0 left-0 h-full w-[75%] max-w-[320px]
        bg-[#c22220] shadow-2xl rounded-r-3xl
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 z-50 p-6 flex flex-col`}
            >
                <button className="mb-6 text-white" onClick={() => setOpen(false)}>
                    <X size={28} />
                </button>

                <ul className="flex flex-col gap-4">
                    {navLinks.map((link: any) => {
                        const Icon = iconMap[link.label] || Leaf;
                        return (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-4 px-4 py-3 rounded-xl bg-white/10 text-white hover:bg-white hover:text-[#c22220] transition"
                                >
                                    <Icon size={20} />
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <Link
                    href="/enquiry"
                    onClick={() => setOpen(false)}
                    className="mt-auto bg-white text-[#c22220] text-center py-3 rounded-xl font-semibold mt-6"
                >
                    விசாரிக்க
                </Link>
            </div>

            {/* BACKDROP */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                />
            )}
        </nav>
    );
}
