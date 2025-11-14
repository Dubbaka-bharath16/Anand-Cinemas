import React from "react";

const TESTIMONIALS = [
  {
    name: "John Deo",
    role: "CEO, Company Inc.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed odio sit amet nibh vulputate cursus.",
    avatar: "https://i.pravatar.cc/140?img=12",
    stars: 5,
  },
  {
    name: "Jane Smith",
    role: "Marketing, Agency X",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    avatar: "https://i.pravatar.cc/140?img=32",
    stars: 5,
  },
  {
    name: "Mike Johnson",
    role: "Freelance Designer",
    text: "Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus.",
    avatar: "https://i.pravatar.cc/140?img=22",
    stars: 4,
  },
  {
    name: "Anita Rao",
    role: "Producer",
    text: "They were wonderful to work with and delivered beyond expectations. Highly recommended.",
    avatar: "https://i.pravatar.cc/140?img=47",
    stars: 5,
  },
  {
    name: "Karan Mehta",
    role: "Director",
    text: "Great communication and tasteful creative judgment throughout the project.",
    avatar: "https://i.pravatar.cc/140?img=5",
    stars: 4,
  },
];

const Star = ({ filled }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-5 h-5 ${filled ? "fill-yellow-400" : "fill-gray-300"}`}
    aria-hidden="true"
  >
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.402 8.168L12 18.897l-7.336 3.867 1.402-8.168L.132 9.21l8.2-1.192z" />
  </svg>
);

const TestimonialsClassic = () => {
  const [start, setStart] = React.useState(0);
  const count = TESTIMONIALS.length;
  const intervalRef = React.useRef(null);

  const next = React.useCallback(() => {
    setStart((i) => (i + 1) % count);
  }, [count]);

  const goTo = (i) => setStart(i % count);

  React.useEffect(() => {
    intervalRef.current = setInterval(next, 3000); 
    return () => clearInterval(intervalRef.current);
  }, [next]);

  const pause = () => clearInterval(intervalRef.current);
  const resume = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 3000);
  };

  const at = (i) => TESTIMONIALS[(start + i + count) % count];

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl  font-bold text-center text-[#0b2340] mb-10">
          What Our Clients Say
        </h2>

        {/* Row of 3 cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {[0, 1, 2].map((offset, idx) => {
            const t = at(offset);
            const elevate =
              idx === 1 ? "md:scale-[1.02] md:shadow-lg" : "md:opacity-90";

            return (
              <div
                key={`${t.name}-${offset}`}
                className={`relative bg-white rounded-xl border border-gray-200 p-6 md:p-7 text-center transition-all duration-700 ${elevate}`}
              >
                {/* Avatar */}
                <div className="absolute left-1/2 -top-8 -translate-x-1/2">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full ring-4 ring-white object-cover shadow-md"
                  />
                </div>

                <div className="pt-8">
                  <h3 className="font-semibold text-[#061233]">{t.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{t.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t.text}
                  </p>

                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} filled={s <= t.stars} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === start ? "bg-yellow-400 scale-110" : "bg-gray-300"
              }`}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsClassic;
