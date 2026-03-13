"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden px-4 py-20 sm:min-h-[90vh] sm:py-24"
      aria-label="Hero"
    >
      {/* Background image - using Unsplash for fresh fruits (optimized) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=1920&q=80"
          alt="Fresh fruits and juices"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] text-center">
        <motion.h1
          className="text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Fresh Juice & Sweet Moments in the Heart of Fès
        </motion.h1>
        <motion.p
          className="mt-4 text-lg font-medium text-white/95 sm:text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Natural • Fresh • Homemade
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Link
            href="#menu"
            className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-2xl bg-medina-orange-500 px-8 py-3.5 text-base font-semibold text-white shadow-soft-lg transition-all hover:bg-medina-orange-600 hover:shadow-soft hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            View Menu
          </Link>
          <Link
            href="#location"
            className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-2xl border-2 border-white bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Find Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
