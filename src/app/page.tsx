// src/app/page.tsx
import Header from "components/Header";
import Hero from "components/Hero";
import Calculator from "components/Calculator";
import ContactForm from "components/ContactForm";
import Footer from "components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Calculator />
      <ContactForm />
      <Footer />
    </>
  )
}
