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
        "/E-commerce/screenshot (1).png",
        "/E-commerce/screenshot (2).png",
        "/E-commerce/screenshot (3).png",
      ],
    },
    {
      title: "Doctor Appointment App",
      description: "A doctor appointment booking app built with modern tools.",
      screenshots: [
        "/Doctor Appointment App/screenshot (1).png",
        "/Doctor Appointment App/screenshot (2).png",
        "/Doctor Appointment App/screenshot (3).png",
      ],
    },
    {
      title: "Recipe",
      description: "A recipe website built with Next.js and Tailwind CSS.",
      screenshots: ["/Recipe/screenshot (1).png"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [pathname]);

  return (
    <section className="px-6 md:px-16 lg:px-[73px] py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#36b94c]">Recent Works</h2>
        <p className="text-gray-600 text-sm">Check out some of my projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentWorks.map((work, index) => {
          const image =
            work.screenshots.length > 1
              ? work.screenshots[currentIndex % work.screenshots.length]
              : work.screenshots[0];

          return (
            <div
              key={index}
              className="p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-y-4 text-sm"
            >
              <div className="w-full h-[180px] relative overflow-hidden rounded-lg">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={image}
                    src={image}
                    alt={`${work.title} screenshot`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </AnimatePresence>
              </div>
              <h3 className="text-lg font-semibold text-[#36b94c]">
                {work.title}
              </h3>
              <p className="text-gray-600">{work.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RecentWorks;
