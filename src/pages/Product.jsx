import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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

const categories1 = [
  {
    title: "Industrial Components",
    icon: <Cog />,
    items: [
      "Perforated Sheets (MS/SS/Aluminum, Round/Square/Slotted Holes)",
      "Industrial Motors (IE2/IE3 Efficiency, 0.37kW to 355kW)",
      "Toggle Bearings (Cast Steel, Self Lubricating Option)",
      "Pillow Block Bearing (UCF/UCP Series, All Bore Sizes)",
      "Pedestal Bearing (Split Housing Design, Heavy Duty Grade)",
      "T-Bolts (High Strength Steel, Rubber Sealed)",
    ],
  },
  {
    title: "Conveyor components",
    icon: <Factory />, // ✅ valid icon
    items: [
      "Conveyor Idler Roller Set(Dia 89mm to 219mm Length 150mm to 2400mm)",
      "Conveyor Impact Roller Set(Rubber Ring Cushioning Heavy Duty Frame)",
      "Guide Rollers(Vertical/Horizontal Rubber Coated)",
      "Conveyor Rollers(Various Diameters Painted/Galvanized)",
      "Drum Roller(Rubber Lagged Welded Construction)",
      "Conveyor Belts (EP Fabric Rubber Grade AA/A/B)",
      "Rubber U-Bidding(Natural/SBR Rubber Custom Lengths)",
    ],
  },
  {
    title: "Crusher Spare Parts.",
    icon: <Factory />,
    items: [
      "Jaw Plates (High Manganese Steel, Various Sizes Available)",
      "Toggle Plate (Cast Iron / Steel, Safety Design)",
      "Crusher Bolts (High Tensile Steel, Custom Available)",
      "Crusher Bearings (Heavy Duty Grade, Custom Available)",
      "Industrial Gearbox (Heavy Duty Construction, All Ratios)",
      "Heavy Springs (Custom Dimensions, High Load Capacity)",
    ],
  },
  {
    title: "Vibrating Screen ",
    icon: <Settings />,
    items: [
      "Wiremesh Screens (Square/Rectangular Opening, Mild Steel/SS/Manganese)",
      "Vibrating Screen Machine & Spares (Linear/Circular Motion, 1-4 Deck Options)",
      "Bearing Housing (Cast Steel Construction, All Size Options)",
      "Vibro Motor (0.1kW to 15kW, IP65 Protection)",
      "Vibrating Screen Shaft (Eccentric) (Alloy Steel, Heat Treated)",
      "C-Clamp for Vibrator",
    ],
  },

  {
    title: "Scissor Jack Screw Rods & Nuts",
    icon: <Car />,
    items: [
      "Scissor Jack Screw Rods & Their Child Parts",
      "Jack Screw Rod (Load Bearing Capacity 1 Ton)",
      "Jack Screw Rod (Load Bearing Capacity 1.2 Ton)",
      "Jack Screw Rod (Load Bearing Capacity 1.5 Ton)",
      "Jack Screw Rod (Load Bearing Capacity 5 Ton)",
      "Gear Shifting Lever Knob",
      "Agricultural Equipments",
      "Industrial Fasteners",
      "Jack Screw Nut",
      "Machined Components",
      "Moulding Inserts",
      "Spacer Nut (Without Internal Threads)",
      "Spacer Nut for 1.5 Ton Capacity Jack",
    ],
  },

  {
    title: "Home Decor & Handicrafts",
    icon: <Package />,
    items: [
      "Tray (Custom Size)",
      "Cushion Covers (12x12 / 16x16 / 18x18, Custom Size)",
      "Table Runner with Mat (Custom Size)",
      "Handbags, Laptop Bags & Tote Bags (Custom Size)",
      "Bed Covers (Custom Size)",
      "Toran & Rangoli (Standard)",
      "Diyas (Custom Size)",
      "Hangings (Custom Size)",
      "Saree Tassels Design (Custom Size)",
      "Cotton & Silk Clutcher (Standard)",
      "Potlis (Custom Size)",
      "Diaries (Standard)",
      "Diwali Products (Custom Size)",
      "Table Cloth (Custom Size)",
      "Hand-Painted Furniture (Standard)",
      "Wooden Artifacts (Custom Size)",
      "Jute Products",
      "Set of 3 Pouches",
    ],
  },
];

