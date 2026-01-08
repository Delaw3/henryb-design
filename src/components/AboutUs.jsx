import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-[#f7f4ee] px-4 sm:px-8 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Image */}
        <div className="shrink-0 w-full lg:w-1/2">
          <img
            src="https://pvjwquzgfkspweijebwb.supabase.co/storage/v1/object/public/henryB-designs/Profile/profile-picture.jpg"
            alt="Founder"
            className="w-full h-auto rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2">
          {/* Small Label */}
          <p className="text-secondary font-semibold text-sm mb-2 uppercase tracking-wider">
            About Us
          </p>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-black mb-6">
            Who We Are
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            HenryB Designs Ltd is a company specialized in architectural interior and exterior projects from start to finish. We handle both local and international projects that require our design, management skills, and furniture fixings for both real estate developers and personal property owners.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            HenryB Designs Ltd was founded in the year 2018 by Miracle Godsent Nwachukwu (Creative Director), with the vision to bring elegance, functionality, and modern design to every space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
