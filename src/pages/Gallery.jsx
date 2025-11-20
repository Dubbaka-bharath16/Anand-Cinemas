import React, { useMemo, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const galleryItems = [
    {
      src:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1084&q=80",
      type: "image",
      category: "Stills",
      title: "Set Stills 1",
    },
    {
      src:
        "https://images.unsplash.com/photo-1518638150340-f706e86654de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      type: "image",
      category: "Events",
      title: "Premiere Night",
    },
    {
      src:
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
      type: "image",
      category: "Stills",
      title: "BTS 1",
    },
    {
      src:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      type: "image",
      category: "Stills",
      title: "BTS 2",
    },
    {
      src: "https://www.youtube.com/embed/ScMzIvxBSi4",
      type: "video",
      category: "Trailers",
      title: "Trailer (YouTube)",
    },
    {
      src:
        "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      type: "video",
      category: "Behind Scenes",
      title: "BTS Clip (MP4)",
    },
    {
      src:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      type: "image",
      category: "Events",
      title: "Audience",
    },
    {
      src:
        "https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1180&q=80",
      type: "image",
      category: "Stills",
      title: "Production",
    },
  //   {
  //     src:
  //       "https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80",
  //     type: "image",
  //     category: "Stills",
  //     title: "Director Shot",
  //   },
  ];

  const filters = [
    { key: "all", label: "All" },
    { key: "images", label: "Images" },
    { key: "videos", label: "Videos" },
    { key: "trailers", label: "Trailers" },
    { key: "behind", label: "Behind Scenes" },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const heroRef = useRef(null);
  const sectionRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return galleryItems;
    if (activeFilter === "images")
      return galleryItems.filter((it) => it.type === "image");
    if (activeFilter === "videos")
      return galleryItems.filter((it) => it.type === "video");
    if (activeFilter === "trailers")
      return galleryItems.filter((it) =>
        it.category.toLowerCase().includes("trail")
      );
    if (activeFilter === "behind")
      return galleryItems.filter((it) =>
        it.category.toLowerCase().includes("behind")
      );
    return galleryItems;
  }, [activeFilter]);

  function openItem(item) {
    setSelectedItem(item);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedItem(null);
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section - Fixed with proper top spacing */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="relative py-16 md:py-20 bg-blue-100 overflow-hidden mt-16"
      >
        {/* Background Elements (subtle, kept minimal) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-24 -top-20 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute -right-24 -bottom-20 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-8"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-6"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-blue-800"
            >
              Our <span className="text-orange-300">Gallery</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-blue-700 leading-relaxed mb-8 max-w-3xl mx-auto px-2 sm:px-4"
            >
              Explore behind the scenes moments, production stills, and cinematic highlights from our filmmaking journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-blue-700">
                <i className="fas fa-images text-xl"></i>
                <span className="text-sm md:text-base">{galleryItems.length}+ Media Items</span>
              </div>
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-blue-700">
                <i className="fas fa-film text-xl"></i>
                <span className="text-sm md:text-base">Videos & Images</span>
              </div>
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-blue-700">
                <i className="fas fa-play-circle text-xl"></i>
                <span className="text-sm md:text-base">Interactive Preview</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Content Section */}
      <section ref={sectionRef} className="py-12 md:py-20 bg-white">
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
                Explore Our Work
              </h2>
              <div className="w-20 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full mb-6 md:mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-2 sm:px-4">
                Behind the scenes moments, production stills, and events that capture
                the essence of our filmmaking journey.
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 flex-wrap"
            >
              {filters.map((f) => {
                const active = activeFilter === f.key;
                return (
                  <motion.button
                    key={f.key}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(f.key)}
                    className={`px-5 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                      active
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                        : "bg-blue-50 text-blue-700 hover:bg-blue-100 hover:shadow-md"
                    }`}
                    aria-pressed={active}
                  >
                    {f.label}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Gallery Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative rounded-2xl overflow-hidden h-48 md:h-64 cursor-pointer group"
                  onClick={() => openItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") openItem(item);
                  }}
                >
                  {item.type === "image" ? (
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={item.src}
                      alt={item.title || `Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-black flex items-center justify-center">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        src={
                          item.src.includes("youtube.com/embed")
                            ? (() => {
                                const id = item.src.split("/embed/")[1];
                                return id ? `https://img.youtube.com/vi/${id.split("?")[0]}/hqdefault.jpg` : "";
                              })()
                            : "https://images.unsplash.com/photo-1518638150340-f706e86654de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
                        }
                        alt={item.title || "video thumbnail"}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <i className="fas fa-play text-white text-lg md:text-xl ml-1"></i>
                        </motion.div>
                      </div>
                    </div>
                  )}

                  {/* Overlay */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-start p-4 md:p-6"
                  >
                    <div className="text-white">
                      <h3 className="font-semibold text-sm md:text-base mb-1">{item.title}</h3>
                      <p className="text-blue-200 text-xs md:text-sm">{item.category}</p>
                    </div>
                  </motion.div>

                  {/* Hover Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  >
                    {item.type === "image" ? (
                      <i className="fas fa-search-plus text-white text-sm"></i>
                    ) : (
                      <i className="fas fa-play text-white text-sm"></i>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-4xl lg:max-w-5xl w-full max-h-full rounded-2xl overflow-hidden bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 md:p-6 bg-white border-b border-gray-200">
                <h3 className="text-lg md:text-xl font-bold text-blue-800">
                  {selectedItem.title || ""}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Close"
                >
                  <i className="fas fa-times text-gray-600 text-sm md:text-base"></i>
                </motion.button>
              </div>

              <div className="bg-black flex items-center justify-center">
                {selectedItem.type === "image" ? (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={selectedItem.src}
                    alt={selectedItem.title || "gallery image"}
                    className="w-full h-auto max-h-[70vh] md:max-h-[80vh] object-contain"
                  />
                ) : selectedItem.src.includes("youtube.com/embed") ||
                  selectedItem.src.includes("youtube-nocookie.com") ? (
                  <div className="aspect-video w-full">
                    <iframe
                      title={selectedItem.title || "video"}
                      src={`${selectedItem.src}?autoplay=1`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <motion.video
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={selectedItem.src}
                    controls
                    autoPlay
                    className="w-full max-h-[70vh] md:max-h-[80vh]"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
