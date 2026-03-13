"use client";

import { motion } from "framer-motion";

const ADDRESS =
  "Rue Talaa Sghira, 2 Rue Souiket Ben Safi, Fès 30000, Maroc";
const MAP_QUERY = encodeURIComponent("Rue Talaa Sghira, 2 Rue Souiket Ben Safi, Fès 30000, Maroc");
const GOOGLE_MAPS_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const GOOGLE_MAPS_DIRECT = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export default function Location() {
  return (
    <section
      id="location"
      className="scroll-mt-20 bg-white px-4 py-16 sm:py-20 md:py-24"
      aria-labelledby="location-heading"
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
            id="location-heading"
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Find Us
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            In the heart of the Medina of Fès
          </p>
        </motion.div>

        <motion.div
          className="mt-12 overflow-hidden rounded-2xl shadow-soft"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-6 lg:p-8">
              <p className="text-lg font-medium text-gray-800">
                MEDINA Fresh & Bio
              </p>
              <address className="mt-2 not-italic text-gray-600">
                {ADDRESS}
              </address>
              <a
                href={GOOGLE_MAPS_DIRECT}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-medina-green-500 px-6 py-3 font-semibold text-white shadow-soft transition-all hover:bg-medina-green-600 hover:shadow-soft-lg focus:outline-none focus:ring-2 focus:ring-medina-green-500 focus:ring-offset-2"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="relative h-[280px] w-full lg:h-[320px] lg:min-w-[50%]">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                title="MEDINA Fresh & Bio location on Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
