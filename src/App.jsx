
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import Cities from './sections/Cities'
import About from './sections/About'
import WhyChooseUs from './sections/WhyChooseUs'
import Categories from './sections/Categories'
import Directory from './sections/Directory'
import HotelIntro from './sections/HotelIntro'
import Services from './sections/Services'
import WhyPakistan from './sections/WhyPakistan'
import CTA from './sections/CTA'
import Gallery from './sections/Gallery'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
import WhatsAppButton from './components/WhatsAppButton'

function Home() {
  return (
    <>
      <Hero />
      <Cities />
      <About />
      <WhyChooseUs />
      <Categories />
      <Directory />
      <HotelIntro />
      <Services />
      <WhyPakistan />
      <CTA />
      <Gallery />
      <FAQ />
      <FinalCTA />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <About />
      <WhyChooseUs />
      <WhyPakistan />
    </>
  )
}

function CitiesPage() {
  return (
    <>
      <Cities />
      <Directory />
    </>
  )
}

function AccommodationPage() {
  return (
    <>
      <HotelIntro />
      <Directory />
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <Services />
      <CTA />
    </>
  )
}

function GalleryPage() {
  return <Gallery />
}

function ContactPage() {
  return (
    <>
      <FinalCTA />
      <FAQ />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cities" element={<CitiesPage />} />
        <Route path="/accommodation" element={<AccommodationPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App
