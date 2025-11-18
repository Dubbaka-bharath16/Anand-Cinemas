import React from 'react'
import { useAnimation } from '../hooks/useAnimation'
import { Link } from 'react-router-dom'

const About = () => {
  useAnimation()

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
  ]

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
  ]

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
  ]

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
  ]

  return (
    <div className="bg-white">
      {/* Studio Introduction - Increased Height */}
      <section
        className="studio-intro relative bg-slate-900 text-white py-28 md:py-36"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>

        {/* Stronger Dark Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">

            {/* Heading (Smaller) */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Experience the Magic of <span className="text-amber-400">Anand Cinemaz</span>
            </h1>

            {/* Single-line quote, smaller text */}
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Where every frame tells a story.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
              <Link to='/films'>
                <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors text-base">
                  Explore Our Work
                </button></Link>
              <Link to='/contact' >
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors text-base">
                  Join Our Creative Family
                </button></Link>
            </div>

          </div>
        </div>
      </section>


      {/* Studio Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-5 items-center">

            {/* IMAGE SIDE */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-right">
              <img
                src="./images/CEO.png"   // <-- your image
                alt="Founder"
                className="w-auto max-w-md h-[480px] object-cover object-top rounded-xl shadow-lg"
              />
            </div>

            {/* TEXT CONTENT */}
            <div className="lg:w-1/2 w-full">
              <div className="text-center lg:text-left">
                <h3 className="text-4xl font-bold text-slate-800 mb-2">Anand</h3>
                <p className="text-amber-600 text-xl font-semibold mb-8">
                  Founder & Chairman
                </p>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                A visionary leader dedicated to cinematic excellence, Anand established
                Anand Cinemaz to create meaningful films that combine artistic integrity
                with social impact.
              </p>

              <p className="text-slate-600 mb-6 leading-relaxed">
                With a passion for storytelling that drives positive change, he has built
                a legacy of films that challenge perspectives and spark important
                conversations.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Under his leadership, Anand Cinemaz continues to set new benchmarks in
                purposeful filmmaking, carrying strong messages that resonate with global
                audiences while maintaining the highest creative standards.
              </p>
            </div>

          </div>
        </div>
      </section>




      {/* Creative Approach */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Creative Approach</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide our storytelling and filmmaking process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creativeApproach.map((approach, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-slate-200    
                   shadow-sm  transition-all duration-300 
                    hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03]">
                <div className="text-4xl mb-4">{approach.icon}</div>
                <h3 className={`text-xl font-bold mb-4 ${approach.accent}`}>{approach.title}</h3>
                <p className="text-slate-600 leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Studio Principles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Our Studio Principles</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
              The foundational values that shape every project and guide our creative decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {studioPrinciples.map((principle, index) => (
              <div
                key={index}
                className={`
            ${principle.bgColor} 
            p-6 md:p-8 rounded-2xl border-2 ${principle.borderColor} 
            transition-all duration-300
            hover:shadow-xl hover:-translate-y-1
            flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6
          `}
              >
                {/* Icon: centered on mobile, left on desktop */}
                <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-lg ${principle.iconBg || ''}`}>
                  <div className={`text-2xl md:text-4xl ${principle.iconColor}`}>
                    {principle.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-2 md:mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-slate-700 text-sm md:text-lg leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center md:justify-start gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>🎯</span> Our Purpose
              </div>
              <h2 className="text-3xl font-bold mb-6">Studio Mission</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                To create cinematic experiences that not only entertain but also inspire, educate, and provoke meaningful conversations about the human experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-300">Tell stories with emotional authenticity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-300">Push creative and technical boundaries</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-300">Foster collaborative creative environments</span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center md:justify-start gap-2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>🔭</span> Future Vision
              </div>
              <h2 className="text-3xl font-bold mb-6">Studio Vision</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                To become a globally recognized creative studio known for pioneering socially relevant cinema that bridges cultures and inspires positive change.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">Expand global creative partnerships</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">Innovate in digital storytelling formats</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">Build a legacy of impactful cinema</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Creative Collaboration - With Image & Hovers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Creative Collaborations</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Partner with us to bring extraordinary stories to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {creativeOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`${opportunity.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={`text-2xl ${opportunity.color}`}>{opportunity.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:text-amber-600 transition-colors duration-300">
                  {opportunity.category}
                </h3>

                <ul className="space-y-4">
                  {opportunity.opportunities.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 group/item">
                      <div className={`w-2 h-2 rounded-full mt-2 ${opportunity.color} group-hover/item:scale-150 transition-transform duration-300`}></div>
                      <span className="text-slate-700 flex-1 group-hover/item:text-slate-900 transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Call to Action with Background Image */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1489599809505-f2d4cac355b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")'
              }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-900/60"></div>

            {/* Content */}
            <div className="relative z-10 p-12 text-center text-white">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Start Your Creative Journey</h3>
                <p className="text-slate-200 mb-8 leading-relaxed">
                  Have a story to tell? Let's discuss how we can bring your vision to life together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to='/projects'>
                  <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300 hover:scale-105">
                    Explore our Projects
                  </button></Link>
                  <Link to='/contact'>
                  <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-300 hover:scale-105">
                    Contact Our Team
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Creative Leadership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The visionaries behind our studio's creative direction and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About