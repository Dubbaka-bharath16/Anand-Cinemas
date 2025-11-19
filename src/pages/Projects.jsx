import React, { useState } from 'react'

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

  return (
    <>
      <section className="py-20 pt-header">
        <div className="container mx-auto px-4">

          {/* UPDATED HEADER COLOR */}
          <h2 className="text-4xl font-bold text-center mb-12 relative text-blue-800 bg-clip-text ">
            Our Projects
          </h2>

          <p className="text-center max-w-4xl mx-auto mb-12 text-lg">
            A collection of our journeys into the human experience. Each film is a world we've built, a character we've lived with, and a message we are proud to share.
          </p>
          
          <div className="films-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {films.map((film, index) => (
              <div key={index} className="film-card bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div className="film-image h-64 overflow-hidden">
                  <img 
                    src={film.image} 
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="film-content p-6">
                  <h3 className="text-xl font-bold mb-3">{film.title}</h3>
                  <div className="film-meta flex justify-between text-sm text-gray-600 mb-4">
                    <span>{film.genre}</span>
                    <span>{film.year}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{film.description}</p>

                  {/* UPDATED BUTTON COLOR */}
                  <button 
                    onClick={() => setSelectedFilm(film)}
                    className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
                  >
                    View Details →
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {selectedFilm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedFilm.image} 
                alt={selectedFilm.title}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedFilm(null)}
                className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{selectedFilm.title}</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <span className="font-semibold">Genre:</span> {selectedFilm.genre}
                </div>
                <div>
                  <span className="font-semibold">Year:</span> {selectedFilm.year}
                </div>
                <div>
                  <span className="font-semibold">Director:</span> {selectedFilm.director}
                </div>
                <div>
                  <span className="font-semibold">Duration:</span> {selectedFilm.duration}
                </div>
              </div>

              <div className="mb-4">
                <span className="font-semibold">Awards:</span> {selectedFilm.awards}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{selectedFilm.details}</p>

              {/* UPDATED BUTTON COLOR */}
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all w-full">
                Watch Trailer
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Films
