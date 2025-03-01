import React from 'react';
import ServicesJsx from '../components/services';
import FAQs from '../components/faQs';
import ContactSection from '../components/contact';
import HeroSerivces from '../components/heroSerivces';

export const metadata = {
  title: "Our Services - Baraco",
  description: "Explore Baraco’s comprehensive trade and logistics services, including international representation, freight solutions, and value-added logistics support.",
};

async function Services() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return (
    <>
      {/* Hero Section */}
      <section className="relative sm:min-h-screen h-[329px] flex items-center justify-center text-center px-4">
        <HeroSerivces />
      </section>

      {/* Main Content */}
      <main>
        <section>
          <ServicesJsx />
        </section>

        <section>
          <FAQs />
        </section>

        <section>
          <ContactSection />
        </section>
      </main>
    </>
  );
}

export default Services;
