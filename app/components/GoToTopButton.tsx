
"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function GoToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-6 z-[9998] flex h-12 w-12 items-center justify-center rounded-full bg-[#003e95] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#002d70]"
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
}

