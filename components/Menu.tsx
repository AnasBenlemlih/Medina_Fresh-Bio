"use client";

import { motion } from "framer-motion";

const menuData = [
  {
    category: "JUICES",
    items: [
      { name: "Fresh Orange Juice", price: 15 },
      { name: "Avocado Milk Honey", price: 25 },
      { name: "Strawberry Fresh Juice", price: 20 },
      { name: "Pomegranate Juice", price: 25 },
      { name: "Banana Almond Milk", price: 20 },
    ],
  },
  {
    category: "SMOOTHIES",
    items: [
      { name: "Tropical Mango Smoothie", price: 30 },
      { name: "Red Energy (Strawberry Banana)", price: 28 },
      { name: "Green Detox (Avocado Spinach Apple)", price: 32 },
      { name: "Protein Boost (Banana Peanut Butter)", price: 35 },
    ],
  },
  {
    category: "CREPES",
    items: [
      { name: "Nutella Crepe", price: 25 },
      { name: "Nutella Banana", price: 30 },
      { name: "Nutella Strawberry", price: 30 },
      { name: "Special Medina Mix", price: 35 },
    ],
  },
  {
    category: "TIRAMISU",
    items: [
      { name: "Classic Italian", price: 30 },
      { name: "Nutella Tiramisu", price: 35 },
      { name: "Strawberry Tiramisu", price: 35 },
    ],
  },
  {
    category: "FRESH FRUITS TO GO",
    items: [
      { name: "Mixed Fruit Cup", price: 20 },
      { name: "Seasonal Fruit Box", price: 25 },
      { name: "Mango Box", price: 30 },
      { name: "Pomegranate Cup", price: 25 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Menu() {
  return (
    <section
      id="menu"
      className="scroll-mt-20 bg-white px-4 py-16 sm:py-20 md:py-24"
      aria-labelledby="menu-heading"
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
            id="menu-heading"
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Our Menu
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Fresh ingredients, made to order
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {menuData.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-soft transition-all hover:shadow-soft-lg"
            >
              <h3 className="border-b-2 border-medina-orange-400 pb-2 text-lg font-bold uppercase tracking-wide text-medina-orange-600">
                {section.category}
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-3"
                  >
                    <span className="text-gray-800">{item.name}</span>
                    <span className="shrink-0 font-semibold text-medina-green-600">
                      {item.price} MAD
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
