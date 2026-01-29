import type { Metadata, Viewport } from "next";
import TopBar from "./components/Topbar";
import Navbar from "./components/Navbar";
import { getData } from "./lib/loadData";
import "./globals.css";
import Footer from "./components/Footer";
import { Noto_Sans_Tamil } from "./fonts";
import FloatingActionButtons from "./components/FloatingActionButtons";
import ChatBot from "./components/ChatBot";
import PageWrapper from "./components/PageWrapper";
import ScrollProgressBar from "./components/ScrollProgressBar";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const navData = data.site;

  return {
    metadataBase: new URL("https://www.rjrherbalhospitals.in/"),
    title: {
      default: `${navData.name} - Best Ayurveda, Siddha & Herbal Hospital in Tamil Nadu`,
      template: `%s | ${navData.name}`
    },
    description: "Learn about RJR Herbal Hospitals' 150-year legacy of traditional healing. Founded by டாக்டர் எஸ்.ஆர். ஜெயதுரை, we bring 5 generations of medical wisdom in Siddha and Ayurveda to modern healthcare. Specialist in Varmam therapy, Panchakarma, and natural healing for various chronic conditions.",
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
    icons: {
      icon: '/favicon.png',
      shortcut: '/favicon.png',
      apple: '/favicon.png',
    },
    alternates: {
      canonical: "https://www.rjrherbalhospitals.in/", // Replace with the actual Tamil domain if different
      languages: {
        'ta-IN': 'https://www.rjrherbalhospitals.in/',
        // 'en-IN': 'https://main.rjrherbalhospitals.in/', // Example of cross-linking to English site
      },
    },
    openGraph: {
      type: "website",
      locale: "ta_IN",
      url: "https://www.rjrherbalhospitals.in/",
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
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={Noto_Sans_Tamil.className}>
        <ScrollProgressBar />
        <TopBar />
        <Navbar />
        <PageWrapper>
          <main>{children}</main>
        </PageWrapper>
        <Footer />
        <ChatBot />
        <FloatingActionButtons />
      </body>
    </html>
  );
}
