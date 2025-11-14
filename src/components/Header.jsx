import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNavClick = () => setIsMenuOpen(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="bg-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          {/* Left Section */}
          <div className="flex items-center space-x-3">

            {/* Founder Image */}
            <div className="rounded-full shadow-lg overflow-hidden">
              <img
                src="./images/CEO.png"
                alt="Founder"
                className="w-12 h-12 rounded-full object-cover object-top"
              />
            </div>

            {/* Logo Icon */}
            <img
              src="./images/Logo.png"
              alt="Anand Cinemaz"
              className="w-10 h-12 object-contain"
            />

            {/* Title + Motto (ALWAYS ONE LINE) */}
            <div className="flex flex-col leading-tight">
              
              {/* Single Line Title */}
              <p className="text-[17px] font-bold flex items-center">
                <span className="text-sunrise-gold">ANAND&nbsp;</span>
                <span className="text-navy-blue">CINEMAZ</span>
              </p>

              {/* Motto */}
              <p className="text-[11px] italic mt-0.5 text-navy-blue">
                "Dharmo Rakshati Rakshitah"
              </p>

            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-transparent border-none text-navy-blue text-xl cursor-pointer p-2 hover:bg-navy-blue/10 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} w-6 h-6 flex items-center justify-center`}></i>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      font-montserrat font-medium text-navy-blue no-underline 
                      transition-colors duration-300 relative hover:text-sunrise-gold
                      ${isActive(item.path)
                        ? 'text-sunrise-gold after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-sunrise-gold'
                        : ''
                      }
                    `}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden absolute top-full left-0 w-full bg-white shadow-lg 
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
          `}
        >
          <nav className="py-3">
            <ul className="flex flex-col items-center space-y-1">
              {navItems.map((item) => (
                <li key={item.path} className="w-full text-center">
                  <Link
                    to={item.path}
                    className={`
                      font-montserrat font-medium text-navy-blue no-underline 
                      transition-colors duration-300 relative py-2 px-4
                      ${isActive(item.path)
                        ? 'text-sunrise-gold after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-sunrise-gold'
                        : 'hover:text-sunrise-gold'
                      }
                    `}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
