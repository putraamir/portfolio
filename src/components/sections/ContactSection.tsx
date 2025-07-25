"use client";

import {
  slideInLeft,
  slideInRight,
  slideUpStagger,
  staggerContainer,
} from "@/components/shared/animations";
import { SectionProps } from "@/components/shared/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const EMAIL = "khairiamir321@gmail.com";

export const ContactSection = ({ isActive }: SectionProps) => {
  const [showToast, setShowToast] = useState(false);

  const handleMailClick = () => {
    setShowToast(true);
  };

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.section
          key="contact-section"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 py-20 px-4 flex items-center z-60"
        >
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              className="text-center"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                variants={slideUpStagger}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Let&apos;s Build Something Amazing
              </motion.h2>
              <motion.div
                variants={slideUpStagger}
                className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"
              />
              <motion.p
                variants={slideUpStagger}
                className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
              >
                I&apos;m always excited to work on new projects and collaborate
                with talented people. Let&apos;s discuss how we can bring your
                ideas to life!
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.a
                  variants={slideInLeft}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${EMAIL}`}
                  onClick={handleMailClick}
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></span>
                </motion.a>

                <motion.a
                  variants={slideInRight}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: 0.1,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-white hover:text-white transition-all duration-300"
                >
                  View GitHub
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Toast Notification */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 z-[9999]"
                role="alert"
              >
                <span className="font-semibold">Email:</span>
                <span className="select-all">{EMAIL}</span>
                <button
                  onClick={() => setShowToast(false)}
                  className="ml-4 text-gray-400 hover:text-white focus:outline-none"
                  aria-label="Close"
                >
                  ×
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
