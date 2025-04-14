import {
  BadgeCheck,
  Code,
  Database,
  Cpu,
  Server,
  LayoutTemplate,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const categories = [
    {
      title: "Frontend Development",
      icon: <LayoutTemplate className="w-5 h-5" />,
      skills: [
        { name: "HTML", level: 90, icon: "🟧" },
        { name: "CSS", level: 85, icon: "🟦" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "TypeScript", level: 85, icon: "🔵" },
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 80, icon: "⏭️" },
        { name: "Redux", level: 75, icon: "🔄" },
        { name: "Tailwind CSS", level: 85, icon: "🌀" },
        { name: "Styled Components", level: 80, icon: "💅" },
      ],
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express", level: 80, icon: "🚂" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "MySQL", level: 70, icon: "🐬" },
        { name: "PostgreSQL", level: 70, icon: "🐘" },
        { name: "GraphQL", level: 65, icon: "📊" },
      ],
      color: "from-purple-600 to-purple-800",
    },
    {
      title: "DevOps & Tools",
      icon: <GitBranch className="w-5 h-5" />,
      skills: [
        { name: "Git", level: 20, icon: "🐙" },
        { name: "Docker", level: 7, icon: "🐳" },
        { name: "AWS", level: 6, icon: "☁️" },
        { name: "CI/CD", level: 6, icon: "🔄" },
        { name: "Linux", level: 5, icon: "🐧" },
        { name: "Vercel", level: 40, icon: "▲" },
      ],
      color: "from-green-600 to-green-800",
    },
    {
      title: "Other Skills",
      icon: <Cpu className="w-5 h-5" />,
      skills: [
        { name: "REST APIs", level: 5, icon: "🔗" },
        { name: "Jest", level: 7, icon: "🃏" },
        { name: "Webpack", level: 12, icon: "📦" },
        { name: "Figma", level: 4, icon: "✏️" },
        { name: "Agile", level: 8, icon: "🏃" },
        { name: "Scrum", level: 1, icon: "🔄" },
      ],
      color: "from-orange-600 to-orange-800",
    },
  ];

  const getLevelColor = (level) => {
    if (level >= 85) return "bg-emerald-500";
    if (level >= 70) return "bg-blue-500";
    if (level >= 55) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getLevelText = (level) => {
    if (level >= 85) return "Expert";
    if (level >= 70) return "Advanced";
    if (level >= 55) return "Intermediate";
    if (level < 10) return "No experience";
    return "Beginner";
  };

  return (
    <motion.div
      id="experience"
      className="p-6 sm:p-10 max-w-7xl mx-auto"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
      ref={ref}
    >
      <div className="text-center mb-12">
        <motion.p
          className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Skills & Expertise
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          My Technical Proficiency
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Here's a comprehensive overview of my technical skills and experience
          levels across different domains.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-2 rounded-lg bg-opacity-20 ${category.color
                  .replace("from-", "bg-")
                  .replace(" to-", "-")}`}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                {category.title}
              </h3>
            </div>

            <motion.div
              className="grid grid-cols-1 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group relative overflow-hidden"
                  variants={itemVariants}
                >
                  <div
                    className={`p-4 rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-md bg-gradient-to-r ${category.color} bg-opacity-80 group-hover:bg-opacity-100`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{skill.icon}</span>
                        <h4 className="font-medium text-white">{skill.name}</h4>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getLevelColor(
                          skill.level
                        )} text-white`}
                      >
                        {getLevelText(skill.level)}
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getLevelColor(
                          skill.level
                        )}`}
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>

                    <div className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Years of Experience Banner */}
      <motion.div
        className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">5+ Years</h3>
            <p className="opacity-90">of professional development experience</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <Code className="w-5 h-5" />
              <span>100+ Projects</span>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <Database className="w-5 h-5" />
              <span>50K+ Users</span>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <Server className="w-5 h-5" />
              <span>10+ Production Apps</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Experience;
