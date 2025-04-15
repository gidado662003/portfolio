"use client";
import {
  Home,
  User,
  Book,
  HeartHandshake,
  MessageSquareText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Nav({ activeSection }) {
  const navItems = [
    { icon: Home, hash: "home" },
    { icon: User, hash: "about" },
    { icon: Book, hash: "experience" },
    { icon: HeartHandshake, hash: "services" },
    { icon: MessageSquareText, hash: "contact" },
  ];

  const handlePath = (hash) => {
    const element = document.getElementById(hash);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `/#${hash}`);
  };

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative">
        <motion.div
          className="absolute h-[2px] bg-white/20 top-1/2 left-0 right-0 -translate-y-1/2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="flex items-center justify-center gap-8 px-6 py-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.hash;

            return (
              <motion.div
                key={index}
                className="relative z-10 "
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <button
                  onClick={() => handlePath(item.hash)}
                  className={`cursor-pointer p-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/40 hover:text-white/80"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>

                {isActive && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                    layoutId="navIndicator"
                    transition={{ type: "spring", bounce: 0.4 }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Nav;
