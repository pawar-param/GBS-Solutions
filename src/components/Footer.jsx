import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  ChevronUp,
} from "lucide-react";
import logo from "../../public/Image/ABS logo head.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Export Services",
    "Import Services",
    "Trade Documentation & Compliance",
    "Global Sourcing & Market Research",
    "Consulting & Training",
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/111159992/",
      icon: <Linkedin />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/absglobalexim?igsh=NXNsdWRqbHF0c2ho",
      icon: <Instagram />,
    },
    {
      label: "Twitter",
      href: "https://x.com/GorakhShel72103",
      icon: <Twitter />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61587915955385",
      icon: <Facebook />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white relative ">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-slate-600 hover:bg-slate-700 cursor-pointer text-white p-3 rounded-full shadow-lg transition"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>

      <div className="sm:max-w-3xl md:max-w-7xl lg:max-w-[1300px] xl:max-w-8xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Intro */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="ABS Global Exim Logo"
                className=" w-25 object-cover"
              />
              <span className="text-xl font-bold text-amber-100">
                ABS Global Exim
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              ABS Global Exim. is a Pune-based export–import and global trade
              management company supporting SMEs, manufacturers, traders,
              startups, and international buyers.
            </p>

            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow hover:shadow-lg transition-all duration-300 hover:scale-110"
                  title={social.label}
                >
                  {React.cloneElement(social.icon, {
                    className:
                      social.label === "LinkedIn"
                        ? "h-6 w-6 text-blue-600"
                        : social.label === "Instagram"
                          ? "h-6 w-6 text-pink-500"
                          : social.label === "Twitter"
                            ? "h-6 w-6 text-sky-500"
                            : social.label === "Facebook"
                              ? "h-6 w-6 text-blue-700"
                              : "h-6 w-6 text-slate-700",
                  })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li
                  key={idx}
                  className="text-gray-300 hover:text-white transition cursor-default"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Mail className="h-5 w-5 text-slate-600 mr-2" />
              <span className="text-gray-300">info@absglobalexim.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="h-5 w-5 text-slate-600 mr-2" />
              <span className="text-gray-300">+91 9175318983</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="h-5 w-5 text-slate-600 mr-2" />
              <span className="text-gray-300">Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="mb-4 md:mb-0">
              © {new Date().getFullYear()} ABS Global Exim. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
