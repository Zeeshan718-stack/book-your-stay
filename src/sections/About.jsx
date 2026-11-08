
import React from 'react'
import {
  CheckCircle,
  ShieldCheck,
  MapPin,
  Headphones,
  ArrowRight
} from 'lucide-react'

const features = [
  'Carefully selected accommodation options',
  'Hotels across three major Pakistani cities',
  'Easy access to property information',
  'Options for different budgets and needs'
]

function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container about-grid">

        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000"
            alt="Comfortable luxury hotel bedroom"
            loading="lazy"
          />

          <div className="about-experience">
            <ShieldCheck size={27} />
            <div>
              <strong>Trusted Choices</strong>
              <span>Explore with confidence</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">ABOUT BOOKYOURSTAY</span>

          <h2>
            Making Your Stay Search Simple and Convenient
          </h2>

          <p className="about-description">
            BookYourStay helps travellers discover accommodation
            options across Lahore, Islamabad and Karachi. From
            comfortable hotels to premium suites, explore places
            that suit your travel plans and preferences.
          </p>

          <div className="about-features">
            {features.map((feature) => (
              <div className="about-feature" key={feature}>
                <CheckCircle size={19} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="about-extra">
            <div>
              <MapPin size={22} />
              <span>3 Major Cities</span>
            </div>

            <div>
              <Headphones size={22} />
              <span>Travel Information</span>
            </div>
          </div>

          <a href="#cities" className="about-button">
            Explore Destinations <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default About
