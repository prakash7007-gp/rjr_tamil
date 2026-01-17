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

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = await getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  return <TreatmentView treatment={treatment} />;
}
