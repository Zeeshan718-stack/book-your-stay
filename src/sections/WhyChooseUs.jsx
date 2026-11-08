
import {
  ShieldCheck,
  MapPin,
  BadgeCheck,
  Headphones,
  Wallet,
  Star
} from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Trusted Stays',
    description:
      'Find comfortable and reliable accommodation options for a worry-free stay.'
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    description:
      'Explore stays in convenient locations across popular cities in Pakistan.'
  },
  {
    icon: BadgeCheck,
    title: 'Verified Listings',
    description:
      'Browse carefully presented accommodation listings with useful details.'
  },
  {
    icon: Headphones,
    title: 'Helpful Support',
    description:
      'Get assistance whenever you need help finding the right place to stay.'
  },
  {
    icon: Wallet,
    title: 'Options for Every Budget',
    description:
      'Discover accommodation choices that suit different budgets and needs.'
  },
  {
    icon: Star,
    title: 'Easy Experience',
    description:
      'Explore available options through a simple and convenient browsing experience.'
  }
]

function WhyChooseUs() {
  return (
    <section className="why-section section-padding">
      <div className="container">

        <div className="why-heading">
          <span className="section-tag">WHY CHOOSE US</span>
          <h2>Why Book Your Stay With Us?</h2>
          <p>
            We make it easier to discover comfortable places to stay
            with a simple and convenient experience.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div className="why-card" key={index}>
                <div className="why-icon">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
