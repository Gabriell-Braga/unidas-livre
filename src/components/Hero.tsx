// src/components/Hero.tsx
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import DescriptionIcon from "@mui/icons-material/Description"
import AutorenewIcon from "@mui/icons-material/Autorenew"
import ScheduleIcon from "@mui/icons-material/Schedule"
import GroupIcon from "@mui/icons-material/Group"
import PaidIcon from "@mui/icons-material/Paid"

const benefits = [
  { label: "Carro 0km", icon: DirectionsCarIcon },
  { label: "Documentação e IPVA inclusos", icon: DescriptionIcon },
  { label: "Carro reserva ilimitado", icon: AutorenewIcon },
  { label: "Assistência 24h", icon: ScheduleIcon },
  { label: "Motorista adicional gratuito", icon: GroupIcon },
  { label: "Mensalidade fixa", icon: PaidIcon },
]

type HeroProps = {
  title?: React.ReactNode
  subtitle?: string
}

export default function Hero({
  title = 
    (<>
      Dirija sem comprar. <br />
      Viva mais leve.
    </>),
  subtitle = "Com o Unidas Livre, você tem um carro 0km com tudo incluso e sem complicações.",
}: HeroProps) {
  return (
    <section className="text-center py-16 bg-white pt-40 md:pt-60 xl:pt-40 2xl:h-[850px] xl:bg-[url('/img/hero-bg-1.webp')] bg-cover bg-center">
      <div className="px-10 xl:px-28 w-full flex flex-col-reverse xl:flex-row items-center justify-between h-full text-white">
        
        {/* Texto deslizando da esquerda */}
        <div
          className="flex flex-col justify-center items-start"
        >
          <motion.h2 
            className="text-4xl xl:text-[76px] font-bold text-primary-focus mb-4 text-start"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-8 text-start"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
          <motion.ul 
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-primary-focus text-lg font-bold mt-2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}  
          >
            {benefits.map(({ label, icon: Icon }, index) => (
              <li key={index} className="flex items-start gap-3 leading-relaxed">
                <Icon className="mt-1 text-primary-focus w-6 h-6" />
                {label}
              </li>
            ))}
          </motion.ul>
          <motion.div 
            className="flex items-center justify-center mt-10 gap-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2 }}
          >
            <a href="#contact" className="button border-2 border-primary text-primary rounded-full px-3 xl:px-5 py-1 xl:py-2 xl:text-xl font-semibold cursor-pointer mt-10">Entre em Contato</a>
            <a href="#benefits" className="button bg-primary text-white rounded-full px-3 xl:px-5 py-1 xl:py-2 xl:text-xl font-semibold cursor-pointer mt-10 border-2 border-primary">Saiba Mais</a>
          </motion.div>
        </div>

        {/* Imagem deslizando da direita */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/img/carro.png"
            alt="Imagem de carro do Unidas Livre"
            width={900}
            height={542}
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
