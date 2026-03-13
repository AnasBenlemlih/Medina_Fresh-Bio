"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-medina-green-50/60 px-4 py-16 sm:py-20 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="about-heading"
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            About MEDINA Fresh & Bio
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-700 sm:text-xl">
            Located in the authentic Medina of Fès, MEDINA Fresh & Bio offers
            freshly squeezed juices, natural smoothies, homemade crepes, and
            delicious desserts made daily with high-quality ingredients. Perfect
            stop for tourists and locals looking for freshness and flavor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
