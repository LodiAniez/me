// All portfolio content in one place, consumed by the retro OS windows.
import meImg from "../assets/me.png";
import resumePDF from "../assets/resume.pdf";
import meanduImg from "../assets/projects/meandu.png";
import singlifeImg from "../assets/projects/singlife.png";
import sbsImg from "../assets/projects/sbs.png";
import jcurveImg from "../assets/projects/jcurve.png";
import campconnectionImg from "../assets/projects/campconnection.png";
import canvaschatImg from "../assets/projects/canvaschat.png";
import nickoImg from "../assets/nicko.jpeg";
import kentImg from "../assets/kent.jpeg";
import alImg from "../assets/al.jpeg";
import saviImg from "../assets/savi.jpeg";
import raketHero from "../assets/raket/raket-hero.png";
import raketLanding from "../assets/raket/raket-landing.png";
import raketComparison from "../assets/raket/raket-comparison.png";
import raketInvoice from "../assets/raket/raket-invoice.jpg";
import itsummitChampions from "../assets/itsummit/itsummit-champions.jpg";
import itsummitGroup from "../assets/itsummit/itsummit-group.jpg";
import itsummitStage from "../assets/itsummit/itsummit-stage.jpg";
import codingameTypescript from "../assets/certifications/codingame-typescript-certification.png";
import type { Achievement, Certification, Project } from "./types";

export const RESUME_PDF = resumePDF;
export const ME_IMG = meImg;

export const profile = {
  name: "Dexter Louie Aniez",
  roles: ["Freelancer", "Fullstack Developer", "Mentor"],
  location: "Molave, Zamboanga del Sur, Mindanao, Philippines",
  email: "louieaniez@gmail.com",
  phone: "+63 938 367 3347",
  dob: "27 April, 1998",
  address:
    "Door 2, Redelosa Apt., Brgy. Sudlon, Molave, Zamboanga del Sur, Mindanao, Philippines",
};

export const aboutParagraphs = [
  "I help you build robust fullstack applications that drive your business forward. Numerous clients have launched successful products working with my expertise in React, Node.js, and cloud technologies. From concept to deployment, I handle every aspect of your application development.",
  "Delivering performant, secure, and scalable solutions within deadlines and budget is my priority. I've been crafting digital experiences that combine beautiful frontends with powerful backends, ensuring your application not only looks great but performs flawlessly under real-world conditions.",
];

export const stats = [
  { number: "7+", label: "Years Experience" },
  { number: "50+", label: "Happy Clients" },
  { number: "100+", label: "Projects Done" },
  { number: "3", label: "Awards" },
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, modern web interfaces using React, Angular, Vue.js, and cutting-edge frontend technologies to create exceptional user experiences.",
  },
  {
    title: "Backend Development",
    description:
      "Developing robust server-side applications with Node.js, NestJS, and Express. Creating scalable APIs, microservices, and efficient backend architectures.",
  },
  {
    title: "Database Design",
    description:
      "Designing efficient database schemas and structures using PostgreSQL, MySQL, MongoDB, and Firebase. Optimizing queries and ensuring data integrity.",
  },
  {
    title: "App Design & Development",
    description:
      "Creating cross-platform mobile applications with modern frameworks. Delivering native-like performance and seamless user experiences on iOS and Android.",
  },
  {
    title: "Desktop Software Development",
    description:
      "Building powerful desktop applications for Windows, macOS, and Linux using Electron and other modern frameworks for professional business solutions.",
  },
  {
    title: "Mentorship",
    description:
      "Guiding and training junior developers through code reviews, pair programming, and knowledge sharing. Helping teams grow and achieve their full potential.",
  },
];

export const education = [
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
    title: "BS in Computer Science",
    institution:
      "Western Mindanao State University - Molave External Studies Unit",
    description:
      "Studied core computer science subjects such as programming, data structures, algorithms, databases, and software engineering.",
  },
  {
    year: "2019 - Present",
    title: "Self teaching and Online Courses",
    institution: "Self-taught",
    description:
      "Upskilling through online platforms like Coursera, Udemy, and edX, focusing on web development, fullstack development, and cloud computing.",
  },
];

