// app/therapies/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Traditional Wellness Therapies | Varmam, Shirodhara & Panchakarma",
    description: "Rejuvenate your body and mind with our traditional wellness therapies. Specialized in Varmam therapy, Shirodhara, Abhyangam, and Herbal Steam Bath at RJR Herbal Hospitals.",
    keywords: [
        "Varmam therapy Tamil Nadu",
        "Shirodhara treatment Chennai",
        "Panchakarma center",
        "Abhyangam massage",
        "Herbal steam bath",
        "Wellness therapies India",
        "Traditional rejuvenation treatments"
    ],
};

export default function TherapiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