const categories = [
  {
    title: "Scissor Jack Screw Rods & Nuts",
    icon: <Car />,
    items: [
      {
        name: "Jack Screw Rod (Load Bearing Capacity 1 Ton)",
        image: "/Image/products/jack-screw-rod-1-ton.png",
        description:
          "Heavy-duty threaded screw rod designed for 1-ton load lifting applications with smooth linear motion and high strength threads.",
      },
      {
        name: "Jack Screw Rod (Load Bearing Capacity 1.2 Ton)",
        image: "/Image/products/jack-screw-rod-1.2-ton.png",
        description:
          "Medium load capacity jack screw rod used in lifting and positioning applications where controlled vertical movement is required.",
      },
      {
        name: "Jack Screw Rod (Load Bearing Capacity 1.5 Ton)",
        image: "/Image/products/jack-screw-rod-1.5-ton.png",
        description:
          "High strength screw rod suitable for 1.5 ton lifting capacity used in scissor jacks and lifting mechanisms.",
      },
      {
        name: "Jack Screw Rod (Load Bearing Capacity 5 Ton)",
        image: "/Image/products/jack-screw-rod-5-ton.png",
        description:
          "Heavy-duty industrial jack screw rod designed for high load lifting applications up to 5 tons.",
      },
      {
        name: "Gear Shifting Lever Knob",
        image: "/Image/products/Gear-Shifting-Lever-Knob.png",
        description:
          "Precision machined gear lever knob used in vehicles and machinery for smooth gear shifting operation.",
      },
      {
        name: "Agricultural Equipments",
        image: "/Image/products/Agricultural-Equipments.png",
        description:
          "Machined components and hardware used in agricultural machinery and farm equipment manufacturing.",
      },
      {
        name: "Industrial Fasteners",
        image: "/Image/products/industrial-fasteners.png",
        description:
          "High-quality industrial fasteners including nuts, bolts, threaded inserts, spacers and other fastening components used in machinery assembly.",
      },
      {
        name: "Jack Screw Nut",
        image: "/Image/products/jack-screw-nut.png",
        description:
          "Precision threaded nut used with jack screw rods for lifting and linear motion mechanisms.",
      },
      {
        name: "Machined Components",
        image: "/Image/products/machined-components.png",
        description:
          "Custom CNC machined components manufactured as per drawing and specifications with high precision and finishing.",
      },
      {
        name: "Moulding Inserts",
        image: "/Image/products/moulding-inserts.png",
        description:
          "Metal threaded inserts used in plastic injection moulding to provide strong threads inside plastic components.",
      },
      {
        name: "Spacer Nut ",
        image: "/Image/products/spacer-nut-no-threads.png",
        description:
          "Spacer nut used for maintaining gap or spacing between components without internal threading.",
      },
    ],
  },
  {
    title: "Conveyor Components",
    icon: <Factory />,
    items: [
      {
        name: "Conveyor Idler Roller Set (Dia 89mm to 219mm, Length 150mm to 2400mm)",
        image: "/Image/products/conveyor-idler-roller.png",
        description:
          "Conveyor Idler Roller Sets are used to support and guide conveyor belts for smooth material handling operations. These rollers reduce friction, support belt load, and ensure efficient conveyor performance in industrial environments.",
      },
      {
        name: "Conveyor Impact Roller Set (Rubber Ring Cushioning, Heavy Duty Frame)",
        image: "/Image/products/conveyor-impact-roller.png",
        description:
          "Impact Rollers are designed with rubber rings to absorb shock and impact at conveyor loading points, protecting the belt from damage and increasing conveyor system life.",
      },
      {
        name: "Guide Rollers (Vertical/Horizontal Rubber Coated)",
        image: "/Image/products/guide-rollers.jpeg",
        description:
          "Conveyor guide rollers (side rollers) keep the conveyor belt aligned with the conveyor frame.",
      },
      {
        name: "Conveyor Rollers (Various Diameters, Painted/Galvanized)",
        image: "/Image/products/conveyor-rollers.png",
        description:
          "Standard conveyor return and carry rollers for bulk material handling across industries.",
      },
      {
        name: "Drum Roller (Rubber Lagged, Welded Construction)",
        image: "/Image/products/drum-roller.jpeg",
        description:
          "Drum Rollers are used in conveyor systems to drive or guide conveyor belts. They are available as drive drums, tail drums, and bend drums.",
      },
      {
        name: "Conveyor Belts (EP Fabric, Rubber Grade AA/A/B)",
        image: "/Image/products/conveyor-belts.png",
        description:
          "Conveyor Belts are used for transporting materials from one location to another in industrial and material handling systems.",
      },
      {
        name: "Rubber U-Bidding (Natural/SBR Rubber, Custom Lengths)",
        image: "/Image/products/rubber-u-bidding.png",
        description:
          "Rubber U-Bidding is used for edge protection, sealing, and vibration protection in industrial machines and metal sheets. It prevents damage from sharp edges and reduces vibration noise.",
      },
    ],
  },
  {
    title: "Crusher Spare Parts",
    icon: <Factory />,
    items: [
      {
        name: "Jaw Plates (High Manganese Steel, Various Sizes Available)",
        image: "/Image/products/jaw-plates.jpeg",
        description:
          "Jaw Plates are wear parts used in jaw crushers for crushing stones and minerals. Made from high manganese steel for long wear life and high crushing strength.",
      },
      // {
      //   name: "Toggle Plate (Cast Iron / Steel, Safety Design)",
      //   image: "/Image/products/toggle-plate.png",
      //   description:
      //     "Toggle Plate is a safety and support component in jaw crushers that helps transfer crushing force and protects the crusher from overload.",
      // },
      {
        name: "Crusher Bolts (High Tensile Steel, Custom Available)",
        image: "/Image/products/crusher-bolts.png",
        description:
          "Crusher Bolts are high tensile fasteners used in crusher machines for fixing jaw plates, liners, and other crusher parts.",
      },
      {
        name: "Crusher Bearings (Custom Available, Heavy Duty Grade)",
        image: "/Image/products/crusher-bearings.png",
        description:
          "Crusher Bearings are heavy-duty bearings used in crushers to handle high load, shock load, and vibration during crushing operations.",
      },
      {
        name: "Industrial Gearbox (Heavy Duty Construction, All Ratios)",
        image: "/Image/products/industrial-gearbox.png",
        description:
          "Industrial Gearboxes are used to reduce speed and increase torque in industrial machinery and conveyor systems.",
      },
      {
        name: "Heavy Springs (Custom Dimensions, High Load Capacity)",
        image: "/Image/products/heavy-springs.png",
        description:
          "Heavy Duty Springs are used in vibrating screens and industrial machines to absorb shock and vibration.",
      },
    ],
  },
  {
    title: "Vibrating Screen",
    icon: <Settings />,
    items: [
      {
        name: "Wiremesh Screens (Square/Rectangular Opening, Mild Steel/SS/Manganese)",
        image: "/Image/products/wiremesh-screens.png",
        description:
          "Wiremesh is used for screening, filtering, and separating materials in industrial processes. It is available in different mesh sizes, materials, and thicknesses depending on application requirements.",
      },
      {
        name: "Vibrating Screen Machine & Spares (Linear/Circular Motion, 1-4 Deck Options)",
        image: "/Image/products/vibrating-screen-machine.png",
        description:
          "Vibrating Screen Machines are used for separating materials by size using vibration. Spares include screen mesh, springs, bearings, shafts, and motors used for maintenance and replacement.",
      },
      {
        name: "Bearing Housing (Cast Steel Construction, All Size Options)",
        image: "/Image/products/bearing-housing.png",
        description:
          "Bearing Housing supports bearings and protects them from dust, dirt, and moisture. It ensures proper alignment and smooth rotation of shafts.",
      },
      {
        name: "Vibro Motor (0.1kW to 15kW, IP65 Protection)",
        image: "/Image/products/vibro-motor.png",
        description:
          "Vibro Motors generate vibration for material movement, screening, and compaction in industrial equipment.",
      },
      // {
      //   name: "Vibrating Screen Shaft (Eccentric, Alloy Steel, Heat Treated)",
      //   image: "/Image/products/vibrating-screen-shaft.png",
      //   description:
      //     "Eccentric Vibrator Shafts are used in vibrating screens to generate vibration for material screening and separation.",
      // },
      {
        name: "C-Clamp for Vibrator",
        image: "/Image/products/c-clamp-vibrator.png",
        description:
          "C-Clamps are used to mount vibro motors on vibrating screens and industrial vibrating equipment securely.",
      },
    ],
  },
  {
    title: "Industrial Components",
    icon: <Cog />,
    items: [
      {
        name: "Perforated Sheets (MS/SS/Aluminum, Round/Square/Slotted Holes)",
        image: "/Image/products/perforated-sheets.png",
        description:
          "Perforated Sheets are metal sheets with punched holes used for screening, filtration, ventilation, and protective covers.",
      },
      {
        name: "Industrial Motors (IE2/IE3 Efficiency, 0.37kW to 355kW)",
        image: "/Image/products/industrial-motors.jpeg",
        description:
          "Industrial Electric Motors are used to drive industrial machines, conveyors, pumps, and mechanical equipment.",
      },
      {
        name: "Toggle Bearings (Cast Steel, Self Lubricating Option)",
        image: "/Image/products/pillow-block-bearing.png",
        description:
          "Toggle Bearings are used in jaw crushers to support toggle plates and maintain smooth movement during crushing operations.",
      },
      {
        name: "Pillow Block Bearing (UCF/UCP Series, All Bore Sizes)",
        image: "/Image/products/pillow-block-bearing.png",
        description:
          "Pillow Block Bearings are mounted bearings used to support rotating shafts with easy installation and maintenance.",
      },
      {
        name: "Pedestal Bearing (Split Housing Design, Heavy Duty Grade)",
        image: "/Image/products/pedestal-bearing.png",
        description:
          "Pedestal Bearings are used to support rotating shafts and are designed for heavy load industrial applications.",
      },
      // {
      //   name: "T-Bolts (High Strength Steel, Rubber Sealed)",
      //   image: "/Image/products/t-bolts.png",
      //   description:
      //     "Anti-vibration clamping bolts for securing screen mesh panels on vibrating screens.",
      // },
    ],
  },
  {
    title: "Home Decor & Handicrafts",
    icon: <Package />,
    items: [
      // {
      //   name: "Tray (Custom Size)",
      //   image: "/Image/products/tray.png",
      //   description:
      //     "Decorative wooden or metal serving trays with handmade finishing.",
      // },
      {
        name: "Cushion Covers (12x12 / 16x16 / 18x18, Custom Size)",
        image: "/Image/products/cushion-covers.png",
        description:
          "Cotton or embroidered cushion covers with traditional designs.",
      },
      // {
      //   name: "Table Runner with Mat (Custom Size)",
      //   image: "/Image/products/table-runner.png",
      //   description:
      //     "Decorative fabric table runners with block print or embroidery.",
      // },
      {
        name: "Handbags, Laptop Bags & Tote Bags (Custom Size)",
        image: "/Image/products/handbags-totes.jpeg",
        description: "Reusable cotton/jute tote bags for shopping and gifting.",
      },
      {
        name: "Bed Covers (Custom Size)",
        image: "/Image/products/bed-covers.jpg",
        description: "Cotton printed or embroidered bed covers for home décor.",
      },
      {
        name: "Toran & Rangoli (Standard)",
        image: "/Image/products/toran-rangoli.jpg",
        description:
          "Traditional decorative door hangings used in Indian festivals.",
      },
      {
        name: "Diyas (Custom Size)",
        image: "/Image/products/diyas.jpeg",
        description:
          "Clay or decorative diya lamps used for festivals like Diwali.",
      },
      {
        name: "Hangings (Custom Size)",
        image: "/Image/products/hangings.jpeg",
        description:
          "Handmade decorative wall hangings made from fabric, beads, or wood.",
      },
      {
        name: "Saree Tassels Design (Custom Size)",
        image: "/Image/products/saree-tassels.jpeg",
        description:
          "Decorative tassels used in curtains, bags, and home décor.",
      },
      // {
      //   name: "Cotton & Silk Clutcher (Standard)",
      //   image: "/Image/products/clutcher.png",
      //   description: "Handmade purses with embroidery or fabric designs.",
      // },
      {
        name: "Potlis (Custom Size)",
        image: "/Image/products/Potlis.jpeg",
        description:
          "Traditional drawstring gift bags used for weddings and festivals.",
      },
      {
        name: "Diaries (Standard)",
        image: "/Image/products/diaries.jpeg",
        description: "Handmade paper diaries with decorative covers.",
      },
      {
        name: "Diwali Products (Custom Size)",
        image: "/Image/products/diwali-products.jpeg",
        description:
          "Decorative festive items including diyas, torans, and decor sets.",
      },
      // {
      //   name: "Table Cloth (Custom Size)",
      //   image: "/Image/products/table-cloth.png",
      //   description: "Printed or embroidered table cloths.",
      // },
      {
        name: "Hand-Painted Furniture (Standard)",
        image: "/Image/products/hand-painted-furniture.jpg",
        description: "Wooden furniture with traditional hand-painted artwork.",
      },
      // {
      //   name: "Wooden Artifacts (Custom Size)",
      //   image: "/Image/products/wooden-artifacts.png",
      //   description:
      //     "Hand-carved wooden mirror frames and decorative pieces for home.",
      // },
      {
        name: "Jute Products",
        image: "/Image/products/jute-products.jpeg",
        description:
          "Stylish handmade handbags made with fabric, jute, or leather.",
      },
      {
        name: "Set of 3 Pouches",
        image: "/Image/products/set-of-3-pouches.jpeg",
        description:
          "Set of 3 multi-purpose pouches in different sizes for better organization. Lightweight, durable, and travel-friendly.",
      },
    ],
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setIsModalOpen(false);
  };

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
            <Link
              to="/contact"
              className="bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700"
            >
              Get Product Catalog
            </Link>

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
      {/* <section className="py-14">
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
      </section> */}

      <section className="py-14">
        <div className="container mx-auto px-6">
          {!selectedCategory ? (
            <>
              <h2 className="text-3xl font-semibold text-center mb-12">
                Product Categories for Global Export
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-2xl border hover:shadow-lg transition cursor-pointer"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg mb-4">
                      {cat.icon}
                    </div>

                    <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>

                    <div className="text-gray-600 text-sm">
                      {cat.items && cat.items.length > 0 ? (
                        cat.items
                          .slice(0, 5)
                          .map((item, idx) => <div key={idx}>{item.name}</div>)
                      ) : (
                        <div>No items available</div>
                      )}
                      {cat.items.length > 5 && <div>...</div>}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* 👉 Category Details View */
            <>
              {/* Back Button */}
              <button
                onClick={() => setSelectedCategory(null)}
                className=" text-blue-600 cursor-pointer font-medium"
              >
                ← Back to Categories
              </button>

              {/* Title */}
              <h2 className="text-3xl font-semibold mb-10 text-center">
                {selectedCategory.title}
              </h2>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {selectedCategory.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="border rounded-xl p-4 flex flex-col items-center text-center hover:shadow-md transition"
                  >
                    {/* Image */}
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-52 h-48 object-cover rounded-lg mb-3"
                      />
                    ) : (
                      <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 mb-3">
                        No Image
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="font-semibold text-lg">
                      {item.name || "No Name"}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description || "No Description"}
                    </p>

                    {/* CTA */}
                    <Link
                      to="/contact"
                      className="inline-flex mt-5 items-center text-blue-600 font-medium"
                    >
                      Request Quote
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
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

            <Link
              to="/contact"
              className="w-full flex justify-center items-center bg-slate-800 text-white px-6 py-4 rounded-xl hover:bg-slate-900"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

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
