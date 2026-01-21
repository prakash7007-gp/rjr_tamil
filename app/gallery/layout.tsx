// app/gallery/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photo & Video Gallery | Real Patient Success Stories",
    description: "Browse our visual journey of healing. Explore before and after transformations, video testimonials, and glimpses of our traditional hospital infrastructure.",
    keywords: [
        "Ayurveda success stories",
        "Siddha treatment gallery",
        "Before and after results",
        "Traditional hospital photos",
        "Patient testimonials videos",
        "Natural healing results"
    ],
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
