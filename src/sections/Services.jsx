
import {
  Wifi,
  Car,
  Coffee,
  ShieldCheck,
  Wind,
  Headphones
} from 'lucide-react'

const services = [
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'Stay connected with internet access during your visit.'
  },
  {
    icon: Car,
    title: 'Parking Facilities',
    description: 'Explore accommodation options that offer convenient parking.'
  },
  {
    icon: Coffee,
    title: 'Dining Options',
    description: 'Discover places with convenient food and dining facilities.'
  },
  {
    icon: ShieldCheck,
    title: 'Guest Safety',
    description: 'Look for accommodation with guest-focused safety facilities.'
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    description: 'Find comfortable rooms with climate-control facilities.'
  },
  {
    icon: Headphones,
    title: 'Guest Assistance',
    description: 'Choose places that provide helpful support during your stay.'
  }
]

function Services() {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">

        <div className="services-heading">
          <span className="section-tag">OUR FACILITIES</span>
          <h2>Services That Make Your Stay Better</h2>
          <p>
            Explore useful accommodation facilities and find
            the comfort and convenience you need.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <article className="service-card" key={index}>
                <div className="service-icon">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Services
