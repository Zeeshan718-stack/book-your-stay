
import {
  Hotel,
  Building2,
  Home,
  BedDouble,
  Building,
  Castle
} from 'lucide-react'

const categories = [
  {
    icon: Hotel,
    title: 'Luxury Hotels',
    description: 'Enjoy premium comfort and quality hospitality.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'
  },
  {
    icon: Building2,
    title: 'Guest Houses',
    description: 'Find welcoming spaces for a relaxing visit.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'
  },
  {
    icon: Home,
    title: 'Private Apartments',
    description: 'Enjoy privacy and the comfort of a home.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
  },
  {
    icon: BedDouble,
    title: 'Budget Rooms',
    description: 'Explore practical stays at affordable prices.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800'
  },
  {
    icon: Building,
    title: 'Serviced Apartments',
    description: 'Get extra convenience for longer stays.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
  },
  {
    icon: Castle,
    title: 'Resort Stays',
    description: 'Relax in peaceful surroundings away from the routine.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'
  }
]

function Categories() {
  return (
    <section className="categories-section section-padding" id="categories">
      <div className="container">

        <div className="categories-heading">
          <span className="section-tag">EXPLORE CATEGORIES</span>
          <h2>Find the Perfect Place to Stay</h2>
          <p>
            Explore different types of accommodation and choose
            the one that suits your travel needs.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => {
            const Icon = category.icon

            return (
              <article className="category-card" key={index}>
                <div className="category-image">
                  <img src={category.image} alt={category.title} />
                  <span className="category-icon">
                    <Icon size={21} />
                  </span>
                </div>

                <div className="category-content">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <a href="#directory">
                    Explore Stays <span>→</span>
                  </a>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Categories
