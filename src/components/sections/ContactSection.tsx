"use client";

import {
  slideInLeft,
  slideInRight,
  slideUpStagger,
  staggerContainer,
} from "@/components/shared/animations";
import { SectionProps } from "@/components/shared/types";
import { AnimatePresence, motion } from "framer-motion";
import { MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

const EMAIL = "khairiamir321@gmail.com";
const PHONE_NUMBER = "+601160948517"; // Replace with your actual phone number
const WHATSAPP_MESSAGE = "Hi! I'd like to discuss a project with you.";

export const ContactSection = ({ isActive }: SectionProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${EMAIL}`;
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
          className="relative py-20 px-4 flex items-center z-60 min-h-screen"
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
                className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6"
              >
                Let&apos;s Connect
              </motion.h2>
              <motion.div
                variants={slideUpStagger}
                className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"
              />
              <motion.p
                variants={slideUpStagger}
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Ready to collaborate? Reach out through any of these channels.
              </motion.p>

              {/* Contact Information */}
              <motion.div
                variants={staggerContainer}
                className="space-y-6 mb-8"
              >
                <motion.div
                  variants={slideUpStagger}
                  className="flex items-center justify-center gap-3 text-gray-300"
                >
                  <span className="text-2xl">
                    <MailIcon />
                  </span>
                  <span className="text-base md:text-lg">{EMAIL}</span>
                </motion.div>

                <motion.div
                  variants={slideUpStagger}
                  className="flex items-center justify-center gap-3 text-gray-300"
                >
                  <span className="text-2xl">
                    <PhoneIcon />
                  </span>
                  <span className="text-base md:text-lg">{PHONE_NUMBER}</span>
                </motion.div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={staggerContainer}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  variants={slideInLeft}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppClick}
                  className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base flex items-center gap-2"
                >
                  <span className="text-xl">
                    <Image
                      src="/whatsapp.png"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                    />
                  </span>
                  WhatsApp
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></span>
                </motion.button>

                <motion.button
                  variants={slideInRight}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: 0.1,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEmailClick}
                  className="px-6 py-3 md:px-8 md:py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-white hover:text-white transition-all duration-300 text-sm md:text-base flex items-center gap-2"
                >
                  <span className="text-xl">
                    <Image
                      src="/gmail.png"
                      alt="Email"
                      width={20}
                      height={20}
                    />
                  </span>
                  Send Email
                </motion.button>

                <motion.a
                  variants={slideInRight}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: 0.2,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/putraamir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 md:px-8 md:py-4 border-2 border-gray-600 text-black font-semibold rounded-full bg-white hover:border-white hover:text-white transition-all duration-300 text-sm md:text-base flex items-center gap-2"
                >
                  <span className="text-xl">
                    <Image
                      src="/github.png"
                      alt="GitHub"
                      width={20}
                      height={20}
                    />
                  </span>
                  GitHub
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
