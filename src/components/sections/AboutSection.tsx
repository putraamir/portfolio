"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SectionProps } from "@/components/shared/types";
import {
  slideInLeft,
  slideInRight,
  staggerContainer,
  slideUpStagger,
} from "@/components/shared/animations";

export const AboutSection = ({ isActive }: SectionProps) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.section
          key="about-section"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 py-20 px-4 flex items-center z-20"
        >
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
            >
              <motion.h2
                variants={slideUpStagger}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                About Me
              </motion.h2>
              <motion.div
                variants={slideUpStagger}
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
              />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                animate="visible"
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  delay: 0.2,
                }}
              >
                <motion.h3
                  className="text-2xl md:text-3xl font-semibold text-white mb-6"
                  variants={slideUpStagger}
                >
                  Crafting Digital Experiences
                </motion.h3>
                <motion.p
                  className="text-gray-300 text-lg leading-relaxed mb-6"
                  variants={slideUpStagger}
                >
                  I&apos;m a passionate software engineer who loves turning
                  ideas into reality through code. With experience as a Front
                  End Developer at Bitlab Digital and Mobile App Developer at
                  UniSZA, I focus on creating intuitive, performant, and
                  beautiful applications.
                </motion.p>
                <motion.p
                  className="text-gray-300 text-lg leading-relaxed"
                  variants={slideUpStagger}
                >
                  During my 6-month internship at Bitlab Digital and 3-month
                  internship at UniSZA, I&apos;ve gained valuable hands-on
                  experience in both web and mobile development. I enjoy
                  tackling complex problems and delivering solutions that make a
                  real impact.
                </motion.p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  delay: 0.4,
                }}
                className="space-y-6"
              >
                <motion.div
                  variants={slideInRight}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                  }}
                  className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-white mb-3">
                    🎓 Education
                  </h4>
                  <p className="text-gray-300">
                    Bachelor&apos;s Degree in Software Engineering
                  </p>
                </motion.div>
                <motion.div
                  variants={slideInRight}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: 0.1,
                  }}
                  className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-white mb-3">
                    💡 Focus Areas
                  </h4>
                  <p className="text-gray-300">
                    Full Stack Development, Mobile/Web Apps, UI/UX Design
                  </p>
                </motion.div>
                <motion.div
                  variants={slideInRight}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: 0.2,
                  }}
                  className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-white mb-3">
                    🚀 Mission
                  </h4>
                  <p className="text-gray-300">
                    Building user-centric applications that solve real problems
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
