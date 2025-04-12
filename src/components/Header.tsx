"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import clsx from "clsx"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Simulador", href: "#calculator" },
    { label: "Contato", href: "#contact" },
    { label: "Benefícios", href: "#benefits" },
    { label: "Clientes", href: "#clients" },
  ]

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 xl:px-28 flex justify-between items-center",
        !scrolled ? "bg-white py-6 text-primary" : "bg-primary py-3 text-white shadow-md"
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

      {/* Menu desktop */}
      <nav className="hidden xl:flex">
        <ul className="flex gap-12 text-sm xl:text-xl font-semibold items-center">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <a href={item.href} className="transition">
                {item.label}
                <span className="block h-0.5 bg-current scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1 pointer-events-none" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botão hamburguer mobile */}
      <button
        className="xl:hidden text-inherit"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          className={clsx(
            "absolute top-full left-0 w-full bg-white text-primary py-4 px-6 shadow-md xl:hidden transition-all duration-300",
            scrolled && "!bg-primary text-white"
          )}
        >
          <ul className="flex flex-col gap-4 text-lg font-semibold">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
