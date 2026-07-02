"use client";

import { useEffect, useState } from "react";
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

export default function BatchList() {
  const [selectedBatchType, setSelectedBatchType] = useState<
    "ongoing" | "upcoming"
  >("ongoing");

  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        setLoading(true);

        const url =
          selectedBatchType === "ongoing"
            ? "https://saasverse.in/saasadmin/wp-json/wp/v2/ongoing_batches"
            : "https://saasverse.in/saasadmin/wp-json/wp/v2/upcoming_batches";

        const res = await fetch(url);

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();

        const mappedCourses: Course[] = data.map((item: any) => {
          const acf = item.acf?.training_batches || {};

          const batches: Batch[] = Object.entries(acf.batches || {})
            .filter(([_, value]) => value)
            .map(([key, value], index) => ({
              id: index + 1,
              name: key.replace(/batch(\d+)/i, "Batch $1"),
              date: String(value),
              time: "",
            }));

          return {
            id: item.id,
            course:
              acf.training_title || item.title?.rendered || "Untitled Course",
            description: acf.training_batch_description || "",
            showBatches: false,
            batches,
          };
        });

        setCourses(mappedCourses);
      } catch (error) {
        console.error(error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBatches();
  }, [selectedBatchType]);

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
              onClick={() => setSelectedBatchType("ongoing")}
              className={`rounded-xl px-7 py-3 font-medium transition-all duration-300 ${
                selectedBatchType === "ongoing"
                  ? "bg-gradient-to-r from-[#003e95] to-black text-white shadow-lg"
                  : "text-gray-700"
              }`}
            >
              Ongoing
            </button>

            <button
              onClick={() => setSelectedBatchType("upcoming")}
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

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#003e95] border-t-transparent"></div>
          </div>
        ) : (
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

                    <h3 className="">
                      {course.course}
                    </h3>
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
        )}
      </div>
    </section>
  );
}