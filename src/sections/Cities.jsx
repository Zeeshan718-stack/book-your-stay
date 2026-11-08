
import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react'

const cities = [
  {
    name: 'Lahore',
    subtitle: 'The Heart of Pakistan',
    listings: '200+',
    image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900',
    description: 'Explore luxury hotels, boutique stays and comfortable guest houses.'
  },
  {
    name: 'Islamabad',
    subtitle: 'The Beautiful Capital',
    listings: '150+',
    image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=900',
    description: 'Discover peaceful stays, scenic surroundings and premium hotels.'
  },
  {
    name: 'Karachi',
    subtitle: 'The City of Lights',
    listings: '180+',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=900',
    description: 'Find comfortable accommodation near business and coastal areas.'
  }
]

function Cities() {
  return (
    <section className="cities-section section-padding" id="cities">
      <div className="container">

        <div className="section-heading">
          <span className="section-tag">EXPLORE DESTINATIONS</span>
          <h2>Choose Your City</h2>
          <p>
            Explore accommodation options in Pakistan's
            most popular destinations.
          </p>
        </div>

        <div className="cities-grid">
          {cities.map((city) => (
            <article className="city-card" key={city.name}>

              <div className="city-image">
                <img
                  src={city.image}
                  alt={`${city.name} destination`}
                  loading="lazy"
                />

                <span className="city-listing-badge">
                  {city.listings} Listings
                </span>
              </div>

              <div className="city-content">
                <span className="city-subtitle">
                  <MapPin size={15} />
                  {city.subtitle}
                </span>

                <h3>{city.name}</h3>

                <p>{city.description}</p>

                <a href="#directory" className="city-explore">
                  Explore Stays <ArrowRight size={17} />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Cities
