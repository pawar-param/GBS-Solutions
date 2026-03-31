import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  FileText,
  Truck,
  Search,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import PricingSection from "../components/PricingSection";

const services = [
  {
    title: "Export Services",
    icon: <Globe className="h-6 w-6" />,
    points: [
      "Export documentation & compliance (Invoice, PL, COO, BL/AWB)",
      "Buyer identification & market access",
      "Packaging & labeling guidance",
      "Logistics & shipment coordination",
      "Customs clearance support",
    ],
  },
  {
    title: "Import Services",
    icon: <Truck className="h-6 w-6" />,
    points: [
      "Import documentation handling",
      "HS code classification & duty guidance",
      "Overseas supplier coordination",
      "Freight booking & last-mile delivery",
      "Regulatory compliance support",
    ],
  },
  {
    title: "Trade Documentation & Compliance",
    icon: <FileText className="h-6 w-6" />,
    points: [
      "IEC, DGFT, RCMC & GST guidance",
      "Country-specific compliance (BIS, FSSAI, CDSCO)",
      "LC / TT / Advance payment documentation",
      "Pre-shipment compliance checks",
    ],
  },
  {
    title: "Global Sourcing & Market Research",
    icon: <Search className="h-6 w-6" />,
    points: [
      "Supplier & buyer verification",
      "Market demand & pricing analysis",
      "Product benchmarking",
      "Buyer–seller matchmaking",
    ],
  },
  {
    title: "Consulting & Advisory",
    icon: <ShieldCheck className="h-6 w-6" />,
    points: [
      "Export–Import business setup",
      "Market entry & pricing strategy",
      "Risk mitigation & compliance advisory",
      "Process optimization & automation",
    ],
  },
  {
    title: "Training & Capability Building",
    icon: <GraduationCap className="h-6 w-6" />,
    points: [
      "Export–Import training (Online / Offline)",
      "Business operations & scaling",
      "Digital tools & AI for business",
      "Certification programs",
    ],
  },
];

const Services = () => {
  return (
    <main className="bg-slate-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-slate-800 text-white ">
        <div className="container mx-auto px-6 py-10 lg:py-14">
          <div
            className={`transition-all duration-1000 ${
              services ? "opacity-100 translate-y-0" : ""
            }`}
          >
            <p className="text-sm tracking-wide uppercase text-blue-300 mb-4">
              Our Expertise in Global Trade
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Comprehensive Services
              <br />
              <span className="text-blue-400">
                to Expand Your Business Globally
              </span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-10">
              From documentation and compliance to market research and
              consulting, we provide end-to-end solutions that ensure smooth
              international trade operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-medium transition"
              >
                Speak with a Consultant
              </Link>
              <a
                href="https://wa.me/919175318983"
                className="border border-slate-400 text-blue-100 hover:border-blue-500 hover:text-blue-400 px-8 py-4 rounded-xl font-medium transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
            {services?.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

                <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      {/* Why Choose Us + CTA (Combined Conversion Section) */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Why Choose Us */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Why Choose ABS Global Exim?
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                We operate as a compliance-first, one-window export–import
                partner, helping businesses expand globally with clarity,
                confidence, and controlled risk.
              </p>

              <ul className="space-y-4 text-gray-700">
                {[
                  "One-window export–import partner",
                  "Compliance-first, zero-error execution",
                  "Transparent pricing & realistic timelines",
                  "Dedicated relationship manager",
                  "Global sourcing & logistics network",
                  "Long-term advisory & growth support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-3 mt-1">
                      ✓
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: CTA Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                  Ready to Simplify Your Global Trade?
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Speak with our export–import experts to get the right
                  guidance, compliance support, and execution strategy tailored
                  to your business needs.
                </p>

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center w-full
              bg-slate-600 hover:bg-slate-700
              text-white px-8 py-4 rounded-xl font-medium
              transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Speak to an Export–Import Consultant
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <p className="text-sm text-gray-500 text-center mt-4">
                  No obligation • Confidential consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
