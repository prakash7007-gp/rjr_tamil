// app/components/TopBar.tsx
import Link from "next/link";
import Image from "next/image";
import { getData } from "../lib/loadData";
import { Phone, Mail, Clock } from "lucide-react";

export default async function TopBar() {
  const data = await getData();
  const contact = data.site.contact;

  return (
    <div className="bg-gradient-to-r from-[#c22220] via-[#a81c1c] to-[#6e0f0f] text-white py-2 text-xs sm:text-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4">

        {/* MOBILE LAYOUT */}
        <div className="flex flex-col sm:hidden gap-2">

          {/* MOBILE LINE 1 — Social Icons + Phone */}
          <div className="flex items-center justify-between gap-4">

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <Link href={contact.facebook} target="_blank" aria-label="Facebook">
                <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} className="w-6 h-6 hover:scale-110 transition-transform object-contain" />
              </Link>
              <Link href={contact.instagram} target="_blank" aria-label="Instagram">
                <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} className="w-6 h-6 hover:scale-110 transition-transform object-contain" />
              </Link>
              <Link href={contact.youtube} target="_blank" aria-label="YouTube">
                <Image src="/images/youtube.png" alt="YouTube" width={24} height={24} className="w-6 h-6 hover:scale-110 transition-transform object-contain" />
              </Link>
            </div>

            {/* Phone (Mobile) */}
            <Link href={`tel:${contact.phone}`} className="flex items-center gap-1 hover:underline font-semibold">
              <Phone className="w-4 h-4 fill-current" />
              <span>{contact.phone}</span>
            </Link>
          </div>

        </div>

        {/* DESKTOP / LARGE SCREENS */}
        <div className="hidden sm:flex justify-between items-center">

          {/* LEFT — Social Icons */}
          <div className="flex items-center gap-4">
            <Link href={contact.facebook} target="_blank" aria-label="Facebook">
              <Image src="/images/facebook.png" alt="Facebook" width={28} height={28} className="w-7 h-7 hover:scale-110 transition-transform object-contain" />
            </Link>
            <Link href={contact.instagram} target="_blank" aria-label="Instagram">
              <Image src="/images/instagram.png" alt="Instagram" width={28} height={28} className="w-7 h-7 hover:scale-110 transition-transform object-contain" />
            </Link>
            <Link href={contact.youtube} target="_blank" aria-label="YouTube">
              <Image src="/images/youtube.png" alt="YouTube" width={28} height={28} className="w-7 h-7 hover:scale-110 transition-transform object-contain" />
            </Link>
          </div>

          {/* RIGHT — Phone + Email + Time */}
          <div className="flex items-center gap-6">

            <Link href={`tel:${contact.phone}`} className="flex items-center gap-1 hover:underline">
              <Phone className="w-4 h-4" />
              {contact.phone}
            </Link>

            <Link href={`mailto:${contact.email}`} className="flex items-center gap-1 hover:underline">
              <Mail className="w-4 h-4" />
              {contact.email}
            </Link>

            <span className="flex items-center gap-1 whitespace-nowrap">
              <Clock className="w-4 h-4" />
              திங்கள்-சனி: 9 AM - 7 PM
            </span>

          </div>

        </div>
      </div>
    </div>
  );
}
