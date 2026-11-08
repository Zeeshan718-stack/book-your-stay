
import React from 'react'
import { ArrowRight, Building2 } from 'lucide-react'

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-content">
        <Building2 size={42} />

        <h2>Ready to Find Your Next Stay?</h2>

        <p>
          Explore accommodation options in Lahore, Islamabad
          and Karachi and plan your next journey.
        </p>

        <a href="#cities">
          Explore Accommodation <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}

export default FinalCTA
