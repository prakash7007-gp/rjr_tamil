import type { Metadata, Viewport } from "next";
import TopBar from "./components/Topbar";
import Navbar from "./components/Navbar";
import { getData } from "./lib/loadData";
import "./globals.css";
import Footer from "./components/Footer";
import { Noto_Sans_Tamil } from "./fonts";
import FloatingActionButtons from "./components/FloatingActionButtons";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const navData = data.site;

  return {
    metadataBase: new URL("https://www.rjrherbalhospitals.com/"),
    title: {
      default: `${navData.name} - Best Ayurveda, Siddha & Herbal Hospital in Tamil Nadu`,
      template: `%s | ${navData.name}`
    },
    description: "RJR Herbal Hospitals offers 150 years of heritage in Ayurveda, Siddha, and Herbal treatments. Specialist in Varmam therapy, Panchakarma, and natural healing for various chronic conditions.",
    keywords: [
      "Ayurveda hospital Tamil Nadu",
      "Siddha hospital Chennai",
      "Best Siddha doctor in Chennai",
      "Ayurvedic treatment Chennai",
      "Chennai Siddha and Ayurveda center",
      "Siddha medicine for arthritis Chennai",
      "Ayurvedic skin care Chennai",
      "Herbal medicine hospital",
      "Varmam therapy",
      "Panchakarma treatment",
      "Traditional Tamil medicine",
      "Herbal healing",
      "Best Ayurveda hospital India",
      "Siddha doctors Tamil Nadu",
      "Natural treatment for arthritis",
      "Siddha for skin diseases"
    ],
    authors: [{ name: navData.name }],
    robots: "index, follow",
    alternates: {
      canonical: "https://www.rjrherbalhospitals.com/", // Replace with the actual Tamil domain if different
      languages: {
        'ta-IN': 'https://www.rjrherbalhospitals.com/',
        // 'en-IN': 'https://main.rjrherbalhospitals.com/', // Example of cross-linking to English site
      },
    },
    openGraph: {
      type: "website",
      locale: "ta_IN",
      url: "https://www.rjrherbalhospitals.com/",
      siteName: navData.name,
      title: navData.name,
      description: "Traditional healing with 150 years of experience in Ayurveda, Siddha and Herbal medicine.",
      images: [
        {
          url: "/images/newlogo.png",
          width: 800,
          height: 600,
          alt: navData.name,
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ta">
      <body className={Noto_Sans_Tamil.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActionButtons />
      </body>
    </html>
  );
}
