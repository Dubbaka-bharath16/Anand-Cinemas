// HeroNestedCarousel.jsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

/* ---------------------------
   Outer slides
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
   Inner films
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
   Config constants - SLOWER TIMINGS (5 SECONDS)
   --------------------------- */
const CONTENT_AUTOPLAY_MS = 4000;
const INNER_AUTOPLAY_MS = 5000; // Changed to 5 seconds
const INNER_TRANS_MS = 1200;    // Slower transition

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
   Animation Variants - SLOWER ANIMATIONS
   --------------------------- */
const testimonialVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 200, damping: 25 }, // Softer spring
      opacity: { duration: 0.8 }, // Slower fade
      scale: { duration: 0.6 }    // Slower scale
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 200, damping: 25 }, // Softer spring
      opacity: { duration: 0.6 }, // Slower fade out
      scale: { duration: 0.4 }    // Slower scale out
    }
  })
};

/* ---------------------------
   InnerCarousel - SLOWER 5 SECOND TRANSITIONS
   --------------------------- */
const InnerCarousel = ({ items = filmsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

  // Autoplay for films - 5 SECOND INTERVAL
  useInterval(
    () => {
      if (!isAnimating && !isHovered) {
        setDirection(1);
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setTimeout(() => setIsAnimating(false), INNER_TRANS_MS);
      }
    },
    INNER_AUTOPLAY_MS, // 5000ms = 5 seconds
    true
  );

  const safePrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsAnimating(false), INNER_TRANS_MS);
  };

  const safeNext = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsAnimating(false), INNER_TRANS_MS);
  };

  const currentFilm = items[currentIndex];

  return (
    <div className="w-full flex justify-center">
      <div 
        className="relative w-full max-w-sm sm:max-w-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Film Card with Slower Animations */}
        <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mx-2 sm:mx-0">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="p-4 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                {/* Film Image */}
                <div className="flex-shrink-0">
                  <motion.img
                    src={currentFilm.image}
                    alt={currentFilm.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-orange-500 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Film Info */}
                <div className="flex-1 text-center sm:text-left">
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {currentFilm.title}
                  </motion.h3>
                  <motion.div 
                    className="flex flex-col sm:flex-row items-center gap-2 mb-3 justify-center sm:justify-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <span className="text-xs bg-orange-500 text-white px-3 py-1 rounded-full font-semibold">
                      {currentFilm.genre}
                    </span>
                    <span className="text-xs text-gray-600 font-medium bg-gray-100 px-2 py-1 rounded">
                      {currentFilm.year}
                    </span>
                  </motion.div>
                  <motion.p 
                    className="text-sm text-gray-700 leading-relaxed line-clamp-3 sm:line-clamp-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {currentFilm.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-6 gap-4 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={safePrev}
            className="bg-blue-600 text-white rounded-full w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center text-base sm:text-sm font-bold transition-all duration-300 shadow-lg hover:bg-blue-700"
            aria-label="Previous film"
          >
            ‹
          </motion.button>
          
          {/* Film Counter */}
          <div className="flex gap-2 sm:gap-1 items-center mx-2 sm:mx-0">
            {items.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  if (isAnimating) return;
                  setDirection(index > currentIndex ? 1 : -1);
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), INNER_TRANS_MS);
                }}
                className={`w-3 h-3 sm:w-2 sm:h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex ? "bg-orange-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={safeNext}
            className="bg-blue-600 text-white rounded-full w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center text-base sm:text-sm font-bold transition-all duration-300 shadow-lg hover:bg-blue-700"
            aria-label="Next film"
          >
            ›
          </motion.button>
        </div>

        {/* Auto-rotation Indicator */}
        <div className="text-center mt-3">
          <motion.p 
            className="text-xs text-blue-200 opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1 }}
          >
            
          </motion.p>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------
   OuterCarouselHero - CONTENT FIRST ON MOBILE
   --------------------------- */
const HeroNestedCarousel = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [isContentHovered, setIsContentHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Automatic content changes with HOVER PAUSE
  useEffect(() => {
    if (isContentHovered) return;
    
    const interval = setInterval(() => {
      setContentIndex((prev) => (prev + 1) % outerSlides.length);
    }, CONTENT_AUTOPLAY_MS);

    return () => clearInterval(interval);
  }, [isContentHovered]);

  const currentContent = outerSlides[contentIndex];

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full min-h-screen overflow-hidden pt-20 bg-blue-800"
    >
      {/* Content area - CONTENT FIRST ON MOBILE */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 h-full flex items-start lg:items-center justify-center py-8 sm:py-12">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          
          {/* Main Content - FIRST ON MOBILE */}
          <div 
            className="w-full lg:w-1/2 flex justify-center order-1 lg:order-1"
            onMouseEnter={() => setIsContentHovered(true)}
            onMouseLeave={() => setIsContentHovered(false)}
          >
            <div className="max-w-2xl text-center lg:text-left">
              <div className="min-h-[200px] sm:min-h-[300px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={contentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col justify-center"
                  >
                    {/* Responsive Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
                      <span className="text-white">{currentContent.title.split(" ").slice(0, -1).join(" ")}</span>{" "}
                      <span className="text-orange-300">{currentContent.title.split(" ").slice(-1)}</span>
                    </h1>

                    {/* Responsive Subtitle */}
                    <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
                      {currentContent.subtitle}
                    </p>

                    {/* Responsive Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                      <Link to="/gallery" className="w-full sm:w-auto">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                        >
                          Explore Our Work
                        </motion.button>
                      </Link>
                      <Link to="/contact" className="w-full sm:w-auto">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 text-sm sm:text-base"
                        >
                          Contact Us
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Content Indicators */}
              <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8 justify-center lg:justify-start">
                {outerSlides.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => setContentIndex(index)}
                    className={`group transition-all duration-300 ${index === contentIndex ? "w-6 sm:w-8" : "w-3 sm:w-4"}`}
                  >
                    <div
                      className={`h-1 sm:h-1 rounded-full transition-all duration-300 ${
                        index === contentIndex ? "bg-orange-500" : "bg-white/40 group-hover:bg-white/60"
                      }`}
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Film Carousel - SECOND ON MOBILE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-1/2 flex justify-center order-2 lg:order-2 mt-4 sm:mt-0"
          >
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm w-full max-w-sm sm:max-w-md shadow-xl sm:shadow-2xl mx-2 sm:mx-0"
            >
              {/* Header */}
              <div className="mb-4 sm:mb-6 text-center">
                <div className="flex items-center gap-2 sm:gap-3 justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500/20 rounded-lg flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <div className="font-bold text-white text-base sm:text-lg">Featured Films</div>
                    <div className="text-xs sm:text-sm text-blue-200">Now showing</div>
                  </div>
                </div>
              </div>

              {/* Film Carousel with 5-second rotation */}
              <InnerCarousel items={filmsData} />

              {/* View All Link */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/20 text-center">
                <Link to="/projects">
                  <motion.span 
                    whileHover={{ x: 3, color: "#fbbf24" }}
                    className="text-orange-300 hover:text-orange-200 transition-colors cursor-pointer font-semibold text-xs sm:text-sm"
                  >
                    View All Films →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div> 
    </motion.section>
  );
};

export default HeroNestedCarousel;