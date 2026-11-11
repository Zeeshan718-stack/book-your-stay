
import React, { useState } from 'react'
import { Menu, X, MapPin, ChevronDown } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

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
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">

        <Link to="/" className="header-logo" onClick={closeMenu}>
          BookYourStay<span>.</span>
        </Link>

        <nav className={`header-nav ${menuOpen ? 'menu-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
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
            <MapPin size={17} />
            Explore Stays
          </Link>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  )
}

export default Header
