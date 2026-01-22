import type { Metadata } from "next";
import BranchesSection from "../components/BranchesSection";

export const metadata: Metadata = {
  title: "Hospital Locations | Find Your Nearest RJR Herbal Hospital Branch",
  description: "Locate our herbal clinics and ayurveda centers across Tamil Nadu, Karnataka, Andhra Pradesh, Maharashtra, Telangana, and Pondicherry. 100+ branches for your convenience.",
  keywords: [
    "Hospital locations Tamil Nadu",
    "Ayurvedic clinics Karnataka",
    "Siddha centers Andhra Pradesh",
    "Herbal hospital branches",
    "Find hospital near me"
  ],
};

export default function BranchesPage() {
  return (
    <main>
      {/* Reusing the existing section component */}
      <BranchesSection />
    </main>
  );
}
