import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-gray-200 bg-gray-50 px-4 py-8"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1200px] text-center">
        <Link
          href="#"
          className="text-lg font-bold text-medina-orange-600 hover:text-medina-orange-700"
        >
          MEDINA <span className="text-medina-green-600">Fresh & Bio</span>
        </Link>
        <p className="mt-2 text-sm text-gray-600">
          Made with freshness in Fès
        </p>
        <p className="mt-4 text-xs text-gray-500">
          © {currentYear} MEDINA Fresh & Bio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
