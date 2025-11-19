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
      "A reclusive musician's life is turned upside down when he forms an unlikely bond with a spirited young girl, forcing him to confront the noise of the world he left behind.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    title: "Project Uprising",
    genre: "Thriller",
    year: "Coming 2024",
    description:
      "Some truths are too dangerous to stay buried. A journalist uncovers a conspiracy that threatens to upend society as we know it.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1225&q=80",
    title: "Shades of Truth",
    genre: "Mystery",
    year: "2022",
    description:
      "In a small town where everyone has something to hide, a detective must unravel a web of lies to solve a mysterious disappearance.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    title: "The Last Light",
    genre: "Drama",
    year: "2021",
    description:
      "A family's struggle to preserve their cultural heritage in the face of modernization and changing values.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    title: "Urban Rhythms",
    genre: "Musical",
    year: "2020",
    description:
      "Exploring the interconnected lives of city dwellers through the universal language of music and dance.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1084&q=80",
    title: "Silent Echoes",
    genre: "Documentary",
    year: "2019",
    description:
      "A poignant look at the lives of hearing-impaired artists and their extraordinary visual expressions.",
  },
];

/* ---------------------------
   Config constants - slowed & smoothed
   --------------------------- */
/* ---------------------------
   Config constants - 2 second timing
   --------------------------- */
const OUTER_AUTOPLAY_MS = 2000; // 2 seconds
const OUTER_TRANS_MS = 700; // Smooth transition

const INNER_AUTOPLAY_MS = 2000; // 2 seconds
const INNER_TRANS_MS = 700; // Smooth transition
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
   InnerCarousel - improved styling & timing
   --------------------------- */
