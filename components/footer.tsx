"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Instagram, Mail } from "lucide-react"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/joaomenkdev-cloud", icon: Github },
  { label: "Instagram", href: "https://instagram.com/jv_menk_", icon: Instagram },
]

export function Footer() {
  const [time, setTime] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      setTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer id="contact" className="relative bg-[#0c0a08]">
      {/* Contact Section */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-px bg-[#c9955f]" />
            <p className="font-mono text-xs tracking-[0.22em] text-[#c9955f] uppercase">04 / Contato</p>
          </div>
          
          <h2 className="font-sans text-[clamp(3.5rem,9vw,9rem)] font-black uppercase leading-[0.88] tracking-[-0.03em] text-[#dbd4c5] mb-12">
            VAMOS
            <br />
            CONSTRUIR
            <br />
            <span className="font-serif font-light italic text-[rgba(219,212,197,0.52)]">algo relevante.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <p className="text-base font-light text-[rgba(219,212,197,0.52)] leading-[1.85]">
              Aberto para projetos, parcerias tecnicas e conversas sobre engenharia de software.
              Se voce tem um problema real para resolver, entre em contato.
            </p>
            <a 
              href="mailto:joaomenkdev@gmail.com" 
              className="font-sans text-[clamp(1.4rem,3vw,2.2rem)] font-bold uppercase tracking-[-0.01em] text-[#dbd4c5] hover:text-[#c9955f] transition-colors duration-300"
            >
              joaomenkdev@gmail.com
            </a>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(219,212,197,0.24)]">Nome</label>
              <input 
                type="text" 
                placeholder="Seu nome completo"
                className="w-full px-4 py-3.5 font-light text-sm text-[#dbd4c5] bg-[#1c180f] border border-[rgba(219,212,197,0.08)] rounded-lg outline-none transition-colors duration-300 placeholder:text-[rgba(219,212,197,0.24)] focus:border-[rgba(201,149,95,0.4)]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(219,212,197,0.24)]">Email</label>
              <input 
                type="email" 
                placeholder="seu@email.com"
                className="w-full px-4 py-3.5 font-light text-sm text-[#dbd4c5] bg-[#1c180f] border border-[rgba(219,212,197,0.08)] rounded-lg outline-none transition-colors duration-300 placeholder:text-[rgba(219,212,197,0.24)] focus:border-[rgba(201,149,95,0.4)]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(219,212,197,0.24)]">Mensagem</label>
              <textarea 
                placeholder="Descreva o projeto ou a necessidade..."
                rows={4}
                className="w-full px-4 py-3.5 font-light text-sm text-[#dbd4c5] bg-[#1c180f] border border-[rgba(219,212,197,0.08)] rounded-lg outline-none transition-colors duration-300 placeholder:text-[rgba(219,212,197,0.24)] focus:border-[rgba(201,149,95,0.4)] resize-y min-h-[120px]"
              />
            </div>
            <div className="flex items-center justify-between gap-4 mt-2 flex-wrap">
              <span className="font-mono text-[0.62rem] tracking-[0.1em] text-[rgba(219,212,197,0.24)] uppercase">Resposta em ate 24h.</span>
              <button 
                type="submit"
                className="px-8 py-3 font-mono text-xs tracking-[0.18em] uppercase text-[#0c0a08] bg-[#dbd4c5] rounded-sm transition-opacity duration-300 hover:opacity-85"
              >
                Enviar mensagem
              </button>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Main CTA */}
      <motion.a
        href="mailto:joaomenkdev@gmail.com"
        data-cursor-hover
        className="relative block overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Curtain */}
        <motion.div
          className="absolute inset-0 bg-[#c9955f]"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Content */}
        <div className="relative py-16 md:py-20 px-8 md:px-12 border-t border-[rgba(219,212,197,0.08)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1200px] mx-auto">
            <motion.h2
              className="font-sans text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-center md:text-left"
              animate={{
                color: isHovered ? "#0c0a08" : "#dbd4c5",
              }}
              transition={{ duration: 0.3 }}
            >
              Vamos <span className="font-serif font-light italic">Colaborar</span>
            </motion.h2>

            <motion.div
              animate={{
                rotate: isHovered ? 45 : 0,
                color: isHovered ? "#0c0a08" : "#dbd4c5",
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>
          </div>
        </div>
      </motion.a>

      {/* Footer Info */}
      <div className="px-8 md:px-12 py-6 border-t border-[rgba(219,212,197,0.08)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1200px] mx-auto">
          {/* Signature */}
          <p className="font-sans text-base font-bold uppercase tracking-[0.08em] text-[rgba(219,212,197,0.24)]">
            Joao <span className="text-[#c9955f]">Menk</span>
          </p>

          {/* Links */}
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="font-mono text-xs tracking-widest text-[rgba(219,212,197,0.52)] hover:text-[#dbd4c5] transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Meta */}
          <p className="font-mono text-[0.6rem] tracking-[0.15em] text-[rgba(219,212,197,0.24)] uppercase">
            Backend First · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
