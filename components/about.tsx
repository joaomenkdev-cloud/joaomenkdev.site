"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Github, Instagram, Mail } from "lucide-react"

const stats = [
  { number: "7", label: "Projetos entregues" },
  { number: "3+", label: "Anos de experiencia" },
  { number: "24/7", label: "Sistemas em producao" },
]

const socialLinks = [
  { 
    icon: Github, 
    label: "GitHub", 
    href: "https://github.com/joaomenkdev-cloud" 
  },
  { 
    icon: Instagram, 
    label: "Instagram", 
    href: "https://instagram.com/jv_menk_" 
  },
  { 
    icon: Mail, 
    label: "Email", 
    href: "mailto:contato@joaomenk.dev" 
  },
]

export function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 })

  return (
    <section ref={containerRef} id="about" className="relative py-32 overflow-hidden bg-[#141209]">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-px bg-[#c9955f]" />
              <p className="font-mono text-xs tracking-[0.22em] text-[#c9955f] uppercase">01 / Sobre</p>
            </div>
            
            <div className="relative">
              <span className="font-sans text-[clamp(7rem,16vw,14rem)] font-black text-[rgba(219,212,197,0.05)] leading-none tracking-[-0.04em] pointer-events-none absolute -top-4 -left-2">
                01
              </span>
              <h2 className="font-sans text-[clamp(2.4rem,5vw,4.2rem)] font-black uppercase tracking-[-0.02em] leading-[0.9] text-[#dbd4c5] relative">
                O CODIGO
                <span className="block font-serif font-light italic text-[clamp(2rem,4vw,3.4rem)] text-[rgba(219,212,197,0.52)] tracking-[0.01em]">
                  resolve.
                </span>
              </h2>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-10 pt-4">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-base font-light text-[rgba(219,212,197,0.52)] leading-[1.9]"
            >
              <strong className="text-[#dbd4c5] font-medium">Desenvolvedor backend com foco em engenharia de software de alto desempenho.</strong>{" "}
              Especializado na construcao de APIs escalaveis, arquiteturas de sistemas robustos e
              automacoes inteligentes que operam de forma continua e confiavel.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-base font-light text-[rgba(219,212,197,0.52)] leading-[1.9]"
            >
              Com formacao em Desenvolvimento de Sistemas e atuacao ativa em projetos reais para
              clientes privados, entrego solucoes completas — da modelagem do banco de dados ate a
              interface que o usuario final interage. Quando o projeto exige, o frontend tambem
              e tratado com o mesmo rigor tecnico.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 border border-[rgba(219,212,197,0.08)]"
            >
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`p-6 md:p-8 flex flex-col gap-2 ${index < stats.length - 1 ? 'border-r border-[rgba(219,212,197,0.08)]' : ''}`}
                >
                  <span className="font-sans text-[2.8rem] font-black text-[#dbd4c5] leading-none tracking-[-0.03em]">
                    {stat.number}
                  </span>
                  <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-[rgba(219,212,197,0.24)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex gap-3 flex-wrap"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="flex items-center gap-2 px-4 py-2.5 font-mono text-xs tracking-[0.14em] uppercase text-[rgba(219,212,197,0.52)] border border-[rgba(219,212,197,0.08)] rounded-sm transition-colors duration-300 hover:text-[#dbd4c5] hover:border-[rgba(219,212,197,0.15)]"
                >
                  <link.icon className="w-3 h-3" />
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-24 mx-8 md:mx-12 h-px bg-gradient-to-r from-transparent via-[rgba(219,212,197,0.08)] to-transparent origin-left"
      />
    </section>
  )
}
