"use client";
import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, when: "beforeChildren" },
  },
};

const overlayVariants = {
  hidden: { y: 0 },
  visible: { y: "-100%", transition: { duration: 0.7, ease: "easeInOut" } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 0.5,
    },
  },
};

const Page = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full h-full"
    >
      <motion.div
        variants={overlayVariants}
        className="absolute top-0 left-0 w-full h-full bg-transition z-10"
      />

      <motion.div
        variants={contentVariants}
        className="relative z-20 w-full h-full"
      >
        <Header />
        <h1 className="text-3xl font-bold text-center m-80">
          Hello from Devlane
        </h1>
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Page;
