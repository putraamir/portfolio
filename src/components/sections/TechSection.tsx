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
        className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 h-full rounded-xl p-3 sm:p-4 lg:p-6 hover:bg-gray-800/50 transition-all duration-300 hover:border-gray-600 hover:shadow-2xl hover:shadow-cyan-500/10"
        style={{
          animationFillMode: "both",
        }}
      >
        <div className="text-center mb-3 sm:mb-4 lg:mb-6">
          <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 lg:mb-3 hover:scale-125 hover:rotate-180 transition-transform duration-500 cursor-default">
            {category.icon}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {category.title}
          </h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3 lg:space-y-3 lg:gap-0">
          {category.techs.map((tech: string) => (
            <div
              key={tech}
              className="flex items-center space-x-2 cursor-default hover:translate-x-1 hover:scale-105 transition-transform duration-200"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full hover:scale-150 transition-transform duration-200 flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 truncate">
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
          className="relative py-8 sm:py-12 lg:py-20 px-4 flex items-center z-50 min-h-screen"
        >
          <div className="max-w-6xl mx-auto w-full">
            {/* Header with staggered animation */}
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
