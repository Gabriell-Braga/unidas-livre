// src/components/Hero.tsx
import Image from "next/image"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import DescriptionIcon from "@mui/icons-material/Description"
import AutorenewIcon from "@mui/icons-material/Autorenew"
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"
import GroupIcon from "@mui/icons-material/Group"
import PaidIcon from "@mui/icons-material/Paid"

const benefits = [
  { label: "Carro 0km", icon: DirectionsCarIcon },
  { label: "Documentação e IPVA inclusos", icon: DescriptionIcon },
  { label: "Carro reserva ilimitado", icon: AutorenewIcon },
  { label: "Assistência 24h", icon: LocalHospitalIcon },
  { label: "Motorista adicional gratuito", icon: GroupIcon },
  { label: "Mensalidade fixa", icon: PaidIcon },
]

export default function Hero() {
  return (
    <section id="benefits" className="text-center py-16 bg-gray-100 pt-40 h-[850px] bg-[url('/img/hero-bg-2.png')] bg-cover bg-center">
      <div className="px-28 w-full flex items-center justify-between h-full text-white">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-4xl md:text-[76px] font-bold text-primary-focus mb-4 text-start">Dirija sem comprar.<br></br> Viva mais leve.</h2>
          <p className="text-lg text-gray-700 mb-8 text-start">Com o Unidas Livre, você tem um carro 0km com tudo incluso e sem complicações.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-primary-focus text-lg font-bold mt-2">
            {benefits.map(({ label, icon: Icon }, index) => (
              <li key={index} className="flex items-start gap-3 leading-relaxed">
                <Icon className="mt-1 text-primary-focus w-6 h-6" />
                {label}
              </li>
            ))}
        </ul>
        <div className="flex items-center justify-center mt-10 gap-5">
          <a href="#calculator" className="button border-2 border-primary text-primary rounded-full px-5 py-2 text-2xl font-semibold cursor-pointer mt-10">Entre em Contato</a>
          <a href="#contact" className="button bg-primary text-white rounded-full px-5 py-2 text-2xl font-semibold cursor-pointer mt-10 border-2">Saiba Mais</a>
        </div>
      </div>
        <Image
          src="/img/carro.png"
          alt="Imagem de carro do Unidas Livre"
          width={900}
          height={400}
          className=""
        />
      </div>
    </section>
  )
}
