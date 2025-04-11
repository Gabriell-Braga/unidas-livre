"use client"
import { useEffect, useState } from "react"
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility"

export default function AccessibilityButton() {
  const [open, setOpen] = useState(false)
  const [isContrastOn, setIsContrastOn] = useState(false)

  useEffect(() => {
    // caso o usuário volte e a classe já esteja ativa
    setIsContrastOn(document.body.classList.contains("high-contrast"))
  }, [])

  const toggleFontSize = (size: "increase" | "decrease") => {
    const html = document.documentElement
    const currentSize = parseFloat(getComputedStyle(html).fontSize)

    const newSize = size === "increase"
      ? Math.min(currentSize + 2, 24)
      : Math.max(currentSize - 2, 12)

    html.style.fontSize = `${newSize}px`
  }

  const toggleContrast = () => {
    const isActive = document.body.classList.toggle("high-contrast")
    setIsContrastOn(isActive)
  }

  const resetAccessibility = () => {
    document.documentElement.style.fontSize = ""
    document.body.classList.remove("high-contrast")
    setIsContrastOn(false)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition border border-white cursor-pointer"
        aria-label="Abrir menu de acessibilidade"
      >
        <SettingsAccessibilityIcon className="w-6 h-6" />
      </button>

      {open && (
        <div className="bg-white shadow-xl shadow-gray-500 rounded-lg mt-2 p-4 w-56 text-sm text-gray-800">
          <p className="font-bold mb-2">Acessibilidade</p>
          <ul className="space-y-2">
            <li>
              <button onClick={() => toggleFontSize("increase")} className="hover:underline cursor-pointer">
                Aumentar fonte
              </button>
            </li>
            <li>
              <button onClick={() => toggleFontSize("decrease")} className="hover:underline cursor-pointer">
                Diminuir fonte
              </button>
            </li>
            <li>
              <button onClick={toggleContrast} className="hover:underline cursor-pointer">
                {isContrastOn ? "Desativar alto contraste" : "Ativar alto contraste"}
              </button>
            </li>
            <li>
              <button onClick={resetAccessibility} className="!text-red-600 hover:underline cursor-pointer">
                Redefinir
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
