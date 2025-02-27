import { Poppins, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import { SelectedLanguageProvider } from "./context/SelectedLanguageContext";
import ArrowBtn from "./components/arrow";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // اختر الأوزان المطلوبة
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // الأوزان المناسبة للعناوين
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata = {
  title: "Baraco - Innovative Solutions for Your Business",
  description: "Baraco provides top-notch business solutions, from digital transformation to strategic consulting. Discover our services and elevate your business today.",
  keywords: "Baraco, business solutions, digital transformation, consulting, strategy, innovation, technology",
  robots: "index, follow",
  openGraph: {
    title: "Baraco - Innovative Solutions",
    description: "Empowering businesses with modern solutions. Explore our expertise in technology, strategy, and digital transformation.",
    url: "https://baraco.com",
    siteName: "Baraco",
    images: [
      {
        url: "/images/barkhed4.jpeg", // Ensure this image is in the public folder
        width: 1200,
        height: 630,
        alt: "Baraco - Business Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baraco - Innovative Solutions",
    description: "Providing cutting-edge business solutions for digital success.",
    images: ["/images/b18.png"],
  },
};


export default async function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${inter.variable} antialiased`} >
          
              <SelectedLanguageProvider>
                  <Header />
                    {children}
                    <ArrowBtn />
                  <Footer />
              </SelectedLanguageProvider>
      </body>
    </html>
  );
}
