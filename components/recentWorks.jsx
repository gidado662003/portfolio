"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const recentWorks = [
  {
    title: "E-commerce",
    description: "An e-commerce website built with Next.js and Tailwind CSS.",
    image: "/images/E-commerce/screenshot (1).png",
  },
  {
    title: "Doctor Appointment App",
    description: "A doctor appointment booking app built with modern tools.",
    image: "/images/Doctor Appointment App/screenshot (1).png",
  },
  {
    title: "Recipe",
    description: "A recipe website built with Next.js and Tailwind CSS.",
    image: "/images/Recipe/screenshot (1).png",
  },
];

export default function RecentWorks() {
  return (
    <section className="px-6 md:px-16 lg:px-[73px] py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#36b94c]">Recent Works</h2>
        <p className="text-gray-600 text-sm">Check out some of my projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentWorks.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4 flex flex-col gap-4"
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src={work.image}
                alt={`${work.title} screenshot`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
            <h3 className="text-lg font-semibold text-[#36b94c]">
              {work.title}
            </h3>
            <p className="text-gray-600 text-sm">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
