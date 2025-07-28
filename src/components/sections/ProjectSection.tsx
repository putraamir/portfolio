"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AndroidMockup } from "react-device-mockup";
import { Project, ProjectSectionProps } from "@/components/shared/types";
import { useMediaQuery } from "react-responsive";

export const ProjectSection = ({
  isActive,
  projectNumber,
}: ProjectSectionProps) => {
  // Projects data
  const projects: Project[] = [
    {
      title: "KongsiMakan",
      description:
        "A comprehensive food sharing platform that connects users to share meals and discover local food options. Features real-time chat, location-based services, and focuses to reduce food waste.",
      tech: [
        "React Native",
        "Node.js",
        "Supabase",
        "PostgreSQL",
        "Firebase",
        "Google AdMob",
        "Google Maps API",
      ],
      images: [
        "/KongsiMakan/Screenshot_20250725-225627.png",
        "/KongsiMakan/Screenshot_20250725-230022.png",
        "/KongsiMakan/Screenshot_20250725-230047.png",
        "/KongsiMakan/Screenshot_20250725-230246.png",
      ],
      color: "from-green-500 to-emerald-600",
      statusbarColor: "#FFFFFF",
      type: "mobile",
    },
    {
      title: "CodeQuest",
      description:
        "A gamified mobile application focused for primary school students to learn and practice their python programming skills.",
      tech: ["React Native", "Expo", "TypeScript", "Tailwind CSS"],
      images: [
        "/CodeQuest/Screenshot_20250725-230349.png",
        "/CodeQuest/Screenshot_20250725-230436.png",
        "/CodeQuest/Screenshot_20250725-230443.png",
        "/CodeQuest/Screenshot_20250725-230449.png",
      ],
      color: "from-blue-500 to-cyan-600",
      statusbarColor: "#e9a100",
      type: "mobile",
    },
    {
      title: "SmartIQ",
      description:
        "A Learning Management System for SmartIQ, a tuition center that provides tuition for pre-school, primary and secondary school students.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
      images: [
        "/SmartIQ/Screenshot 2025-07-25 232808.png",
        "/SmartIQ/Screenshot 2025-07-25 232844.png",
        "/SmartIQ/Screenshot 2025-07-25 232928.png",
      ],
      color: "from-purple-500 to-pink-600",
      statusbarColor: "#FFFFFF",
      type: "web",
    },
  ];

  const project = projects[projectNumber - 1];

  const isMD = useMediaQuery({ query: "(max-width: 768px)" });
  const isLG = useMediaQuery({ query: "(max-width: 1024px)" });

  // Device Mockup Component
  const DeviceMockup = ({
    image,
    alt,
    type,
    statusbarColor,
  }: {
    image: string;
    alt: string;
    type: string;
    statusbarColor: string;
  }) => {
    if (type === "web") {
      return (
        <motion.div
          whileHover={{ scale: 1.02, rotateY: 5 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="mx-auto"
        >
          {/* Custom laptop frame */}
          <div className="relative bg-gray-800 rounded-xl p-3 shadow-2xl">
            <div className="bg-gray-900 rounded-lg p-1.5">
              <div className="bg-black rounded-md overflow-hidden">
                <Image
                  src={image}
                  alt={alt}
                  width={400}
                  height={200}
                  className=" w-full h-auto"
                />
              </div>
            </div>
            {/* Laptop base */}
            <div className="h-5 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl"></div>
          </div>
        </motion.div>
      );
    } else {
      // Mobile mockup - smaller size for 2x2 grid
      return (
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="flex justify-center"
        >
          <AndroidMockup
            screenWidth={isMD ? 150 : 200}
            frameColor="#1f2937"
            statusbarColor={statusbarColor}
            hideNavBar
            hideStatusBar
          >
            <Image
              src={image}
              alt={alt}
              width={isMD ? 150 : 200}
              height={isMD ? 300 : 400}
              className="object-cover w-full h-full"
            />
          </AndroidMockup>
        </motion.div>
      );
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.section
          key={`project-section-${projectNumber}`}
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative px-4 flex items-center z-30 min-h-screen"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div
              className={`grid lg:grid-cols-2 gap-4 xl:gap:12 items-center ${
                projectNumber % 2 === 0 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <motion.div
                className={`space-y-6 ${
                  projectNumber % 2 === 0 ? "lg:col-start-2" : ""
                }`}
                initial={{
                  opacity: 0,
                  x: projectNumber % 2 === 1 ? -100 : 100,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  delay: 0.2,
                }}
              >
                <motion.div
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${project.color} text-sm font-semibold tracking-wider uppercase`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Project {projectNumber}
                </motion.div>
                <motion.h3
                  className="text-3xl md:text-5xl font-bold text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, type: "spring", damping: 20 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 text-base md:text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div
                    className={`overflow-x-auto scrollbar-hide ${
                      isMD ? "w-screen" : "w-full"
                    }`}
                    onWheel={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const container = e.currentTarget;
                      container.scrollLeft += e.deltaY > 0 ? 50 : -50;
                    }}
                    onTouchStart={(e) => {
                      e.stopPropagation();
                    }}
                    onTouchMove={(e) => {
                      e.stopPropagation();
                    }}
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <div className="flex gap-2 md:gap-3 md:flex-wrap pb-2 w-fit pr-12">
                      {project.tech.map((tech: string, techIndex: number) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.7 + techIndex * 0.05,
                            type: "spring",
                            damping: 20,
                          }}
                          className="px-3 py-1 md:px-4 md:py-2 bg-gray-800/50 text-gray-300 rounded-full text-xs md:text-sm border border-gray-700 hover:bg-gray-700/50 transition-all duration-300 flex-shrink-0 whitespace-nowrap"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className={`${
                  projectNumber % 2 === 0 ? "lg:col-start-1 lg:row-start-1" : ""
                } flex items-center justify-center lg:mt-0`}
                initial={{
                  opacity: 0,
                  x: projectNumber % 2 === 1 ? 100 : -100,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  delay: 0.4,
                }}
              >
                {project.type === "web" ? (
                  // Horizontal scrollable web images
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", damping: 20 }}
                  >
                    <div
                      className="overflow-x-auto scrollbar-hide"
                      onWheel={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const container = e.currentTarget;
                        container.scrollLeft += e.deltaY > 0 ? 50 : -50;
                      }}
                      onTouchStart={(e) => {
                        e.stopPropagation();
                      }}
                      onTouchMove={(e) => {
                        e.stopPropagation();
                      }}
                      onTouchEnd={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <div className="flex gap-6 pb-4">
                        {project.images
                          .slice(0, isLG ? 4 : 1)
                          .map((image: string, imgIndex: number) => (
                            <motion.div
                              key={imgIndex}
                              className="flex-shrink-0"
                              initial={{ opacity: 0, scale: 0.6, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{
                                type: "spring",
                                damping: 20,
                                stiffness: 100,
                                delay: 0.7 + imgIndex * 0.1,
                              }}
                            >
                              <DeviceMockup
                                image={image}
                                alt={`${project.title} screenshot ${
                                  imgIndex + 1
                                }`}
                                type={project.type}
                                statusbarColor={project.statusbarColor}
                              />
                            </motion.div>
                          ))}
                        {/* Peek effect for multiple web images */}
                        {project.images.length > 1 && (
                          <div className="w-32 flex-shrink-0"></div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    {/* Mobile horizontal scroll on small screens */}
                    <motion.div
                      className="lg:hidden w-screen"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, type: "spring", damping: 20 }}
                    >
                      <div
                        className="overflow-x-auto scrollbar-hide"
                        onWheel={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const container = e.currentTarget;
                          container.scrollLeft += e.deltaY > 0 ? 50 : -50;
                        }}
                        onTouchStart={(e) => {
                          e.stopPropagation();
                        }}
                        onTouchMove={(e) => {
                          e.stopPropagation();
                        }}
                        onTouchEnd={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <div className="flex gap-24 ml-24 -pr-24 pb-4">
                          {project.images.map(
                            (image: string, imgIndex: number) => (
                              <motion.div
                                key={imgIndex}
                                className="flex-shrink-0 w-32"
                                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                  type: "spring",
                                  damping: 20,
                                  stiffness: 100,
                                  delay: 0.7 + imgIndex * 0.1,
                                }}
                              >
                                <DeviceMockup
                                  image={image}
                                  alt={`${project.title} screenshot ${
                                    imgIndex + 1
                                  }`}
                                  type={project.type}
                                  statusbarColor={project.statusbarColor}
                                />
                              </motion.div>
                            )
                          )}
                          {/* Peek effect - add some padding to show half of next item */}
                          <div className="w-16 flex-shrink-0"></div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Grid layout for larger screens */}
                    <motion.div
                      className="hidden lg:grid grid-cols-2  gap-4 max-w-sm lg:max-w-lg mx-auto"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, type: "spring", damping: 20 }}
                    >
                      {project.images
                        .slice(0, 4)
                        .map((image: string, imgIndex: number) => (
                          <motion.div
                            key={imgIndex}
                            initial={{ opacity: 0, scale: 0.6, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                              type: "spring",
                              damping: 20,
                              stiffness: 100,
                              delay: 0.7 + imgIndex * 0.1,
                            }}
                          >
                            <DeviceMockup
                              image={image}
                              alt={`${project.title} screenshot ${
                                imgIndex + 1
                              }`}
                              type={project.type}
                              statusbarColor={project.statusbarColor}
                            />
                          </motion.div>
                        ))}
                    </motion.div>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
