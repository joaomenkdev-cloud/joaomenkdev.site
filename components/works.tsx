"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "L-Hub Vestibular",
    type: "API REST / IA",
    description: "Plataforma vestibular completa com simulados adaptativos, correcao automatica por IA e importacao de provas via PDF. Backend em ASP.NET Core com autenticacao SHA-256, Swagger e SQLite.",
    tags: [".NET 10", "C#", "SQLite", "REST API"],
    image: "/abstract-neural-network-visualization-dark-theme.jpg",
    year: "2025",
    github: "https://github.com/joaomenkdev-cloud/L-hub-Vestibular",
  },
  {
    title: "Bot de Ofertas",
    type: "Automacao",
    description: "Bot 24/7 com web scraping no Mercado Livre, filtragem inteligente de produtos de tecnologia e envio automatico para grupos Telegram. Fila com deduplicacao via SHA-256 e MySQL.",
    tags: ["Python", "Selenium", "MySQL", "Telegram API"],
    image: "/futuristic-data-dashboard-dark-minimal.jpg",
    year: "2025",
    github: "https://github.com/joaomenkdev-cloud/Bot-ofertas-Telegram",
  },
  {
    title: "Valorant Tracker",
    type: "Data / Analytics",
    description: "Ferramenta de analise de desempenho competitivo que converte dados brutos de partidas em insights acionaveis. Monitora metricas criticas e identifica padroes de jogo.",
    tags: ["Python", "Data Analysis", "API"],
    image: "/abstract-memory-storage-visualization.jpg",
    year: "2025",
    github: "https://github.com/joaomenkdev-cloud/Valorant-Tracker",
  },
  {
    title: "CobraPix",
    type: "App Mobile / Fintech",
    description: "Aplicativo mobile para gestao financeira de freelancers. Controle completo de cobrancas via Pix, registro de gastos, definicao de metas e dashboard com alertas de vencimento.",
    tags: ["React", "TypeScript", "Capacitor", "Firebase"],
    image: "/sound-wave-visualization-dark-theme.jpg",
    year: "2025",
    isPrivate: true,
  },
  {
    title: "Matheus Gerenciamento",
    type: "Gestao / Enterprise",
    description: "Sistema corporativo de gestao de tarefas desenvolvido para a Klabin. Controle de urgencia, upload de anexos, autenticacao Google e sincronizacao em tempo real via Firebase.",
    tags: ["React", "TypeScript", "Firebase", "Google Auth"],
    image: "/abstract-neural-network-visualization-dark-theme.jpg",
    year: "2025",
    isPrivate: true,
  },
  {
    title: "Fabio Despesas",
    type: "Fintech / Offline-first",
    description: "Controle financeiro pessoal com arquitetura offline-first e sincronizacao automatica ao Firebase. Dashboard com analise de 6 meses e breakdown por categoria.",
    tags: ["React", "TypeScript", "Firebase", "PWA"],
    image: "/futuristic-data-dashboard-dark-minimal.jpg",
    year: "2025",
    isPrivate: true,
  },
  {
    title: "Dona Gasolina",
    type: "Website / Restaurante",
    description: "Site institucional para restaurante italiano em Itapetininga. Design sofisticado com apresentacao do cardapio, galeria com lightbox, sistema de reservas via WhatsApp.",
    tags: ["HTML", "CSS", "JavaScript", "SEO"],
    image: "/abstract-memory-storage-visualization.jpg",
    year: "2025",
    isPrivate: true,
  },
]

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  return (
    <section id="works" className="relative py-32 px-8 md:px-12 md:py-24 bg-[#0c0a08]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-[#c9955f]" />
            <p className="font-mono text-xs tracking-[0.22em] text-[#c9955f] uppercase">02 / Projetos</p>
          </div>
          <h2 className="font-sans text-[clamp(2.4rem,5vw,4.2rem)] font-black uppercase tracking-[-0.02em] leading-[0.9] text-[#dbd4c5]">
            TRABALHOS
            <span className="block font-serif font-light italic text-[clamp(2rem,4vw,3.4rem)] text-[rgba(219,212,197,0.52)] tracking-[0.01em]">
              reais.
            </span>
          </h2>
        </div>
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-[rgba(219,212,197,0.24)]">
          07 projetos selecionados
        </p>
      </motion.div>

      {/* Projects List */}
      <div ref={containerRef} onMouseMove={handleMouseMove} className="relative max-w-[1200px] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative border-t border-[rgba(219,212,197,0.08)] py-8 md:py-10"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              data-cursor-hover
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Year & Type */}
              <div className="flex items-center gap-4 order-1 md:order-none md:w-48">
                <span className="font-mono text-xs text-[rgba(219,212,197,0.24)] tracking-[0.1em]">
                  {project.year}
                </span>
                <span className="font-mono text-[0.6rem] font-medium tracking-[0.1em] uppercase text-[#c9955f] px-2 py-0.5 border border-[rgba(201,149,95,0.25)] rounded-sm whitespace-nowrap">
                  {project.type}
                </span>
              </div>

              {/* Title */}
              <motion.h3
                className="font-sans text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-[-0.01em] text-[#dbd4c5] group-hover:text-[rgba(219,212,197,0.7)] transition-colors duration-300 flex-1"
                animate={{
                  x: hoveredIndex === index ? 20 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {project.title}
              </motion.h3>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap order-2 md:order-none">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.6rem] tracking-[0.04em] px-2 py-0.5 border border-[rgba(219,212,197,0.07)] rounded-sm text-[rgba(219,212,197,0.24)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="order-3 md:order-none">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 font-mono text-[0.62rem] tracking-[0.1em] uppercase text-[rgba(219,212,197,0.52)] border border-[rgba(219,212,197,0.08)] rounded-sm transition-all duration-300 hover:text-[#dbd4c5] hover:border-[rgba(219,212,197,0.15)]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-3 h-3" />
                    GitHub
                  </a>
                ) : (
                  <span className="flex items-center gap-2 px-4 py-2 font-mono text-[0.62rem] tracking-[0.1em] uppercase text-[rgba(219,212,197,0.24)] border border-[rgba(219,212,197,0.04)] rounded-sm opacity-60">
                    Projeto Privado
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Floating Image */}
        <motion.div
          className="absolute pointer-events-none z-50 w-64 h-40 md:w-80 md:h-48 overflow-hidden rounded-lg border border-[rgba(219,212,197,0.08)]"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-320%",
          }}
          animate={{
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          {hoveredIndex !== null && (
            <motion.img
              src={projects[hoveredIndex].image}
              alt={projects[hoveredIndex].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                filter: "grayscale(50%) contrast(1.1)",
              }}
            />
          )}
          {/* Gold overlay */}
          <div className="absolute inset-0 bg-[#c9955f]/10 mix-blend-overlay" />
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-[rgba(219,212,197,0.08)] max-w-[1200px] mx-auto" />
    </section>
  )
}
