import HeroCarousel from "./HeroCarousal";

interface HeroSectionProps {
  data: {
    slides: {
      image: string;
      title: string;
      subtitle: string;
    }[];
  };
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section>
      <HeroCarousel slides={data.slides} />
    </section>
  );
}
    