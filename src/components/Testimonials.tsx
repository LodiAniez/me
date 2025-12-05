import React from "react";
import nicko from "../assets/nicko.jpeg";
import kent from "../assets/kent.jpeg";
import alejandro from "../assets/al.jpeg";
import savi from "../assets/savi.jpeg";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nicko Balboa",
      position: "Software Developer",
      image: nicko,
      text: `Sir Dexter is an inspiring senior developer with deep technical knowledge and exceptional mentorship skills. He
  empowers developers by teaching understanding, not just solutions. His clean architecture approach, humility, and
  passion for knowledge-sharing make him an outstanding mentor and team leader.`,
      rating: 5,
    },
    {
      id: 2,
      name: "Kent Ashley Clementir",
      position: "Fullstack Developer",
      image: kent,
      rating: 5,
      text: `Highly skilled Full Stack Engineer excelling in frontend, backend, and team leadership. Exceptional technical and
  communication abilities combined with strong work ethic and collaborative spirit make Dexter an invaluable team
  asset.`,
    },
    {
      id: 3,
      name: "Alejandro Oletres Jr.",
      position: "Fullstack Developer",
      image: alejandro,
      text: `Exceptional lead developer who drives technical excellence while fostering team collaboration. Dexter delivers
  high-quality solutions on time, mentors effectively, and manages complex projects with ease. His natural leadership,
  technical expertise, and clear communication make him highly recommended for leadership roles.`,
      rating: 5,
    },
    {
      id: 4,
      name: "Savi Gorospe, PMP",
      position: "Senior Project Manager",
      image: savi,
      text: `Exceptional Full-Stack Engineer and natural leader specializing in Nest.js, PostgreSQL, and Docker. Delivers
  scalable applications while fostering high-performing teams through mentorship and code reviews. Problem-solving
  mindset drives innovative solutions with lasting impact. Highly recommended for technical leadership.`,
      rating: 5,
    },
  ];

  return (
    <section id="testimonial" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Client <span className="text-cyan-400">Speaks</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-cyan-400 mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
