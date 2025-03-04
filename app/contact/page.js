import React from 'react';
import FormJsx from '../components/Form';
import Hero from '../components/hero';

export const metadata = {
  title: "Contact Us - Baraco",
  description: "Get in touch with Baraco for expert solutions in trade and logistics. Reach out via email, phone, or visit our office for more information.",
};

function Contact() {

  return (
    <>
      {/* Hero Section */}
      <section>
       <Hero title="Contact Us" subtitle="The quality you expect, the options you need." image="/images/b18.png" imgClass="object-top" />
      </section>

      <section>
        <FormJsx />
      </section>
    </>
  );
}

export default Contact;
