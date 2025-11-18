import React from 'react'

const GalleryPreview = () => {
  return (
    <>
      {/* Process Section */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 relative ">Our Filmmaking Process</h2>
          <div className="process-steps flex flex-col lg:flex-row justify-between relative mt-12">
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-gray-300 z-10 hidden lg:block"></div>
            {[
              { icon: "fa-lightbulb", title: "Concept & Ideation", description: "We begin with a compelling idea, focusing on stories with strong characters, emotional depth, and resonant core messages that can inspire change." },
              { icon: "fa-pencil-alt", title: "Screenwriting & Development", description: "Our writers craft detailed scripts through a rigorous development process, ensuring the screenplay is a solid foundation for cinematic excellence." },
              { icon: "fa-film", title: "Production & Filming", description: "We assemble visionary directors and talented crews to capture the soul of the script, guided by our commitment to authenticity and performance." },
              { icon: "fa-edit", title: "Post-Production", description: "The film is truly born in the edit. Through editing, sound design, music, and color grading, we weave raw footage into a powerful emotional journey." }
            ].map((step, index) => (
              <div key={index} className="process-step text-center relative z-20 flex-1 px-4 mb-12 lg:mb-0">
                <div className="step-icon w-20 h-20 bg-sunrise-gold rounded-full flex items-center justify-center mx-auto mb-5 text-2xl text-navy-blue transition-all duration-300 hover:scale-110 hover:rotate-6 hover:bg-warm-orange">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h3 className="step-title font-semibold mb-3 text-navy-blue font-montserrat">{step.title}</h3>
                <p className="step-description text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Excellence Section with Background Image */}
      <section className="relative py-24 bg-fixed bg-cover bg-center" 
               style={{backgroundImage: 'url("https://images.unsplash.com/photo-1489599809505-7c8e1c75ce13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'}}>
        <div className="absolute inset-0 bg-navy-blue/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8  text-center">Cinematic Excellence</h2>
            <p className="text-xl text-gray-200 mb-12 text-center leading-relaxed max-w-4xl mx-auto">
              We blend artistic vision with technical mastery to create films that captivate audiences 
              and stand the test of time.
            </p>
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
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-sunrise-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`fas ${item.icon} text-2xl text-navy-blue`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">{item.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New: Creative Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 relative ">Our Creative Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Visionary Directors",
                description: "Talented filmmakers who bring unique perspectives and artistic vision to every project.",
                icon: "fa-video"
              },
              {
                name: "Story Architects",
                description: "Creative writers who craft compelling narratives with depth, emotion, and social relevance.",
                icon: "fa-pen-fancy"
              },
              {
                name: "Technical Artists",
                description: "Skilled cinematographers, editors, and sound designers who transform vision into reality.",
                icon: "fa-cogs"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-sunrise-gold to-warm-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${member.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-navy-blue mb-4 text-center font-montserrat">{member.name}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section with New Background */}
      <section className="relative py-24 bg-fixed bg-cover bg-center" 
               style={{backgroundImage: 'url("https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80")'}}>
        <div className="absolute inset-0 bg-navy-blue/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 relative  text-white">Our Impact</h2>
          <div className="impact-content max-w-4xl mx-auto mb-16 text-center">
            <p className="text-xl text-gray-200">
              Through our films, we aim to create meaningful conversations and inspire positive change in society. 
              Our stories tackle important social issues while entertaining and engaging audiences worldwide.
            </p>
          </div>
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
              <div key={index} className="impact-card bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div className="impact-icon text-4xl text-sunrise-gold mb-5">
                  <i className={`fas ${impact.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4 font-montserrat text-white">{impact.title}</h3>
                <p className="text-gray-200 mb-4">{impact.description}</p>
                <div className="text-sunrise-gold font-bold text-lg">{impact.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  )
}

export default GalleryPreview