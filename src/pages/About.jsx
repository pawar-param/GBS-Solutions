import React, { useState, useEffect } from "react";
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Shield,
  Globe,
  UserCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeValue, setActiveValue] = useState(0);

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

    // Observe all sections
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description:
        "We embrace creativity and cutting-edge technology to deliver impactful digital solutions and IT services.",
      color: "from-orange-500 to-black",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity",
      description:
        "We conduct our business with honesty and transparency, ensuring trust in every project and collaboration.",
      color: "from-orange-500 to-black",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description:
        "We deliver high-quality IT solutions, training programs, and projects with meticulous attention to detail.",
      color: "from-orange-500 to-black",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description:
        "We partner with students, professionals, and businesses to create meaningful solutions and learning experiences.",
      color: "from-orange-500 to-black",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  const achievements = [
    { number: "Global", label: "Trade Network" },
    { number: "100%", label: "Compliance Focus" },
    { number: "End-to-End", label: "Shipment Handling" },
    { number: "Long-Term", label: "Trade Partnerships" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* About Page Hero Section */}
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
                Who We Are
              </p>

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                About
                <br />
                <span className="text-blue-400">GBS Global Solutions</span>
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
                <strong className="text-white">
                  GBS Global Solutions Pvt. Ltd.
                </strong>{" "}
                is a Pune-based export–import and global trade management
                company supporting SMEs, manufacturers, traders, startups, and
                international buyers. We simplify global trade through
                compliance, transparency, and expert execution.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-medium transition"
                >
                  Partner With Us
                </a>

                <a
                  href="/services"
                  className="border border-slate-600 text-gray-200 hover:border-blue-500 hover:text-blue-400 px-8 py-4 rounded-xl font-medium transition"
                >
                  Explore Trade Services
                </a>
              </div>
            </div>

            {/* RIGHT CONTENT – 1 COLUMN */}
            <div className="hidden lg:block">
              <div className="bg-slate-700 border border-slate-800 rounded-2xl p-10 shadow-xl">
                <h3 className="text-lg font-medium mb-6">
                  Why Businesses Trust Us
                </h3>

                <ul className="space-y-4 text-gray-300 text-sm">
                  <li>• End-to-End Export–Import Management</li>
                  <li>• Compliance & Regulatory Expertise</li>
                  <li>• Verified Global Supplier Network</li>
                  <li>• Transparent Communication</li>
                  <li>• Long-Term Trade Partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="relative py-15 bg-slate-50 text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div
            className={`max-w-8xl mx-auto transform transition-all duration-1000 ${
              isVisible.overview
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            id="overview"
            data-animate
          >
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-700">
                Who We Are
              </h2>
              <div className="w-28 h-1 bg-gradient-to-r from-blue-700 to-blue-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                GBS Global Solutions Pvt. Ltd. is a technology-driven global
                trade partner helping businesses navigate international markets
                with confidence, compliance, and clarity.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Highlights */}
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  We manage the complete export–import lifecycle — from supplier
                  verification and documentation to logistics coordination and
                  final delivery. Our focus is on reducing risk, ensuring
                  compliance, and building long-term trade partnerships.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {[
                    "End-to-End Shipment Handling",
                    "Verified Supplier Network",
                    "Compliance & Documentation",
                    "Transparent Trade Execution",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-slate-700/70 border border-slate-600 px-4 py-2 rounded-xl shadow hover:shadow-lg hover:border-blue-500 transition-all cursor-pointer"
                    >
                      <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                      <span className="text-gray-200 font-medium text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Vision Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-500 to-slate-600 rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-all duration-300 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Our Vision & Mission
                  </h3>
                  <p className="text-gray-200 mb-6 text-sm md:text-base">
                    Our vision is to become India’s most trusted global trade
                    partner. Our mission is to simplify international trade
                    through expertise, compliance, innovation, and transparent
                    execution.
                  </p>
                  <div className="flex items-center text-blue-300 hover:text-blue-400 transition-colors cursor-pointer font-medium">
                    <span className="mr-2">Partner With Us</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section with Modern Cards */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-slate-50 relative">
        <div className="container mx-auto px-6">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.leadership ? "translate-y-0 opacity-100" : ""
            }`}
            id="leadership"
            data-animate
          >
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Leadership
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Meet the visionaries behind GBS Global Solutions – driving
                innovation, excellence, and real-world IT solutions with
                expertise and passion.
              </p>
            </div>

            {/* Leadership Grid */}
            <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
              {[
                {
                  name: "Jivan Mate",
                  role: "Founder & Managing Partner",
                  gradient: "from-slate-600 to-slate-600",
                },
                {
                  name: "Meghraj Jogdand",
                  role: "Co-Founder & Operations Head",
                  gradient: "from-slate-600 to-slate-600",
                },
              ].map((leader, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 ${
                    isVisible.leadership
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-center">
                    <div
                      className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${leader.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <UserCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-gray-700 font-medium mb-4">
                      {leader.role}
                    </p>
                    <div
                      className={`w-16 h-1 bg-gradient-to-r ${leader.gradient} mx-auto rounded-full`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* Core Values – Animated & Professional */}
<section className="py-10 text-gray-900">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <div
      className="max-w-4xl mx-auto text-center mb-20
      opacity-0 translate-y-8 animate-[fadeUp_0.8s_ease-out_forwards]"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our Core Values
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 rounded-full"></div>
      <p className="text-gray-600 text-lg md:text-xl">
        The principles that define how we operate, partner, and deliver value.
      </p>
    </div>

    {/* Values Grid */}
    <div className="grid md:grid-cols-2 gap-x-20 gap-y-14">
      {values.map((value, index) => (
        <div
          key={index}
          className="group flex gap-6 items-start
          opacity-0 translate-y-6
          animate-[fadeUp_0.8s_ease-out_forwards]
          hover:translate-y-[-4px] transition-all duration-300"
          style={{ animationDelay: `${index * 120}ms` }}
        >
          {/* Icon */}
          <div
            className="w-16 h-12 flex items-center justify-center rounded-xl
            bg-slate-100 group-hover:bg-slate-500 transition-colors duration-300"
          >
            <div className="text-slate-600 w-8 h-8 group-hover:text-white transition-colors duration-300">
              {value.icon}
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              {value.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {value.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


     {/* Mission & Vision – Premium Animated */}
<section className="py-24 relative">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left Content */}
      <div
        className="opacity-0 translate-y-10
        animate-[fadeUp_0.9s_ease-out_forwards]"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">
          Our Mission & Vision
        </h2>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12">
          We exist to simplify global trade while empowering businesses to
          expand confidently into international markets.
        </p>

        <div className="space-y-10">
          {/* Mission */}
          <div className="flex gap-6 group">
            <div
              className="w-14 h-14 rounded-xl bg-slate-100
              flex items-center justify-center
              "
            >
              <Target className="w-7 h-7 text-blue-900  transition-colors" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver end-to-end export–import solutions with compliance,
                transparency, and operational excellence.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex gap-6 group">
            <div
              className="w-14 h-14 rounded-xl bg-slate-100
              flex items-center justify-center"
            >
              <Globe className="w-7 h-7 text-blue-900  transition-colors" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become India’s most trusted, technology-driven global trade
                partner.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Visual Card */}
      <div
        className="relative opacity-0 translate-y-10
        animate-[fadeUp_1s_ease-out_forwards]"
        style={{ animationDelay: "200ms" }}
      >
        <div
          className="rounded-3xl bg-slate-700 text-white p-12 shadow-2xl
          hover:-translate-y-2 transition-all duration-500"
        >
          <h4 className="text-3xl font-bold mb-6">
            Built for Long-Term Partnerships
          </h4>
          <p className="text-gray-300 text-lg leading-relaxed">
            We don’t just move shipments — we build reliable global trade
            ecosystems backed by expertise, compliance, and trust.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Enhanced Call to Action */}
      <section className="py-10 bg-gradient-to-br from-blue-50/30 to-black/10 text-gray-900 relative overflow-hidden">
        {/* Decorative Blurs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div
            className={`max-w-6xl mx-auto transform transition-all duration-1000 ${
              isVisible.cta
                ? "translate-y-0 opacity-100"
                : ""
            }`}
            id="cta"
            data-animate
          >
            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Ready to Expand Your Business Globally?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Partner with GBS Global Solutions Pvt. Ltd. to simplify your
              export–import operations. From compliance and documentation to
              logistics and shipment execution, we help you trade across borders
              with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center bg-slate-800 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-950 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Global Trade Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/services"
                className="group inline-flex items-center justify-center bg-transparent text-slate-500 px-8 py-4 rounded-2xl font-semibold border-2 border-slate-500 hover:bg-orange-50 hover:text-blue-600 transition-all duration-300"
              >
                Explore Trade Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
