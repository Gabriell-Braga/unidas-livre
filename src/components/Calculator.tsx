// src/components/Calculator.tsx
"use client"
import { useState, useEffect } from "react"

const priceTable: Record<string, string> = {
  "12-1000": "R$ 4.130,90",
  "12-2000": "R$ 4.245,90",
  "12-3000": "R$ 4.740,90",
  "24-1000": "R$ 4.216,90",
  "24-2000": "R$ 4.431,90",
  "24-3000": "R$ 4.771,90",
  "36-1000": "R$ 4.117,90",
  "36-2000": "R$ 4.322,90",
  "36-3000": "R$ 4.617,90",
}

export default function Calculator() {
  const [duration, setDuration] = useState("12")
  const [km, setKm] = useState("1000")
  const [price, setPrice] = useState("")

  useEffect(() => {
    setPrice(priceTable[`${duration}-${km}`])
  }, [duration, km])

  return (
    <section id="calculator" className="py-16 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Simule seu plano</h3>
        <form className="grid gap-6 md:grid-cols-2 text-left">
          <div>
            <label className="block mb-1 font-medium">Duração do contrato</label>
            <select value={duration} onChange={e => setDuration(e.target.value)} className="w-full p-2 border rounded">
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
              <option value="36">36 meses</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Franquia de KM</label>
            <select value={km} onChange={e => setKm(e.target.value)} className="w-full p-2 border rounded">
              <option value="1000">1.000 km</option>
              <option value="2000">2.000 km</option>
              <option value="3000">3.000 km</option>
            </select>
          </div>
        </form>
        <p className="mt-8 text-xl font-semibold text-blue-600">Valor da mensalidade: {price}</p>
      </div>
    </section>
  )
}
