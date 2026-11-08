
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react'

function HotelIntro() {
  return (
    <section className="hotel-intro-section section-padding">
      <div className="container">
        <div className="hotel-intro-grid">

          <div className="hotel-intro-image">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200"
              alt="Comfortable modern hotel"
            />

            <div className="hotel-image-label">
              <span className="hotel-label-icon">
                <MapPin size={18} />
              </span>
              <div>
                <strong>Discover Great Stays</strong>
                <span>Across Pakistan</span>
              </div>
            </div>
          </div>

          <div className="hotel-intro-content">
            <span className="section-tag">YOUR STAY, YOUR WAY</span>

            <h2>
              Discover Comfortable Places
              <span> That Feel Like Home</span>
            </h2>

            <p className="hotel-intro-description">
              Finding the right accommodation should be simple.
              BookYourStay helps you explore different places to stay,
              from modern hotels to welcoming guest houses and
              private apartments across Pakistan.
            </p>

            <div className="hotel-intro-points">
              <div>
                <CheckCircle2 size={20} />
                <span>Explore different accommodation types</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Discover popular locations and areas</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Compare options for your travel needs</span>
              </div>
            </div>

            <a href="#directory" className="hotel-intro-button">
              Explore Accommodation
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HotelIntro
