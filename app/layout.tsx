import type React from "react"
import type { Metadata, Viewport } from "next"
import { Barlow_Condensed, Cormorant_Garamond, Sora, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const bigShoulders = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
  weight: ["400", "700", "800", "900"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500"],
  style: ["italic"],
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600"],
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["300", "400", "500"],
})

export const metadata: Metadata = {
  title: "Joao Menk — Backend Engineer",
  description: "Backend Engineer especializado em APIs escalaveis, automacao e sistemas full-stack.",
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0c0a08",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${bigShoulders.variable} ${cormorant.variable} ${sora.variable} ${firaCode.variable} bg-[#0c0a08]`}>
      <body className="font-sans antialiased overflow-x-hidden bg-[#0c0a08] text-[#dbd4c5]">
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
