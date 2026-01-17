// app/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react";
import { getData } from "../lib/loadData";

interface FooterLinkItem {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLinkItem[];
}

interface SiteConfig {
  name: string;
  description: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
  footerLinks?: FooterSection[];
}

export default async function Footer() {
  const data: { site: SiteConfig } = await getData();
  const siteConfig = data.site || {};
  const footerLinks = siteConfig.footerLinks || [];

  return (
    <footer
      className="text-white font-sans border-t border-red-900/30"
      style={{
        background: "radial-gradient(circle at center, #a60f0f 0%, #5e0202 100%)"
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full w-16 h-16 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                  <Image
                    src="/images/LOGOTAMILNADU.png"
                    alt={`${siteConfig.name} Logo`}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="text-lg font-bold text-white tracking-wide block leading-tight">
                  {siteConfig.name}
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-white/80 font-light">
              {siteConfig.description}
            </p>

            <Link
              href="/appointment"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#c22220] transition-all duration-200 bg-white rounded-lg hover:bg-gray-100 shadow-lg hover:shadow-black/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-red-900"
            >
              அப்பாயின்ட்மெண்ட் பதிவு
            </Link>
          </div>

          {/* Links Section 1 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-white rounded-full"></span>
              {footerLinks[0]?.title || "வேகமான இணைப்புகள்"}
            </h3>
            <ul className="space-y-3">
              {footerLinks[0]?.links?.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/80 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section 2 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-white rounded-full"></span>
              {footerLinks[1]?.title || "சிகிச்சைகள்"}
            </h3>
            <ul className="space-y-3">
              {footerLinks[1]?.links?.slice(0, 9).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/80 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-white rounded-full"></span>
              தொடர்பில் இருங்கள்
            </h3>

            <div className="space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-4 group">
                  <div className="bg-red-950/30 p-2 rounded-lg group-hover:bg-white group-hover:text-red-900 transition-colors shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm leading-relaxed font-light">{siteConfig.contact?.address}</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="bg-red-950/30 p-2 rounded-lg group-hover:bg-white group-hover:text-red-900 transition-colors shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-light">{siteConfig.contact?.phone}</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="bg-red-950/30 p-2 rounded-lg group-hover:bg-white group-hover:text-red-900 transition-colors shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-light">{siteConfig.contact?.email}</span>
                </li>
              </ul>

              {/* Timings */}
              <div className="bg-black/20 p-5 rounded-xl border border-white/10 backdrop-blur-sm">
                <h4 className="flex items-center gap-2 text-white font-medium mb-3 text-sm">
                  <Clock className="w-4 h-4 text-[#c22220]" />
                  மருத்துவமனை நேரம்
                </h4>
                <div className="space-y-1 text-xs text-white/80 font-light">
                  <p>திங்கள் - சனி: <span className="text-white font-medium">காலை 9:00 - மாலை 7:00</span></p>
                  <p>ஞாயிறு: <span className="text-white font-medium">காலை 9:00 - மாலை 7:00</span></p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                {siteConfig.contact?.facebook && (
                  <Link href={siteConfig.contact.facebook} target="_blank" className="p-2.5 bg-black/20 rounded-lg text-white/80 hover:text-white hover:bg-[#1877F2] transition-colors">
                    <Facebook className="w-4 h-4" />
                  </Link>
                )}
                {siteConfig.contact?.instagram && (
                  <Link href={siteConfig.contact.instagram} target="_blank" className="p-2.5 bg-black/20 rounded-lg text-white/80 hover:text-white hover:bg-[#E4405F] transition-colors">
                    <Instagram className="w-4 h-4" />
                  </Link>
                )}
                {siteConfig.contact?.twitter && (
                  <Link href={siteConfig.contact.twitter} target="_blank" className="p-2.5 bg-black/20 rounded-lg text-white/80 hover:text-white hover:bg-[#1DA1F2] transition-colors">
                    <Twitter className="w-4 h-4" />
                  </Link>
                )}
                {siteConfig.contact?.youtube && (
                  <Link href={siteConfig.contact.youtube} target="_blank" className="p-2.5 bg-black/20 rounded-lg text-white/80 hover:text-white hover:bg-[#FF0000] transition-colors">
                    <Youtube className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-900/30 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide text-white/60">
          <p>© {new Date().getFullYear()} {siteConfig.name}. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
