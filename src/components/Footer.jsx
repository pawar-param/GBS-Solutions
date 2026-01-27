import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  ChevronUp,
} from "lucide-react";
import logo from "../../public/Image/GBS-white-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
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
                alt="GBS Global Solutions Logo"
                className=" w-45 object-cover"
              />
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              GBS Global Solutions Pvt. Ltd. is a Pune-based export–import and
              global trade management company supporting SMEs, manufacturers,
              traders, startups, and international buyers.
            </p>

            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded hover:bg-slate-600 transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded hover:bg-slate-600 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
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
              <span className="text-gray-300">info@gbsglobalsolutions.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="h-5 w-5 text-slate-600 mr-2" />
              <span className="text-gray-300">+91 9881491347</span>
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
              © {new Date().getFullYear()} GBS Global Solutions Pvt. Ltd. All
              rights reserved.
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
