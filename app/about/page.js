import React from 'react';
import OurValuesSection from '../components/Values';
import Agreements from '../components/Agreements';
import FAQs from '../components/faQs';
import ImgSliders from '../components/imgSliders';
import ContactSection from '../components/contact';
import WhoWeAre from '../components/whoweSection';
import VisionAndMission from '../components/VisionAndMission';
import HeroAbout from '../components/heroAbout';

export const metadata = {
  title: "About Us - Baraco",
  description: "Learn more about Baraco’s vision, mission, and commitment to excellence in global trade and logistics solutions."
};


async function AboutPage() {
   await new Promise(resolve => setTimeout(resolve, 1000));
  return (
    <>
      {/* Hero Section */}
      <section className='relative sm:min-h-screen h-[329px] flex items-center justify-center text-center px-4'>
        <HeroAbout />
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
