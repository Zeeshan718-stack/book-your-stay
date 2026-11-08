
import { MapPin, ArrowUpRight } from 'lucide-react'

const destinations = [
  {
    city: 'Lahore',
    subtitle: 'Culture & Heritage',
    description:
      'Experience historic landmarks, vibrant food streets and the rich culture of Lahore.',
    image:
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900'
  },
  {
    city: 'Islamabad',
    subtitle: 'Nature & Serenity',
    description:
      'Discover scenic views, peaceful surroundings and modern city attractions.',
    image:
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=900'
  },
  {
    city: 'Karachi',
    subtitle: 'Coastal City Life',
    description:
      'Explore seaside attractions, lively neighbourhoods and diverse city experiences.',
    image:
      'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=900'
  }
]

function WhyPakistan() {
  return (
    <section className="why-pakistan-section section-padding">
      <div className="container">

        <div className="why-pakistan-heading">
          <span className="section-tag">EXPLORE PAKISTAN</span>
          <h2>Discover Amazing Places Across Pakistan</h2>
          <p>
            From cultural heritage to scenic surroundings,
            explore destinations and find a comfortable place to stay.
          </p>
        </div>

        <div className="pakistan-grid">
          {destinations.map((destination, index) => (
            <article className="pakistan-card" key={index}>
              <img
                src={destination.image}
                alt={`${destination.city}, Pakistan`}
              />

              <div className="pakistan-overlay">
                <span className="pakistan-subtitle">
                  {destination.subtitle}
                </span>

                <h3>{destination.city}</h3>

                <p>{destination.description}</p>

                <a href="#directory">
                  Explore Destination
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <span className="pakistan-location">
                <MapPin size={14} /> Pakistan
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyPakistan
