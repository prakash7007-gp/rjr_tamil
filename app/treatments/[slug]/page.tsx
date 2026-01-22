import { notFound } from "next/navigation";
import { getTreatments, getTreatmentBySlug } from "../../lib/loadData";
import TreatmentView from "./TreatmentView";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const treatments = await getTreatments();
  return treatments.map((t: any) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const treatment = await getTreatmentBySlug(slug);
  if (!treatment) return { title: "Treatment Not Found" };

  return {
    title: `${treatment.title} | Effective ${treatment.category} Treatment in Tamil Nadu`,
    description: `Struggling with ${treatment.title}? Discover our specialized ${treatment.category} treatments at RJR Herbal Hospitals. Proven natural results with no side effects.`,
    keywords: [
      `${treatment.title} treatment Tamil`,
      `Specialist for ${treatment.title}`,
      `Ayurvedic cure for ${treatment.title}`,
      `Siddha medicine for ${treatment.title}`,
      treatment.category,
      // The following keywords were in the provided instruction but use variables not available in this context.
      // They are commented out to prevent errors.
      // `Best herbal hospital ${data.regionName}`,
      // `Natural treatment ${data.branch.city}`
    ],
    alternates: {
      canonical: `https://www.rjrherbalhospitals.com/treatments/${slug}`,
      languages: {
        'ta-IN': `https://www.rjrherbalhospitals.com/treatments/${slug}`,
      },
    },
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = await getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  return <TreatmentView treatment={treatment} />;
}
