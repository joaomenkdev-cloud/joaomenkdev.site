"use client"

import { motion } from "framer-motion"

const techItems = [
  "BACKEND ENGINEERING",
  "API DESIGN",
  "PYTHON",
  "C# / .NET",
  "AUTOMACAO",
  "REACT / TYPESCRIPT",
  "FIREBASE",
  "ANDROID / CAPACITOR",
  "FULL-STACK",
  "SISTEMAS ROBUSTOS",
]

const projectNames = [
  "L-HUB VESTIBULAR",
  "COBRAPIX",
  "MATHEUS GERENCIAMENTO",
  "FABIO DESPESAS",
  "DONA GASOLINA",
  "BOT DE OFERTAS",
  "VALORANT TRACKER",
]

function MarqueeRow({ items, direction = "left", isAccent = false }: { items: string[]; direction?: "left" | "right"; isAccent?: boolean }) {
  const duplicatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden py-3 border-t border-b border-[rgba(219,212,197,0.08)]" style={{ background: isAccent ? '#ede8de' : '#141209' }}>
      <motion.div
        className={`flex gap-0 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ width: "fit-content" }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="group flex items-center gap-0"
          >
            <span
              className={`font-sans text-sm md:text-base font-bold uppercase tracking-[0.15em] whitespace-nowrap px-6 transition-colors duration-300 ${
                isAccent 
                  ? 'text-[rgba(12,10,8,0.65)]' 
                  : index % 3 === 0 
                    ? 'text-[#c9955f]' 
                    : 'text-[rgba(219,212,197,0.52)]'
              }`}
            >
              {item}
            </span>
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-60 ${isAccent ? 'bg-[#c9955f]' : 'bg-[#c9955f]'}`} />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Tech Stack Marquee */}
      <MarqueeRow items={techItems} direction="left" />
      
      {/* Projects Marquee (inverted colors) */}
      <MarqueeRow items={projectNames} direction="right" isAccent />
    </section>
  )
}
