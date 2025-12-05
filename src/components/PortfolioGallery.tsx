import React, { useState } from "react";
import meanduImage from "../assets/projects/meandu.png";
import singlifeImage from "../assets/projects/singlife.png";
import sbsImage from "../assets/projects/sbs.png";
import jcurveImage from "../assets/projects/jcurve.png";
import campconnectionImage from "../assets/projects/campconnection.png";
import canvaschatImage from "../assets/projects/canvaschat.png";
import resumePDF from "../assets/resume.pdf";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Dexter_Louie_Aniez_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filters = ["All", "Web App", "Mobile App", "Widget"];

  const projects: Project[] = [
    {
      id: 1,
      title: "me&u app",
      category: "Mobile App, Web App",
      image: meanduImage,
    },
    {
      id: 2,
      title: "Singlife",
      category: "Mobile App",
      image: singlifeImage,
    },
    {
      id: 3,
      title: "SBS",
      category: "Web App",
      image: sbsImage,
    },
    {
      id: 4,
      title: "JCurve",
      category: "Web App",
      image: jcurveImage,
    },
    {
      id: 5,
      title: "Camp Connection",
      category: "Mobile App, Web App",
      image: campconnectionImage,
    },
    {
      id: 6,
      title: "Canvas Chat",
      category: "Widget",
      image: canvaschatImage,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.category.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-cyan-400 text-gray-900"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-cyan-400 text-sm">{project.category}</p>
                </div>
              </div>
              {/* View Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-cyan-400 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Portfolio CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Want to see more of my work?
          </p>
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV to See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
