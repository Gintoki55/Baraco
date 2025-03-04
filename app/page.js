import React from "react";
import Agreements from "./components/Agreements";
import Hero from "./components/hero";
import About from "./components/about";
import ServicesJsx from "./components/services";
import FaQsJSx from "./components/faQs";
import ContactSection from "./components/contact";

export const metadata = {
  title: "Baraco - Global Trade & Logistics",
  description: "Discover Baraco’s innovative solutions in international trade and logistics, connecting businesses worldwide with efficiency and reliability.",
};


function Home() {
  return (
    <main>
      <section className="object-top">
        <Hero title="BARACO" subtitle="The quality you expect, the options you need." image="/images/b22.png" />
      </section>

      <section>
        <Agreements />
      </section>

      <section>
        <About/>
      </section>

      <section>
        <ServicesJsx />
      </section>

      <section>
        <FaQsJSx />
      </section>
      
       <section>
        <ContactSection />
      </section>
    </main>
  );
}

export default Home;
