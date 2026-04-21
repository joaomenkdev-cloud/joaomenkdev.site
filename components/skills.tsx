"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    label: "Backend",
    skills: ["Python", "C# / .NET 10", "ASP.NET Core", "REST API Design", "Entity Framework", "Swagger / OpenAPI"],
  },
  {
    label: "Banco de Dados",
    skills: ["MySQL", "SQLite", "Firebase Firestore", "Modelagem relacional", "Migrations"],
  },
  {
    label: "Frontend & Mobile",
    skills: ["React / TypeScript", "Tailwind CSS", "React Native", "Capacitor Android", "HTML / CSS / JS"],
  },
  {
    label: "Infraestrutura",
    skills: ["Docker", "Git / GitHub", "Linux", "Selenium / Scraping", "SHA-256 / Auth", "Firebase Hosting"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-8 md:px-12 bg-[#141209]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 mb-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-[#c9955f]" />
              <p className="font-mono text-xs tracking-[0.22em] text-[#c9955f] uppercase">03 / Stack</p>
            </div>
            <h2 className="font-sans text-[clamp(2.4rem,5vw,4.2rem)] font-black uppercase tracking-[-0.02em] leading-[0.9] text-[#dbd4c5]">
              DOMINIO
              <span className="block font-serif font-light italic text-[clamp(2rem,4vw,3.4rem)] text-[rgba(219,212,197,0.52)] tracking-[0.01em]">
                tecnico.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-base font-light text-[rgba(219,212,197,0.52)] leading-[1.85] max-w-[400px]"
          >
            Backend e a especialidade — mas o ciclo completo de um produto e compreendido e executado.
            Da arquitetura do banco de dados a interface que o usuario final acessa.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[rgba(219,212,197,0.08)]"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.label}
              className={`p-6 md:p-8 ${categoryIndex < skillCategories.length - 1 ? 'border-b sm:border-b-0 sm:border-r lg:border-r border-[rgba(219,212,197,0.08)]' : ''} ${categoryIndex === 1 ? 'sm:border-r-0 lg:border-r' : ''}`}
            >
              <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[#c9955f] mb-6 pb-4 border-b border-[rgba(219,212,197,0.08)]">
                {category.label}
              </div>
              <ul className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm font-light text-[rgba(219,212,197,0.52)] hover:text-[#dbd4c5] transition-colors duration-300 cursor-default"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c9955f] opacity-60 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
