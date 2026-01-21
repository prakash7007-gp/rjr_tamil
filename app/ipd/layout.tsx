// app/ipd/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "In-Patient Department (IPD) | Traditional Hospital Stay & Care",
    description: "Advanced In-Patient facilities at RJR Herbal Hospitals. Experience traditional Siddha and Ayurveda treatments with 24/7 care, 20-bed capacity, and natural diet management.",
    keywords: [
        "IPD hospital stay Tamil Nadu",
        "Traditional medical admission",
        "Siddha inpatient treatment",
        "Ayurvedic care center",
        "Panchakarma stay",
        "Hospital with 24/7 nursing care",
        "Herbal treatment residential care"
    ],
};

export default function IPDLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
