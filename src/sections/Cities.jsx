
import { MapPin, ArrowRight } from 'lucide-react'

const cities = [
  {
    name: 'Lahore',
    subtitle: 'The Heart of Pakistan',
    image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900',
    description: 'Explore accommodation across Lahore and its popular neighbourhoods.',
    areas: 8
  },
  {
    name: 'Islamabad',
    subtitle: 'The Beautiful Capital',
    image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=900',
    description: 'Discover hotels and accommodation throughout Islamabad.',
    areas: 7
  },
  {
    name: 'Karachi',
    subtitle: 'The City of Lights',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=900',
    description: 'Find accommodation in Karachi’s popular neighbourhoods.',
    areas: 7
  }
]

function Cities() {
  return (
    <section className="cities-section section-padding" id="cities">
      <div className="container">

        <div className="section-heading">
          <span className="section-tag">EXPLORE DESTINATIONS</span>
          <h2>Explore Cities Across Pakistan</h2>
          <p>
            Discover popular cities, neighbourhoods and accommodation
            options across Pakistan.
          </p>
        </div>

        <div className="cities-grid">
          {cities.map((city) => (
            <article className="city-card" key={city.name}>

              <div className="city-image">
                <img
                  src={city.image}
                  alt={city.name}
                  loading="lazy"
                />

                <span className="city-listing-badge">
                  {city.areas} Popular Areas
                </span>
              </div>

              <div className="city-content">
                <span className="city-subtitle">
                  <MapPin size={15} />
                  {city.subtitle}
                </span>

                <h3>{city.name}</h3>
                <p>{city.description}</p>

                <a
                  href={`#directory-${city.name.toLowerCase()}`}
                  className="city-explore"
                >
                  Explore Areas <ArrowRight size={17} />
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
