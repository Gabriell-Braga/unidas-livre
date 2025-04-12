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
import { use } from "react";

type tParams = Promise<{ slug: string }>;

export default function DynamicLanding({ params }: { params: tParams }) {
  const { slug } = use(params);
  const hasDiscount = slug === "promo-10";

  console.log("Slug recebido:", slug)

  return (
    <>
      <Header />
      <Hero
        title={hasDiscount ? (<>
          Promoção Especial. <br />
          10% OFF.
        </>) : undefined}
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