export const certifications: Certification[] = [
  {
    year: "Aug 2026",
    title: "TypeScript Certification — With Honors",
    issuer: "CodinGame by CoderPad",
    description:
      "Recognized as fully capable and skilled in TypeScript problem solving, earning the certification with honors.",
    credentialId: "10633296",
    url: "https://www.codingame.com/certification/IoLBWOdOl6b6214DCWfTyQ",
    image: codingameTypescript,
  },
];

export const experience = [
  {
    year: "Jul 2025 - Current",
    title: "Software Engineer II",
    company: "Me&u, Remote",
    description:
      "Develop robust, scalable, modular and API-centric infrastructure and databases for web applications. Coordinate with engineers and management on application design and progress, author code fixes and enhancements, and write and execute test plans to ship highly available products.",
  },
  {
    year: "Feb 2025 - Jul 2025",
    title: "Technical Lead Software Developer",
    company: "The Camp Connection, Remote",
    description:
      "Led development across the systems lifecycle, from requirement gathering to production releases. Translated customer requirements into use cases, designed customized solutions, built desktop and mobile software, modernized legacy code, and supervised programmers and designers against targets.",
  },
  {
    year: "Aug 2024 - Feb 2025",
    title: "Lead Full Stack Developer",
    company: "Collabera Digital Philippines, Remote",
    description:
      "Led a full-stack team through code reviews, mentoring, and sprint planning to deliver high-quality software on time. Designed APIs with back-end developers, wrote unit tests for automation, and managed SQL/NoSQL databases with Node.js and ORMs.",
  },
  {
    year: "Jul 2022 - Aug 2024",
    title: "Full Stack Developer",
    company: "Sun* Corp, Remote",
    description:
      "Built new, efficient and well-tested code across a variety of software projects. Amended existing software to upgrade interfaces and elevate performance, troubleshot and debugged issues, constructed algorithms and flowcharts, and reported progress weekly.",
  },
  {
    year: "Mar 2022 - Jul 2022",
    title: "Full Stack Developer",
    company: "Youngs Milling Corporation, Zamboanga del Sur",
    description:
      "Developed efficient, well-tested software and refined it from user feedback. Liaised with departments on technical issues, system design and maintenance, conferred with project managers on scope, and provided weekly progress reports.",
  },
  {
    year: "Aug 2021 - Mar 2022",
    title: "Full Stack Developer",
    company: "JCurve, Remote",
    description:
      "Delivered assigned tasks and targets fully remote, and helped lead weekly development and knowledge-sharing sessions. Maintained and improved existing websites and applications and contributed to large multi-developer projects using agile methodology.",
  },
  {
    year: "May 2021 - Aug 2021",
    title: "Lead Full Stack Developer",
    company: "iPay Center, Pagadian",
    description:
      "Integrated software components and third-party programs to improve accessibility and functionality. Resolved customer queries with clear step-by-step solutions, constructed algorithms and flowcharts, and provided weekly project reports.",
  },
  {
    year: "Sep 2019 - May 2021",
    title: "Full Stack Developer",
    company: "VirtualBiznest - Cebu Corp, Cebu",
    description:
      "Influenced ongoing designs, standards and methods across website, intranet and application projects. Helped plan technical solutions with PMs, led knowledge-sharing sessions, maintained complete documentation, and wrote clean, sustainable web applications.",
  },
  {
    year: "2019 - 2024",
    title: "Freelance Fullstack Developer",
    company: "Virtual Champions (Dubai)",
    description:
      "Enhanced depot management applications for a Dubai startup. Developed new features, fixed bugs, and optimized performance while maintaining direct client communication to deliver efficient digital solutions.",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Top 10 Finalist",
    event: "Build In! Payments Hackathon",
    icon: "🏆",
    app: "Raket App",
    appDescription:
      "An app that generates invoices for clients and helps move money across cross-border transactions using Morph.",
    role: "Led a team of 3 developers to build the app during the hackathon.",
    video: "https://www.youtube.com/watch?v=_xuVocSwaSg",
    images: [
      { src: raketHero, caption: "Raket — landing" },
      { src: raketLanding, caption: "Pitch deck — hero" },
      { src: raketComparison, caption: "Why Raket wins" },
      { src: raketInvoice, caption: "AI invoice (parsed by Gemini)" },
    ],
  },
  {
    title: "3× Java Programming Champion",
    event: "WMSU IT Summit (2016 – 2018)",
    icon: "🥇",
    description:
      "A grand-slam three-peat — champion for three consecutive years in the Java programming competition.",
    role: "Led WMSU-ESU Molave to three straight IT Summit programming titles.",
    images: [
      { src: itsummitChampions, caption: "Champions with the trophy" },
      { src: itsummitStage, caption: "On stage — Java winners" },
      { src: itsummitGroup, caption: "WMSU-ESU Molave · 7th IT Summit" },
    ],
  },
];

