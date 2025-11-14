import React from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-sunrise-gold text-navy-blue w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-warm-orange hover:-translate-y-1 z-40"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </>
  )
}

export default ScrollToTop