import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your .env file."
        );
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "louieaniez@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: (
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Address",
      value:
        "Door 2, Redelosa Apt., Brgy. Sudlon, Molave, Zamboanga del Sur, Mindanao, Philippines",
    },
    {
      icon: (
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Me",
      value: "+63 938 367 3347",
    },
    {
      icon: (
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      value: "louieaniez@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: "facebook",
      url: "https://www.facebook.com/louieaniez/",
      name: "Facebook",
    },
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/louieaniez/",
      name: "LinkedIn",
    },
    { icon: "github", url: "https://github.com/LodiAniez", name: "GitHub" },
    {
      icon: "upwork",
      url: "https://www.upwork.com/freelancers/~012e66547a653b7c4f",
      name: "Upwork",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-cyan-400 mt-1">{info.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me:</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                  >
                    <span className="text-sm font-bold">
                      {social.icon[0].toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Me A Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700 resize-none"
              ></textarea>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                  Failed to send message. Please try again or email me directly
                  at louieaniez@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-cyan-400">Aniez</span>. All Rights Reserved.
          </p>
          <a
            href="#home"
            className="inline-block mt-4 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
