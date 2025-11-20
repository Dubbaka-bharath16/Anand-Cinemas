import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAnimation } from '../hooks/useAnimation';

const About = () => {
  useAnimation();
  
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.3 });

  const creativeApproach = [
    {
      icon: '🎭',
      title: 'Authentic Narratives',
      description: 'We craft stories that resonate with genuine human emotions and real-life experiences, creating connections that last beyond the screen.',
      accent: 'text-blue-600'
    },
    {
      icon: '💫',
      title: 'Creative Innovation',
      description: 'Embracing new storytelling techniques and technologies to deliver unique perspectives that captivate and inspire audiences.',
      accent: 'text-amber-600'
    },
    {
      icon: '🤝',
      title: 'Collaborative Spirit',
      description: 'Bringing together diverse creative talents to build something greater than the sum of its parts through shared vision and expertise.',
      accent: 'text-purple-600'
    }
  ];

  const leadershipTeam = [
    {
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      name: 'Anand Sharma',
      role: 'Founder & Creative Director',
      bio: 'Visionary filmmaker dedicated to creating cinema that inspires social change and emotional connection.'
    },
    {
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      name: 'Priya Patel',
      role: 'Head of Production',
      bio: 'Award-winning producer with exceptional talent for bringing creative visions to life with precision and passion.'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      name: 'Rahul Verma',
      role: 'Cinematography Director',
      bio: 'Master visual storyteller known for creating breathtaking imagery that enhances narrative depth and emotional impact.'
    }
  ];

  const studioPrinciples = [
    {
      icon: '⭐',
      title: 'Artistic Excellence',
      description: 'Every frame we create is a testament to our commitment to cinematic artistry. We believe in pushing creative boundaries while maintaining the highest standards of technical precision and emotional authenticity.',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      iconColor: 'text-amber-600'
    },
    {
      icon: '💎',
      title: 'Creative Integrity',
      description: 'We stay true to the heart of every story, maintaining artistic vision and ethical standards while creating commercially successful content that resonates with audiences worldwide.',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      icon: '🌍',
      title: 'Global Perspective',
      description: 'Our stories transcend cultural boundaries while celebrating local authenticity. We create content that speaks universal truths while honoring diverse perspectives and experiences.',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      icon: '🚀',
      title: 'Forward Thinking',
      description: 'We continuously evolve our craft, embracing emerging technologies and innovative storytelling formats to stay at the forefront of cinematic expression and audience engagement.',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600'
    }
  ];

  const creativeOpportunities = [
    {
      category: 'For Storytellers',
      opportunities: [
        'Develop your unique voice with creative mentorship',
        'Collaborate on diverse genres from drama to documentary',
        'Access to our network of writers and directors'
      ],
      icon: '✍️',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      category: 'For Visual Artists',
      opportunities: [
        'Work with state-of-the-art cinematic equipment',
        'Experiment with innovative visual storytelling techniques',
        'Collaborate with award-winning cinematographers'
      ],
      icon: '🎨',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      category: 'For Emerging Talent',
      opportunities: [
        'Hands-on learning through apprentice programs',
        'Portfolio-building projects with professional guidance',
        'Networking with industry leaders and festivals'
      ],
      icon: '🌟',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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
  };

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
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden mt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-24 -top-20 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -right-24 -bottom-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center text-white"
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 md:mb-10"
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 shadow-2xl mx-2">
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-300 mb-4 md:mb-5 font-sans leading-tight">
                  Anand Cinemaz
                </div>
                
                <div className="text-base sm:text-lg md:text-2xl text-blue-100 italic mb-4 md:mb-5">
                  "Where every frame tells a story"
                </div>
                
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-4 md:mb-5"></div>
                
                <div className="text-sm sm:text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2">
                  Creating cinematic experiences that inspire, educate, and provoke meaningful conversations
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-100"
            >
              Our <span className="text-orange-300">Creative Story</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed px-2 sm:px-4">
                For years, we've created not just films, but emotional journeys. Our creative process 
                is guided by the timeless wisdom that authentic stories have the power to transform lives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mt-8 md:mt-12"
            >
              <Link to='/films'>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                >
                  Explore Our Work
                </motion.button>
              </Link>
              <Link to='/contact'>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                >
                  Join Our Creative Family
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center w-full lg:justify-start order-2 lg:order-1"
              >
                <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                  <div className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100 bg-white transform transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02] group-hover:ring-2 group-hover:ring-orange-200">
                    <img
                      src="./images/CEO.png"
                      alt="Founder & Creative Director"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="absolute left-4 md:left-6 bottom-4 md:bottom-6 transform group-hover:scale-110 transition-transform duration-300"
                    >
                      <div className="bg-white/95 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full shadow-lg text-xs md:text-sm font-semibold text-gray-700 border border-gray-100 group-hover:border-orange-200 group-hover:shadow-xl transition-all duration-300">
                        <div className="text-xs text-gray-500 group-hover:text-orange-500 transition-colors">Founder & Creative Director</div>
                        <div className="uppercase text-xs tracking-wide group-hover:text-blue-600 transition-colors">ANAND CINEMAZ</div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-6 group"
                  >
                    <div className="bg-gradient-to-r from-blue-50/50 to-orange-50/50 rounded-xl p-4 md:p-6 border-l-4 border-orange-500 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-orange-600 mx-2 sm:mx-0">
                      <p className="text-gray-700 italic text-sm sm:text-base md:text-lg leading-relaxed text-center">
                        "We transform stories into cinematic legacies. Every film we create is backed by 
                        complete creative integrity, artistic excellence, and a vision for meaningful 
                        storytelling. Our productions aren't just entertainment; they're emotional 
                        journeys that resonate for generations to come."
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8 order-1 lg:order-2 w-full"
              >
                <div className="w-full">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 text-center lg:text-left">Anand</h2>
                  <p className="text-base sm:text-lg md:text-xl text-orange-500 font-semibold mt-1 text-center lg:text-left">Founder & Creative Director</p>

                  <div className="mt-4 md:mt-6 text-gray-700 space-y-4 w-full p-3">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      A visionary leader with an unwavering commitment to cinematic excellence, Anand founded
                      Anand Cinemaz with a simple yet powerful vision: to create meaningful films that 
                      combine artistic integrity with social impact.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      With a passion for storytelling that drives positive change, he has built
                      a legacy of films that challenge perspectives and spark important
                      conversations while maintaining the highest creative standards.
                    </p>
                    
                    <div className="bg-blue-50 rounded-lg p-4 md:p-6 mt-4 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-800 text-base sm:text-lg md:text-xl mb-2">About Anand Cinemaz</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        Under Anand's leadership, Anand Cinemaz has emerged as a trusted name in meaningful cinema, 
                        transforming stories into powerful visual experiences. With years of expertise, 
                        we specialize in creating films that offer complete creative transparency and 
                        exceptional emotional impact.
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="mt-8 w-full"
                  >
                    <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mx-auto lg:mx-0">
                      <EnhancedStatCard title="50+" subtitle="Films" delay={0} />
                      <EnhancedStatCard title="25+" subtitle="Awards" delay={0.1} />
                      <EnhancedStatCard title="15+" subtitle="Years" delay={0.2} />
                      <EnhancedStatCard title="100+" subtitle="Team" delay={0.3} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Approach */}
      <section ref={ref1} className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
                Our Creative Approach
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
                The principles that guide our storytelling and filmmaking process
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {creativeApproach.map((approach, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {approach.icon}
                  </div>
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 ${approach.accent} group-hover:${approach.accent.replace('text-', 'text-')}`}>
                    {approach.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors">
                    {approach.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Studio Principles */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
              Our Studio Principles
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
              The foundational values that shape every project and guide our creative decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {studioPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`
                  ${principle.bgColor} p-6 md:p-8 rounded-2xl border-2 ${principle.borderColor} 
                  transition-all duration-300 hover:shadow-xl
                  flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6
                `}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-lg">
                  <div className={`text-2xl md:text-4xl ${principle.iconColor}`}>
                    {principle.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-2 md:mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref2} className="py-12 md:py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div variants={itemVariants} className="text-center md:text-left">
                <motion.div
                  variants={cardVariants}
                  className="inline-flex items-center justify-center md:justify-start gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                  <span>🎯</span> Our Purpose
                </motion.div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">Studio Mission</h2>
                <p className="text-slate-300 mb-6 leading-relaxed text-base md:text-lg">
                  To create cinematic experiences that not only entertain but also inspire, educate, and provoke meaningful conversations about the human experience.
                </p>
                <div className="space-y-4">
                  {['Tell stories with emotional authenticity', 'Push creative and technical boundaries', 'Foster collaborative creative environments'].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm md:text-base">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center md:text-left">
                <motion.div
                  variants={cardVariants}
                  className="inline-flex items-center justify-center md:justify-start gap-2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                  <span>🔭</span> Future Vision
                </motion.div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">Studio Vision</h2>
                <p className="text-slate-300 mb-6 leading-relaxed text-base md:text-lg">
                  To become a globally recognized creative studio known for pioneering socially relevant cinema that bridges cultures and inspires positive change.
                </p>
                <div className="space-y-4">
                  {['Expand global creative partnerships', 'Innovate in digital storytelling formats', 'Build a legacy of impactful cinema'].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm md:text-base">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creative Collaboration */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
              Creative Collaborations
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
              Partner with us to bring extraordinary stories to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {creativeOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-amber-300 transition-all duration-300 hover:shadow-xl"
              >
                <div className={`${opportunity.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={`text-2xl ${opportunity.color}`}>{opportunity.icon}</span>
                </div>

                <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-6 group-hover:text-amber-600 transition-colors duration-300">
                  {opportunity.category}
                </h3>

                <ul className="space-y-3 md:space-y-4">
                  {opportunity.opportunities.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className={`w-2 h-2 rounded-full mt-2 ${opportunity.color} group-hover/item:scale-150 transition-transform duration-300`}></div>
                      <span className="text-gray-700 text-sm md:text-base flex-1 group-hover/item:text-gray-900 transition-colors duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/04/15/23/57/film-2233656_640.jpg")'
              }}
            ></div>

            <div className="absolute inset-0 bg-slate-900/60"></div>

            <div className="relative z-10 p-8 md:p-12 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Creative Journey</h3>
                <p className="text-slate-200 mb-8 leading-relaxed text-base md:text-lg">
                  Have a story to tell? Let's discuss how we can bring your vision to life together.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <Link to='/projects'>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                    >
                      Explore our Projects
                    </motion.button>
                  </Link>
                  <Link to='/contact'>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                    >
                      Contact Our Team
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
              Creative Leadership
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
              The visionaries behind our studio's creative direction and success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="text-center bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-orange-200 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-4 text-sm md:text-base">{member.role}</p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed group-hover:text-gray-700 transition-colors">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto px-2 sm:px-4">
              Discover how Anand Cinemaz's commitment to artistic excellence and storytelling can transform your creative vision into cinematic reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link to='/projects'>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto"
                >
                  Explore Our Films
                </motion.button>
              </Link>
              <Link to='/contact'>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

/* Enhanced Stat Card Component */
function EnhancedStatCard({ title, subtitle, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -4, 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-5 flex flex-col items-start justify-center ring-1 ring-gray-100 hover:ring-2 hover:ring-orange-200 hover:shadow-xl transition-all duration-300">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 transform group-hover:scale-110">
          {title}
        </div>
        <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-600 transition-colors duration-300">
          {subtitle}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </div>
    </motion.div>
  );
}