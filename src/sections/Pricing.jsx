
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Budget Stay',
    subtitle: 'Simple and comfortable accommodation',
    price: 'Rs. 3,000',
    period: '/ night',
    features: [
      'Comfortable room',
      'Basic room facilities',
      'Convenient location',
      'Guest assistance'
    ],
    popular: false
  },
  {
    name: 'Standard Stay',
    subtitle: 'Extra comfort for your trip',
    price: 'Rs. 6,000',
    period: '/ night',
    features: [
      'Spacious room',
      'Wi-Fi facility',
      'Air conditioning',
      'Parking options',
      'Guest support'
    ],
    popular: true
  },
  {
    name: 'Premium Stay',
    subtitle: 'A more luxurious experience',
    price: 'Rs. 12,000',
    period: '/ night',
    features: [
      'Premium accommodation',
      'Enhanced room facilities',
      'Comfortable interiors',
      'Dining options',
      'Additional guest services'
    ],
    popular: false
  }
]

function Pricing() {
  return (
    <section className="pricing-section section-padding" id="pricing">
      <div className="container">

        <div className="pricing-heading">
          <span className="section-tag">PRICING GUIDE</span>
          <h2>Accommodation for Every Budget</h2>
          <p>
            Explore sample accommodation categories and compare
            options based on your comfort and budget.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <article
              className={`pricing-card ${plan.popular ? 'popular-plan' : ''}`}
              key={index}
            >
              {plan.popular && (
                <span className="popular-label">POPULAR CHOICE</span>
              )}

              <h3>{plan.name}</h3>
              <p className="pricing-subtitle">{plan.subtitle}</p>

              <div className="pricing-amount">
                <strong>{plan.price}</strong>
                <span>{plan.period}</span>
              </div>

              <div className="pricing-divider"></div>

              <ul>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <Check size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#directory" className="pricing-button">
                Explore Stays <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          * All prices shown are illustrative project examples, not verified
          accommodation rates. Actual prices may vary by property and date.
        </p>

      </div>
    </section>
  )
}

export default Pricing
