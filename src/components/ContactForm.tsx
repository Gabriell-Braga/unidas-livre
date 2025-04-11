// src/components/ContactForm.tsx
"use client"
import { useState } from "react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulário enviado! Simulando envio...")
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-6">Entre em contato</h3>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input type="text" placeholder="Nome completo" required className="p-3 border rounded" />
          <input type="email" placeholder="E-mail" required className="p-3 border rounded" />
          <input type="tel" placeholder="Telefone" required className="p-3 border rounded" />
          <input type="text" placeholder="Cidade" required className="p-3 border rounded" />
          <textarea placeholder="Mensagem" rows={4} required className="p-3 border rounded resize-none" />
          <button type="submit" className="bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition">
            Enviar
          </button>
          {submitted && <p className="text-green-600 mt-2">Mensagem enviada com sucesso!</p>}
        </form>
      </div>
    </section>
  )
}
