import React, { useState } from 'react'

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative light-navy text-white py-24 md:py-28 lg:py-36">
        <div className="absolute inset-0 bg-slate-900/80"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8">
              Let's <span className="text-amber-400">Create</span> Together
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              Your vision, our expertise. Let's bring your cinematic dreams to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Start Your Journey Card */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8">
              <div className="text-center lg:text-left mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4">Start Your Journey</h2>
                <p className="text-slate-600 text-base md:text-lg">
                  Ready to bring your story to the screen? Share your vision with us.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-3 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 text-base"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-3 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 text-base"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-3 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 text-base"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 py-3 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 text-base"
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
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Vision *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-3 md:px-4 md:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 resize-none text-base"
                    placeholder="Tell us about your project, your vision, and what you hope to achieve..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-400 text-white font-semibold py-3 md:py-4 px-6 rounded-lg transition-colors duration-300 text-base md:text-lg flex items-center justify-center"
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
                </button>
              </form>

              {showSuccess && (
                <div className="mt-4 md:mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
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
                </div>
              )}
            </div>

            {/* Get In Touch Card - Mobile Optimized */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8">
              <div className="text-center lg:text-left mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4">Get In Touch</h2>
                <p className="text-slate-600 text-base md:text-lg">
                  Multiple ways to connect with our creative team.
                </p>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-slate-50 rounded-lg md:rounded-xl border border-slate-200 hover:border-amber-300 transition-colors duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-lg md:rounded-xl flex items-center justify-center">
                        <i className={`fas fa-${item.icon} text-amber-600 text-base md:text-lg`}></i>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-800 text-base md:text-lg">{item.title}</h3>
                      <a 
                        href={item.link} 
                        className="text-slate-600 mt-1 hover:text-amber-600 transition-colors duration-300 text-sm md:text-base break-words block"
                      >
                        {item.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Full Width Map Section with Decreased Height */}
          <div className="mt-12 md:mt-16">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-4 md:p-6 text-center border-b border-slate-200">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">Visit Our Studio</h3>
                <p className="text-slate-600 text-sm md:text-base">Film City Complex, Studio 7B, Mumbai, India 400053</p>
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
              Get answers to common questions about working with us
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg md:rounded-xl overflow-hidden hover:border-amber-300 transition-colors duration-300">
                  <button
                    className="w-full text-left p-4 md:p-6 flex justify-between items-center hover:bg-slate-50 transition-colors duration-200"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="font-semibold text-slate-800 text-base md:text-lg pr-4">{faq.question}</h3>
                    <svg 
                      className={`w-5 h-5 text-slate-600 transform transition-transform duration-200 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact