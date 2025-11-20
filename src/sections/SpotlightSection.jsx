import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SpotlightSection = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 })
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 })

  const stats = [
    { number: 15, text: "Films Produced" },
    { number: 28, text: "Awards Won" },
    { number: 50, text: "Film Festivals" },
    { number: 12, text: "Countries Reached" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const Counter = ({ target, delay = 0 }) => {
    const [count, setCount] = React.useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, threshold: 0.5 })

    React.useEffect(() => {
      if (isInView) {
        let start = 0
        const increment = target / 50
        const timer = setInterval(() => {
          start += increment
          if (start >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.ceil(start))
          }
        }, 40)
        
        return () => clearInterval(timer)
      }
    }, [isInView, target])

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-orange-500 mb-3"
      >
        {count}+
      </motion.div>
    )
  }

  return (
    <>
      {/* Mission Section */}
      <section ref={ref1} className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
                Our Mission
              </h2>
              <div className="w-20 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 px-2 sm:px-4">
                Anand Cinemaz focuses on producing meaningful, impactful, and high-quality cinematic content. We aim to blend creativity with purpose—crafting films that entertain, inspire, and carry strong social messages.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2 sm:px-4">
                With a commitment to artistic integrity and modern storytelling, our production house aspires to create cinema that leaves a lasting impression on audiences across all backgrounds.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={ref2} className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
              Our Impact
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
              Numbers that reflect our commitment to cinematic excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300">
                  <Counter target={stat.number} delay={index * 0.1} />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    {stat.text}
                  </motion.div>
                  
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Impact Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed italic">
                "Every number represents a story told, a life touched, and a step forward in our journey to create cinema that matters."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default SpotlightSection