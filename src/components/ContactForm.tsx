// src/components/ContactForm.tsx
"use client"
import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      telefone: formData.get("telefone"),
      cidade: formData.get("cidade"),
      mensagem: formData.get("mensagem"),
    }

    console.log("Formulário enviado:", data)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 px-10 xl:px-40 bg-primary bg-[url('/img/hero-bg-2.webp')] bg-cover bg-no-repeat flex flex-col xl:flex-row justify-start items-center xl:items-end">
      <motion.div 
        className="rounded-3xl xl:rounded-4xl shadow-gray-600 shadow-2xl p-10 bg-white text-primary-focus w-full xl:w-2/5 h-fit"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-center mb-6">Entre em contato</h3>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input name="nome" type="text" placeholder="Nome completo" required className="p-3 border rounded" />
          <input name="email" type="email" placeholder="E-mail" required className="p-3 border rounded" />
          <input name="telefone" type="tel" placeholder="Telefone" required className="p-3 border rounded" />
          <input name="cidade" type="text" placeholder="Cidade" required className="p-3 border rounded" />
          <textarea name="mensagem" placeholder="Mensagem" rows={7} required className="p-3 border rounded resize-none" />
          <button type="submit" className="bg-primary text-white font-semibold py-3 rounded hover:bg-primary-hover transition cursor-pointer">
            Enviar
          </button>
          {submitted && <p className="text-primary text-center font-bold">Mensagem enviada com sucesso!</p>}
        </form>
      </motion.div>
      <motion.div 
        className="h-full xl:w-1/2 flex flex-col justify-end items-start text-white xl:ml-16 mt-10 xl:mt-0"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
          <h3 className="text-4xl font-bold text-start">Como funciona a Unidas Livre?</h3>
          <p className="mt-5 text-lg text-start">O Livre é um serviço de <strong>carro por assinatura 0 km</strong> feito para descomplicar o dia a dia de quem quer um carro novo sempre, sem preocupações com manutenção, impostos, seguro, taxas, documentação. Mais comodidade e menos burocracia.</p>
          <p className="mt-3 text-lg font-bold text-start">Fique Livre de preocupações com IPVA, licenciamento, emplacamento, desvalorização e manutenções preventivas.</p>
          <p className="mt-3 text-lg text-start">Você aproveita a experiência de um carro novo, sem se preocupar com revenda, financiamento ou surpresas no orçamento. Tudo com suporte completo da Unidas.</p>
          <p className="mt-3 text-lg text-start">É fácil ser Livre: escolha seu carro, envie seus dados e entraremos em contato.</p>
      </motion.div>
    </section>
  )
}