const InnerCarousel = ({ items = filmsData }) => {
  const [startIndex, setStartIndex] = useState(0);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const hovering = useRef(false);
  const dragging = useRef(false);
  const dragInfo = useRef({ startX: 0, delta: 0 });

  // get perView responsive
  const getPerView = useCallback(() => {
    if (typeof window === "undefined") return 1;
    const w = window.innerWidth;
    if (w >= 1200) return 3;
    if (w >= 900) return 2;
    return 1;
  }, []);
  const perView = useRef(getPerView());

  useEffect(() => {
    const onResize = () => {
      perView.current = getPerView();
      // clamp startIndex so we don't overscroll
      setStartIndex((prev) => Math.min(prev, Math.max(0, items.length - perView.current)));
      // force track layout update
      updateTrackPosition(startIndex, false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getPerView, items.length]);

  // update track translate
  const updateTrackPosition = (index, withTransition = true) => {
    if (!trackRef.current) return;
    const cardPercent = 100 / perView.current; // width of each visible card block
    const translatePercent = -(index * cardPercent);
    trackRef.current.style.transition = withTransition ? `transform ${INNER_TRANS_MS}ms cubic-bezier(.2,.9,.2,1)` : "none";
    trackRef.current.style.transform = `translateX(${translatePercent}%)`;
    trackRef.current.style.willChange = "transform";
  };

  // initial layout
  useEffect(() => {
    updateTrackPosition(startIndex, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // autoplay (slower)
  useInterval(
    () => {
      if (!hovering.current && !dragging.current) {
        setStartIndex((prev) => {
          const maxStart = Math.max(0, items.length - perView.current);
          return prev >= maxStart ? 0 : prev + 1;
        });
      }
    },
    INNER_AUTOPLAY_MS,
    true
  );

  // whenever startIndex changes, update track
  useEffect(() => {
    updateTrackPosition(startIndex, true);
  }, [startIndex]);

  // debounced controls to avoid rapid clicks
  const lastActionRef = useRef(0);
  const actionDebounce = 300;
  const safePrev = () => {
    const now = Date.now();
    if (now - lastActionRef.current < actionDebounce) return;
    lastActionRef.current = now;
    setStartIndex((p) => Math.max(0, p - 1));
  };
  const safeNext = () => {
    const now = Date.now();
    if (now - lastActionRef.current < actionDebounce) return;
    lastActionRef.current = now;
    setStartIndex((p) => {
      const maxStart = Math.max(0, items.length - perView.current);
      return p >= maxStart ? 0 : p + 1;
    });
  };

  // pointer (touch/mouse) handlers for smooth dragging
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const track = trackRef.current;
    if (!track) return;

    const onDown = (e) => {
      dragging.current = true;
      hovering.current = true;
      dragInfo.current.startX = e.touches ? e.touches[0].clientX : e.clientX;
      dragInfo.current.delta = 0;
      track.style.transition = "none";
    };

    const onMove = (e) => {
      if (!dragging.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      dragInfo.current.delta = clientX - dragInfo.current.startX;
      const deltaPercent = (dragInfo.current.delta / container.clientWidth) * (100 / perView.current);
      const cardPercent = 100 / perView.current;
      const base = -(startIndex * cardPercent);
      track.style.transform = `translateX(calc(${base}% + ${deltaPercent}%))`;
    };

    const onUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      hovering.current = false;
      const threshold = 50; // px threshold
      const delta = dragInfo.current.delta;
      // restore transition
      track.style.transition = `transform ${INNER_TRANS_MS}ms cubic-bezier(.2,.9,.2,1)`;
      if (Math.abs(delta) > threshold) {
        if (delta > 0) {
          // user swiped right => prev
          setStartIndex((p) => Math.max(0, p - 1));
        } else {
          setStartIndex((p) => {
            const maxStart = Math.max(0, items.length - perView.current);
            return p >= maxStart ? 0 : p + 1;
          });
        }
      } else {
        // snap back
        updateTrackPosition(startIndex, true);
      }
      dragInfo.current.delta = 0;
    };

    container.addEventListener("touchstart", onDown, { passive: true });
    container.addEventListener("touchmove", onMove, { passive: true });
    container.addEventListener("touchend", onUp);
    container.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    return () => {
      container.removeEventListener("touchstart", onDown);
      container.removeEventListener("touchmove", onMove);
      container.removeEventListener("touchend", onUp);
      container.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [startIndex, items.length]);

  // card width math for inline style
  const cardWidthPercent = 100 / perView.current; // percent relative to viewport

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-xl w-full"
        onMouseEnter={() => (hovering.current = true)}
        onMouseLeave={() => (hovering.current = false)}
        aria-roledescription="carousel"
      >
        <div
          ref={trackRef}
          className="flex gap-6 items-stretch will-change-transform"
          style={{
            width: `${(items.length * cardWidthPercent)}%`,
            transform: `translateX(-${startIndex * cardWidthPercent}%)`,
          }}
        >
          {items.map((f, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-0"
              style={{
                width: `${cardWidthPercent}%`,
                minWidth: `${cardWidthPercent}%`,
              }}
            >
              <div className="bg-black/60 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 ease-out hover:scale-[1.02]">
                <img src={f.image} alt={f.title} className="w-full h-40 sm:h-44 object-cover" />
                <div className="p-3">
                  <h4 className="text-sm font-semibold text-white leading-tight">{f.title}</h4>
                  <div className="text-xs text-gray-300">{f.genre} • {f.year}</div>
                  <p className="text-xs text-gray-300 mt-2 line-clamp-2" style={{ maxHeight: "3.2rem" }}>{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* controls */}
        <div className="absolute left-3 top-3 flex gap-2">
          <button
            onClick={safePrev}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Previous film"
          >
            ‹
          </button>
          <button
            onClick={safeNext}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Next film"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------
   OuterCarouselHero - uses InnerCarousel inside mockup
   --------------------------- */
const HeroNestedCarousel = () => {
  const [oIndex, setOIndex] = useState(0);
  const oTrackRef = useRef(null);
  const oHover = useRef(false);
  const outerCount = outerSlides.length;

  // autoplay outer
  useInterval(
    () => {
      if (!oHover.current) {
        setOIndex((prev) => (prev + 1) % outerCount);
      }
    },
    OUTER_AUTOPLAY_MS,
    true
  );

  // update outer track
  useEffect(() => {
    if (!oTrackRef.current) return;
    oTrackRef.current.style.transition = `transform ${OUTER_TRANS_MS}ms cubic-bezier(.2,.9,.2,1)`;
    oTrackRef.current.style.transform = `translateX(-${(oIndex * 100) / outerCount}%)`;
  }, [oIndex, outerCount]);

  // outer touch (kept simple)
  useEffect(() => {
    const el = oTrackRef.current;
    if (!el) return;
    let startX = 0;
    let dragging = false;
    let delta = 0;

    const onDown = (e) => {
      dragging = true;
      startX = e.touches ? e.touches[0].clientX : e.clientX;
      el.style.transition = "none";
    };
    const onMove = (e) => {
      if (!dragging) return;
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      delta = cx - startX;
      const percent = (delta / window.innerWidth) * 100;
      el.style.transform = `translateX(calc(${-(oIndex * (100 / outerCount))}% + ${percent}%))`;
    };
    const onUp = () => {
      dragging = false;
      el.style.transition = `transform ${OUTER_TRANS_MS}ms cubic-bezier(.2,.9,.2,1)`;
      if (Math.abs(delta) > 60) {
        if (delta > 0) setOIndex((p) => Math.max(0, p - 1));
        else setOIndex((p) => (p + 1) % outerCount);
      } else {
        el.style.transform = `translateX(-${(oIndex * 100) / outerCount}%)`;
      }
      delta = 0;
    };

    window.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [oIndex, outerCount]);

  return (
    <section
      className="relative w-full h-[90vh] sm:h-[100vh] overflow-hidden pt-16 bg-gradient-to-b from-slate-900 via-slate-900/95 to-black"
      onMouseEnter={() => (oHover.current = true)}
      onMouseLeave={() => (oHover.current = false)}
    >
      {/* outer background track */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          ref={oTrackRef}
          className="flex h-full will-change-transform"
          style={{ width: `${outerCount * 100}%`, transform: `translateX(-${(oIndex * 100) / outerCount}%)` }}
        >
          {outerSlides.map((s, idx) => (
            <div
              key={idx}
              className="w-full h-full flex-shrink-0 bg-center bg-cover"
              style={{
                backgroundImage: `linear-gradient(rgba(6,6,23,0.25), rgba(6,6,23,0.35)), url('${s.image}')`,
              }}
              aria-hidden
            />
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
      </div>

      {/* Content area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                {outerSlides[oIndex].title.split(" ").slice(0, 2).join(" ")}{" "}
                <span className="text-amber-400">{outerSlides[oIndex].title.split(" ").slice(2).join(" ")}</span>
              </h1>
              <p className="mt-4 text-lg text-gray-200 max-w-xl">{outerSlides[oIndex].subtitle}</p>

              <div className="mt-8 flex items-center gap-4">
                <Link to="/projects">
                  <button className="px-6 py-3 rounded-full bg-amber-500 text-black font-semibold hover:scale-105 transition">Explore Our Work</button>
                </Link>
                <Link to="/contact">
                  <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">Contact</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side: mockup with inner carousel */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="bg-white/6 border border-white/8 rounded-3xl p-4 shadow-2xl backdrop-blur-md">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-black/35 to-black/10">
                  <div className="p-4">
                    <InnerCarousel items={filmsData} />
                  </div>
                </div>

                <div className="mt-3 px-4 mb-2 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/8 rounded-md flex items-center justify-center text-amber-300">★</div>
                    <div>
                      <div className="font-semibold text-white text-sm">Featured Films</div>
                      <div className="text-xs text-slate-400">Curated picks • Weekly</div>
                    </div>
                  </div>
                  <div className="text-slate-400">See more →</div>
                </div>
              </div>

              <div className="mt-4 flex gap-3 justify-center lg:justify-end">
                <a className="px-3 py-2 bg-white/6 rounded-full text-sm text-white hover:bg-white/10 transition">Watch Highlights</a>
                <a className="px-3 py-2 bg-white/6 rounded-full text-sm text-white hover:bg-white/10 transition">View Schedule</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* outer arrows */}
      <div className="hidden lg:block">
        <button
          onClick={() => setOIndex((p) => (p - 1 + outerCount) % outerCount)}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full"
          aria-label="Prev slide"
        >
          ‹
        </button>
        <button
          onClick={() => setOIndex((p) => (p + 1) % outerCount)}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default HeroNestedCarousel;
