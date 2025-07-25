"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ContainerTextFlip } from "@/components/TextFlip";
import { SectionProps } from "@/components/shared/types";

export const HeroSection = ({ isActive }: SectionProps) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.section
          key="hero-section"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center overflow-hidden z-10"
        >
          <div className="flex items-center justify-center w-full flex-col px-4 h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center z-20"
            >
              <motion.h1
                className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-6xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Putra Amir
              </motion.h1>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-6"
              >
                <ContainerTextFlip
                  words={[
                    "Full Stack Developer",
                    "Mobile/Web Developer",
                    "UI/UX Designer",
                    "Software Engineer",
                    "Freelancer",
                  ]}
                  className="text-2xl md:text-4xl"
                />
              </motion.div>

              <motion.p
                className="max-w-2xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center leading-relaxed"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Fresh graduate software engineer with a passion for building
                modern, user-friendly web and mobile applications using
                cutting-edge technologies.
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
