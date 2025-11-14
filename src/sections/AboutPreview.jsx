import React from 'react'
import { Link } from 'react-router-dom'

const AboutPreview = () => {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 relative">Featured Films</h2>
        <div className="films-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((film, index) => (
            <div key={index} className="film-card bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <div className="film-image h-64 overflow-hidden">
                <img 
                  src={film.image} 
                  alt={film.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="film-content p-6">
                <h3 className="text-xl font-bold mb-3 font-montserrat">{film.title}</h3>
                <div className="film-meta flex justify-between text-sm text-gray-600 mb-4">
                  <span>{film.genre}</span>
                  <span>{film.year}</span>
                </div>
                <p className="text-gray-700">{film.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
           <Link to="/films" style={{textDecoration:"none"}}>
          <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
            View All Projects
          </button></Link>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview