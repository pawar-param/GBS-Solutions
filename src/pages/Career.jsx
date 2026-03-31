import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [expandedJobs, setExpandedJobs] = useState(new Set());
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const hardcodedJobs = [
    {
      _id: "1",
      title: "EXIM Executive (Fresher)",
      location: "Pune (Onsite)",
      description:
        "Handle export–import operations including documentation, coordination with logistics partners, and client communication.",
      requirements: [
        "Basic knowledge of export–import procedures",
        "Documentation & coordination skills",
        "Good communication skills",
        "Willingness to learn global trade operations",
      ],
      createdAt: "2025-01-10",
      salary: "Training + Entry-Level Salary",
    },
    {
      _id: "2",
      title: "International Sales & Marketing Executive",
      location: "Pune (Onsite)",
      description:
        "Manage international sales activities including lead generation, buyer communication, and market research.",
      requirements: [
        "Strong communication skills",
        "International lead generation basics",
        "Buyer inquiry handling",
        "Market research & follow-ups",
      ],
      createdAt: "2025-01-10",
      salary: "Performance-Based Salary",
    },
    {
      _id: "3",
      title: "EXIM Documentation & Compliance Trainee",
      location: "Pune (Onsite)",
      description:
        "Learn export–import documentation, customs compliance, and regulatory procedures with hands-on trade exposure.",
      requirements: [
        "Interest in export–import domain",
        "Basic documentation skills",
        "Attention to detail",
        "Eagerness to learn compliance processes",
      ],
      createdAt: "2025-01-10",
      salary: "Performance-Based Salary",
    },
  ];
  useEffect(() => {
    setLoading(true);

    // Optional small delay for loader UX
    setTimeout(() => {
      setJobs(hardcodedJobs);
      setLoading(false);
    }, 300);
  }, []);

  const locations = [
    "All",
    ...new Set(jobs.map((job) => job.location).filter(Boolean)),
  ];

  useEffect(() => {
    if (location.hash === "#openings") {
      const element = document.getElementById("openings");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const filteredJobs = jobs.filter((job) => {
    const matchSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchLoc =
      selectedLocation === "All" || job.location === selectedLocation;
    return matchSearch && matchLoc;
  });

  const toggleJobExpansion = (jobId) => {
    const newExpanded = new Set(expandedJobs);
    if (newExpanded.has(jobId)) {
      newExpanded.delete(jobId);
    } else {
      newExpanded.add(jobId);
    }
    setExpandedJobs(newExpanded);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  bg-slate-50 ">
      {/* Career Page Hero Section */}
      <section className="relative bg-slate-800 text-white">
        <div className="container mx-auto px-6 py-10 lg:py-14">
          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-center">
            {/* LEFT CONTENT – 2 COLUMNS */}
            <div className="lg:col-span-2 transition-all duration-1000 opacity-100 translate-y-0">
              {/* Trust Line */}
              <p className="text-sm tracking-wide uppercase text-blue-400 mb-4">
                Careers at ABS
              </p>

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                Build Your Career With
                <br />
                <span className="text-blue-400">ABS Global Exim</span>
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
                <strong className="text-white">ABS Global Exim.</strong> offers
                career opportunities through internships, real-world IT
                projects, professional training, and industry-focused programs
                designed to prepare you for long-term success in the global
                technology ecosystem.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-medium transition"
                >
                  Connect With Us
                </Link>

                <a
                  href="#openings"
                  className="border border-slate-600 text-gray-200 hover:border-blue-500 hover:text-blue-400 px-8 py-4 rounded-xl font-medium transition"
                >
                  View Open Positions
                </a>
              </div>
            </div>

            {/* RIGHT CONTENT – 1 COLUMN */}
            <div className="hidden lg:block">
              <div className="bg-slate-700 border border-slate-800 rounded-2xl p-10 shadow-xl">
                <h3 className="text-lg font-medium mb-6">Why Join ABS?</h3>

                <ul className="space-y-4 text-gray-300 text-sm">
                  <li>• Real-World Industry Projects</li>
                  <li>• Internship & Training Programs</li>
                  <li>• Mentorship from Industry Experts</li>
                  <li>• Career-Oriented Skill Development</li>
                  <li>• Long-Term Growth Opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search Input */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl  focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Location Filter */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-x focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
              >
                {locations.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div id="openings" className="space-y-6">
          {filteredJobs.map((job, index) => {
            const isExpanded = expandedJobs.has(job._id);

            return (
              <div
                key={job._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Job Header - Always Visible */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h2>
                      <div className="flex items-center gap-4 text-gray-600 mb-3 flex-wrap">
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>
                            {job.location || "Location not specified"}
                          </span>
                        </div>
                        {job.salary && (
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                              />
                            </svg>
                            {/* <span>{job.salary}</span> */}
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z"
                            />
                          </svg>
                          <span>
                            Posted{" "}
                            {new Date(job.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Job Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.location && (
                      <span className="px-3 py-1 bg-slate-100 text-blue-700 rounded-full text-sm font-medium">
                        {job.location}
                      </span>
                    )}

                    <span className="px-3 py-1 bg-purple-100 text-blue-700 rounded-full text-sm font-medium">
                      Posted {new Date(job.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleJobExpansion(job._id)}
                    className="flex items-center cursor-pointer gap-2 text-blue-700 hover:text-blue-800 font-medium transition-colors"
                  >
                    {isExpanded ? "Show Less" : "View Full Details"}
                    {isExpanded ? (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="border-t bg-gray-50 p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column - Requirements */}
                      <div className="space-y-6">
                        {job.requirements && job.requirements.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                              Job Requirements
                            </h3>
                            <ul className="space-y-3">
                              {job.requirements.map((req, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-gray-700"
                                >
                                  <svg
                                    className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="leading-relaxed">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Right Column - Job Details */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Job Information
                          </h3>
                          <div className="space-y-3 text-gray-700">
                            <div className="flex items-center gap-3">
                              <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <div>
                                <span className="font-medium">Location:</span>
                                <span className="ml-2">
                                  {job.location || "Not specified"}
                                </span>
                              </div>
                            </div>

                            {job.salary && (
                              <div className="flex items-center gap-3">
                                <svg
                                  className="w-5 h-5 text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                  />
                                </svg>
                                <div>
                                  <span className="font-medium">Salary:</span>
                                  <span className="ml-2 ">{job.salary}</span>
                                </div>
                              </div>
                            )}

                            <div className="flex items-center gap-3">
                              <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z"
                                />
                              </svg>
                              <div>
                                <span className="font-medium">Posted:</span>
                                <span className="ml-2">
                                  {new Date(job.createdAt).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    },
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Apply Instructions */}
                    <div className="mt-8 pt-6 border-t text-center">
                      <p className="text-slate-700 text-base font-medium">
                        To apply, please send your CV to{" "}
                        <a
                          href="mailto:info@absglobalexim.com"
                          className="text-blue-800 font-semibold hover:underline"
                        >
                          info@absglobalexim.com
                        </a>
                      </p>

                      <p className="mt-2 text-slate-700 text-base font-medium">
                        or call us at{" "}
                        <a
                          href="tel:+919175318983"
                          className="text-blue-800 font-semibold hover:underline"
                        >
                          +91 9175318983
                        </a>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* No Jobs Found */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or check back later for new
              opportunities.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedLocation("All");
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Career;
