"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  // BODY LOCK
  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isOpen
            ? "bg-white/80 backdrop-blur-xl border-b border-stone-200/80 shadow-sm py-4"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl tracking-tight text-stone-900 shrink-0"
          >
            <span className="font-semibold">Shaheen</span>{" "}
            <span className="italic font-serif text-emerald-700">Flowers</span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-9 text-sm font-medium text-stone-600">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="relative group">
                {link.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === link.label ? null : link.label)
                      }
                      aria-expanded={openMenu === link.label}
                      className="flex items-center gap-1 hover:text-stone-900 transition-colors"
                    >
                      {link.label}
                      <ChevronDown size={14} />
                    </button>

                    <AnimatePresence>
                      {openMenu === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-60 bg-white rounded-2xl shadow-2xl border border-stone-100 p-2"
                        >
                          {link.submenu.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setOpenMenu(null)}
                              className="block px-4 py-3 rounded-xl text-sm text-stone-600 hover:bg-emerald-50 hover:text-emerald-700 transition-all"
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
                    className="relative hover:text-stone-900 transition-colors"
                  >
                    {link.label}

                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-emerald-700 transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full
              bg-emerald-800 hover:bg-emerald-700
              px-6 py-2.5 text-sm font-semibold text-white
              transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className={`
    md:hidden relative z-[90]
    w-11 h-11 flex items-center justify-center
    border border-stone-200
    backdrop-blur-xl
    transition-all duration-300 ease-out
    ${isOpen ? "bg-white shadow-none" : "bg-white/80 shadow-sm"}
    rounded-full
  `}
          >
            <motion.div
              animate={{
                rotate: isOpen ? 90 : 0,
                scale: isOpen ? 0.92 : 1,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* PANEL */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-3 top-3 z-[70]
                        rounded-[28px] bg-white shadow-2xl md:hidden overflow-hidden
                        max-h-[85vh]"
            >
              <div className="flex flex-col h-full px-6 py-6">
                {/* TOP */}
                <div className="flex items-center justify-between border-b border-stone-100 pb-5">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="text-2xl tracking-tight text-stone-900"
                  >
                    <span className="font-semibold">Shaheen</span>{" "}
                    <span className="italic font-serif text-emerald-700">
                      Flowers
                    </span>
                  </Link>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* LINKS */}
                <div className="flex flex-col gap-1 py-6">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between
                        rounded-2xl px-4 py-4
                        text-base font-medium tracking-tight
                        text-stone-700 hover:bg-stone-100
                        transition-all"
                      >
                        <span>{link.label}</span>

                        <span className="text-stone-400 text-sm">↗</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full
                    rounded-full bg-emerald-800 hover:bg-emerald-700
                    py-4 text-sm font-semibold text-white
                    transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
