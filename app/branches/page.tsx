import BranchesSection from "../components/BranchesSection";

export const metadata = {
  title: "Our Branches - RJR Herbal Hospitals",
  description: "Find your nearest RJR Herbal Hospital branch across Tamil Nadu, Andhra Pradesh, Maharashtra, Telangana, and Pondicherry.",
};

export default function BranchesPage() {
  return (
    <main>
      {/* Reusing the existing section component */}
      <BranchesSection />
    </main>
  );
}
