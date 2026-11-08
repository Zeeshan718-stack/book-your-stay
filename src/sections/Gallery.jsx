
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

const photos = [
  {
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200',
    title: 'Luxury Hotel'
  },
  {
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200',
    title: 'Comfortable Bedroom'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
    title: 'Modern Interior'
  },
  {
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
    title: 'Private Apartment'
  },
  {
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200',
    title: 'Resort Experience'
  },
  {
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200',
    title: 'Beautiful Property'
  }
]

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">

        <div className="gallery-heading">
          <span className="section-tag">PHOTO GALLERY</span>
          <h2>Explore Beautiful Places to Stay</h2>
          <p>
            Take a look at different accommodation styles
            and get inspired for your next journey.
          </p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <button
              className={`gallery-item gallery-item-${index + 1}`}
              key={index}
              onClick={() => setSelectedPhoto(photo)}
              aria-label={`View ${photo.title}`}
            >
              <img src={photo.image} alt={photo.title} />

              <span className="gallery-image-overlay">
                <span>{photo.title}</span>
                <ZoomIn size={22} />
              </span>
            </button>
          ))}
        </div>

      </div>

      {selectedPhoto && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedPhoto(null)}
          role="presentation"
        >
          <button
            className="gallery-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close image preview"
          >
            <X size={26} />
          </button>

          <div
            className="gallery-preview"
            onClick={(event) => event.stopPropagation()}
            role="presentation"
          >
            <img src={selectedPhoto.image} alt={selectedPhoto.title} />
            <p>{selectedPhoto.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
