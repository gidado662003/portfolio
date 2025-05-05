"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

function RecentWorks() {
  const pathname = usePathname();

  const recentWorks = [
    {
      title: "E-commerce",
      description: "An e-commerce website built with Next.js and Tailwind CSS.",
      screenshots: [
        "/images/E-commerce/Screenshot1.png",
        "/images/E-commerce/Screenshot2.png",
        "/images/E-commerce/Screenshot3.png",
      ],
      tags: ["Next.js", "Tailwind CSS", "SchadCn UI"],
      link: "#",
    },
    {
      title: "Doctor Appointment App",
      description: "A doctor appointment booking app built with modern tools.",
      screenshots: [
        "/images/Doctor-Appointment-App/Screenshot1.png",
        "/images/Doctor-Appointment-App/Screenshot2.png",
        "/images/Doctor-Appointment-App/Screenshot3.png",
      ],
      tags: ["Next.js", "Tailwind CSS", "ShadCn UI"],
      link: "#",
    },
    {
      title: "Recipe Finder",
      description: "A recipe website with search and filtering capabilities.",
      screenshots: [
        "/images/Recipe/Screenshot1.png",
        "/images/Recipe/Screenshot2.png",
        "/images/Recipe/Screenshot3.png",
        "/images/Recipe/Screenshot4.png",
      ],
      tags: ["Next.js", "Tailwind CSS", "API Integration"],
      link: "#",
    },
  ];

  const [currentIndices, setCurrentIndices] = useState(
    recentWorks.map(() => 0)
  );
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const intervals = recentWorks.map((work, i) => {
      return setInterval(() => {
        setCurrentIndices((prev) => {
          const newIndices = [...prev];
          newIndices[i] = (newIndices[i] + 1) % work.screenshots.length;
          return newIndices;
        });
      }, 5000 + i * 1000);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  useEffect(() => {
    setCurrentIndices(recentWorks.map(() => 0));
  }, [pathname]);

  const goToNext = (index) => {
    setCurrentIndices((prev) => {
      const newIndices = [...prev];
      newIndices[index] =
        (newIndices[index] + 1) % recentWorks[index].screenshots.length;
      return newIndices;
    });
  };

  const goToPrev = (index) => {
    setCurrentIndices((prev) => {
      const newIndices = [...prev];
      newIndices[index] =
        (newIndices[index] - 1 + recentWorks[index].screenshots.length) %
        recentWorks[index].screenshots.length;
      return newIndices;
    });
  };

  return (
    <section className="px-6 md:px-16 lg:px-[73px] py-16 ">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-blue-400 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Recent Works
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Explore my latest projects and see what I've been working on
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentWorks.map((work, index) => {
          const currentImage = work.screenshots[currentIndices[index]];

          return (
            <motion.div
              key={index}
              className=" bg-gradient-to-b from-[#252525] to-[#1a1a1a] border border-gray-800  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col gap-y-4  border border-gray-100 h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative w-full h-[220px] rounded-t-xl overflow-hidden group">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={`${work.title}-${currentIndices[index]}`}
                    src={currentImage}
                    alt={`${work.title} screenshot`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </AnimatePresence>

                {work.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPrev(index);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                      aria-label="Previous screenshot"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNext(index);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                      aria-label="Next screenshot"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </>
                )}

                {work.screenshots.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {work.screenshots.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentIndices((prev) => {
                            const newIndices = [...prev];
                            newIndices[index] = i;
                            return newIndices;
                          });
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentIndices[index] === i
                            ? "bg-blue-400 w-4"
                            : "bg-black/50"
                        }`}
                        aria-label={`Go to screenshot ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="flex-grow gap-y-3 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-blue-300 mb-2">
                  {work.title}
                </h3>
                <p className="text-graw`-600 mb-4 flex-grow">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-3 bg-gradient-to-b from-[#252530] to-[#1a1a1c] border border-gray-800 text-white text-xs rounded-[20px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={work.link}
                  className="mt-auto inline-block px-6 py-2 bg-blue-400 text-white rounded-lg font-medium text-center hover:bg-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default RecentWorks;
