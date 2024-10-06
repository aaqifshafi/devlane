"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Menu from "./Menu";
import logo from "../public/logo.png";

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    rotate: 180,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <nav className="mx-auto p-2 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo}
              alt="Devlane"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
          <div className="px-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <CloseRoundedIcon />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <MenuRoundedIcon />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
