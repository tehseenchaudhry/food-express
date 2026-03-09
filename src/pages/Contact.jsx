import React from "react";
import ContactHero from "../component/contact/ContactHero";
import ContactForm from "../component/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ContactHero />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;