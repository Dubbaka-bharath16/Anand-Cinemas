import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const GalleryPreview = () => {
  const processRef = useRef(null)
  const excellenceRef = useRef(null)
  const teamRef = useRef(null)
  const impactRef = useRef(null)

  const isProcessInView = useInView(processRef, { once: true, threshold: 0.3 })
  const isExcellenceInView = useInView(excellenceRef, { once: true, threshold: 0.3 })
  const isTeamInView = useInView(teamRef, { once: true, threshold: 0.3 })
  const isImpactInView = useInView(impactRef, { once: true, threshold: 0.3 })

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
    <>
      {/* Process Section */}
      <section ref={processRef} className="section-light py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isProcessInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold text-blue-800 text-center mb-12 relative"
            >
              Our Film making Process
            </motion.h2>
            
            <div className="process-steps flex flex-col lg:flex-row justify-between relative mt-12">
              <div className="absolute top-10 left-0 right-0 h-0.5 bg-gray-300 z-10 hidden lg:block"></div>
              
              {[
                { icon: "fa-lightbulb", title: "Concept & Ideation", description: "We begin with a compelling idea, focusing on stories with strong characters, emotional depth, and resonant core messages that can inspire change." },
                { icon: "fa-pencil-alt", title: "Screenwriting & Development", description: "Our writers craft detailed scripts through a rigorous development process, ensuring the screenplay is a solid foundation for cinematic excellence." },
                { icon: "fa-film", title: "Production & Filming", description: "We assemble visionary directors and talented crews to capture the soul of the script, guided by our commitment to authenticity and performance." },
                { icon: "fa-edit", title: "Post-Production", description: "The film is truly born in the edit. Through editing, sound design, music, and color grading, we weave raw footage into a powerful emotional journey." }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="process-step text-center relative z-20 flex-1 px-4 mb-12 lg:mb-0 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="step-icon w-20 h-20 bg-sunrise-gold rounded-full flex items-center justify-center mx-auto mb-5 text-2xl text-navy-blue transition-all duration-300 group-hover:bg-warm-orange"
                  >
                    <i className={`fas ${step.icon}`}></i>
                  </motion.div>
                  
                  <motion.h3 
                    className="step-title font-semibold mb-3 text-navy-blue font-montserrat group-hover:text-blue-600 transition-colors duration-300"
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="step-description text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Excellence Section with Background Image */}
      <section ref={excellenceRef} className="relative py-24 bg-fixed bg-cover bg-center" 
               style={{backgroundImage: 'url("https://images.unsplash.com/photo-1489599809505-7c8e1c75ce13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'}}>
        <div className="absolute inset-0 bg-navy-blue/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isExcellenceInView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
            >
              Cinematic Excellence
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-200 mb-12 text-center leading-relaxed max-w-4xl mx-auto"
            >
              We blend artistic vision with technical mastery to create films that captivate audiences 
              and stand the test of time.
            </motion.p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Visual Storytelling",
                  description: "Every frame is meticulously crafted to convey emotion and advance the narrative through powerful visual language.",
                  icon: "fa-palette"
                },
                {
                  title: "Sound Design",
                  description: "Immersive audio experiences that transport viewers into the world of our stories with precision and artistry.",
                  icon: "fa-volume-up"
                },
                {
                  title: "Emotional Depth",
                  description: "Characters and stories that resonate on a human level, creating lasting emotional connections with audiences.",
                  icon: "fa-heart"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center group hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-sunrise-gold rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <i className={`fas ${item.icon} text-2xl text-navy-blue`}></i>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 font-montserrat group-hover:text-blue-100 transition-colors duration-300"
                  >
                    {item.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creative Team Section */}
      <section ref={teamRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold text-center text-blue-800 mb-16 relative"
            >
              Our Creative Team
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Visionary Directors",
                  description: "Talented filmmakers who bring unique perspectives and artistic vision to every project, crafting cinematic masterpieces that resonate with audiences worldwide.",
                  icon: "fa-video"
                },
                {
                  name: "Story Architects",
                  description: "Creative writers who craft compelling narratives with depth, emotion, and social relevance, building worlds that captivate and inspire meaningful conversations.",
                  icon: "fa-pen-fancy"
                },
                {
                  name: "Technical Artists",
                  description: "Skilled cinematographers, editors, and sound designers who transform creative vision into stunning reality through cutting-edge technology and artistic expertise.",
                  icon: "fa-cogs"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                    {/* Subtle border accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-blue to-warm-orange"></div>
                    
                    {/* Icon container with enhanced styling */}
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-20 h-20 bg-gradient-to-br from-sunrise-gold to-warm-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      >
                        <i className={`fas ${member.icon} text-2xl text-white`}></i>
                      </motion.div>
                      {/* Subtle background pattern */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-sunrise-gold/10 rounded-full"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-warm-orange/10 rounded-full"></div>
                    </div>

                    {/* Content */}
                    <motion.h3 
                      className="text-2xl font-bold text-navy-blue mb-4 text-center font-montserrat group-hover:text-sunrise-gold transition-colors duration-300"
                    >
                      {member.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 text-center leading-relaxed font-opensans group-hover:text-gray-700 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {member.description}
                    </motion.p>

                    {/* Hover effect border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-sunrise-gold/20 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section with New Background */}
      <section ref={impactRef} className="relative py-24 bg-fixed bg-cover bg-center" 
               style={{backgroundImage: 'url("https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80")'}}>
        <div className="absolute inset-0 bg-navy-blue/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isImpactInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-12 relative text-white"
            >
              Our Impact
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="impact-content max-w-4xl mx-auto mb-16 text-center"
            >
              <p className="text-xl text-gray-200">
                Through our films, we aim to create meaningful conversations and inspire positive change in society. 
                Our stories tackle important social issues while entertaining and engaging audiences worldwide.
              </p>
            </motion.div>
            
            <div className="impact-cards grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: "fa-comments", 
                  title: "Social Dialogue", 
                  description: "Our films spark important conversations about societal issues, encouraging viewers to think critically and engage with complex topics.",
                  stats: "50+ Community Screenings"
                },
                { 
                  icon: "fa-heart", 
                  title: "Emotional Connection", 
                  description: "We create powerful emotional experiences that resonate with audiences long after they leave the theater.",
                  stats: "1M+ Views"
                },
                { 
                  icon: "fa-globe", 
                  title: "Cultural Exchange", 
                  description: "Our stories transcend borders, promoting understanding and appreciation of diverse cultures and perspectives.",
                  stats: "12 Countries"
                }
              ].map((impact, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="impact-card bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transition-all duration-300 hover:shadow-2xl group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="impact-icon text-4xl text-sunrise-gold mb-5"
                  >
                    <i className={`fas ${impact.icon}`}></i>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold mb-4 font-montserrat text-white group-hover:text-blue-100 transition-colors duration-300"
                  >
                    {impact.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-200 mb-4 group-hover:text-gray-100 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {impact.description}
                  </motion.p>
                  
                  <motion.div 
                    className="text-sunrise-gold font-bold text-lg group-hover:text-orange-300 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {impact.stats}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default GalleryPreview