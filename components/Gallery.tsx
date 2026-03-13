"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=600&q=80",
    alt: "Fresh juices",
    title: "Fresh Juices",
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80",
    alt: "Crepes",
    title: "Crepes",
  },
  {
    src: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80",
    alt: "Fresh fruits",
    title: "Fruits",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    alt: "Cozy café interior",
    title: "Shop Interior",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-20 bg-medina-orange-50/40 px-4 py-16 sm:py-20 md:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="gallery-heading"
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Gallery
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            A taste of what we serve
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl shadow-soft transition-shadow hover:shadow-soft-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="relative aspect-[4/5] sm:aspect-square">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-0 left-0 right-0 p-4 text-lg font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
