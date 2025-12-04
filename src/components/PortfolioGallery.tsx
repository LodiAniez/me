import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Design", "Brand", "Photos"];

  const projects: Project[] = [
    {
      id: 1,
      title: "Project Title 1",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Project Title 2",
      category: "Brand",
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Project Title 3",
      category: "Photos",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Project Title 4",
      category: "Design",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Project Title 5",
      category: "Brand",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Project Title 6",
      category: "Photos",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
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
      </div>
    </section>
  );
};

export default PortfolioGallery;
