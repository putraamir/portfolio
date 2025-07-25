"use client";

import { SectionProps, TechCategory } from "@/components/shared/types";
import { AnimatePresence, motion } from "framer-motion";

export const TechSection = ({ isActive }: SectionProps) => {
  const techCategories: TechCategory[] = [
    {
      title: "Frontend",
      icon: "🎨",
      techs: [
        "React/React Native",
        "Vue.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      icon: "⚡",
      techs: ["Node.js", "Express", "Prisma ORM", "REST APIs", "PostgreSQL"],
    },
    {
      title: "Tools",
      icon: "🔧",
      techs: ["Git", "Figma", "VS Code", "Postman"],
    },
  ];

  const TechCard = ({
    category,
  }: {
    category: TechCategory;
    index: number;
  }) => {
    return (
      <motion.div
        whileHover={{
          scale: 1.05,
          y: -10,
          transition: { type: "spring", damping: 20, stiffness: 300 },
        }}
        className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 h-full rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:border-gray-600 hover:shadow-2xl hover:shadow-cyan-500/10"
        style={{
          animationFillMode: "both",
        }}
      >
        <div className="text-center mb-6">
          <div className="text-4xl mb-3 hover:scale-125 hover:rotate-180 transition-transform duration-500 cursor-default">
            {category.icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{category.title}</h3>
        </div>
        <div className="space-y-3">
          {category.techs.map((tech: string) => (
            <div
              key={tech}
              className="flex items-center space-x-3 cursor-default hover:translate-x-2 hover:scale-105 transition-transform duration-200"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full hover:scale-150 transition-transform duration-200" />
              <span className="text-gray-300 hover:text-white transition-colors duration-200">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.section
          key="tech-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative py-20 px-4 flex items-center z-50 min-h-screen"
        >
          <div className="max-w-6xl mx-auto w-full">
            {/* Header with staggered animation */}
            <div className="text-center mb-12 md:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6"
              >
                Tech Stack
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto origin-center"
              />
            </div>

            {/* Tech Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {techCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="h-full"
                >
                  <TechCard
                    key={category.title}
                    category={category}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
