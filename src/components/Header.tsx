// src/components/Header.tsx
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import clsx from "clsx"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-28 flex justify-between items-center",
        !scrolled ? "bg-white py-6 text-primary" : "bg-primary py-3 text-white shadow-md",
      )}
    >
      <a href="./">
        <Image
          src={!scrolled ? "/img/logo-unidas-livre.png" : "/img/logo-unidas-livre-branco.png"}
          alt="Logo Unidas Livre"
          width={scrolled ? 90 : 120}
          height={10}
          className="transition-all duration-300"
        />
      </a>
      <nav>
        <ul className="flex gap-20 text-sm md:text-xl font-semibold items-center justify-between">
          {[
            { label: "Benefícios", href: "#benefits" },
            { label: "Simulador", href: "#calculator" },
            { label: "Contato", href: "#contact" },
          ].map((item, index) => (
            <li key={index} className="relative group">
              <a href={item.href} className="transition">
                {item.label}
                <span className="block h-0.5 bg-current scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1 pointer-events-none" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
