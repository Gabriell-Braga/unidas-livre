// src/components/Clients.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion"

const clients = [
  {
    name: "Marina",
    image: "/img/marina.jpg",
    quote:
      "Trabalhando no ritmo que eu trabalho, não dá pra perder tempo com burocracia. Com o Unidas Livre, eu só peguei o carro e saí dirigindo. Seguro, IPVA, documentação... tudo incluso. Nunca foi tão fácil ter um carro novo!",
  },
  {
    name: "Eduardo",
    image: "/img/eduardo.jpg",
    quote:
      "Assinei pensando em praticidade, mas me surpreendi com a economia também. O carro é 0km, minha esposa também dirige porque posso adicionar motorista sem custo, e se precisar de assistência, sei que tenho 24h. É comodidade de verdade.",
  },
  {
    name: "Camila",
    image: "/img/camila.jpg",
    quote:
      "Vivo mudando de cidade, e ter um carro próprio era um peso. Com o Unidas Livre, tenho liberdade total. Troco o carro se quiser, não me preocupo com manutenção nem com revenda. Só cuido das minhas viagens.",
  },
  {
    name: "Roberto",
    image: "/img/roberto.jpg",
    quote:
      "Para mim, a previsibilidade de custos é tudo. Com o Unidas Livre, sei exatamente quanto pago por mês, sem surpresas. Já estou até cogitando assinar mais um carro para minha equipe. Vale muito a pena.",
  },
]

export default function Clients() {
  return (
    <section id="clients" className="px-6 md:px-28 py-32 bg-white flex flex-col items-center justify-center">
      <motion.div 
        className="text-center mb-12"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-[40px] font-bold text-primary-focus">Nossos Clientes</h2>
        <p className="text-sm md:text-base text-gray-700">Mais de 1.000 clientes satisfeitos com a Unidas Livre.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl mt-16 md:mt-0">
        {clients.map((client, index) => (
          <motion.div 
            key={index} 
            className="bg-white shadow-gray-400 shadow-lg rounded-2xl md:rounded-3xl p-6 flex flex-col items-center text-center h-full"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: index * 0.3 + 0.5 }}
          >
            <Image
              src={client.image}
              alt={`Imagem de cliente ${client.name}`}
              width={90}
              height={90}
              className="rounded-full object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-primary-focus">{client.name}</h3>
            <p className="text-gray-700 text-sm mt-2">{`“${client.quote}”`}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
