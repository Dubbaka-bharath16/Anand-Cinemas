import React from 'react'

const SpotlightSection = () => {
  const [animated, setAnimated] = React.useState(false)

  React.useEffect(() => {
    const animateStats = () => {
      const statCards = document.querySelectorAll('.stat-card')
      statCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (cardTop < windowHeight - 100) {
          card.classList.add('animated')
          setAnimated(true)
        }
      })
    }

    window.addEventListener('load', animateStats)
    window.addEventListener('scroll', animateStats)
    
    return () => {
      window.removeEventListener('load', animateStats)
      window.removeEventListener('scroll', animateStats)
    }
  }, [])

  React.useEffect(() => {
    if (animated) {
      const statNumbers = document.querySelectorAll('.stat-number')
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'))
        let count = 0
        const increment = target / 100
        
        const updateCount = () => {
          if (count < target) {
            count += increment
            stat.textContent = Math.ceil(count)
            setTimeout(updateCount, 20)
          } else {
            stat.textContent = target
          }
        }
        
        updateCount()
      })
    }
  }, [animated])

  return (
    <>
      {/* Mission Section */}
      <section className="mission-section py-24 text-center">
        <div className="container mx-auto px-4">
          <div className="mission-content max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 relative ">Our Mission</h2>
            <p className="text-xl leading-relaxed font-opensans">
              Anand Cinemaz focuses on producing meaningful, impactful, and high-quality cinematic content. We aim to blend creativity with purpose—crafting films that entertain, inspire, and carry strong social messages. With a commitment to artistic integrity and modern storytelling, our production house aspires to create cinema that leaves a lasting impression on audiences across all backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - After Mission */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4">
          <div className="stats grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: 15, text: "Films Produced" },
              { number: 28, text: "Awards Won" },
              { number: 50, text: "Film Festivals" },
              { number: 12, text: "Countries Reached" }
            ].map((stat, index) => (
              <div key={index} className="stat-card p-8">
                <div className="stat-number text-5xl font-bold text-sunrise-gold mb-3 font-montserrat" data-target={stat.number}>
                  0
                </div>
                <div className="stat-text text-lg text-navy-blue font-semibold font-montserrat">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SpotlightSection