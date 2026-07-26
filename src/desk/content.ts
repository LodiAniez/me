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
  { number: "6+", label: "Years Experience" },
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

export const experience = [
  {
    year: "Sep 2019 - May 2021",
    title: "Fullstack Developer",
    company: "VirtualBiznest, Cebu",
    description:
      "Built complete web applications for corporate clients and startups. Developed frontend/backend systems, managed VPS deployments, and collaborated in a 3-person team to deliver custom digital solutions from concept to production.",
  },
  {
    year: "May 2021 - Aug 2021",
    title: "Fullstack Developer",
    company: "iPay Center, Pagadian",
    description:
      "Led fullstack development building a bill payment platform with API integrations. Managed a 3-person team, architected scalable systems, and handled the complete development lifecycle including cloud VPS deployment.",
  },
  {
    year: "Aug 2021 - Mar 2022",
    title: "Fullstack Developer",
    company: "JCurve Solutions, Singapore",
    description:
      "Enhanced enterprise web applications for Australian clients. Implemented new features, optimized performance, and collaborated with cross-functional teams to deliver quality solutions that met evolving business requirements.",
  },
  {
    year: "Mar 2022 - Jun 2022",
    title: "Lead Fullstack Developer",
    company: "Molave Young's Milling Corporation",
    description:
      "Solo developer responsible for end-to-end development of automation solutions. Architected, developed, tested, and deployed mobile/web applications to streamline manual business processes, reporting directly to management.",
  },
  {
    year: "Jul 2022 - Aug 2024",
    title: "Lead Fullstack Developer",
    company: "Sun Asterisk Corporation, Cebu",
    description:
      "Led development teams building and enhancing software for Japanese clients. Managed fullstack development, code reviews, and mentored junior developers while coordinating project planning with stakeholders.",
  },
  {
    year: "2019 - 2024",
    title: "Freelance Fullstack Developer",
    company: "Virtual Champions (Dubai)",
    description:
      "Enhanced depot management applications for a Dubai startup. Developed new features, fixed bugs, and optimized performance while maintaining direct client communication to deliver efficient digital solutions.",
  },
  {
    year: "Jul 2025 - Present",
    title: "Software Engineer 2",
    company: "me&u",
    description:
      "Building and scaling features for me&u's order-at-table hospitality platform. Crafting polished, responsive frontends and dependable services used across venues, collaborating with cross-functional teams to ship quality at pace.",
  },
];

export interface Achievement {
  title: string;
  event: string;
  icon: string;
  app: string;
  appDescription: string;
  role: string;
}

export const achievements: Achievement[] = [
  {
    title: "Top 10 Finalist",
    event: "Build In! Payments Hackathon",
    icon: "🏆",
    app: "Raket App",
    appDescription:
      "An app that generates invoices for clients and helps move money across cross-border transactions using Morph.",
    role: "Led a team of 3 developers to build the app during the hackathon.",
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

export interface Project {
  title: string;
  category: string;
  image: string;
  filename: string;
}

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
