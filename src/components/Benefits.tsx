// src/components/Benefits.tsx
"use client"
import { motion } from "framer-motion"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import DescriptionIcon from "@mui/icons-material/Description"
import AutorenewIcon from "@mui/icons-material/Autorenew"
import Schedule from "@mui/icons-material/Schedule"
import GroupIcon from "@mui/icons-material/Group"
import PaidIcon from "@mui/icons-material/Paid"

export default function Benefits() {    
    const benefits = [
        {
          label: "Carro 0km",
          icon: DirectionsCarIcon,
          description: "Tenha sempre um carro novo, sem se preocupar com revisões ou desgastes de uso prolongado.",
        },
        {
          label: "Documentação e IPVA inclusos",
          icon: DescriptionIcon,
          description: "Todos os custos com licenciamento, IPVA e documentação já estão incluídos na assinatura.",
        },
        {
          label: "Carro reserva ilimitado",
          icon: AutorenewIcon,
          description: "Em caso de imprevistos, você tem acesso a um carro reserva sempre que precisar.",
        },
        {
          label: "Assistência 24h",
          icon: Schedule,
          description: "Em qualquer hora e lugar, conte com reboque ilimitado, socorro mecânico, chaveiro e troca de pneus.",
        },
        {
          label: "Motorista adicional gratuito",
          icon: GroupIcon,
          description: "Inclua mais um motorista sem custos adicionais e com a mesma cobertura de serviços.",
        },
        {
          label: "Mensalidade fixa",
          icon: PaidIcon,
          description: "Sem surpresas no orçamento: pague o mesmo valor todo mês com tudo incluso.",
        },
      ];      
  
    return (
      <section id="benefits" className="pb-32 pt-10 md:pt-48 px-10 md:px-40 bg-primary bg-[url('/img/hero-bg-4.png')] bg-cover">
        <motion.h3 
            className="text-4xl md:text-5xl font-bold text-center text-white md:mb-8"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            Benefícios do Unidas Livre
        </motion.h3>
        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:mt-20 md:px-44"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            {benefits.map(({label, icon: Icon, description}, index) => (
                <span key={index} className="flex flex-col items-start gap-3 mt-24 md:mt-10 md:px-20">
                    <div className="flex flex-row items-start gap-3 font-bold leading-relaxed text-2xl w-full text-center">
                        <Icon fontSize="large" className="mt-1 w-8 h-8" />
                        {label}
                    </div>
                    <p className="font-normal">{description}</p>
                </span>
            ))}
        </motion.div>
      </section>
    )
  }
  