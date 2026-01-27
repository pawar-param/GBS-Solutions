import React from "react";
import { ArrowRight } from "lucide-react";

// Pricing data
const packages = [
  {
    title: "Basic Package ",
    price: "₹7,500 – ₹15,000 / shipment",
    bestFor: "First-time exporters & importers",
    includes: [
      "Basic export or import documentation",
      "Compliance checklist",
      "Email & WhatsApp support",
      "Standard turnaround time",
    ],
    color: "bg-green-100 text-green-800",
  },
  {
    title: "Standard Package",
    price: "₹25,000 – ₹40,000 / shipment",
    bestFor: "SMEs with regular shipments",
    includes: [
      "Complete export/import documentation",
      "HS code & duty guidance",
      "Compliance & regulatory support",
      "Freight quotation coordination",
      "Payment documentation (LC / TT)",
      "Dedicated point of contact",
    ],
    color: "bg-blue-100 text-blue-800",
  },
  {
    title: "Premium Retainer",
    price: "₹35,000 – ₹75,000 / month",
    bestFor: "Growing businesses & serious exporters",
    includes: [
      "Unlimited documentation support",
      "Full compliance & licensing guidance",
      "Supplier / buyer coordination",
      "Priority handling & faster turnaround",
      "Strategic advisory & monthly reviews",
    ],
    color: "bg-purple-100 text-purple-800",
  },
  {
    title: "End-to-End Outsourcing",
    price: "₹75,000 – ₹2,00,000+ / project",
    bestFor: "Clients who want complete, hands-free execution",
    includes: [
      "Sourcing + documentation + compliance",
      "Customs & logistics coordination",
      "Buyer / supplier communication",
      "Daily shipment updates",
      "Post-shipment & payment follow-up",
    ],
    color: "bg-red-100 text-red-800",
  },
];

// Comparison table data
const comparisonTable = [
  {
    feature: "Export / Import Documentation",
    basic: true,
    standard: true,
    premium: true,
    endToEnd: true,
  },
  {
    feature: "Compliance Checklist",
    basic: true,
    standard: true,
    premium: true,
    endToEnd: true,
  },
  {
    feature: "HS Code & Duty Guidance",
    basic: false,
    standard: true,
    premium: true,
    endToEnd: true,
  },
  {
    feature: "Freight Coordination",
    basic: false,
    standard: true,
    premium: true,
    endToEnd: true,
  },
  {
    feature: "Payment Documentation (LC/TT)",
    basic: false,
    standard: true,
    premium: true,
    endToEnd: true,
  },
  {
    feature: "Buyer / Supplier Coordination",
    basic: false,
    standard: false,
    premium: true,
    endToEnd: true,
  },
  {
    feature: "Unlimited Documentation",
    basic: false,
    standard: false,
    premium: true,
    endToEnd: true,
  },
  {
    feature: "Priority Handling",
    basic: false,
    standard: false,
    premium: true,
    endToEnd: true,
  },
  {
    feature: "End-to-End Shipment Management",
    basic: false,
    standard: false,
    premium: false,
    endToEnd: true,
  },
  {
    feature: "Strategic Advisory",
    basic: false,
    standard: false,
    premium: true,
    endToEnd: true,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-slate-50 text-gray-900 py-4">
      <div className="container mx-auto px-6 max-w-8xl text-center">
        {/* Hero */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Transparent, Flexible Packages
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Plans designed for every stage of global trade — choose the right one
          for your business.
        </p>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-xl transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-1 text-gray-900">
                {pkg.title}
              </h3>

              {/* Price */}
              <p className="font-medium text-md mb-1 text-blue-900">
                {pkg.price}
              </p>
              {/* Subtle line */}
              <div className="w-12 h-0.5 bg-blue-800 mb-3 rounded-full mx-auto"></div>

              {/* Best For */}
              <p className="text-sm mb-4 text-slate-400">{pkg.bestFor}</p>

              {/* Features */}
              <ul className="text-gray-700 text-sm space-y-2 mb-4 text-left">
                {pkg.includes.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border border-gray-200 text-left rounded-xl shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-gray-800 font-medium">
                  Features / Packages
                </th>
                <th className="px-4 py-3 text-gray-800 font-medium text-center">
                  Basic
                </th>
                <th className="px-4 py-3 text-gray-800 font-medium text-center">
                  Standard
                </th>
                <th className="px-4 py-3 text-gray-800 font-medium text-center">
                  Premium Retainer
                </th>
                <th className="px-4 py-3 text-gray-800 font-medium text-center">
                  End-to-End
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t border-gray-200 ${
                    i % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-4 py-2">{row.feature}</td>
                  <td className="px-4 py-3 text-center text-blue-900 font-semibold">
                    {row.basic ? "✔" : "✖"}
                  </td>
                  <td className="px-4 py-3 text-center text-blue-900 font-semibold">
                    {row.standard ? "✔" : "✖"}
                  </td>
                  <td className="px-4 py-3 text-center text-blue-900 font-semibold">
                    {row.premium ? "✔" : "✖"}
                  </td>
                  <td className="px-4 py-3 text-center text-blue-900 font-semibold">
                    {row.endToEnd ? "✔" : "✖"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-950 text-white px-10 py-4 rounded-xl font-medium transition-all duration-300"
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="https://wa.me/919881491347"
            className="ml-4 inline-flex items-center justify-center border border-slate-400 text-gray-700 hover:border-blue-500 hover:text-blue-400 px-10 py-4 rounded-xl font-medium transition-all duration-300"
          >
            WhatsApp Our Trade Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
