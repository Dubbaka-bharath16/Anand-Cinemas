import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Modal content
  const modalContent = {
    privacy: {
      title: "Privacy Policy",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700 text-base leading-relaxed">At Anand Cinemaz, we are committed to protecting your privacy and ensuring the security of your personal information.</p>
          
          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Information We Collect</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Personal information provided through contact forms</li>
            <li>Email addresses for newsletter subscriptions</li>
            <li>Website usage data through cookies</li>
            <li>Project submissions and inquiries</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">How We Use Your Information</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>To respond to your inquiries and provide services</li>
            <li>To send updates about our projects and events</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Data Protection</h3>
          <p class="text-gray-700 text-base leading-relaxed">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>

          <p class="text-gray-700 text-base leading-relaxed mt-6">For any questions about our privacy practices, please contact us at <span class="text-amber-600 font-medium">privacy@anandcinemaz.com</span></p>
        </div>
      `
    },
    terms: {
      title: "Terms of Service",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700 text-base leading-relaxed">Welcome to Anand Cinemaz. By accessing our website and services, you agree to these terms and conditions.</p>
          
          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Intellectual Property</h3>
          <p class="text-gray-700 text-base leading-relaxed">All content on this website, including but not limited to text, images, videos, logos, and graphics, is the property of Anand Cinemaz and is protected by copyright laws.</p>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">User Conduct</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Do not use our website for any illegal purposes</li>
            <li>Do not attempt to gain unauthorized access to our systems</li>
            <li>Do not submit malicious or harmful content</li>
            <li>Respect intellectual property rights</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Project Submissions</h3>
          <p class="text-gray-700 text-base leading-relaxed">When submitting projects or scripts through our contact forms, you acknowledge that we receive numerous submissions and cannot guarantee confidentiality or consideration.</p>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Limitation of Liability</h3>
          <p class="text-gray-700 text-base leading-relaxed">Anand Cinemaz shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.</p>

          <p class="text-gray-700 text-base leading-relaxed mt-6">We reserve the right to modify these terms at any time. Continued use of our website constitutes acceptance of updated terms.</p>
        </div>
      `
    },
    copyright: {
      title: "Copyright Notice",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700 text-base leading-relaxed">All content on the Anand Cinemaz website is protected by copyright and other intellectual property laws.</p>
          
          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Copyright Ownership</h3>
          <p class="text-gray-700 text-base leading-relaxed">Unless otherwise stated, Anand Cinemaz owns the copyright for all content on this website, including:</p>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Film stills and production images</li>
            <li>Website design and layout</li>
            <li>Written content and descriptions</li>
            <li>Logos and branding materials</li>
            <li>Video content and trailers</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Permitted Use</h3>
          <p class="text-gray-700 text-base leading-relaxed">You may view and download content for personal, non-commercial use only. Any other use requires prior written permission from Anand Cinemaz.</p>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Prohibited Actions</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Reproducing content for commercial purposes</li>
            <li>Modifying or creating derivative works</li>
            <li>Distributing content without permission</li>
            <li>Using content in a way that implies endorsement</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Trademarks</h3>
          <p class="text-gray-700 text-base leading-relaxed">"Anand Cinemaz" and the company logo are registered trademarks of Anand Cinemaz Studios. Unauthorized use is strictly prohibited.</p>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Copyright Infringement</h3>
          <p class="text-gray-700 text-base leading-relaxed">If you believe your work has been copied in a way that constitutes copyright infringement, please contact us at <span class="text-amber-600 font-medium">legal@anandcinemaz.com</span> with detailed information.</p>

          <p class="text-gray-700 text-base leading-relaxed mt-6">© ${currentYear} Anand Cinemaz Studios. All rights reserved.</p>
        </div>
      `
    }
  };

  return (
    <>
      <footer className="light-navy text-white pt-10 pb-6">
        <div className="container mx-auto px-4">
          {/* Top grid: stacks on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-8">
          
            <div className="footer-about">
              <div className="flex items-center space-x-3 mb-3">
                {/* Founder Logo */}
                <div className="flex items-center sm:mr-0">
                  <div className="h-14 w-14 rounded-full shadow-lg border-2 border-orange-300 overflow-hidden mr-3">
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
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
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
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
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
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
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
                <h4 className="text-white font-bold mb-3">Legal</h4>
                <div className="flex flex-wrap gap-3 text-sm">
                  <button
                    onClick={() => openModal('privacy')}
                    className="text-gray-400 no-underline transition-colors duration-200 hover:text-sunrise-gold cursor-pointer bg-transparent border-none"
                  >
                    Privacy Policy
                  </button>
                  <button
                    onClick={() => openModal('terms')}
                    className="text-gray-400 no-underline transition-colors duration-200 hover:text-sunrise-gold cursor-pointer bg-transparent border-none"
                  >
                    Terms
                  </button>
                  <button
                    onClick={() => openModal('copyright')}
                    className="text-gray-400 no-underline transition-colors duration-200 hover:text-sunrise-gold cursor-pointer bg-transparent border-none"
                  >
                    Copyright
                  </button>
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
               
              </p>

              {/* Right Side - Developed By */}
              <p className="text-gray-400 text-sm text-center md:text-right mr-6">
                ©Designed by{" "}
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

      {/* Modal Popups */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            {/* Modal Header - Clean without background or border */}
            <div className="flex justify-between items-center p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-800">
                {modalContent[activeModal].title}
              </h2>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 text-gray-600 hover:text-gray-800"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 p-6 overflow-y-auto border-t border-gray-100">
              <div 
                dangerouslySetInnerHTML={{ __html: modalContent[activeModal].content }}
                className="prose prose-sm max-w-none"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-6 border-t border-gray-100">
              <button
                onClick={closeModal}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;