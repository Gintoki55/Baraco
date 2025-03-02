import { Poppins, Montserrat, Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import { SelectedLanguageProvider } from "./context/SelectedLanguageContext";
import ArrowBtn from "./components/arrow";
import { Analytics } from "@vercel/analytics/react"
// تحسين تحميل الخطوط مع display: "swap" وتقليل الأوزان غير الضرورية
// تحسين تحميل الخطوط
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"], display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "600"], display: "swap" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Barkhad Baraco - Innovative Business Solutions</title>
        <meta name="description" content="Baraco provides top-notch business solutions, from digital transformation to strategic consulting. Discover our services and elevate your business today." />
        <meta name="keywords" content="Barkhad Baraco, Barkhad International, business solutions, digital transformation, consulting, strategy, innovation, technology, enterprise solutions, startup growth, IT solutions, business development, digital marketing, financial consulting, management solutions, e-commerce, AI solutions,branding, investment consulting, market analysis, international business, corporate strategy, strategic planning" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="canonical" href="https://barkhad-baraco.com" />

        {/* Open Graph (Facebook) */}
        <meta property="og:title" content="Barkhad Baraco - Innovative Business Solutions" />
        <meta property="og:description" content="Empowering businesses with modern solutions. Explore our expertise in technology, strategy, and digital transformation." />
        <meta property="og:url" content="https://barkhad-baraco.com" />
        <meta property="og:site_name" content="Barkhad Baraco" />
        <meta property="og:image" content="/Logo.png" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Barkhad Baraco - Innovative Business Solutions" />
        <meta name="twitter:description" content="Providing cutting-edge business solutions for digital success." />
        <meta name="twitter:image" content="/Logo.png" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body  className={`${montserrat.className} ${poppins.className} ${inter.className} antialiased`}>
        <SelectedLanguageProvider>
          <Header />
            <main>
              {children}
              <Analytics/>
            </main>
          <ArrowBtn />
          <Footer />
        </SelectedLanguageProvider>
      </body>
    </html>
  );
}
