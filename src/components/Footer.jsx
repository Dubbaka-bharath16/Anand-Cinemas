import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="light-navy text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* Top grid: stacks on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-8">
        
          <div className="footer-about">
            <div className="flex items-center space-x-3 mb-3">
              
              
              {/* Logo */}
              <div className="flex items-center sm:mr-0">
                {/* Founder Logo - Rounded for both desktop and mobile */}
                <div className="h-14 w-14 rounded-full shadow-lg overflow-hidden mr-3">
                  <img
                    src="./images/CEO.png"
                    alt="Anand Infra CEO"
                    className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Company Logo */}
                <div className="h-13 w-10 overflow-hidden mr-3">
                  <img
                    src="./images/Logo.png"
                    alt="Anand Infra Logo"
                    className="h-full w-full object-contain"
                  />
                </div>

                <Link to="/" className=" hover:opacity-90 transition-opacity duration-300">

                  <div>
                    <span className="sm:text-md lg:text-lg font-bold"><span className='text-amber-500'>ANAND</span> CINEMAZ</span>
                    <p className="text-gray-300 text-[10px] italic -mt-0.5">"Dharmo Rakshati Rakshitah"</p>
                  </div>
                </Link>
              </div>
            </div>
            <p className="text-white mb-4 text-sm sm:text-base leading-relaxed">
              Creating meaningful, impactful, and high-quality cinematic content
              that blends creativity with purpose.
            </p>

            <div className="social-links flex items-center space-x-3">
              {[
                { platform: "facebook-f", url: "#" },
                { platform: "twitter", url: "#" },
                { platform: "instagram", url: "#" },
                { platform: "youtube", url: "#" },
              ].map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  aria-label={social.platform}
                  className="social-link w-10 h-10 sm:w-10 sm:h-10 bg-white bg-opacity-10 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-sunrise-gold hover:text-navy-blue hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${social.platform}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links  */}
          <div className="footer-links ml-4 md:ml-8">
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/projects", label: "Projects" },
                { path: "/gallery", label: "Gallery" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white no-underline block py-1 px-1 rounded-sm transition-all duration-200 hover:text-sunrise-gold hover:pl-2 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Films */}
          <div className="footer-links">
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">
              Our Films
            </h3>
            <ul className="space-y-1 text-sm">
              {[
                { title: "Echoes of Silence", year: "2023" },
                { title: "Shades of Truth", year: "2022" },
                { title: "The Last Light", year: "2021" },
                { title: "Urban Rhythms", year: "2020" },
                { title: "Project Uprising", year: "Coming 2024" },
              ].map((film) => (
                <li key={film.title}>
                  <span className="text-white block py-1 transition-colors duration-200 hover:text-sunrise-gold">
                    <span className="font-medium">{film.title}</span>
                    <span className="text-sm text-gray-300 ml-2">({film.year})</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="footer-links">
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">
              Connect
            </h3>
            <div className="space-y-3 mb-4 text-sm">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-sunrise-gold mt-1" />
                <span className="text-gray-300">
                
                 H.No. 131/A, 2nd Floor, MLA Colony, <br />
                 Beside Vamsiram Banjara Abodes,<br />
                  Road No.12, Lane 14, Banjara Hills,<br /> Hyderabad-500034.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-sunrise-gold" />
                <span className="text-gray-300">+91 1800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-sunrise-gold" />
                <span className="text-gray-300">info@anandcinemaz.com</span>
              </div>
            </div>

            <div className="legal-links">
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <div className="flex flex-wrap gap-3 text-sm">
                {["Privacy Policy", "Terms", "Copyright"].map((legal) => (
                  <a
                    key={legal}
                    href="#"
                    className="text-gray-400 no-underline transition-colors duration-200 hover:text-sunrise-gold"
                  >
                    {legal}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Developed by */}
        <div className="copyright pt-3 border-t border-white border-opacity-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            {/* Left Side */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Anand Cinemaz Studios. All rights reserved.{" "}
              <span className="text-sm font-bold text-sunrise-gold">
                Crafted with passion for cinema
              </span>
            </p>

            {/* Right Side - Developed By */}
            <p className="text-gray-400 text-sm text-center md:text-right mr-6">
              Developed by{" "}
              <a
                href="https://designcareermetrics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunrise-gold font-semibold hover:underline"
              >
                Design Career Metrics
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;