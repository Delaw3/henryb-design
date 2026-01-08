import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projectsData";

const Projects = () => {
  // show only first 4 on homepage
  const featuredProjects = projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="bg-[#f7f4ee] px-4 sm:px-8 lg:px-16 py-16"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <h2 className="text-4xl sm:text-5xl font-heading text-black">
          Featured Projects
        </h2>

        <Link
          to="/projects"
          className="text-primary flex items-center gap-2 text-lg hover:underline"
        >
          View Our Projects <span className="text-2xl">→</span>
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="group overflow-hidden rounded-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-70 sm:h-87.5 lg:h-105 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <h3 className="text-2xl font-subheading text-black mt-4 mb-2 group-hover:text-secondary transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
