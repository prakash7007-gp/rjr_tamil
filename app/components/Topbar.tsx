// app/components/TopBar.tsx
import Link from "next/link";
import { getData } from "../lib/loadData";
import { Phone, Mail, Clock } from "lucide-react";

export default async function TopBar() {
  const data = await getData();
  const contact = data.site.contact;

  return (
    <div className="bg-white text-[#c22220] py-2 text-xs sm:text-sm border-b border-[#c2222020]">
      <div className="max-w-7xl mx-auto px-4">

        {/* MOBILE LAYOUT */}
        <div className="flex flex-col sm:hidden gap-2">

          {/* MOBILE LINE 1 — Social Icons + Phone */}
          <div className="flex items-center justify-between gap-4">

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <Link href={contact.facebook} target="_blank" aria-label="Facebook">
                <svg className="w-6 h-6 hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.563H7.078V12.073H10.125V9.429C10.125 6.422 11.917 4.76 14.656 4.76C15.968 4.76 17.344 4.995 17.344 4.995V7.948H15.83C14.34 7.948 13.875 8.873 13.875 9.823V12.073H17.203L16.67 15.563H13.875V24C19.613 23.094 24 18.1 24 12.073Z" fill="#1877F2" />
                </svg>
              </Link>
              <Link href={contact.instagram} target="_blank" aria-label="Instagram">
                <svg className="w-6 h-6 hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="6" fill="url(#paint0_radial_instagram)" />
                  <path d="M12 5.838C15.366 5.838 15.766 5.852 17.094 5.912C18.322 5.968 18.988 6.174 19.432 6.346C20.022 6.574 20.442 6.852 20.884 7.294C21.326 7.736 21.602 8.156 21.832 8.746C22.004 9.19 22.21 9.856 22.266 11.084C22.326 12.412 22.34 12.812 22.34 16.178C22.34 19.544 22.326 19.944 22.266 21.272C22.21 22.5 22.004 23.166 21.832 23.61C21.604 24.2 21.326 24.62 20.884 25.062C20.442 25.504 20.022 25.782 19.432 26.01C18.988 26.182 18.322 26.388 17.094 26.444C15.766 26.504 15.366 26.518 12 26.518C8.634 26.518 8.234 26.504 6.906 26.444C5.678 26.388 5.012 26.182 4.568 26.01C3.978 25.782 3.558 25.504 3.116 25.062C2.674 24.62 2.398 24.2 2.168 23.61C1.996 23.166 1.79 22.5 1.734 21.272C1.674 19.944 1.66 19.544 1.66 16.178C1.66 12.812 1.674 12.412 1.734 11.084C1.79 9.856 1.996 9.19 2.168 8.746C2.396 8.156 2.674 7.736 3.116 7.294C3.558 6.852 3.978 6.574 4.568 6.346C5.012 6.174 5.678 5.968 6.906 5.912C8.234 5.852 8.634 5.838 12 5.838ZM12 4C8.692 4 8.276 4.014 6.974 4.074C5.672 4.134 4.782 4.34 4.004 4.642C3.2 4.954 2.52 5.372 1.842 6.052C1.162 6.73 0.744 7.41 0.432 8.214C0.13 8.992 -0.076 9.882 -0.136 11.184C-0.196 12.486 -0.21 12.902 -0.21 16.21C-0.21 19.518 -0.196 19.934 -0.136 21.236C-0.076 22.538 0.13 23.428 0.432 24.206C0.744 25.01 1.162 25.69 1.842 26.368C2.52 27.048 3.2 27.466 4.004 27.778C4.782 28.08 5.672 28.286 6.974 28.346C8.276 28.406 8.692 28.42 12 28.42C15.308 28.42 15.724 28.406 17.026 28.346C18.328 28.286 19.218 28.08 19.996 27.778C20.8 27.466 21.48 27.048 22.158 26.368C22.838 25.69 23.256 25.01 23.568 24.206C23.87 23.428 24.076 22.538 24.136 21.236C24.196 19.934 24.21 19.518 24.21 16.21C24.21 12.902 24.196 12.486 24.136 11.184C24.076 9.882 23.87 8.992 23.568 8.214C23.256 7.41 22.838 6.73 22.158 6.052C21.48 5.372 20.8 4.954 19.996 4.642C19.218 4.34 18.328 4.134 17.026 4.074C15.724 4.014 15.308 4 12 4Z" fill="white" transform="scale(0.75) translate(4,4)" />
                  <path d="M12 8.966C8.018 8.966 4.79 12.194 4.79 16.176C4.79 20.158 8.018 23.386 12 23.386C15.982 23.386 19.21 20.158 19.21 16.176C19.21 12.194 15.982 8.966 12 8.966ZM12 21.552C9.026 21.552 6.624 19.15 6.624 16.176C6.624 13.202 9.026 10.8 12 10.8C14.974 10.8 17.376 13.202 17.376 16.176C17.376 19.15 14.974 21.552 12 21.552Z" fill="white" transform="scale(0.75) translate(4,4)" />
                  <path d="M21.228 9.944C21.896 9.944 22.44 9.4 22.44 8.732C22.44 8.064 21.896 7.52 21.228 7.52C20.56 7.52 20.016 8.064 20.016 8.732C20.016 9.4 20.56 9.944 21.228 9.944Z" fill="white" transform="scale(0.75) translate(4,4)" />
                  <defs>
                    <radialGradient id="paint0_radial_instagram" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 26) rotate(-45) scale(28)">
                      <stop stopColor="#FFB039" />
                      <stop offset="0.3" stopColor="#FF495C" />
                      <stop offset="0.6" stopColor="#D6249F" />
                      <stop offset="1" stopColor="#285AEB" />
                    </radialGradient>
                  </defs>
                </svg>
              </Link>
              <Link href={contact.youtube} target="_blank" aria-label="YouTube">
                <svg className="w-8 h-8 hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186C23.23 5.179 22.441 4.385 21.439 4.115C19.626 3.626 12.375 3.626 12.375 3.626C12.375 3.626 5.124 3.626 3.311 4.115C2.309 4.385 1.52 5.179 1.252 6.186C0.767 8.006 0.767 11.802 0.767 11.802C0.767 11.802 0.767 15.598 1.252 17.418C1.52 18.425 2.309 19.219 3.311 19.489C5.124 19.978 12.375 19.978 12.375 19.978C12.375 19.978 19.626 19.978 21.439 19.489C22.441 19.219 23.23 18.425 23.498 17.418C23.983 15.598 23.983 11.802 23.983 11.802C23.983 11.802 23.983 8.006 23.498 6.186ZM9.75 15.222V8.382L15.75 11.802L9.75 15.222Z" fill="#FF0000" />
                </svg>
              </Link>
              <Link href={contact.facebook} target="_blank" aria-label="X (Twitter)">
                {/* Reusing Facebook/generic for now as per image or using X logo if needed. Assuming Twitter link but using X logo for modern compliance */}
                <svg className="w-5 h-5 hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.087 19.769H18.92L7.227 4.126H5.263L17.087 19.769Z" />
                </svg>
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
          <div className="flex items-center gap-3">
            <Link href={contact.facebook} target="_blank" aria-label="Facebook">
              <svg className="w-7 h-7 hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.563H7.078V12.073H10.125V9.429C10.125 6.422 11.917 4.76 14.656 4.76C15.968 4.76 17.344 4.995 17.344 4.995V7.948H15.83C14.34 7.948 13.875 8.873 13.875 9.823V12.073H17.203L16.67 15.563H13.875V24C19.613 23.094 24 18.1 24 12.073Z" fill="#1877F2" />
              </svg>
            </Link>
            <Link href={contact.instagram} target="_blank" aria-label="Instagram">
              <svg className="w-7 h-7 hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="url(#paint0_radial_instagram_desk)" />
                <path d="M12 5.838C15.366 5.838 15.766 5.852 17.094 5.912C18.322 5.968 18.988 6.174 19.432 6.346C20.022 6.574 20.442 6.852 20.884 7.294C21.326 7.736 21.602 8.156 21.832 8.746C22.004 9.19 22.21 9.856 22.266 11.084C22.326 12.412 22.34 12.812 22.34 16.178C22.34 19.544 22.326 19.944 22.266 21.272C22.21 22.5 22.004 23.166 21.832 23.61C21.604 24.2 21.326 24.62 20.884 25.062C20.442 25.504 20.022 25.782 19.432 26.01C18.988 26.182 18.322 26.388 17.094 26.444C15.766 26.504 15.366 26.518 12 26.518C8.634 26.518 8.234 26.504 6.906 26.444C5.678 26.388 5.012 26.182 4.568 26.01C3.978 25.782 3.558 25.504 3.116 25.062C2.674 24.62 2.398 24.2 2.168 23.61C1.996 23.166 1.79 22.5 1.734 21.272C1.674 19.944 1.66 19.544 1.66 16.178C1.66 12.812 1.674 12.412 1.734 11.084C1.79 9.856 1.996 9.19 2.168 8.746C2.396 8.156 2.674 7.736 3.116 7.294C3.558 6.852 3.978 6.574 4.568 6.346C5.012 6.174 5.678 5.968 6.906 5.912C8.234 5.852 8.634 5.838 12 5.838ZM12 4C8.692 4 8.276 4.014 6.974 4.074C5.672 4.134 4.782 4.34 4.004 4.642C3.2 4.954 2.52 5.372 1.842 6.052C1.162 6.73 0.744 7.41 0.432 8.214C0.13 8.992 -0.076 9.882 -0.136 11.184C-0.196 12.486 -0.21 12.902 -0.21 16.21C-0.21 19.518 -0.196 19.934 -0.136 21.236C-0.076 22.538 0.13 23.428 0.432 24.206C0.744 25.01 1.162 25.69 1.842 26.368C2.52 27.048 3.2 27.466 4.004 27.778C4.782 28.08 5.672 28.286 6.974 28.346C8.276 28.406 8.692 28.42 12 28.42C15.308 28.42 15.724 28.406 17.026 28.346C18.328 28.286 19.218 28.08 19.996 27.778C20.8 27.466 21.48 27.048 22.158 26.368C22.838 25.69 23.256 25.01 23.568 24.206C23.87 23.428 24.076 22.538 24.136 21.236C24.196 19.934 24.21 19.518 24.21 16.21C24.21 12.902 24.196 12.486 24.136 11.184C24.076 9.882 23.87 8.992 23.568 8.214C23.256 7.41 22.838 6.73 22.158 6.052C21.48 5.372 20.8 4.954 19.996 4.642C19.218 4.34 18.328 4.134 17.026 4.074C15.724 4.014 15.308 4 12 4Z" fill="white" transform="scale(0.75) translate(4,4)" />
                <path d="M12 8.966C8.018 8.966 4.79 12.194 4.79 16.176C4.79 20.158 8.018 23.386 12 23.386C15.982 23.386 19.21 20.158 19.21 16.176C19.21 12.194 15.982 8.966 12 8.966ZM12 21.552C9.026 21.552 6.624 19.15 6.624 16.176C6.624 13.202 9.026 10.8 12 10.8C14.974 10.8 17.376 13.202 17.376 16.176C17.376 19.15 14.974 21.552 12 21.552Z" fill="white" transform="scale(0.75) translate(4,4)" />
                <path d="M21.228 9.944C21.896 9.944 22.44 9.4 22.44 8.732C22.44 8.064 21.896 7.52 21.228 7.52C20.56 7.52 20.016 8.064 20.016 8.732C20.016 9.4 20.56 9.944 21.228 9.944Z" fill="white" transform="scale(0.75) translate(4,4)" />
                <defs>
                  <radialGradient id="paint0_radial_instagram_desk" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 26) rotate(-45) scale(28)">
                    <stop stopColor="#FFB039" />
                    <stop offset="0.3" stopColor="#FF495C" />
                    <stop offset="0.6" stopColor="#D6249F" />
                    <stop offset="1" stopColor="#285AEB" />
                  </radialGradient>
                </defs>
              </svg>
            </Link>
            <Link href={contact.youtube} target="_blank" aria-label="YouTube">
              <svg className="w-8 h-8 hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186C23.23 5.179 22.441 4.385 21.439 4.115C19.626 3.626 12.375 3.626 12.375 3.626C12.375 3.626 5.124 3.626 3.311 4.115C2.309 4.385 1.52 5.179 1.252 6.186C0.767 8.006 0.767 11.802 0.767 11.802C0.767 11.802 0.767 15.598 1.252 17.418C1.52 18.425 2.309 19.219 3.311 19.489C5.124 19.978 12.375 19.978 12.375 19.978C12.375 19.978 19.626 19.978 21.439 19.489C22.441 19.219 23.23 18.425 23.498 17.418C23.983 15.598 23.983 11.802 23.983 11.802C23.983 11.802 23.983 8.006 23.498 6.186ZM9.75 15.222V8.382L15.75 11.802L9.75 15.222Z" fill="#FF0000" />
              </svg>
            </Link>
            <Link href={contact.facebook} target="_blank" aria-label="X (Twitter)">
              <svg className="w-5 h-5 hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.087 19.769H18.92L7.227 4.126H5.263L17.087 19.769Z" />
              </svg>
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
