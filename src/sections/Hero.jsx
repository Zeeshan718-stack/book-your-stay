
import React from 'react'
import { Check, ArrowRight, MapPin } from 'lucide-react'

const trustItems = [
  'Verified Listings',
  'Three Major Cities',
  '24/7 Support',
  'Trusted Partners',
  'Real Photos'
]

const stats = [
  { number: '500+', label: 'Accommodation Listings' },
  { number: '3', label: 'Major Cities' },
  { number: '24/7', label: 'Travel Support' },
  { number: '50+', label: 'Partner Locations' }
]

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800"
          alt="Luxury hotel and swimming pool"
        />
      </div>

      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <span className="hero-eyebrow">
          WELCOME TO BOOKYOURSTAY
        </span>

        <h1>Discover the Best Places to Stay</h1>

        <p className="hero-description">
          Explore accommodation options across Lahore,
          Islamabad and Karachi.
        </p>

        <div className="hero-trust">
          {trustItems.map((item) => (
            <div className="trust-item" key={item}>
              <Check size={16} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="hero-buttons">
          <a href="#directory" className="hero-primary-btn">
            Explore Stays <ArrowRight size={18} />
          </a>

          <a href="#cities" className="hero-secondary-btn">
            <MapPin size={18} /> Browse Cities
          </a>
        </div>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
