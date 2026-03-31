import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Users,
  Award,
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  Clock,
  Briefcase,
  Globe,
  Shield,
  Search,
  FileCheck,
  Ship,
  Truck,
  Map,
  Cog,
  Factory,
  Settings,
  Car,
  Package,
  GraduationCap,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import PricingSection from "../components/PricingSection";

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeService, setActiveService] = useState(0);
  const [stats, setStats] = useState({
    placements: 0,
    clients: 0,
    satisfaction: 0,
    experience: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Animate stats when visible
  useEffect(() => {
    if (isVisible.stats) {
      const animateValue = (start, end, duration, setter) => {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            current = end;
            clearInterval(timer);
          }
          setter(Math.floor(current));
        }, 16);
      };

      animateValue(0, 500, 2000, (val) =>
        setStats((prev) => ({ ...prev, placements: val })),
      );
      animateValue(0, 150, 2000, (val) =>
        setStats((prev) => ({ ...prev, clients: val })),
      );
      animateValue(0, 95, 2000, (val) =>
        setStats((prev) => ({ ...prev, satisfaction: val })),
      );
      animateValue(0, 5, 2000, (val) =>
        setStats((prev) => ({ ...prev, experience: val })),
      );
    }
  }, [isVisible.stats]);

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (location.hash === "#services") {
      const element = document.getElementById("services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const services = [
    {
      title: "Export & Import Services",
      description:
        "End-to-end support for export and import operations including documentation, compliance, and shipment coordination.",
      icon: <Ship />,
    },
    {
      title: "Trade Documentation & Compliance",
      description:
        "IEC, DGFT, RCMC, GST, HS code classification, and country-specific regulatory compliance.",
      icon: <FileCheck />,
    },
    {
      title: "Global Sourcing & Market Research",
      description:
        "Buyer–supplier verification, market demand analysis, pricing insights, and matchmaking.",
      icon: <Search />,
    },
    {
      title: "Logistics & Customs Coordination",
      description:
        "Freight booking, customs clearance assistance, and end-to-end shipment execution.",
      icon: <Truck />,
    },
    {
      title: "Consulting & Advisory",
      description:
        "Export–import business setup, market entry strategy, risk mitigation, and compliance advisory.",
      icon: <Briefcase />,
    },
    {
      title: "Training & Capacity Building",
      description:
        "Online and offline EXIM training programs, workshops, and AI for business enablement.",
      icon: <GraduationCap />,
    },
  ];

  const reasons = [
    {
      icon: <Globe size={20} />,
      text: "Deep expertise in export–import operations, international trade regulations, and global market entry strategies.",
    },
    {
      icon: <ShieldCheck size={20} />,
      text: "Strong compliance-driven approach covering DGFT, customs, documentation, and risk mitigation.",
    },
    {
      icon: <Briefcase size={20} />,
      text: "End-to-end trade solutions — from sourcing and logistics to documentation and post-shipment support.",
    },
    {
      icon: <TrendingUp size={20} />,
      text: "Proven track record of helping businesses scale internationally with cost-efficient and reliable trade processes.",
    },
    {
      icon: <Users size={20} />,
      text: "Client-centric consulting with personalized strategies tailored to your industry and growth goals.",
    },
    {
      icon: <Clock size={20} />,
      text: "Timely execution and transparent communication to ensure smooth and predictable global operations.",
    },
  ];

  const achievements = [
    { number: "500", suffix: "+", label: "Shipments Managed", icon: <Globe /> },
    { number: "20", suffix: "+", label: "Countries Served", icon: <Map /> },
    {
      number: "99.8",
      suffix: "%",
      label: "Compliance Accuracy",
      icon: <Shield />,
    },
    {
      number: "10",
      suffix: "+",
      label: "Years of Trade Expertise",
      icon: <Award />,
    },
  ];

  const products = [
    {
      title: "Industrial Components",
      icon: <Cog />,
      description:
        "High-quality industrial components including motors, bearings, sheets, and fasteners for various applications.",
    },
    {
      title: "Conveyor components",
      icon: <Factory />,
      description:
        "Complete range of conveyor rollers, belts, and impact rollers designed for smooth material handling.",
    },
    {
      title: "Crusher Spare Parts",
      icon: <Factory />,
      description:
        "Durable crusher spare parts such as jaw plates, bolts, bearings, and gearboxes for heavy-duty operations.",
    },
    {
      title: "Vibrating Screen",
      icon: <Settings />,
      description:
        "Efficient vibrating screens, wiremesh, vibro motors, and accessories for industrial screening solutions.",
    },
    {
      title: "Scissor Jack Screw Rods & Nuts",
      icon: <Car />,
      description:
        "Reliable screw rods, nuts, and machined components for scissor jacks with different load capacities.",
    },
    {
      title: "Home Decor & Handicrafts",
      icon: <Package />,
      description:
        "Beautiful handmade products including trays, cushion covers, bags, torans, and decorative items.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden scroll-smooth">
      {/* Hero Section with Advanced Animation */}
      <section className="relative bg-slate-800 text-white">
        <div className="container mx-auto px-6 py-10 lg:py-14">
          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-center">
            {/* LEFT CONTENT – 2 COLUMNS */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 ${
                isVisible.hero ? "opacity-100 translate-y-0" : ""
              }`}
            >
              {/* Trust Line */}
              <p className="text-sm tracking-wide uppercase text-blue-400 mb-4">
                Trusted Global Trade Partner
              </p>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                Simplifying Global Trade
                <br />
                <span className="text-blue-400">for Growing Businesses</span>
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
                <strong className="text-white">ABS Global Exim.</strong>{" "}
                provides end-to-end export–import, compliance, and global
                sourcing solutions to help businesses expand internationally
                with confidence, transparency, and regulatory clarity.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-medium transition"
                >
                  Book a Free Consultation
                </Link>

                <a
                  href="https://wa.me/919175318983"
                  className="border border-slate-600 text-gray-200 hover:border-blue-500 hover:text-blue-400 px-8 py-4 rounded-xl font-medium transition"
                >
                  Speak with a Trade Expert
                </a>
              </div>
            </div>

            {/* RIGHT CONTENT – 1 COLUMN */}
            <div className="hidden lg:block">
              <div className="bg-slate-700 border border-slate-800 rounded-2xl p-10 shadow-xl">
                <h3 className="text-lg font-medium mb-6">Our Core Expertise</h3>

                <ul className="space-y-4 text-gray-300 text-sm">
                  <li>• Export & Import Documentation</li>
                  <li>• Trade Compliance & Licensing</li>
                  <li>• Global Sourcing & Market Research</li>
                  <li>• Customs & Logistics Coordination</li>
                  <li>• Consulting & EXIM Training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 bg-white relative">
        <div className="container mx-auto px-6">
          <div
            className={`transition-all duration-1000 ${
              isVisible?.stats
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            id="stats"
            data-animate
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition"
                >
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {achievement?.icon}
                  </div>

                  <div className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
                    {achievement?.number}
                    {achievement?.suffix}
                  </div>

                  <div className="text-sm text-gray-600 font-medium">
                    {achievement?.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-10 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Our Products
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore our range of export-import products and solutions tailored
              to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition cursor-pointer"
                onClick={() => navigate(`/products`)}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-600/10 text-green-600 mb-4">
                  {product.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-14 bg-slate-50">
        <div className="container mx-auto px-6">
          <div
            className={`transition-all duration-1000 ${
              isVisible?.services ? "opacity-100 translate-y-0" : ""
            }`}
            data-animate
          >
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                Our Core Services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We deliver end-to-end export–import, compliance, and global
                trade solutions designed to help businesses expand
                internationally with confidence and clarity.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl cursor-pointer p-8 hover:shadow-xl transition"
                  onClick={() => navigate(`/services`)}
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 mb-6">
                    {service?.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service?.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service?.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <Link
                to="/contact"
                className="inline-block border border-slate-600 text-gray-700
             hover:border-blue-600 hover:text-blue-600
             px-10 py-4 rounded-xl font-medium transition-all duration-300"
              >
                Speak to an Export–Import Consultant
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-6">
          <div
            className="transition-all duration-1000 ease-out opacity-100 translate-y-0"
            data-animate
          >
            {/* Header */}
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                Why Choose ABS Global Exim?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We help businesses navigate global trade with confidence through
                expert-led export–import consulting, compliance-driven
                processes, and end-to-end international trade support.
              </p>
            </div>

            {/* Reasons */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
              {reasons?.map((reason, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl p-7 border border-gray-200 shadow-sm
            transition-all duration-300 hover:shadow-lg hover:border-blue-200"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-lg bg-blue-500/10
                bg-blue-300 flex items-center justify-center"
                    >
                      {reason.icon}
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {reason.text}
                    </p>
                  </div>

                  {/* Accent */}
                  <div
                    className="absolute left-0 top-0 h-full w-[3px] bg-blue-300
              rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PricingSection />

      {/* Contact Section */}
      <section className="py-14 bg-gradient-to-br from-blue-50/40 to-slate-100 text-gray-900 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div
            className={`max-w-5xl mx-auto transition-all duration-1000 ${
              isVisible.contact
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            id="contact"
            data-animate
          >
            {/* Header */}
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                Let’s Work Together
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Partner with ABS Global Exim for expert export–import
                consulting, regulatory compliance, and end-to-end global trade
                solutions.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-200">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Left – Contact Info */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Office Location
                        </p>
                        <p className="text-gray-600 text-sm">
                          Pune, Maharashtra, India
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600 text-sm">+91 9175318983</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600 text-sm">
                          info@absglobalexim.com
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Business Hours
                        </p>
                        <p className="text-gray-600 text-sm">
                          Monday – Friday, 9:00 AM – 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right – CTA */}
                <div className="flex flex-col justify-between bg-slate-50 rounded-xl p-8 border border-gray-200">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Ready to Get Started?
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Speak with our trade consultants to explore international
                      markets, compliance strategies, and sustainable global
                      expansion.
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center
             border border-slate-600 text-gray-700
             hover:border-blue-600 hover:text-blue-600
             hover:bg-blue-50
             px-6 py-4 rounded-xl font-medium
             transition-all duration-300"
                  >
                    Speak with a Trade Consultant
                    <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
