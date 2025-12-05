import React, { useState, useEffect } from "react";
import profileImage from "../assets/me.png";
import resumePDF from "../assets/resume.pdf";

const HeroIntro: React.FC = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Dexter_Louie_Aniez_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const roles = ["Freelancer", "Fullstack Developer", "Mentor"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          } else {
            // Wait before deleting
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&h=1080&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900/90"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Profile Image */}
        <div className="mb-8">
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto border-4 border-cyan-400 shadow-2xl object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            I'm <span className="text-cyan-400">Dexter Louie Aniez</span>
          </h1>

          {/* Typing Animation */}
          <div className="text-2xl lg:text-4xl text-gray-300 mb-4 h-12 flex items-center justify-center">
            <span>I'm a </span>
            <span className="text-cyan-400 ml-2 font-semibold min-w-[200px] text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-gray-400 text-lg mb-8">
            based in Mindanao, Philippines
          </p>

          {/* CTA Button */}
          <button
            onClick={handleDownloadResume}
            className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Hire Me
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a
            href="#about"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroIntro;
