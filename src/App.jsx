
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

const handleInformationClick = (event) => {
  if (
    event.target.closest(
      'input, textarea, select, option, [contenteditable="true"]'
    )
  ) {
    return
  }

  const number = '923114746202'
  const message = 'Assalam o Alaikum! I want to know about accommodation.'

  window.open(
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer'
  )
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div onClick={handleInformationClick}>
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
      </div>

      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App

