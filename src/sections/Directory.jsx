
import { MapPin, ArrowUpRight } from 'lucide-react'

const cities = [
  {
    name: 'Lahore',
    areas: [
      'Gulberg',
      'DHA',
      'Model Town',
      'Johar Town',
      'Bahria Town',
      'Mall Road',
      'Garden Town',
      'Cantt'
    ]
  },
  {
    name: 'Islamabad',
    areas: [
      'F-6',
      'F-7',
      'F-8',
      'E-11',
      'Blue Area',
      'DHA',
      'Bahria Town'
    ]
  },
  {
    name: 'Karachi',
    areas: [
      'Clifton',
      'DHA',
      'Gulshan-e-Iqbal',
      'PECHS',
      'Saddar',
      'Shahrah-e-Faisal',
      'Gulistan-e-Johar'
    ]
  }
]

const hotelImages = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800'
]

function createHotels(area, city) {
  return [
    {
      name: `${area} Hotel 01`,
      image: hotelImages[0],
      description: `Explore accommodation at ${area}, ${city}. This is a sample hotel listing.`,
      facilities: ['Comfortable Rooms', 'Wi-Fi', 'Room Service']
    },
    {
      name: `${area} Hotel 02`,
      image: hotelImages[1],
      description: `Discover another accommodation option in ${area}, ${city}. This is a sample hotel listing.`,
      facilities: ['Guest Rooms', 'Parking', 'Reception']
    }
  ]
}

function Directory() {
  return (
    <section className="directory-section section-padding" id="directory">
      <div className="container">

        <div className="directory-heading">
          <span className="section-tag">ACCOMMODATION DIRECTORY</span>

          <h2>Explore Popular Areas & Hotels</h2>

          <p>
            Browse different cities, explore their neighbourhoods
            and discover accommodation listings.
          </p>
        </div>

        {cities.map((city) => (
          <div
            className="directory-city-group"
            id={`directory-${city.name.toLowerCase()}`}
            key={city.name}
          >

            <div className="directory-city-heading">
              <div>
                <span className="section-tag">EXPLORE DESTINATION</span>
                <h3>{city.name}</h3>
                <p>
                  Explore popular areas and accommodation
                  in {city.name}, Pakistan.
                </p>
              </div>

              <span className="directory-area-count">
                {city.areas.length} Areas
              </span>
            </div>

            <div className="directory-grid">

              {city.areas.map((area, index) => (
                <article
                  className="directory-card"
                  id={`area-${city.name.toLowerCase()}-${index}`}
                  key={area}
                >

                  <div className="directory-image">
                    <img
                      src={hotelImages[index % 2]}
                      alt={`${area}, ${city.name}`}
                      loading="lazy"
                    />

                    <span className="directory-city">
                      {city.name}
                    </span>
                  </div>

                  <div className="directory-content">

                    <div className="directory-location">
                      <MapPin size={16} />
                      <span>{city.name}, Pakistan</span>
                    </div>

                    <h3>{area}</h3>

                    <p>
                      Explore accommodation options and
                      hotel listings in {area}.
                    </p>

                    <div className="area-hotel-list">
                      <h4>Hotels in {area}</h4>

                      {createHotels(area, city.name).map((hotel) => (
                        <details
                          className="hotel-detail"
                          key={hotel.name}
                        >
                          <summary>
                            <span>{hotel.name}</span>
                            <ArrowUpRight size={17} />
                          </summary>

                          <div className="hotel-detail-content">
                            <img
                              src={hotel.image}
                              alt={hotel.name}
                              loading="lazy"
                            />

                            <p>{hotel.description}</p>

                            <h5>Facilities</h5>

                            <ul>
                              {hotel.facilities.map((facility) => (
                                <li key={facility}>{facility}</li>
                              ))}
                            </ul>
                          </div>
                        </details>
                      ))}

                    </div>

                  </div>
                </article>
              ))}

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Directory
