"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = typeof window !== "undefined" ? window.innerHeight * 0.7 : 500;
      setVisible(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 flex justify-center gap-3 bg-white/95 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden="true"
    >
      <Link
        href="#menu"
        className="flex-1 rounded-2xl bg-medina-orange-500 py-3.5 text-center font-semibold text-white shadow-soft"
      >
        View Menu
      </Link>
      <Link
        href="#location"
        className="flex-1 rounded-2xl border-2 border-medina-green-500 py-3.5 text-center font-semibold text-medina-green-600"
      >
        Find Us
      </Link>
    </div>
  );
}
