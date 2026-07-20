"use client";

import { useState } from "react";
import { ChevronDown, Calendar, BookOpen } from "lucide-react";

interface Batch {
  id: number;
  name: string;
  date: string;
  time?: string;
}

interface Course {
  id: number;
  course: string;
  description: string;
  showBatches: boolean;
  batches: Batch[];
}

// -----------------------------------------------------------------------
// STATIC DATA — edit these values directly to update the batches shown.
// -----------------------------------------------------------------------

const ongoingCourses: Course[] = [
  {
    id: 1,
    course: "Salesforce Administrator (ADM 201)",
    description:
      "Master the fundamentals of Salesforce administration, security, and automation.",
    showBatches: false,
    batches: [
      { id: 1, name: "Batch 1", date: "20 Jul 2026" },
      { id: 2, name: "Batch 2", date: "27 Jul 2026" },
    ],
  },
  {
    id: 2,
    course: "Salesforce Platform Developer I",
    description:
      "Learn Apex, Visualforce, and Lightning Web Components to build custom solutions.",
    showBatches: false,
    batches: [{ id: 1, name: "Batch 1", date: "22 Jul 2026" }],
  },
];

const upcomingCourses: Course[] = [
  {
    id: 1,
    course: "Salesforce Marketing Cloud",
    description:
      "Deep dive into email studio, journey builder, and automation studio.",
    showBatches: false,
    batches: [
      { id: 1, name: "Batch 1", date: "05 Aug 2026" },
      { id: 2, name: "Batch 2", date: "12 Aug 2026" },
    ],
  },
  {
    id: 2,
    course: "Salesforce CPQ",
    description:
      "Configure, price, and quote — learn end-to-end CPQ implementation.",
    showBatches: false,
    batches: [{ id: 1, name: "Batch 1", date: "10 Aug 2026" }],
  },
];

// -----------------------------------------------------------------------

export default function BatchList() {
  const [selectedBatchType, setSelectedBatchType] = useState<
    "ongoing" | "upcoming"
  >("ongoing");

  const [courses, setCourses] = useState<Course[]>(ongoingCourses);

  const handleTabChange = (type: "ongoing" | "upcoming") => {
    setSelectedBatchType(type);
    setCourses(type === "ongoing" ? ongoingCourses : upcomingCourses);
  };

  const toggleBatches = (courseId: number) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === courseId
          ? { ...course, showBatches: !course.showBatches }
          : course
      )
    );
  };

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="cnt relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Training Batches
          </h2>

          <p className="mt-4 text-base text-gray-500">
            Join industry-leading Salesforce training programs
          </p>
        </div>

        {/* Toggle */}
        <div className="mb-12 flex justify-center">
          <div className="rounded-2xl border border-white/20 bg-white/70 p-2 shadow-xl backdrop-blur-xl">
            <button
              onClick={() => handleTabChange("ongoing")}
              className={`rounded-xl px-7 py-3 font-medium transition-all duration-300 ${
                selectedBatchType === "ongoing"
                  ? "bg-gradient-to-r from-[#003e95] to-black text-white shadow-lg"
                  : "text-gray-700"
              }`}
            >
              Ongoing
            </button>

            <button
              onClick={() => handleTabChange("upcoming")}
              className={`rounded-xl px-7 py-3 font-medium transition-all duration-300 ${
                selectedBatchType === "upcoming"
                  ? "bg-gradient-to-r from-[#003e95] to-black text-white shadow-lg"
                  : "text-gray-700"
              }`}
            >
              Upcoming
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="overflow-hidden rounded-2xl border border-white/20 bg-white/70 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-black text-white">
                    <BookOpen size={20} />
                  </div>

                  <h3 className="">{course.course}</h3>
                </div>

                {course.description && (
                  <p className="mb-5 leading-relaxed text-gray-600">
                    {course.description}
                  </p>
                )}

                <button
                  onClick={() => toggleBatches(course.id)}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#003e95] to-black px-5 py-3 text-white transition-all duration-300 hover:scale-105"
                >
                  View Batch Details
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      course.showBatches ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    course.showBatches
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-6 space-y-3">
                    {course.batches.map((batch) => (
                      <div
                        key={batch.id}
                        className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                      >
                        <h4 className="font-semibold text-gray-900">
                          {batch.name}
                        </h4>

                        <div className="flex items-center gap-2 font-medium text-[#003e95]">
                          <Calendar size={16} />
                          {batch.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-black" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}