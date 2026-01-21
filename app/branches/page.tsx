import BranchesSection from "../components/BranchesSection";

export const metadata = {
  title: "Hospital Locations | Find Your Nearest RJR Herbal Hospital Branch",
  description: "Locate our herbal clinics and ayurveda centers across Tamil Nadu, Karnataka, Andhra Pradesh, Maharashtra, Telangana, and Pondicherry. 100+ branches for your convenience.",
};

export default function BranchesPage() {
  return (
    <main>
      {/* Reusing the existing section component */}
      <BranchesSection />
    </main>
  );
}
