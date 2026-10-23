
"use client";

import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa";

export default function FloatingConsultant() {
  return (
    <Link
      href="/contact#contact-form"
      aria-label="Book a Consultant"
      className="floating-consultant fixed bottom-6 right-6 z-[9999] inline-flex items-center gap-3 rounded-full bg-[#003e95] px-6 py-4 text-white shadow-xl transition-colors duration-300 hover:bg-[#002d70]"
    >
      <FaCalendarCheck className="text-xl" />

      <span className="whitespace-nowrap text-sm font-semibold tracking-wide">
        Book a Consultant
      </span>
    </Link>
  );
}

