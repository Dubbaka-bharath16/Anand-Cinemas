import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const heroRef = useRef(null)
  const formRef = useRef(null)
  const faqRef = useRef(null)
  
  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 })
  const isFormInView = useInView(formRef, { once: true, threshold: 0.3 })
  const isFaqInView = useInView(faqRef, { once: true, threshold: 0.3 })

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setShowSuccess(true)
    setIsSubmitting(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    })
    
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }

  const contactInfo = [
    {
      icon: 'map-marker-alt',
      title: 'Studio Address',
      content: 'Film City Complex, Studio 7B, Mumbai, India 400053',
      link: '#'
    },
    {
      icon: 'phone',
      title: 'Phone',
      content: '+91 22 6128 4000',
      link: 'tel:+912261284000'
    },
    {
      icon: 'envelope',
      title: 'Email',
      content: 'projects@anandcinemaz.com',
      link: 'mailto:projects@anandcinemaz.com'
    },
    {
      icon: 'clock',
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM IST',
      link: '#'
    }
  ]

  const faqs = [
    {
      question: 'What types of projects do you produce?',
      answer: 'We produce feature films, documentaries, and web series that combine meaningful storytelling with commercial appeal. Our focus is on projects with strong narratives and social relevance.'
    },
    {
      question: 'How can I submit a script?',
      answer: 'You can submit your project through our contact form. Please include a brief synopsis and your contact information. Our team reviews all submissions within 2-3 weeks.'
    },
    {
      question: 'Do you work with new filmmakers?',
      answer: 'Yes, we welcome collaborations with both established and emerging filmmakers. We value fresh perspectives and compelling stories above all else.'
    },
    {
      question: 'What is your production timeline?',
      answer: 'Timelines vary by project scope. Feature films typically take 12-18 months from development to completion, while shorter projects may take 3-6 months.'
    }
  ]

  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-blue-800 overflow-x-hidden mt-24">
      {/* Hero Section - Light Blue without Gradient */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="relative py-16 md:py-20 bg-blue-800 overflow-hidden"
      >
        {/* Background Elements - Removed gradient elements */}
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white"
            >
              Let's <span className="text-orange-500">Create</span> Together
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-8 max-w-3xl mx-auto px-2 sm:px-4"
            >
              Your vision, our expertise. Let's bring your cinematic dreams to life.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form & Info Section */}
      <section ref={formRef} className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch"
          >
            {/* Start Your Journey Card (left) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 h-full flex flex-col"
            >
              <motion.div variants={itemVariants} className="text-center lg:text-left mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4">Start Your Journey</h2>
                <p className="text-gray-600 text-base md:text-lg">
                  Ready to bring your story to the screen? Share your vision with us.
                </p>
              </motion.div>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 flex-1">
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-3 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-base"
                      placeholder="Your name"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-3 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-base"
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-3 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-base"
                      placeholder="+91 98765 43210"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 py-3 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-base"
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="feature-film">Feature Film</option>
                      <option value="documentary">Documentary</option>
                      <option value="web-series">Web Series</option>
                      <option value="short-film">Short Film</option>
                      <option value="co-production">Co-Production</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Vision *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-3 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none text-base"
                    placeholder="Tell us about your project, your vision, and what you hope to achieve..."
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-blue-400 disabled:to-blue-500 text-white font-semibold py-3 md:py-4 px-6 rounded-lg transition-all duration-300 text-base md:text-lg flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Your Project'
                  )}
                </motion.button>
              </form>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 md:mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Thank you for your message! We'll review your project and get back to you within 48 hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Get In Touch Card (right) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex-1">
                <motion.div variants={itemVariants} className="text-center lg:text-left mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4">Get In Touch</h2>
                  <p className="text-gray-600 text-base md:text-lg">
                    Multiple ways to connect with our creative team.
                  </p>
                </motion.div>
                
                <div className="space-y-4 md:space-y-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 group"
                    >
                      <motion.div whileHover={{ scale: 1.1 }} className="flex-shrink-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 text-white">
                          {item.icon === 'map-marker-alt' && (
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/></svg>
                          )}
                          {item.icon === 'phone' && (
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.06-.27 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.27 1.06l-2.18 2.17z"/></svg>
                          )}
                          {item.icon === 'envelope' && (
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                          )}
                          {item.icon === 'clock' && (
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a11 11 0 1011 11A11 11 0 0012 1zm1 12.59V7a1 1 0 10-2 0v6a1 1 0 00.46.84l4 2.5a1 1 0 10.97-1.72z"/></svg>
                          )}
                        </div>
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-blue-800 text-base md:text-lg group-hover:text-blue-900 transition-colors duration-300">{item.title}</h3>
                        <a 
                          href={item.link} 
                          className="text-gray-600 mt-1 hover:text-blue-600 transition-colors duration-300 text-sm md:text-base break-words block"
                        >
                          {item.content}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Follow Us Section - Without Box Layout */}
                <motion.div 
                  variants={itemVariants}
                  className="text-center"
                >
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">Follow Us On</h4>
                  <div className="flex items-center justify-center gap-4">
                    {/* Facebook */}
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" 
                       className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" 
                       className="w-12 h-12 rounded-lg bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 flex items-center justify-center hover:opacity-90 transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                    {/* Twitter / X */}
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" 
                       className="w-12 h-12 rounded-lg bg-black flex items-center justify-center hover:bg-gray-800 transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" 
                       className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center hover:bg-red-700 transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" 
                       className="w-12 h-12 rounded-lg bg-blue-800 flex items-center justify-center hover:bg-blue-900 transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            className="mt-12 md:mt-16"
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              <div className="p-4 md:p-6 text-center border-b border-gray-200">
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">Visit Our Studio</h3>
                <p className="text-gray-600 text-sm md:text-base">Film City Complex, Studio 7B, Mumbai, India 400053</p>
              </div>
              <div className="w-full">
                <iframe
                  title="Studio Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715872369528!2d72.87227731538557!3d19.065796387109767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f73aaaaaab%3A0x5c0c2a5b1c0b5c0b!2sFilm%20City%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1633084800000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFaqInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto px-2 sm:px-4">
                Get answers to common questions about working with us
              </p>
            </motion.div>
            
            <div className="space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -2 }}
                  className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 bg-white"
                >
                  <motion.button
                    whileHover={{ backgroundColor: "#dbeafe" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left p-4 md:p-6 flex justify-between items-center transition-colors duration-200"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="font-semibold text-blue-800 text-base md:text-lg pr-4 hover:text-blue-900 transition-colors duration-300">{faq.question}</h3>
                    <motion.svg 
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      className="w-5 h-5 text-blue-600 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 md:px-6 pb-4 md:pb-6"
                    >
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact