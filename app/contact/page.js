import React from 'react';
import FormJsx from '../components/Form';
import HeroContact from '../components/heroContact';

export const metadata = {
  title: "Contact Us - Baraco",
  description: "Get in touch with Baraco for expert solutions in trade and logistics. Reach out via email, phone, or visit our office for more information.",
};

async function Contact() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return (
    <>
      {/* Hero Section */}
      <section className="relative sm:min-h-screen h-[329px] flex items-center justify-center text-center px-4">
        <HeroContact />
      </section>

      <section>
        <FormJsx />
      </section>
    </>
  );
}

export default Contact;
