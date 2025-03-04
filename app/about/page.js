import React from 'react';
import OurValuesSection from '../components/Values';
import Agreements from '../components/Agreements';
import FAQs from '../components/faQs';
import ImgSliders from '../components/imgSliders';
import ContactSection from '../components/contact';
import WhoWeAre from '../components/whoweSection';
import VisionAndMission from '../components/VisionAndMission';
import Hero from '../components/hero';

export const metadata = {
  title: "About Us - Baraco",
  description: "Learn more about Baraco’s vision, mission, and commitment to excellence in global trade and logistics solutions."
};


function AboutPage() {
  return (
    <>
      {/* Hero Section */}

        <section>
          <Hero title="About BARACO" subtitle="The quality you expect, the options you need." image="/images/b21.png" />
        </section>
      
        <section>
          <Agreements />
        </section>

        <section className="sm:px-24 sm:py-8 p-4 mt-10">
          <WhoWeAre />
        </section>

        <section className="sm:px-24 sm:py-8 p-4">
          <VisionAndMission />
        </section>

        <section className="bg-gray-50">
          <OurValuesSection /> 
        </section>

        <section className="w-full my-5">
          <ImgSliders />
        </section>

        <section>
          <FAQs />
        </section>

        <section>
          <ContactSection />
        </section>
    </>
  );
}

export default AboutPage;
