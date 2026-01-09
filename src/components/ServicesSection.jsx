import React from "react";
import { HomeIcon, PencilSquareIcon, CubeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const services = [
  {
    title: "Interior Design",
    description: "Stylish indoor spaces with comfort and function.",
    icon: HomeIcon,
  },
  {
    title: "Exterior Design",
    description: "Beautiful outdoor designs that impress.",
    icon: PencilSquareIcon,
  },
  {
    title: "Modern Furniture",
    description: "Sleek furniture for modern homes and offices.",
    icon: CubeIcon,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 px-4 sm:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-primary">
          Our Services
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          We provide professional design and furnishing services to make your
          spaces stunning and functional.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              className="
                bg-gray-100 
                p-4 sm:p-5 lg:p-6 
                rounded-lg 
                shadow-md
                max-w-70 sm:max-w-none
              "
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex justify-center mb-3">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-secondary" />
              </div>

              <h3 className="text-base sm:text-lg font-semibold mb-1 text-center text-primary">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-center text-gray-600">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
