import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import projects from "../data/projectsData";

const categories = [
  "all",
  "sitting-room",
  "kitchen",
  "bedroom",
  "exterior",
  "ongoing",
];

const ITEMS_PER_PAGE = 6;

const AllProjects = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  /* FILTER */
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  /* RESET PAGE WHEN FILTER CHANGES */
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  /* PAGINATION LOGIC */
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="bg-[#f7f4ee] px-4 sm:px-8 lg:px-16 py-16">
      <h2 className="text-4xl sm:text-5xl font-heading text-black mb-4">
        All Projects
      </h2>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
        Explore our full portfolio of completed projects. From luxurious living spaces
        to modern kitchens and bedrooms, each project reflects our commitment to quality,
        creativity, and attention to detail.
      </p>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                activeCategory === cat
                  ? "bg-secondary text-white"
                  : "bg-white text-black border border-gray-300 hover:bg-primary hover:text-white"
              }
            `}
          >
            {cat.replace("-", " ").toUpperCase()}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedProjects.map((project, i) => (
          <div
            key={project.id}
            className="group overflow-hidden rounded-xl cursor-pointer"
            onClick={() => {
              setIndex(startIndex + i);
              setOpen(true);
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <h3 className="text-2xl font-subheading text-black mt-4 mb-2">
              {project.title}
            </h3>

            <p className="text-gray-600 text-base leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-14">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-4 py-2 border rounded disabled:opacity-40"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-full border text-sm
                ${
                  currentPage === i + 1
                    ? "bg-primary text-white"
                    : "bg-white hover:bg-secondary hover:text-white"
                }
              `}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-4 py-2 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={filteredProjects.map((p) => ({
          src: p.image,
          title: p.title,
          description: p.description,
        }))}
      />
    </section>
  );
};

export default AllProjects;
