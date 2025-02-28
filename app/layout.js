import { Poppins, Montserrat, Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import { SelectedLanguageProvider } from "./context/SelectedLanguageContext";
import ArrowBtn from "./components/arrow";
import Loading from "./loading";
import { Suspense } from "react";
// تحسين تحميل الخطوط مع display: "swap" وتقليل الأوزان غير الضرورية
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"], 
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"], 
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"], 
  display: "swap",
});

export default function RootLayout({ children }) {
  const fontsClass = `${montserrat.variable} ${poppins.variable} ${inter.variable} antialiased`;

  return (
    <html lang="en">
      <Head>
        <title>Baraco - Innovative Solutions for Your Business</title>
        <meta name="description" content="Baraco provides top-notch business solutions, from digital transformation to strategic consulting. Discover our services and elevate your business today." />
        <meta name="keywords" content="Baraco, business solutions, digital transformation, consulting, strategy, innovation, technology" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook) */}
        <meta property="og:title" content="Baraco - Innovative Solutions" />
        <meta property="og:description" content="Empowering businesses with modern solutions. Explore our expertise in technology, strategy, and digital transformation." />
        <meta property="og:url" content="https://baraco.com" />
        <meta property="og:site_name" content="Baraco" />
        <meta property="og:image" content="/Logo.png" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Baraco - Innovative Solutions" />
        <meta name="twitter:description" content="Providing cutting-edge business solutions for digital success." />
        <meta name="twitter:image" content="/Logo.png" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={fontsClass}>
        <SelectedLanguageProvider>
          <Header />
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          <ArrowBtn />
          <Footer />
        </SelectedLanguageProvider>
      </body>
    </html>
  );
}
