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
      "data:image/jpeg;base64,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",
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
      className="relative h-[90vh] sm:h-[80vh] flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 w-full px-4 sm:px-6 pt-10">
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
