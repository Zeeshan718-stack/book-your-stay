
import { ArrowRight, MapPin, Sparkles } from 'lucide-react'

function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">

          <div className="cta-icon">
            <Sparkles size={27} />
          </div>

          <span className="cta-tag">YOUR NEXT STAY STARTS HERE</span>

          <h2>
            Ready to Find Your
            <span> Perfect Stay?</span>
          </h2>

          <p>
            Explore accommodation options across Pakistan
            and discover a place that feels right for your journey.
          </p>

          <div className="cta-actions">
            <a href="#directory" className="cta-primary-button">
              <MapPin size={18} />
              Explore Stays
              <ArrowRight size={18} />
            </a>

            <a href="#categories" className="cta-secondary-button">
              Browse Categories
            </a>
          </div>

          <div className="cta-bottom-text">
            Discover. Compare. Plan your stay.
          </div>

        </div>
      </div>
    </section>
  )
}

export default CTA
