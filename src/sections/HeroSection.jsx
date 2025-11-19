// HeroNestedCarousel.jsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ---------------------------
   Outer slides (same as before)
   --------------------------- */
const outerSlides = [
  {
    title: "Welcome to Anand Cinemaz",
    subtitle: "Where stories come to life through the powerful medium of cinema.",
    image:
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  },
  {
    title: "Crafting Stories That Matter",
    subtitle: "We produce films that inspire, entertain and remain memorable.",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "A Journey of Creativity",
    subtitle: "Shaping ideas into unforgettable cinematic experiences.",
    image:
      "https://cdn.pixabay.com/photo/2016/09/16/00/16/movie-1673021_640.jpg",
  },
];

/* ---------------------------
   Inner films (your films list)
   --------------------------- */
const filmsData = [
  {
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1159&q=80",
    title: "Echoes of Silence",
    genre: "Drama",
    year: "2023",
    description:
      "A reclusive musician's life is turned upside down when he forms an unlikely bond with a spirited young girl.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    title: "Project Uprising",
    genre: "Thriller",
    year: "Coming 2024",
    description:
      "Some truths are too dangerous to stay buried. A journalist uncovers a conspiracy that threatens society.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1225&q=80",
    title: "Shades of Truth",
    genre: "Mystery",
    year: "2022",
    description:
      "In a small town where everyone has something to hide, a detective must unravel a web of lies.",
  }
];

/* ---------------------------
   Config constants
   --------------------------- */
const CONTENT_AUTOPLAY_MS = 5000; // Content changes every 5 seconds
const INNER_AUTOPLAY_MS = 4000; // Film slides move every 4 seconds
const INNER_TRANS_MS = 800; // Film transitions

/* ---------------------------
   useInterval helper
   --------------------------- */
function useInterval(callback, delay, enabled = true) {
  const savedRef = useRef(callback);
  useEffect(() => (savedRef.current = callback), [callback]);
  useEffect(() => {
    if (!enabled) return;
    const id = setInterval(() => savedRef.current(), delay);
    return () => clearInterval(id);
  }, [delay, enabled]);
}

/* ---------------------------
   InnerCarousel - Slightly larger film cards
   --------------------------- */
const InnerCarousel = ({ items = filmsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Autoplay for films
  useInterval(
    () => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setTimeout(() => setIsAnimating(false), INNER_TRANS_MS);
      }
    },
    INNER_AUTOPLAY_MS,
    true
  );

  const safePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsAnimating(false), INNER_TRANS_MS);
  };

  const safeNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsAnimating(false), INNER_TRANS_MS);
  };

  const currentFilm = items[currentIndex];

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-xl w-full">
        {/* Slightly Larger Film Card */}
        <div
          className={`transition-all duration-500 ease-out ${
            isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
          }`}
        >
          <div className="bg-black/60 rounded-xl overflow-hidden shadow-lg border border-white/10">
            <div className="flex">
              {/* Film Image - Increased size */}
              <div className="w-2/5">
                <img 
                  src={currentFilm.image} 
                  alt={currentFilm.title} 
                  className="w-full h-36 object-cover" 
                />
              </div>
              
              {/* Film Info - Increased padding */}
              <div className="w-3/5 p-4">
                <h3 className="text-base font-bold text-white mb-2 line-clamp-1">
                  {currentFilm.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-amber-500 text-black px-2 py-1 rounded">
                    {currentFilm.genre}
                  </span>
                  <span className="text-xs text-gray-300">{currentFilm.year}</span>
                </div>
                <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
                  {currentFilm.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between">
          <button
            onClick={safePrev}
            className="bg-white/20 hover:bg-white/30 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm transition-all duration-300"
            aria-label="Previous film"
          >
            ‹
          </button>
          <button
            onClick={safeNext}
            className="bg-white/20 hover:bg-white/30 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm transition-all duration-300"
            aria-label="Next film"
          >
            ›
          </button>
        </div>

        {/* Film Counter */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-1">
            {items.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-amber-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------
   OuterCarouselHero - Reduced heading size, inline layout
   --------------------------- */
const HeroNestedCarousel = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Automatic content changes
  useInterval(
    () => {
      if (!isAnimating) {
        setIsAnimating(true);
        setContentIndex((prev) => (prev + 1) % outerSlides.length);
        setTimeout(() => setIsAnimating(false), 800);
      }
    },
    CONTENT_AUTOPLAY_MS,
    true
  );

  const currentContent = outerSlides[contentIndex];

  return (
    <section
      className="relative w-full h-[90vh] sm:h-[100vh] overflow-hidden pt-16 bg-gradient-to-b from-slate-900 via-slate-900/95 to-black"
    >
      {/* FIXED Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(6,6,23,0.25), rgba(6,6,23,0.35)), url('${outerSlides[0].image}')`,
          }}
        />
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
      </div>

      {/* Content area */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              {/* Animated Content */}
              <div
                key={contentIndex}
                className={`transition-all duration-700 ease-out ${
                  isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                {/* Reduced and Inline Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                  <span className="text-white">
                    {currentContent.title.split(" ").slice(0, -1).join(" ")}
                  </span>
                  {" "}
                  <span className="text-amber-400">
                    {currentContent.title.split(" ").slice(-1)}
                  </span>
                </h1>
                
                <p className="text-lg text-gray-200 leading-relaxed mb-6 max-w-xl">
                  {currentContent.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
                  <Link to="/projects">
                    <button className="px-6 py-3 rounded-full bg-amber-500 text-black font-semibold hover:scale-105 transition-all duration-300 ease-out shadow-lg text-sm">
                      Explore Our Work
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 ease-out text-sm">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* Content Indicators */}
              <div className="flex gap-3 mt-6">
                {outerSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAnimating(true);
                      setContentIndex(index);
                      setTimeout(() => setIsAnimating(false), 800);
                    }}
                    className={`group transition-all duration-300 ${
                      index === contentIndex ? 'w-8' : 'w-4'
                    }`}
                  >
                    <div className={`h-1 rounded-full transition-all duration-300 ${
                      index === contentIndex 
                        ? 'bg-amber-500' 
                        : 'bg-white/40 group-hover:bg-white/60'
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Film Carousel - Right Side - Increased size */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">Featured Films</div>
                    <div className="text-xs text-gray-400">Now showing</div>
                  </div>
                </div>
              </div>
              
              <InnerCarousel items={filmsData} />
              
              {/* Additional film info */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Latest Productions</span>
                  <Link to="/films" className="text-amber-400 hover:text-amber-300 transition-colors">
                    View All →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNestedCarousel;