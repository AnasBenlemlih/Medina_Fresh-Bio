"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type MenuItem = {
  name: string;
  price: number;
  image?: string;
};

type MenuSection = {
  category: string;
  items: MenuItem[];
  /** Full-width card (e.g. photo grid) */
  fullWidth?: boolean;
  /** List rows vs. image cards */
  layout?: "list" | "photos";
  /** Poster / planche au-dessus de la liste des prix */
  bannerImage?: string;
};

const menuData: MenuSection[] = [
  {
    category: "JUICES",
    bannerImage: "/menu/juices-board.png",
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
    bannerImage: "/menu/smoothies-board.png",
    items: [
      { name: "Tropical Mango Smoothie", price: 25 },
      { name: "Red Energy (Strawberry Banana)", price: 25 },
      { name: "Green Detox (Avocado Spinach Apple)", price: 25 },
      { name: "Protein Boost (Banana Peanut Butter)", price: 25 },
    ],
  },
  {
    category: "CHOCOLAT & FRAISE",
    fullWidth: true,
    layout: "photos",
    items: [
      {
        name: "Fraise avec chocolat",
        price: 15,
        image: "/menu/fraise-chocolat-15.png",
      },
      {
        name: "Fraise chocolat Dubaï",
        price: 25,
        image: "/menu/fraise-chocolat-dubai-25.png",
      },
      {
        name: "Flan Venezuela",
        price: 13,
        image: "/menu/flan-venezuela-13.png",
      },
    ],
  },
  {
    category: "CREPES",
    bannerImage: "/menu/crepes-board.png",
    items: [
      { name: "Nutella Crepe", price: 25 },
      { name: "Nutella Banana", price: 30 },
      { name: "Nutella Strawberry", price: 30 },
      { name: "Special Medina Mix", price: 35 },
    ],
  },
  {
    category: "FRESH FRUITS TO GO",
    bannerImage: "/menu/fresh-fruits-board.png",
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

function MenuBanner({ src, label }: { src: string; label: string }) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl bg-[#faf8f5] ring-1 ring-medina-orange-100/80">
      <div className="flex max-h-[min(58vh,520px)] items-center justify-center p-2 sm:p-3">
        <Image
          src={src}
          alt={label}
          width={1100}
          height={1500}
          className="h-auto w-full max-h-[min(58vh,520px)] object-contain object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          priority={false}
        />
      </div>
    </div>
  );
}

function PhotoMenuItem({ item }: { item: MenuItem }) {
  return (
    <li className="flex flex-col overflow-hidden">
      <div className="flex min-h-[240px] items-center justify-center overflow-hidden rounded-xl bg-[#faf8f5] p-2 ring-1 ring-medina-orange-100/80 sm:min-h-[280px]">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            width={700}
            height={933}
            className="h-auto max-h-[min(52vh,440px)] w-full object-contain object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          />
        ) : null}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3 px-0.5">
        <span className="font-medium text-gray-800">{item.name}</span>
        <span className="shrink-0 font-semibold text-medina-green-600">
          {item.price} DH
        </span>
      </div>
    </li>
  );
}

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
          className="mt-10 overflow-hidden rounded-2xl bg-white p-4 shadow-soft ring-1 ring-medina-orange-100/60 sm:p-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <h3 className="text-center text-sm font-bold uppercase tracking-wider text-medina-orange-600">
            Aperçu
          </h3>
          <MenuBanner
            src="/menu/menu-overview.png"
            label="Aperçu de la carte MEDINA Fresh & Bio"
          />
        </motion.div>

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {menuData.map((section) => (
            <motion.div
              key={section.category}
              variants={itemVariants}
              className={`rounded-2xl bg-white p-6 shadow-soft transition-all hover:shadow-soft-lg ${
                section.fullWidth ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <h3 className="border-b-2 border-medina-orange-400 pb-2 text-lg font-bold uppercase tracking-wide text-medina-orange-600">
                {section.category}
              </h3>
              {section.bannerImage ? (
                <MenuBanner
                  src={section.bannerImage}
                  label={`Illustration ${section.category}`}
                />
              ) : null}
              {section.layout === "photos" ? (
                <ul
                  className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
                  role="list"
                >
                  {section.items.map((item) => (
                    <PhotoMenuItem key={item.name} item={item} />
                  ))}
                </ul>
              ) : (
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
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
