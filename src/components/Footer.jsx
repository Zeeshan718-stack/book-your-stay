
import { MapPin, ArrowUp, Mail, Phone, ArrowRight } from 'lucide-react'

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-main">

          <div className="footer-about">
            <a href="#home" className="footer-logo">
              BookYour<span>Stay</span>
            </a>

            <p>
              Discover comfortable accommodation and explore
              popular destinations across Pakistan with BookYourStay.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#cities">Popular Cities</a>
            <a href="#categories">Categories</a>
            <a href="#gallery">Gallery</a>
          </div>

          <div className="footer-links">
            <h3>Explore</h3>
            <a href="#directory">Accommodation Directory</a>
            <a href="#services">Our Services</a>
            <a href="#pricing">Pricing Guide</a>
            <a href="#faq">FAQs</a>
          </div>

          <div className="footer-contact">
            <h3>Contact Information</h3>

            <div>
              <MapPin size={18} />
              <span>Pakistan</span>
            </div>

            <div>
              <Mail size={18} />
              <span>Email information coming soon</span>
            </div>

            <div>
              <Phone size={18} />
              <span>Contact details coming soon</span>
            </div>

            <a href="#directory" className="footer-explore">
              Explore Stays <ArrowRight size={16} />
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} BookYourStay. All rights reserved.
          </p>
          <a href="#home">
            Back to Top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
