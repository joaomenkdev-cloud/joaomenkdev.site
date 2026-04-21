"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#works" },
  { label: "Stack", href: "#skills" },
  { label: "Contato", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-[#0c0a08]/80 backdrop-blur-md border-b border-[rgba(219,212,197,0.08)]" : ""
        }`}
      >
        <nav className={`flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}>
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="group"
          >
            <span className="font-sans text-xl font-black tracking-[0.06em] uppercase text-[#dbd4c5]">
              J<span className="text-[#c9955f]">.</span>MENK
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="font-mono text-xs tracking-[0.18em] uppercase text-[rgba(219,212,197,0.52)] hover:text-[#dbd4c5] transition-colors duration-300"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#contact")
            }}
            className="hidden md:block font-mono text-xs tracking-[0.18em] uppercase text-[#0c0a08] bg-[#dbd4c5] px-5 py-2.5 rounded-sm transition-opacity duration-300 hover:opacity-85"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-[#dbd4c5] origin-center rounded-sm"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-5 h-[1.5px] bg-[#dbd4c5] rounded-sm"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-[#dbd4c5] origin-center rounded-sm"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0c0a08]/95 backdrop-blur-lg md:hidden"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-7 right-6 font-mono text-xs tracking-[0.2em] text-[rgba(219,212,197,0.52)] uppercase"
            >
              Fechar x
            </button>
            <nav className="flex flex-col items-center justify-center h-full gap-10">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="font-sans text-[clamp(2.5rem,10vw,4rem)] font-black uppercase tracking-[0.04em] text-[rgba(219,212,197,0.52)] hover:text-[#dbd4c5] transition-colors duration-300"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
