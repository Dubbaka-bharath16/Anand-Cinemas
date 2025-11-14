import { useEffect, useRef } from 'react'

export const useAnimation = () => {
  const observerRef = useRef(null)

  useEffect(() => {
    const checkFadeIn = () => {
      const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in')
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible')
        }
      })
    }

    // Initial check
    checkFadeIn()

    // Check on scroll
    window.addEventListener('scroll', checkFadeIn)

    // Set up Intersection Observer for better performance
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    })

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in')
    animatedElements.forEach(el => observerRef.current.observe(el))

    return () => {
      window.removeEventListener('scroll', checkFadeIn)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])
}