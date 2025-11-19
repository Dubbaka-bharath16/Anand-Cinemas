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
   InnerCarousel - Centered film cards
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
    <div className="w-full flex justify-center">
      <div className="relative max-w-md w-full">
        {/* Centered Film Card */}
        <div
          className={`transition-all duration-500 ease-out ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <div className="bg-black/60 rounded-xl overflow-hidden shadow-lg border border-white/10">
            <div className="flex flex-col sm:flex-row">
              {/* Film Image */}
              <div className="w-full sm:w-2/5">
                <img
                  src={currentFilm.image}
                  alt={currentFilm.title}
                  className="w-full h-48 sm:h-44 object-cover"
                />
              </div>

              {/* Film Info */}
              <div className="w-full sm:w-3/5 p-4 sm:p-5">
                <h3 className="text-lg sm:text-base font-bold text-white mb-2 line-clamp-1">
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
        <div className="hidden sm:flex absolute -left-4 -right-4 top-1/2 transform -translate-y-1/2 justify-between items-center">
          <button
            onClick={safePrev}
            className="bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm transition-all duration-300 shadow-lg backdrop-blur-sm"
            aria-label="Previous film"
          >
            ‹
          </button>
          <button
            onClick={safeNext}
            className="bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm transition-all duration-300 shadow-lg backdrop-blur-sm"
            aria-label="Next film"
          >
            ›
          </button>
        </div>

        {/* Film Counter - Centered */}
        <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), INNER_TRANS_MS);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-amber-500" : "bg-white/30"
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
   OuterCarouselHero - Centered content with fade transitions
   - content & card nudged slightly down; mobile shows content first then card
   --------------------------- */
const HeroNestedCarousel = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Automatic content changes with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setContentIndex((prev) => (prev + 1) % outerSlides.length);
          setIsAnimating(false);
        }, 500); // Half the transition time for smooth fade
      }
    }, CONTENT_AUTOPLAY_MS);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const currentContent = outerSlides[contentIndex];

  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-20 bg-gradient-to-b from-slate-900 via-slate-900/95 to-black">
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

      {/* Content area - Slightly lower on the page (nudge) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-start lg:items-center justify-center py-12">
        {/* added mt-6 to nudge both content & card downward on larger screens */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 lg:gap-12 mt-6">
          {/* Main Content - Centered (mobile first, content appears first) */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-1">
            <div className="max-w-2xl text-center lg:text-left">
              {/* Content with Fade Transition */}
              <div className="min-h-[300px] flex flex-col justify-center">
                <div
                  className={`transition-all duration-1000 ease-in-out ${
                    isAnimating ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                    <span className="text-white">{currentContent.title.split(" ").slice(0, -1).join(" ")}</span>{" "}
                    <span className="text-amber-400">{currentContent.title.split(" ").slice(-1)}</span>
                  </h1>

                  <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                    {currentContent.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <Link to="/projects">
                      <button className="px-8 py-3 rounded-full bg-amber-500 text-black font-semibold hover:scale-105 transition-all duration-300 ease-out shadow-lg text-base">
                        Explore Our Work
                      </button>
                    </Link>
                    <Link to="/contact">
                      <button className="px-8 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 ease-out text-base">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content Indicators - Centered */}
              <div className="flex gap-3 mt-8 justify-center lg:justify-start">
                {outerSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setContentIndex(index);
                        setIsAnimating(false);
                      }, 500);
                    }}
                    className={`group transition-all duration-300 ${index === contentIndex ? "w-8" : "w-4"}`}
                  >
                    <div
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === contentIndex ? "bg-amber-500" : "bg-white/40 group-hover:bg-white/60"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Film Carousel - Centered (mobile second) */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm max-w-md w-full">
              <div className="mb-6 text-center">
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Featured Films</div>
                    <div className="text-sm text-gray-400">Now showing</div>
                  </div>
                </div>
              </div>

              {/* Centered Film Carousel */}
              <InnerCarousel items={filmsData} />

              {/* Additional film info */}
              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <div className="flex justify-between items-center text-sm text-gray-400">
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
