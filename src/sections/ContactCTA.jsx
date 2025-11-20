import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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
    <section ref={sectionRef} className="py-12 md:py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto px-2 sm:px-4">
              Hear from the talented professionals we've collaborated with
            </p>
          </motion.div>

          {/* Testimonials Row */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            onMouseEnter={pause}
            onMouseLeave={resume}
          >
            {[0, 1, 2].map((offset, idx) => {
              const t = at(offset);
              const elevate =
                idx === 1 ? "md:scale-[1.02] md:shadow-lg" : "md:opacity-90";

              return (
                <motion.div
                  key={`${t.name}-${offset}`}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative bg-white rounded-2xl border border-gray-200 p-6 md:p-8 text-center transition-all duration-300 group hover:shadow-xl hover:border-orange-200 ${elevate}`}
                >
                  {/* Avatar */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="absolute left-1/2 -top-8 -translate-x-1/2"
                  >
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 rounded-full ring-4 ring-white object-cover shadow-lg group-hover:ring-orange-200 transition-all duration-300"
                    />
                  </motion.div>

                  <div className="pt-8">
                    <motion.h3 
                      className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {t.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-sm text-gray-500 mb-4 group-hover:text-gray-600 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {t.role}
                    </motion.p>
                    
                    <motion.p 
                      className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base group-hover:text-gray-800 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {t.text}
                    </motion.p>

                    {/* Stars */}
                    <motion.div 
                      className="flex items-center justify-center gap-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} filled={s <= t.stars} />
                      ))}
                    </motion.div>
                  </div>

                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Dots */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-2 mt-8 md:mt-12"
          >
            {TESTIMONIALS.map((_, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === start ? "bg-orange-500 scale-110" : "bg-gray-300"
                }`}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-8 md:mt-12"
          >
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsClassic;