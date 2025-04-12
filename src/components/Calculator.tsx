// src/components/Calculator.tsx
"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const priceTable = {
  "12-1000": 4130.9,
  "12-2000": 4245.9,
  "12-3000": 4740.9,
  "24-1000": 4216.9,
  "24-2000": 4431.9,
  "24-3000": 4771.9,
  "36-1000": 4117.9,
  "36-2000": 4322.9,
  "36-3000": 4617.9,
}

export default function Calculator({ discount = 0 }: { discount?: number }) {
  const [duration, setDuration] = useState("12")
  const [km, setKm] = useState("1000")
  const [price, setPrice] = useState("")

  useEffect(() => {
    const key = `${duration}-${km}` as keyof typeof priceTable
    const basePrice = priceTable[key]
    const finalPrice = basePrice * (1 - discount)
    setPrice(finalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }))
  }, [duration, km, discount])

  return (
    <section id="calculator" className="bg-white py-10 xl:h-[800px] ">
      <div className="px-10 xl:px-28 w-full flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-40 h-full text-white">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/img/carro-2.png"
            alt="Imagem de carro do Unidas Livre"
            width={900}
            height={447}
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-start rounded-3xl xl:rounded-4xl shadow-2xl shadow-gray-600 overflow-hidden xl:mb-16"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-10 text-primary-focus">
            <h3 className="text-5xl font-bold mb-10 text-center">Simule seu plano</h3>
            <form className="flex gap-8 flex-col w-full text-left my-5">
              <div className="w-full">
                <label className="block mb-1 font-medium">Quanto tempo você precisa?</label>
                <select value={duration} onChange={e => setDuration(e.target.value)} className="w-full p-2 border rounded">
                  <option value="12">12 meses</option>
                  <option value="24">24 meses</option>
                  <option value="36">36 meses</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block mb-1 font-medium">Quantos KM pretende rodar?</label>
                <select value={km} onChange={e => setKm(e.target.value)} className="w-full p-2 border rounded   ">
                  <option value="1000">1.000 km</option>
                  <option value="2000">2.000 km</option>
                  <option value="3000">3.000 km</option>
                </select>
              </div>
            </form>
          </div>
          <div className="px-10 py-5 text-primary-focus bg-primary w-full mt-5">
            <p className="text-sm font-semibold text-blue-200">Valor da mensalidade:</p>
            <span className="text-4xl font-semibold text-white">{price}</span>
            {discount > 0 && <span className="ml-2 text-sm text-blue-100">(10% OFF)</span>}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
