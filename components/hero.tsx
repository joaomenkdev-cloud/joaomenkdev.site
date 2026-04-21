"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SentientSphere } from "./sentient-sphere"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#0c0a08]">
      {/* 3D Sphere Background */}
      <div className="absolute inset-0">
        <SentientSphere />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_30%,rgba(201,149,95,0.04)_0%,transparent_65%),radial-gradient(ellipse_50%_40%_at_80%_70%,rgba(12,10,8,0)_0%,transparent_70%)]" />

      {/* Typography Overlay */}
      <motion.div style={{ opacity, scale }} className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 md:px-12 md:py-20">
        {/* Top Left - Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center gap-4"
        >
          <div className="w-5 h-px bg-[#c9955f]" />
          <p className="font-mono text-xs tracking-[0.2em] text-[rgba(219,212,197,0.52)] uppercase">
            Backend Engineer &middot; Itapetininga, SP &middot; Disponivel para projetos
          </p>
        </motion.div>

        {/* Center - Main Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-start justify-center flex-1 -mt-20"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-sans text-[clamp(5.5rem,15vw,17rem)] font-black uppercase text-[#dbd4c5] leading-[0.82] tracking-[-0.03em]"
            >
              BACKEND
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-sans text-[clamp(5.5rem,15vw,17rem)] font-black uppercase text-[#dbd4c5] leading-[0.82] tracking-[-0.03em]"
            >
              ENGINEER
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif text-[clamp(3rem,8vw,9rem)] font-light italic text-[rgba(219,212,197,0.52)] leading-[0.82] tracking-[-0.01em]"
            >
              Joao Menk
            </motion.h2>
          </div>
        </motion.div>

        {/* Bottom Content */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <p className="text-[clamp(0.85rem,1.4vw,1rem)] font-light text-[rgba(219,212,197,0.52)] max-w-[400px] leading-[1.8]">
            Engenharia de software orientada a resultados.
            <br />
            APIs que escalam, automacoes que operam, sistemas que entregam.
          </p>
          
          <div className="flex items-center gap-4 flex-wrap">
            <motion.button
              data-cursor-hover
              whileHover={{ opacity: 0.85 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 font-mono text-xs tracking-[0.18em] uppercase text-[#0c0a08] bg-[#dbd4c5] rounded-sm transition-opacity duration-300"
            >
              Ver Projetos
            </motion.button>
            <motion.button
              data-cursor-hover
              whileHover={{ borderColor: 'rgba(219,212,197,0.15)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 font-mono text-xs tracking-[0.18em] uppercase text-[rgba(219,212,197,0.52)] bg-transparent border border-[rgba(219,212,197,0.08)] rounded-sm transition-colors duration-300 hover:text-[#dbd4c5]"
            >
              Entrar em Contato
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 z-10 flex flex-col items-end gap-2"
      >
        <div className="w-px h-[70px] bg-gradient-to-b from-transparent to-[#c9955f]" />
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="font-mono text-[10px] tracking-widest text-[rgba(219,212,197,0.24)] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </motion.span>
      </motion.div>
    </section>
  )
}
