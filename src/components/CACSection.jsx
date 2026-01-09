import React, { useState } from "react";

const CACSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-[#f7f4ee]">
      
      {/* CENTERED CARD CONTENT */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-3 text-primary">
          Company Registration
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          HenryB Designs Ltd is a duly registered company with the Corporate
          Affairs Commission (CAC), Nigeria. Our registration confirms our
          legitimacy and commitment to professional business practices.
        </p>

        {/* View CAC Button */}
        <button
          onClick={() => setOpen(true)}
          className="inline-block text-secondary font-semibold underline hover:opacity-80 transition"
        >
          View CAC Certificate
        </button>
      </div>

      {/* IMAGE MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white p-4 rounded-xl w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* IMAGE WRAPPER */}
            <div className="flex justify-center">
              <img
                src="https://pvjwquzgfkspweijebwb.supabase.co/storage/v1/object/public/henryB-designs/CAC/cac.jpg"
                alt="HenryB Designs Ltd CAC Certificate"
                className="
                  w-full
                  max-w-225
                  max-h-[85vh]
                  object-contain
                  rounded-lg
                "
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CACSection;
