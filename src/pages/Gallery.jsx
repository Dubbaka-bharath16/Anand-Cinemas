import React from 'react'

const Gallery = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1084&q=80",
    "https://images.unsplash.com/photo-1489599809505-7c8e1c75ce13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1518638150340-f706e86654de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    "https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
  ]

  return (
   <section className="py-20 pt-header">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 relative ">Gallery</h2>
        <p className="text-center max-w-4xl mx-auto mb-12 text-lg font-opensans">
          Behind the scenes moments, production stills, and events that capture the essence of our filmmaking journey.
        </p>
        
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item relative rounded-lg overflow-hidden h-64 cursor-pointer">
              <img 
                src={image} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="gallery-overlay absolute inset-0 bg-navy-blue bg-opacity-80 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <i className="fas fa-search-plus text-white text-3xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery