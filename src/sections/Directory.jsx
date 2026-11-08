
import { MapPin, ArrowUpRight } from 'lucide-react'

const locations = [
  {
    city: 'Lahore',
    area: 'Gulberg',
    description: 'Explore hotels and comfortable stays in Lahore’s popular Gulberg area.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'
  },
  {
    city: 'Lahore',
    area: 'DHA',
    description: 'Discover accommodation options in the well-connected DHA area.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
  },
  {
    city: 'Islamabad',
    area: 'F-6 & F-7',
    description: 'Find convenient places to stay near Islamabad’s popular sectors.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'
  },
  {
    city: 'Islamabad',
    area: 'Blue Area',
    description: 'Explore stays close to business, shopping and dining destinations.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
  },
  {
    city: 'Karachi',
    area: 'Clifton',
    description: 'Browse accommodation options in Karachi’s well-known Clifton area.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800'
  },
  {
    city: 'Karachi',
    area: 'DHA',
    description: 'Discover places to stay in Karachi’s popular DHA neighbourhood.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'
  }
]

function Directory() {
  return (
    <section className="directory-section section-padding" id="directory">
      <div className="container">

        <div className="directory-heading">
          <span className="section-tag">EXPLORE OUR DIRECTORY</span>
          <h2>Find Stays in Popular Areas</h2>
          <p>
            Explore accommodation locations across Pakistan
            and discover an area that works for your trip.
          </p>
        </div>

        <div className="directory-grid">
          {locations.map((location, index) => (
            <article className="directory-card" key={index}>
              <div className="directory-image">
                <img src={location.image} alt={`${location.area}, ${location.city}`} />
                <span className="directory-city">
                  {location.city}
                </span>
              </div>

              <div className="directory-content">
                <div className="directory-location">
                  <MapPin size={16} />
                  <span>{location.city}, Pakistan</span>
                </div>

                <h3>{location.area}</h3>
                <p>{location.description}</p>

                <a href="#contact">
                  Explore Area <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Directory
