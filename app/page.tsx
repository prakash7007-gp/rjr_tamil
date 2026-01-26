import type { Metadata } from "next";
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
import YoutubeShortsSection from "./components/YoutubeShortsSection";

export const metadata: Metadata = {
  title: "Home - Advanced Siddha, Ayurveda & Herbal Treatments in Tamil Nadu",
  description: "Experience world-class natural healing at RJR Herbal Hospitals. We specialize in Siddha and Ayurveda treatments for chronic diseases with a 150-year legacy of excellence.",
};

export default async function HomePage() {
  const data = await getData();

  return (
    <>
      {/* Hero Section */}
      <Hero data={data.hero} />

      {/* About Section */}
      <AboutSection data={data.about} />

      {/* Stats Section - Achievements */}
      <StatsSection data={data.stats} />

      {/* Major Treatments Section */}
      <TreatmentSection data={data.majorTreatments} />

      {/* Therapy Section */}
      <TherapySection data={data.therapies} />

      {/* Why Choose Us Section */}
      <WhyChooseUs data={data.whyChooseUs} />

      {/* Before & After Results */}
      <BeforeAfter data={data.beforeAfter} />

      {/* Testimonials Section */}
      <TestimonialsSection data={data.testimonials} />

      {/* Chennai Branch & Doctors Section */}
      <DoctorSection data={data.doctors} />

      {/* Optional Sections - Uncomment if needed */}
      {/* <VideoSection /> */}
      {/* <PhotoBanner /> */}
      {/* <CreativeSection data={data} /> */}
      {/* YouTube Shorts Channels Section */}
      <YoutubeShortsSection />
    </>
  );
}
