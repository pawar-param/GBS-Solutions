import React from "react";
import { ArrowRight } from "lucide-react";
import {
  Cog,
  Factory,
  Wrench,
  Tractor,
  Car,
  Bolt,
  Settings,
  Shirt,
  Package,
} from "lucide-react";

const categories = [
  {
    title: "Engineering & Industrial Components",
    icon: <Cog />,
    items: ["Precision components", "Custom industrial parts"],
  },
  {
    title: "Lifting Equipment & Cranes",
    icon: <Factory />, // ✅ valid icon
    items: [
      "Standard cranes up to 50T",
      "Non-standard cranes up to 250T",
      "Chain hoists",
      "Transfer trolleys",
      "Light crane systems",
    ],
  },
  {
    title: "Crane Trolleys & Girders",
    icon: <Factory />,
    items: [
      "Heavy-duty crane trolleys",
      "Large crane girders (5.5M-H × 72M-L)",
    ],
  },
  {
    title: "Crane Components",
    icon: <Settings />,
    items: ["End carriages", "Custom crane assemblies"],
  },
  {
    title: "Agri Equipment",
    icon: <Tractor />,
    items: ["Manual & hydraulic trolleys", "Fire water tankers"],
  },
  {
    title: "Scissor Jack Screw Rods & Nuts",
    icon: <Car />,
    items: [
      "5 Ton, 1.5 Ton, 1.2 Ton, 1 Ton screw rods",
      "Jack screw nuts",
      "Spacer nuts",
      "Custom variants",
    ],
  },
  {
    title: "Industrial Fasteners & Forgings",
    icon: <Bolt />,
    items: ["SS304 / SS410 fasteners", "Bolts, nuts, studs"],
  },
  {
    title: "Automotive Components",
    icon: <Car />,
    items: [
      "Gear shifting knobs",
      "Machined parts",
      "Automotive forgings",
      "U-clamps",
      "Moulding inserts",
    ],
  },
  {
    title: "Crusher & Screening Components",
    icon: <Wrench />,
    items: [
      "Vibrating screens",
      "Wiremesh screens",
      "Drum rollers",
      "Jaw plates",
      "Conveyor rollers",
      "Crusher bolts",
      "Bearings",
      "Gearbox",
    ],
  },
  {
    title: "Textiles & Home Furnishings",
    icon: <Shirt />,
    items: ["Curtains", "Handmade cushion covers", "Eco-friendly fabric bags"],
  },
  {
    title: "Home Decor & Handicrafts",
    icon: <Package />,
    items: [
      "Embroidered cushion covers",
      "Wooden serving trays",
      "Eco-friendly tote bags",
    ],
  },
];

const Products = () => {
  return (
    <main className="bg-slate-50 text-gray-900">
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <p className="text-sm uppercase text-blue-400 mb-4">
            Indian Exporters | Global Product Supply
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Export Quality Products
            <br />
            <span className="text-blue-400">from India to Global Markets</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mb-8">
            We supply a wide range of industrial, engineering, textile, and
            handcrafted products globally with reliable LCL/FCL shipping, strict
            quality control, and compliance.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700"
            >
              Get Product Catalog
            </a>

            <a
              href="/services"
              className="border border-gray-400 px-8 py-4 rounded-xl hover:border-blue-400"
            >
              View Export Services
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="py-14">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Product Categories for Global Export
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg mb-4">
                  {cat.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>

                <ul
                  className={`text-gray-600 text-sm mb-6 ${
                    cat.items.length > 4
                      ? "grid grid-cols-2 gap-x-6 gap-y-2"
                      : "space-y-2"
                  }`}
                >
                  {cat.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="inline-flex items-center text-blue-600 font-medium"
                >
                  Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL EXPORT SECTION */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Global Export & Shipping Expertise
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We handle LCL and FCL shipments with complete documentation,
            packaging, and compliance to ensure smooth international delivery.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "LCL Shipments",
              "FCL Shipments",
              "Export Packaging",
              "Quality Inspection",
              "Global Logistics",
            ].map((item, i) => (
              <span
                key={i}
                className="bg-white px-6 py-3 rounded-full border text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Why Choose Us as Your Export Partner?
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li>✓ Verified Indian manufacturers</li>
              <li>✓ Global sourcing & buyer support</li>
              <li>✓ Strict quality control</li>
              <li>✓ Transparent pricing</li>
              <li>✓ End-to-end export management</li>
              <li>✓ On-time international delivery</li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-semibold mb-4">
              Looking for Reliable Indian Exporters?
            </h3>

            <p className="text-gray-600 mb-6">
              Contact us today to get product catalogs, pricing, and export
              consultation tailored to your business needs.
            </p>

            <a
              href="/contact"
              className="w-full flex justify-center items-center bg-slate-800 text-white px-6 py-4 rounded-xl hover:bg-slate-900"
            >
              Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <p className="text-sm text-gray-500 text-center mt-4">
              Fast response • Global supply
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
