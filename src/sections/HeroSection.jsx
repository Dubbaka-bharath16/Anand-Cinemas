// import React, { useState, useEffect } from "react";

// const slides = [
//   {
//     title: "Welcome to Anand Cinemaz",
//     subtitle:
//       "Where stories come to life through the powerful medium of cinema, and creative visions find their perfect expression.",
//     image:
//       "https://images.unsplash.com/photo-1603297631731-d1f97f1fa3a3?auto=format&fit=crop&w=1950&q=80", // clapperboard + camera
//   },
//   {
//     title: "Crafting Stories That Matter",
//     subtitle:
//       "We believe in producing films that inspire, entertain, and spark powerful emotions.",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1950&q=80", // film reel + movie camera
//   },
//   {
//     title: "A Journey of Creativity",
//     subtitle:
//       "Join us as we shape ideas into unforgettable cinematic experiences.",
//     image:
//       "https://images.unsplash.com/photo-1588099768340-3ed49832e286?auto=format&fit=crop&w=1950&q=80", // film clapper + script
//   },
// ];

// const HeroCarousel = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-[80vh] sm:h-[90vh] bg-[#0c1627] flex items-center justify-center overflow-hidden pt-16">

//       {/* Background Images */}
//       <div className="absolute inset-0 -z-10">
//         {slides.map((s, i) => (
//           <div
//             key={i}
//             className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
//               i === index ? "opacity-100" : "opacity-0"
//             }`}
//             style={{ backgroundImage: `url('${s.image}')` }}
//           ></div>
//         ))}

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/70"></div>
//       </div>

//       {/* Content */}
//       <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 w-full relative z-10">
//         <div key={index} className="transition-all duration-700 ease-out w-full">

//           <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight sm:leading-snug px-2">
//             {slides[index].title.split(" ").slice(0, 2).join(" ")}{" "}
//             <span className="text-[#f5b000] block sm:inline">
//               {slides[index].title.split(" ").slice(2).join(" ")}
//             </span>
//           </h1>

//           <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 sm:mt-6 leading-relaxed px-2 sm:px-4">
//             {slides[index].subtitle}
//           </p>

//           <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 px-4">
//             <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#e79a00] text-white font-semibold rounded-md shadow-md hover:bg-[#ffb200] transition text-sm sm:text-base w-full sm:w-auto">
//               Explore Our Work
//             </button>

//             <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 border border-gray-400 text-white font-semibold rounded-md hover:bg-white hover:text-black transition text-sm sm:text-base w-full sm:w-auto">
//               Join Our Creative Family
//             </button>
//           </div>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-10">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
//                 i === index ? "bg-[#f5b000] w-4 sm:w-6" : "bg-gray-500"
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroCarousel;
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Welcome to Anand Cinemaz",
    subtitle: "Where stories come to life through the powerful medium of cinema.",
    // external unsplash image (clapperboard + camera)
    image:
      "https://media.istockphoto.com/id/892375260/photo/man-hands-holding-movie-clapper.jpg?s=612x612&w=0&k=20&c=oGGuOr5ROP0daKAaHxk_s4-4y8wbZQeC0EtE3h-sjeU=",
    // local fallback filename (put this file in public/images/ if needed)
    local: "/images/movie1.jpg",
  },
  {
    title: "Crafting Stories That Matter",
    subtitle: "We produce films that inspire, entertain and remain memorable.",
    image:
      "https://media.istockphoto.com/id/1372681569/photo/hands-holding-a-film-slate-directing-a-movie-scene.jpg?s=612x612&w=0&k=20&c=9BdhPvpFLgmzGF44AUwZUKaQW4Q3tclAUcE3Zvac8IY=",
    local: "/images/movie2.jpg",
  },
  {
    title: "A Journey of Creativity",
    subtitle: "Shaping ideas into unforgettable cinematic experiences.",
    image:
      "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdmllfGVufDB8fDB8fHww",
    local: "/images/movie3.jpg",
  },
];

const AUTO_PLAY_MS = 4000;

export default function HeroCarouselWithImgs() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const hoveredRef = useRef(false);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => {
      if (!hoveredRef.current) setIndex((p) => (p + 1) % slides.length);
    }, AUTO_PLAY_MS);
  };

  const stopAuto = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Try to detect loading errors and switch to local fallback
  const handleImgError = (e, slide) => {
    // If you placed local images in public/images/, this will switch to them
    if (slide.local) e.currentTarget.src = slide.local;
  };

  return (
    
    <section
      className="relative h-[80vh] sm:h-[90vh] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => (hoveredRef.current = true)}
      onMouseLeave={() => (hoveredRef.current = false)}
      aria-roledescription="carousel"
    >
      {/* Images as <img> elements stacked absolutely */}
      <div className="absolute inset-0 -z-10">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            onError={(e) => handleImgError(e, s)}
            alt={s.title}
            crossOrigin="anonymous"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}

        {/* Strong overlay */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3 mt-6">
            {/* maintain the highlighted split */}
            {slides[index].title.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-[#f5b000]">
              {slides[index].title.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-5">
            {slides[index].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
            <Link to ='/projects'>
            <button className="px-6 py-3 bg-[#e79a00] text-white font-semibold rounded-md shadow-md hover:bg-[#ffb200] transition text-sm sm:text-base w-full sm:w-auto">
             Explore Our Work 
            </button></Link>
             <Link to='/contact'>
            <button className="px-6 py-3 border border-gray-400 text-white font-semibold rounded-md hover:bg-white hover:text-black transition text-sm sm:text-base w-full sm:w-auto">
              Join Our Creative Family
            </button></Link>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 focus:outline-none ${
                  i === index ? "bg-[#f5b000] w-6 h-3 rounded-full" : "bg-gray-500 w-3 h-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
