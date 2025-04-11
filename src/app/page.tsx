// src/app/page.tsx
import Header from "components/Header";
import Hero from "components/Hero";
import Calculator from "components/Calculator";
import ContactForm from "components/ContactForm";
import Benefits from "components/Benefits";
import Clients from "components/Clients";
import Footer from "components/Footer";
import BackToTop from "components/BackToTop";
import AccessibilityButton from "components/AccessibilityButton";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Calculator/>
      <ContactForm />
      <Benefits/>
      <Clients/>
      <Footer />
      <BackToTop/>
      <AccessibilityButton/>
    </>
  )
}
