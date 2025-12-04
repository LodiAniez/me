import React from "react";

const Resume: React.FC = () => {
  const education = [
    {
      year: "2011 - 2015",
      title: "Electronics",
      institution:
        "Molave Vocational Technical School, Zamboanga del Sur, Mindanao",
      description:
        "Studied and mastered the fundamentals of electronics, including circuit design, soldering, and troubleshooting techniques.",
    },
    {
      year: "2015 - 2019",
      title: "Bachelor of Science in Computer Science",
      institution:
        "Western Mindanao State University - Molave External Studies Unit",
      description:
        "Studied core computer science subjects such as programming, data structures, algorithms, databases, and software engineering.",
    },
    {
      year: "2019 - Present",
      title: "Self teaching and Online Courses",
      institution: "None (Self-taught)",
      description:
        "Upskilling through online platforms like Coursera, Udemy, and edX, focusing on web development, fullstack development, and cloud computing.",
    },
  ];

  const experience = [
    {
      year: "September, 2019 - May, 2021",
      title: "Fullstack Developer",
      company: "VirtualBiznest, Cebu",
      description:
        "Fullstack Developer at Virtual Biznest startup, where I built complete web applications for corporate clients and startups. Developed frontend/backend systems, managed VPS deployments, and collaborated in a 3-person team to deliver custom digital solutions from concept to production.",
    },
    {
      year: "May, 2021 - August, 2021",
      title: "Fullstack Developer",
      company: "iPay Center, Pagadian",
      description: `Led fullstack development at iPay Center startup, building a bill payment
  platform with API integrations. Managed a 3-person team, architected scalable
  systems, and handled complete development lifecycle including cloud VPS
  deployment and external service integrations.`,
    },
    {
      year: "August, 2021 - March, 2022",
      title: "Fullstack Developer",
      company: "JCurve Solutions, Singapore",
      description: `Enhanced enterprise web applications at JCurve for Australian clients as a
  Fullstack Developer. Implemented new features, optimized performance, and
  collaborated with cross-functional teams to deliver quality solutions that met
  evolving business requirements.`,
    },
    {
      year: "March, 2022 - June, 2022",
      title: "Lead Fullstack Developer",
      company: `Molave Young's Milling Corporation, Molave, Zamboanga del Sur`,
      description: `Solo Fullstack Developer at MYMC, responsible for end-to-end development of
  automation solutions. Architected, developed, tested, and deployed mobile/web
  applications to streamline manual business processes. Managed complete project
  lifecycle and reported directly to management.`,
    },
    {
      year: "July, 2022 - August, 2024",
      title: "Lead Fullstack Developer",
      company: "Sun Asterisk Corporation, Cebu",
      description: `Led development teams at Sun Asterisk, building and enhancing software for
  Japanese clients. Managed fullstack development, code reviews, and mentored
  junior developers. Coordinated project planning with stakeholders while
  delivering quality solutions for new and existing applications.`,
    },
    {
      year: "2019 - 2024",
      title: "Freelance Fullstack Developer",
      company: "Virtual Champions",
      description: `Freelance Fullstack Developer for Dubai startup via Virtual Champions,
  enhancing depot management applications. Developed new features, fixed bugs, and
   optimized performance while maintaining direct client communication to deliver
  efficient digital solutions.`,
    },
  ];

  const skills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 95 },
    { name: "React JS", percentage: 95 },
    { name: "Angular JS", percentage: 80 },
    { name: "Bootstrap", percentage: 90 },
    { name: "Tailwind CSS", percentage: 95 },
    { name: "Typescript", percentage: 95 },
    { name: "Node.js", percentage: 95 },
    { name: "Angular", percentage: 90 },
    { name: "Vue.js", percentage: 90 },
    { name: "PostgreSQL", percentage: 95 },
    { name: "MySQL", percentage: 95 },
    { name: "Firebase", percentage: 95 },
    { name: "MongoDB", percentage: 95 },
  ];

  return (
    <section id="resume" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
            <span className="text-cyan-400 mr-3">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </span>
            Education
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-gray-700"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-400"></div>
                <span className="text-cyan-400 text-sm font-semibold">
                  {item.year}
                </span>
                <h4 className="text-xl font-bold text-white mt-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm mb-2">{item.institution}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
            <span className="text-cyan-400 mr-3">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            Experience
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {experience.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-gray-700"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-400"></div>
                <span className="text-cyan-400 text-sm font-semibold">
                  {item.year}
                </span>
                <h4 className="text-xl font-bold text-white mt-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm mb-2">{item.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            My Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-semibold">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