export const skills = [
  { name: "HTML/CSS", percentage: 95 },
  { name: "JavaScript", percentage: 95 },
  { name: "React JS", percentage: 95 },
  { name: "Angular", percentage: 90 },
  { name: "Vue.js", percentage: 90 },
  { name: "Tailwind CSS", percentage: 95 },
  { name: "TypeScript", percentage: 95 },
  { name: "Node.js", percentage: 95 },
  { name: "Bootstrap", percentage: 90 },
  { name: "PostgreSQL", percentage: 95 },
  { name: "MySQL", percentage: 95 },
  { name: "Firebase", percentage: 95 },
  { name: "MongoDB", percentage: 95 },
];

export const projects: Project[] = [
  { title: "me&u app", category: "Mobile App, Web App", image: meanduImg, filename: "meandu.exe" },
  { title: "Singlife", category: "Mobile App", image: singlifeImg, filename: "singlife.exe" },
  { title: "SBS", category: "Web App", image: sbsImg, filename: "sbs.exe" },
  { title: "JCurve", category: "Web App", image: jcurveImg, filename: "jcurve.exe" },
  { title: "Camp Connection", category: "Mobile App, Web App", image: campconnectionImg, filename: "campconn.exe" },
  { title: "Canvas Chat", category: "Widget", image: canvaschatImg, filename: "canvaschat.dll" },
];

export const testimonials = [
  {
    name: "Nicko Balboa",
    position: "Software Developer",
    image: nickoImg,
    text: "Sir Dexter is an inspiring senior developer with deep technical knowledge and exceptional mentorship skills. He empowers developers by teaching understanding, not just solutions. His clean architecture approach, humility, and passion for knowledge-sharing make him an outstanding mentor and team leader.",
  },
  {
    name: "Kent Ashley Clementir",
    position: "Fullstack Developer",
    image: kentImg,
    text: "Highly skilled Full Stack Engineer excelling in frontend, backend, and team leadership. Exceptional technical and communication abilities combined with strong work ethic and collaborative spirit make Dexter an invaluable team asset.",
  },
  {
    name: "Alejandro Oletres Jr.",
    position: "Fullstack Developer",
    image: alImg,
    text: "Exceptional lead developer who drives technical excellence while fostering team collaboration. Dexter delivers high-quality solutions on time, mentors effectively, and manages complex projects with ease. Highly recommended for leadership roles.",
  },
  {
    name: "Savi Gorospe, PMP",
    position: "Senior Project Manager",
    image: saviImg,
    text: "Exceptional Full-Stack Engineer and natural leader specializing in Nest.js, PostgreSQL, and Docker. Delivers scalable applications while fostering high-performing teams through mentorship and code reviews. Highly recommended for technical leadership.",
  },
];

export const socials = [
  { name: "Facebook", url: "https://www.facebook.com/louieaniez/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/louieaniez/" },
  { name: "GitHub", url: "https://github.com/LodiAniez" },
  { name: "Upwork", url: "https://www.upwork.com/freelancers/~012e66547a653b7c4f" },
];

export function downloadResume() {
  const link = document.createElement("a");
  link.href = resumePDF;
  link.download = "Dexter_Louie_Aniez_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
