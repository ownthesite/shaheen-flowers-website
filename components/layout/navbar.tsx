'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? 'bg-white/80 backdrop-blur-xl border-b border-stone-200 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO (Premium) */}
        <Link href="/" className="text-2xl tracking-tight text-stone-900">
          <span className="font-semibold">Shaheen</span>{' '}
          <span className="italic font-serif text-green-700">Flowers</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-stone-600">

          {navLinks.map((link) => (
            <div key={link.label} className="relative group">

              {'submenu' in link ? (
                <>
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === link.label ? null : link.label)
                    }
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
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-green-700 text-white text-sm font-medium shadow-md hover:bg-green-800 transition"
          >
            Get Quote
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-stone-900"
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
            <div className="px-6 py-6 space-y-6 text-lg text-stone-700">

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href || '#'}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-green-700 transition"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="block text-center mt-4 px-6 py-3 bg-green-700 text-white rounded-full"
              >
                Get Quote
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}