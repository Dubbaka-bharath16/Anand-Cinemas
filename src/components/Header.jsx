import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
 
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
 
  const isActive = (path) => location.pathname === path
 
  return (
    <header className="bg-white text-navy-blue fixed w-full top-0 z-50 shadow-lg">  
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center sm:mr-0">
            {/* Founder Logo - Rounded for both desktop and mobile */}
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-full shadow-lg overflow-hidden mr-3">
              <img
                src="./images/CEO.png"
                alt="Anand Infra CEO"
                className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110"
              />
            </div>
           
            {/* Company Logo */}
            <div className="h-10 w-8 md:h-13 md:w-10 overflow-hidden mr-3">
              <img
                src="./images/Logo.png"
                alt="Anand Infra Logo"
                className="h-full w-full object-contain"
              />
            </div>
           
            <Link to="/" className=" hover:opacity-90 transition-opacity duration-300">
             
              <div>
                <h2 className="lg:text-xl sm:text-md font-bold"><span className='text-amber-500'>ANAND</span> CINEMAZ</h2>
                <p className="text-gray-500 text-[10px] italic -mt-0.5">"Dharmo Rakshati Rakshitah"</p>
              </div>
            </Link>
          </div>
         
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-3">
            <Link
              to="/"
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/')
                  ? 'text-navy-blue-300 bg-amber-500 bg-opacity-10'
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/about')
                  ? 'text-navy-blue-300 bg-amber-500 bg-opacity-10'
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/projects')
                  ? 'text-navy-blue-300 bg-amber-500 bg-opacity-10'
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/gallery"
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/gallery')
                  ? 'text-navy-blue-300 bg-amber-500 bg-opacity-10'
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/contact')
                  ? 'text-navy-blue-300 bg-amber-500 bg-opacity-10'
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
            >
              Contact
            </Link>
          </nav>
         
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy-blue p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
 
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 opacity-100 pt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-3 pb-2">
            <Link
              to="/"
              className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/')
                  ? 'text-navy-blue-300 bg-amber-500 bg-opacity-10'
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/about')
                  ? 'text-navy-blue-300 bg-amber-500 bg-opacity-10'
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/projects')
                  ? 'text-navy-blue-300 bg-amber-500 bg-opacity-10'
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/contact')
                  ? 'text-navy-blue-300 bg-amber-500 bg-opacity-10'
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
 
export default Header