import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#f7f4ee] py-24 px-4 sm:px-12 lg:px-24 xl:px-40">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-primary font-medium mb-3">
          Contact Us
        </p>

        <h2 className="text-4xl sm:text-5xl font-heading text-black mb-4">
          We’d love to hear from you
        </h2>

        <p className="text-gray-700 text-base sm:text-lg">
          Say hello to the friendly team at our office.
        </p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        
        {/* Address */}
        <div className="flex gap-4">
          <div className="w-1 bg-secondary rounded-full"></div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-700 leading-relaxed">
              09 Rear Admiral Ozojiofor Avaenue GRA,<br />
              Awka, Anambra State, Nigeria.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-gray-700 leading-relaxed">
            <a href="tel:+2347032987289" className="text-secondary font-medium hover:underline">07032987289</a> <br />
            <a href="tel:+2347064622126" className="text-secondary font-medium hover:underline">07064622126</a> <br />
            <a
              href="mailto:henrybdesignsltd@gmail.com"
              className="text-secondary font-medium hover:underline"
            >
              henrybdesignsltd@gmail.com
            </a>
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
          <p className="text-gray-700 leading-relaxed">
            Monday – Saturday: 9am – 5pm <br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
