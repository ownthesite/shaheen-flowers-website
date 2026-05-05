"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Defined TypeScript interfaces for better type safety
interface SubMenuItem {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  submenu?: SubMenuItem[];
}

const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // 2. Updated ref type to match the <motion.nav> element
  const navRef = useRef<HTMLElement>(null);

  // 3. Combined event listeners for cleaner mounting/unmounting
  useEffect(() => {
    // Added passive: true for better scrolling performance
    const handleScroll = () => {
      if (window.scrollY > 40) setIsScrolled(true);
      else if (window.scrollY < 10) setIsScrolled(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? "bg-white/80 backdrop-blur-xl border-b border-stone-200 py-4 shadow-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO (Premium) - Unchanged */}
        <Link href="/" className="text-2xl tracking-tight text-stone-900">
          <span className="font-semibold">Shaheen</span>{" "}
          <span className="italic font-serif text-green-700">Flowers</span>
        </Link>

        {/* DESKTOP MENU - 4. Converted to Semantic HTML (ul/li) */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-stone-600">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="relative group">
              {link.submenu ? (
                <>
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === link.label ? null : link.label)
                    }
                    aria-expanded={openMenu === link.label}
                    className="flex items-center gap-1 hover:text-stone-900 transition"
                  >
                    {link.label}
                    <ChevronDown size={14} />
                  </button>

                  <AnimatePresence>
                    {openMenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-white rounded-2xl shadow-xl border border-stone-100 p-2"
                      >
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpenMenu(null)}
                            className="block px-4 py-2.5 rounded-lg text-sm text-stone-600 hover:bg-green-50 hover:text-green-700 transition"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="relative hover:text-stone-900 transition"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-green-700 transition-all group-hover:w-full" />
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full bg-emerald-800 transition-all duration-300 group-hover:bg-emerald-700" />
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/10 via-transparent to-transparent" />
            <span className="absolute inset-0 rounded-full ring-1 ring-white/10" />
            <span className="relative z-10 flex items-center gap-2 text-white">
              Get Quote
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                →
              </span>
            </span>
          </Link>
        </div>

        {/* MOBILE BUTTON - 5. Added accessibility labels */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden text-stone-900 focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-white border-t border-stone-100"
          >
            <div className="px-6 py-6 space-y-6 text-lg text-stone-700 flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-green-700 transition"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-4 px-6 py-3 bg-green-700 text-white rounded-full font-medium"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
