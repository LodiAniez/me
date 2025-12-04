import React from "react";

const About: React.FC = () => {
  const personalInfo = [
    { label: "Name", value: "Dexter Louie Aniez" },
    { label: "Email", value: "louieaniez@gmail.com" },
    { label: "Date of birth", value: "27 April, 1998" },
    {
      label: "From",
      value: "Molave, Zamboanga del Sur, Mindanao, Philippines",
    },
  ];

  const stats = [
    { number: "6+", label: "Years Experience" },
    { number: "50+", label: "Happy Clients" },
    { number: "100+", label: "Projects Done" },
    { number: "3", label: "Get Awards" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description and Personal Info */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              I'm <span className="text-cyan-400">Dexter Louie Aniez</span>, a
              Fullstack Developer
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I help you build robust fullstack applications that drive your
              business forward. Numerous clients have launched successful
              products working with my expertise in React, Node.js, and cloud
              technologies. From concept to deployment, I handle every aspect of
              your application development.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Delivering performant, secure, and scalable solutions within
              deadlines and budget is my priority. I've been crafting digital
              experiences that combine beautiful frontends with powerful
              backends, ensuring your application not only looks great but
              performs flawlessly under real-world conditions.
            </p>

            {/* Personal Information */}
            <div className="space-y-3 mb-8">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-gray-400 w-32">{info.label}:</span>
                  <span className="text-white font-medium">{info.value}</span>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Download CV
            </button>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
              >
                <h4 className="text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </h4>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
