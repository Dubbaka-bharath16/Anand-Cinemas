import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const Films = () => {
  const [selectedFilm, setSelectedFilm] = useState(null)

  const films = [
    {
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80",
      title: "Echoes of Silence",
      genre: "Drama",
      year: "2023",
      description: "A reclusive musician's life is turned upside down when he forms an unlikely bond with a spirited young girl, forcing him to confront the noise of the world he left behind.",
      details: "This heartfelt drama explores themes of isolation, connection, and the healing power of music. Shot across picturesque locations in rural India, the film features an original soundtrack composed by award-winning musicians.",
      director: "Anand Sharma",
      duration: "2h 15m",
      awards: "Best Film - National Film Awards 2023"
    },
    {
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Project Uprising",
      genre: "Thriller",
      year: "Coming 2024",
      description: "Some truths are too dangerous to stay buried. A journalist uncovers a conspiracy that threatens to upend society as we know it.",
      details: "A high-octane political thriller that takes viewers on a gripping journey through the corridors of power. Featuring intense performances and edge-of-the-seat storytelling.",
      director: "Priya Patel",
      duration: "2h 8m",
      awards: "In Production"
    },
    {
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1225&q=80",
      title: "Shades of Truth",
      genre: "Mystery",
      year: "2022",
      description: "In a small town where everyone has something to hide, a detective must unravel a web of lies to solve a mysterious disappearance.",
      details: "This atmospheric mystery combines classic whodunit elements with deep character studies. The film's haunting cinematography perfectly captures the town's secrets.",
      director: "Rahul Verma",
      duration: "1h 58m",
      awards: "Best Director - Filmfare Awards 2022"
    },
    {
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "The Last Light",
      genre: "Drama",
      year: "2021",
      description: "A family's struggle to preserve their cultural heritage in the face of modernization and changing values.",
      details: "An emotional family saga spanning three generations, this film beautifully captures the tension between tradition and progress through intimate character portraits.",
      director: "Anand Sharma",
      duration: "2h 22m",
      awards: "Best Screenplay - International Film Festival 2021"
    },
    {
      image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      title: "Urban Rhythms",
      genre: "Musical",
      year: "2020",
      description: "Exploring the interconnected lives of city dwellers through the universal language of music and dance.",
      details: "A vibrant musical that weaves together multiple narratives through spectacular dance sequences and original compositions. The film celebrates urban diversity and human connections.",
      director: "Priya Patel",
      duration: "2h 5m",
      awards: "Best Choreography - National Awards 2020"
    },
    {
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1084&q=80",
      title: "Silent Echoes",
      genre: "Documentary",
      year: "2019",
      description: "A poignant look at the lives of hearing-impaired artists and their extraordinary visual expressions.",
      details: "This groundbreaking documentary gives voice to the silent world of hearing-impaired artists, showcasing their incredible talent and unique perspectives on life and art.",
      director: "Rahul Verma",
      duration: "1h 45m",
      awards: "Best Documentary - Film Critics Award 2019"
    }
  ]

  // Animation variants matching About page
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.25, ease: "easeIn" } }
  }

  return (
    <>
      {/* HERO SECTION - SIMPLE SOLID COLOR */}
      <section className="relative min-h-[60vh] bg-blue-800 overflow-hidden pt-header">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center text-white py-20"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Our <span className="text-cyan-300">Cinematic</span> Journey
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            >
              From powerful dramas to captivating documentaries, each film represents our commitment 
              to storytelling excellence and artistic innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FILMS GRID SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, threshold: 0.1 }}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                Our Film Portfolio
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A collection of our journeys into the human experience. Each film is a world we've built, 
                a character we've lived with, and a message we are proud to share.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {films.map((film, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img 
                      src={film.image} 
                      alt={film.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        film.year === 'Coming 2024' 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-blue-600 text-white'
                      }`}>
                        {film.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{film.title}</h3>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{film.genre}</span>
                      <span>{film.duration}</span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{film.description}</p>
                    
                    <motion.button 
                      onClick={() => setSelectedFilm(film)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold w-full hover:bg-blue-700 transition-all duration-300"
                    >
                      View Details →
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION - SIMPLE SOLID COLOR */}
     <section className="py-16 bg-blue-800 text-white">
  <div className="container mx-auto px-4 sm:px-6 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Be Part of Our Story?
      </h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Discover how Anand Productions' commitment to cinematic excellence can bring your stories to life on the big screen.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
        {/* Collaborate Button */}
        <motion.div
          className="flex-1 sm:max-w-[220px]"     // ⬅ Makes both buttons same width
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/contact"
            className="w-full block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300"
          >
            Collaborate With Us
          </Link>
        </motion.div>

        {/* Learn More Button */}
        <motion.div
          className="flex-1 sm:max-w-[220px]"     // ⬅ Same width for both
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/about"
            className="w-full block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>

      </div>
    </motion.div>
  </div>
</section>


      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedFilm && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative">
                <img 
                  src={selectedFilm.image} 
                  alt={selectedFilm.title}
                  className="w-full h-64 object-cover"
                />
                <motion.button 
                  onClick={() => setSelectedFilm(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                >
                  ×
                </motion.button>
              </div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedFilm.title}
                </motion.h3>
                
                <motion.div 
                  className="grid grid-cols-2 gap-4 mb-6 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div>
                    <span className="font-semibold text-blue-800">Genre:</span> {selectedFilm.genre}
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800">Year:</span> {selectedFilm.year}
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800">Director:</span> {selectedFilm.director}
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800">Duration:</span> {selectedFilm.duration}
                  </div>
                </motion.div>

                <motion.div 
                  className="mb-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="font-semibold text-yellow-800">Awards:</span> {selectedFilm.awards}
                </motion.div>
                
                <motion.p 
                  className="text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {selectedFilm.details}
                </motion.p>

                <motion.button 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold w-full hover:bg-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Watch Trailer
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Films