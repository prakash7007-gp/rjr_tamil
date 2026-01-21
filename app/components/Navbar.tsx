"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
import ConsultModal from "./ConsultModal";

/* ================= DATA ================= */
const navLinks = [
  { label: "முகப்பு", href: "/" },
  { label: "எங்களைப் பற்றி", href: "/about" },
  { label: "சிகிச்சைகள்", href: "/treatments" },
  { label: "IPD", href: "/ipd" },
  { label: "தெரஃபிகள்", href: "/therapies" },
  { label: "கிளைகள்", href: "/branches" },
  { label: "கேலரி", href: "/gallery" },
  { label: "தொடர்புக்கு", href: "/contact" },
];

/* ================= HEADER INFO ================= */
const HeaderInfo = () => (
  <div className="hidden md:flex gap-8 items-center">
    {/* CALL */}
    <div className="flex items-center gap-3">
      <Image src="/images/calling (1).png" alt="Phone" width={42} height={42} />
      <div>
        <p className="font-semibold text-gray-900">Call us now</p>
        <p className="text-sm text-gray-600">+91 7871111115</p>
      </div>
    </div>

    {/* ADDRESS */}
    <div className="flex items-center gap-3">
      <Image src="/images/location.png" alt="Location" width={42} height={42} />
      <div>
        <p className="font-semibold text-gray-900">Address</p>
        <p className="text-sm text-gray-600">Chennai, T.Nagar</p>
      </div>
    </div>

    {/* WORKING TIME */}
    <div className="flex items-center gap-3">
      <Image src="/images/calendar.png" alt="Calendar" width={42} height={42} />
      <div>
        <p className="font-semibold text-gray-900">Working Time</p>
        <p className="text-sm text-gray-600">9:00 AM – 6:00 PM</p>
      </div>
    </div>
  </div>
);

/* ================= NAVBAR ================= */
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-r from-[#c22220] via-[#a81c1c] to-[#6e0f0f] md:bg-none md:bg-white shadow-md">
        {/* LOGO ROW */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/newlogo.png" alt="Logo" width={70} height={670} className="w-[70px] md:w-[100px] h-auto" />
            <div>
              <h1 className="text-lg md:text-xl font-bold text-white md:text-[#c22220]">
                RJR ஹெர்பல் மருத்துவமனை
              </h1>
              <p className="text-xs md:text-sm text-gray-100 md:text-gray-700">
                ஐந்து தலைமுறை அனுபவம்
              </p>
            </div>
          </Link>

          <HeaderInfo />

          <button
            className="md:hidden p-2 text-white hover:text-yellow-400 transition"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* DESKTOP MENU BAR */}
        <div className="bg-gradient-to-r from-[#c22220] via-[#a81c1c] to-[#6e0f0f] text-white hidden md:block shadow-lg">
          <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
            <nav className="flex gap-8 text-white font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative hover:text-yellow-400 transition duration-300 ${pathname === link.href ? "text-yellow-400 font-bold" : ""
                    }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-[21px] left-0 w-full h-[3px] bg-yellow-400" />
                  )}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setModalOpen(true)}
              className="group relative bg-yellow-400 text-red-700 px-6 py-2.5 rounded-full font-bold hover:bg-white hover:text-[#c22220] transition-all duration-300 shadow-lg flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Stethoscope size={18} className="group-hover:rotate-12 transition-transform" />
                FOR CONSULTATION
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>

        <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </header>

      {/* MOBILE SIDEBAR (DRAWER) */}
      <div
        className={`fixed inset-0 z-[60] flex justify-end md:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setOpen(false)}
        />

        {/* Sidebar Content */}
        <div
          className={`relative w-4/5 max-w-[300px] bg-gradient-to-b from-[#c22220] to-[#5a0606] h-full shadow-2xl p-6 flex flex-col transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex justify-between items-center mb-8 border-b border-white/20 pb-4">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={() => setOpen(false)}
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-white font-medium text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2 px-3 rounded-lg transition-colors ${pathname === link.href
                  ? "bg-white/20 text-yellow-400 font-bold border-l-4 border-yellow-400"
                  : "hover:bg-white/10 hover:text-yellow-300"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-white/20">
            <button
              onClick={() => {
                setOpen(false);
                setModalOpen(true);
              }}
              className="flex w-full items-center justify-center gap-2 bg-yellow-400 text-[#7a1514] py-4 rounded-xl font-bold hover:bg-white transition shadow-md active:scale-[0.98]"
            >
              <Stethoscope size={20} />
              FOR CONSULTATION
            </button>
          </div>

          <div className="mt-auto text-center text-sm text-white/50 py-4">
            &copy; RJR Herbal Hospitals
          </div>
        </div>
      </div>
    </>
  );
}
