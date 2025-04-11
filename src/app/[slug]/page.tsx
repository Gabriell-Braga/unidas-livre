// src/app/[slug]/page.tsx
import Header from "components/Header"
import Hero from "components/Hero"
import Calculator from "components/Calculator"
import ContactForm from "components/ContactForm"
import Benefits from "components/Benefits"
import Clients from "components/Clients"
import Footer from "components/Footer"
import BackToTop from "components/BackToTop"
import AccessibilityButton from "components/AccessibilityButton"

export default function DynamicLanding({ params }: { params: { slug: string } }) {
  const { slug } = params
  const hasDiscount = slug == "promo-10" // você pode adicionar mais slugs aqui se quiser

  console.log("Slug recebido:", slug)

  return (
    <>
      <Header />
      <Hero
        title={hasDiscount ? "Promoção Especial: 10% OFF!" : undefined}
        subtitle={hasDiscount ? "Aproveite agora a melhor condição do Unidas Livre." : undefined}
      />
      <Calculator discount={hasDiscount ? 0.1 : 0} />
      <ContactForm />
      <Benefits />
      <Clients />
      <Footer />
      <BackToTop />
      <AccessibilityButton />
    </>
  )
}
