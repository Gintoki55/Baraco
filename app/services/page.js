import React from 'react';
import ServicesJsx from '../components/services';
import FAQs from '../components/faQs';
import ContactSection from '../components/contact';
import Hero from '../components/hero';

export const metadata = {
  title: "Our Services - Baraco",
  description: "Explore Baraco’s comprehensive trade and logistics services, including international representation, freight solutions, and value-added logistics support.",
};

function Services() {
  return (
    <>
      {/* Hero Section */}
      <section >
        <Hero title="Our Services" subtitle="The quality you expect, the options you need." image="/images/b15.webp" marginTop="mt-16"/>
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
