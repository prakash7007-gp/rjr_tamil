// app/layout.tsx
import TopBar from "./components/Topbar";
import Navbar from "./components/Navbar";
import { getData } from "./lib/loadData";
import "./globals.css"; // your global styles
import Footer from "./components/Footer";
import { Noto_Sans_Tamil } from "./fonts";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  const navData = data.site;

  return (
    <html lang="ta">
      <head>
        <title>{navData.name}</title>
      </head>
      <body className={Noto_Sans_Tamil.className}>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
