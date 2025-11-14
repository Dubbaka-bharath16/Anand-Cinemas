import React from 'react'
import HeroSection from '../sections/HeroSection'
import SpotlightSection from '../sections/SpotlightSection'
import AboutPreview from '../sections/AboutPreview'
import GalleryPreview from '../sections/GalleryPreview'
import ContactCTA from '../sections/ContactCTA'

const Home = () => {
  return (
    <>
      <HeroSection />
      <SpotlightSection />
      <AboutPreview />
      <GalleryPreview />
      <ContactCTA />
    </>
  )
}

export default Home