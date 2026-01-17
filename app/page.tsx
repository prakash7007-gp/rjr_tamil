import Hero from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TreatmentSection from "./components/TreatmentSection";
import TherapySection from "./components/TherapySection";
import DoctorSection from "./components/DoctorSection";
import BeforeAfter from "./components/BeforeAfter";
import Footer from "./components/Footer";
import { getData } from "./lib/loadData";
import TestimonialsSection from "./components/TestimonialsSection";
import StatsSection from "./components/StatsSection";
import WhyChooseUs from "./components/WhyChooseSection";
import PhotoBanner from "./components/PhotoBanner";
import VideoSection from "./components/VideoSection";
import CreativeSection from "./components/CreativeSection";

export default async function HomePage() {
  const data = await getData();

  return (
    <>
      <Hero data={data.hero} />
      <AboutSection data={data.about} />
      <TreatmentSection data={data.majorTreatments} />
      <TherapySection data={data.therapies} />
      <StatsSection data={data.stats} />
      {/* <DoctorSection data={data.doctors} /> */}
      <BeforeAfter data={data.beforeAfter} />
      {/* <VideoSection /> */}
      {/* <PhotoBanner /> */}
      <WhyChooseUs data={data.whyChooseUs} />
      {/* <CreativeSection data={data} /> */}
      <TestimonialsSection data={data.testimonials} />
    </>
  );
}
