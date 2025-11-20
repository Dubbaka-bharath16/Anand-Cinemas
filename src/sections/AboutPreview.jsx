import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const AboutPreview = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 })

  const films = [
    {
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80",
      title: "Echoes of Silence",
      genre: "Drama",
      year: "2023",
      description: "A reclusive musician's life is turned upside down when he forms an unlikely bond with a spirited young girl."
    },
    {
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Project Uprising",
      genre: "Thriller",
      year: "Coming 2024",
      description: "Some truths are too dangerous to stay buried. A journalist uncovers a conspiracy that threatens society."
    },
    {
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1225&q=80",
      title: "Shades of Truth",
      genre: "Mystery",
      year: "2022",
      description: "In a small town where everyone has something to hide, a detective must unravel a web of lies."
    }
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

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
              Featured Films
            </h2>
            <div className="w-20 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto px-2 sm:px-4">
              Discover our latest cinematic creations that showcase our commitment to storytelling excellence
            </p>
          </motion.div>

          {/* Films Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {films.map((film, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-orange-200 transition-all duration-300">
                  {/* Film Image */}
                  <div className="h-64 overflow-hidden">
                    <motion.img 
                      src={film.image} 
                      alt={film.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="text-white text-center"
                      >
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold">View Details</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Film Content */}
                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {film.title}
                    </motion.h3>
                    
                    <motion.div 
                      className="flex justify-between items-center text-sm mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {film.genre}
                      </span>
                      <span className="text-gray-600 font-medium">{film.year}</span>
                    </motion.div>
                    
                    <motion.p 
                      className="text-gray-700 leading-relaxed text-sm md:text-base"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      {film.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12 md:mt-16"
          >
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg"
              >
                View All Projects
              </motion.button>
            </Link>
            
            {/* Additional Text */}
            {/* <motion.p 
              variants={itemVariants}
              className="text-gray-600 mt-6 text-sm md:text-base"
            >
              Explore our complete portfolio of cinematic masterpieces
            </motion.p> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPreview