"use client";
import { Home, User, Book, HeartHandshake, MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";
import {useEffect} from "react"

function Nav({ activeSection }) {
  console.log(activeSection);
  
  const navItems = [
    { icon: Home, hash: "home" },
    { icon: User, hash: "about" },
    { icon: Book, hash: "experience" },
    { icon: HeartHandshake, hash: "services" },
    { icon: MessageSquareText, hash: "contact" },
  ];

  function handlePath(hash) {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    window.history.replaceState(null, "", `/#${hash}`);
  }

  return (
    <motion.div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-8 z-50"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
         {activeSection}
      <div className="bg-[#1f1f1f]/50 backdrop-blur-md px-6 py-4 rounded-full flex justify-center items-center gap-x-6 shadow-lg border border-gray-700">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.hash;

          return (
            <button
              key={index}
              onClick={() => handlePath(item.hash)}

              className={`p-3 cursor-pointer rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-[#444]"
              }`}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Nav;
