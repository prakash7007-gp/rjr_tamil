// app/contact/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Book Appointment at RJR Herbal Hospitals Chennai",
    description: "Get in touch with RJR Herbal Hospitals. Visit our T. Nagar, Chennai head office or find a branch near you. Call +91 7871111115 to book your Siddha or Ayurveda consultation.",
    keywords: [
        "Contact RJR Herbal Hospital",
        "Siddha hospital Chennai contact",
        "Ayurveda consultation Chennai",
        "Book herbal doctor appointment",
        "RJR Herbal Hospital T. Nagar address",
        "Chennai Siddha and Ayurveda keywords",
        "Best Siddha hospital in Chennai"
    ],
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
