"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Menu from "./Menu";
import logo from "../public/logo.png";

const MenuIcon = ({ isOpen }) => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      d="M 2 5.5 L 22 5.5"
      animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
    />
    <motion.path
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      d="M 2 12 L 22 12"
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
    />
    <motion.path
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      d="M 2 18.5 L 22 18.5"
      animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
    />
  </motion.svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
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
        <div className="hidden md:flex space-x-4 antialiased">
          <Link href="/services" className="text-gray-800 hover:text-gray-600">
            Services
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600">
            About
          </Link>
          <Link href="/projects" className="text-gray-800 hover:text-gray-600">
            Projects
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </nav>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
