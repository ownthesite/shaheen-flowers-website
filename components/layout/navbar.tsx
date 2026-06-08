"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
  { href: "/landscaping-with-amc-uae", label: "Landscaping with AMC UAE" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" }, 
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
      <header
        ref={navRef}
        className={`
          fixed inset-x-0 top-0 z-50
          flex justify-center
          transition-[padding] duration-300
          ${isScrolled ? "pt-4 px-4" : "pt-0 px-0"}
        `}
      >
        <nav
          className={`
            w-full flex items-center justify-between
            will-change-transform
            transition-[background,box-shadow,border-radius,padding,max-width]
            duration-300 ease-out
            ${
              isScrolled
                ? "max-w-6xl bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-sm"
                : "max-w-7xl bg-transparent px-6 md:px-8 py-6"
            }
          `}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.webp"
              alt="Shaheen Flowers"
              width={48}
              height={48}
              priority
              className={`
                w-auto object-contain
                transition-[height] duration-300
                ${isScrolled ? "h-10" : "h-12"}
              `}
            />    

            <div
              className={`
                flex items-baseline tracking-tight text-stone-900
                transition-[font-size] duration-300
                ${isScrolled ? "text-xl" : "text-2xl"}
              `}
            >
              <span className="font-semibold tracking-[-0.02em]">Shaheen</span>

              <span className="italic font-serif text-emerald-800 ml-1.5">
                Flowers
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const hasSubmenu = Boolean(link.submenu);

                return (
                  <li key={link.label} className="relative">
                    {hasSubmenu ? (
                      <div className="relative">
                        <button
                          onClick={() =>
                            setOpenMenu(
                              openMenu === link.label ? null : link.label,
                            )
                          }
                          className={`
                            flex items-center gap-1 px-4 py-2
                            text-[15px] font-medium
                            transition-colors duration-200
                            ${
                              isActive
                                ? "text-stone-900"
                                : "text-stone-500 hover:text-stone-900"
                            }
                          `}
                        >
                          {link.label}

                          <ChevronDown
                            size={14}
                            className={`
                              transition-transform duration-200
                              ${openMenu === link.label ? "rotate-180" : ""}
                            `}
                          />
                        </button>

                        <AnimatePresence>
                          {openMenu === link.label && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.18 }}
                              className="
                                absolute top-[calc(100%+1rem)] left-1/2
                                -translate-x-1/2 w-56
                                bg-white rounded-2xl
                                shadow-lg border border-stone-100
                                p-2
                              "
                            >
                              {link.submenu!.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setOpenMenu(null)}
                                  className="
                                    block px-4 py-3 rounded-xl
                                    text-sm font-medium text-stone-600
                                    hover:bg-stone-50
                                    hover:text-emerald-800
                                    transition-colors
                                  "
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`
                          relative block px-4 py-2
                          text-[15px] font-medium
                          transition-colors duration-200
                          ${
                            isActive
                              ? "text-stone-900"
                              : "text-stone-500 hover:text-stone-900"
                          }
                        `}
                      >
                        {link.label}

                        <span
                          className={`
                            absolute left-4 right-4 -bottom-[1px]
                            h-[1.5px] rounded-full
                            bg-emerald-700
                            transition-transform transition-opacity duration-200
                            ${
                              isActive
                                ? "opacity-100 scale-x-100"
                                : "opacity-0 scale-x-0"
                            }
                          `}
                        />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center
                rounded-full
                bg-stone-900 hover:bg-emerald-800
                px-6 py-2.5
                text-sm font-medium tracking-wide text-white
                transition-colors duration-200
              "
            >
              Get Quote
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="
              md:hidden relative z-[90]
              p-2 text-stone-900
            "
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-5 flex flex-col justify-between"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 9 },
                }}
                transition={{ duration: 0.2 }}
                className="
                  w-full h-[2px]
                  bg-current rounded-full
                  origin-left
                "
              />

              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.15 }}
                className="
                  w-full h-[2px]
                  bg-current rounded-full
                "
              />

              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -9 },
                }}
                transition={{ duration: 0.2 }}
                className="
                  w-full h-[2px]
                  bg-current rounded-full
                  origin-left
                "
              />
            </motion.div>
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
              fixed inset-0 z-[80]
              bg-black/40 backdrop-blur-sm
              md:hidden
            "
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 260,
              }}
              className="
                absolute inset-y-0 right-0
                w-full max-w-sm
                bg-white shadow-xl
                flex flex-col
              "
            >
              <div className="flex flex-col h-full overflow-y-auto px-6 pt-28 pb-8">
                <div className="flex flex-col gap-2">
                  {NAV_LINKS.map((link, index) => {
                    const isActive = pathname === link.href;

                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.06 + index * 0.04,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`
                            flex items-center justify-between
                            rounded-2xl px-4 py-4
                            text-lg font-medium
                            transition-colors duration-200
                            ${
                              isActive
                                ? "bg-stone-50 text-emerald-800"
                                : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                            }
                          `}
                        >
                          <span>{link.label}</span>

                          <ArrowRight
                            size={18}
                            className={
                              isActive ? "text-emerald-800" : "text-stone-400"
                            }
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* MOBILE CTA */}
                <div className="mt-auto pt-8">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="
                      flex items-center justify-center
                      w-full rounded-full
                      bg-stone-900
                      py-4 text-base font-medium text-white
                    "
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
