
import React, { useState } from 'react'
import { Menu, X, MapPin } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Cities', href: '/cities' },
  { label: 'Accommodation', href: '/accommodation' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' }
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">

        <Link
          to="/"
          className="header-logo"
          onClick={closeMenu}
        >
          BookYourStay<span>.</span>
        </Link>

        <nav className={`header-nav ${menuOpen ? 'menu-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/accommodation"
            className="header-book-btn"
            onClick={closeMenu}
          >
            <MapPin size={16} />
            Explore Stays
          </Link>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  )
}

export default Header
