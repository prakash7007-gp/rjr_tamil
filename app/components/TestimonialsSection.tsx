// app/components/TestimonialsSection.tsx (SERVER COMPONENT)

import TestimonialSlider from "./TestimonialSlider";

interface Testimonial {
  id: number;
  name: string;
  age: number;
  condition: string;
  treatment: string;
  testimonial: string;
  image: string;
  imageAlt: string;
}

interface TestimonialsSectionProps {
  data: {
    title: string;
    subtitle: string;
    button: string;
    testimonials: Testimonial[];
  };
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#c22220] mb-4">
          {data.title}
        </h2>

        <p className="text-gray-700 text-lg mb-10 max-w-2xl">
          {data.subtitle}
        </p>

        {/* Client Component Slider */}
        <TestimonialSlider testimonials={data.testimonials} button={data.button} />
      </div>
    </section>
  );
}
