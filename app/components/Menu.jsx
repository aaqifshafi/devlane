"use client";
import { motion } from "framer-motion";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const menuVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const Menu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-900 hover:text-gray-700"
        aria-label="Close menu"
      >
        <CloseRoundedIcon size={24} />
      </button>

      <div className="w-4/12">
        <div className="grid grid-cols-2 antialiased">
          <div>
            <div>
              <p className="text-xs font-medium text-gray-900">Get in Touch</p>
              <p className="font-semibold text-sm text-neutral-500">
                info@devlane.com
              </p>

              <div>
                <p className="text-xs font-medium mt-6 text-gray-900">
                  Socials
                </p>
                <div className="font-semibold text-sm text-neutral-500">
                  <p className="py-2">LinkedIn</p>
                  <p className="py-2">Github</p>
                  <p className="py-2">Instagram</p>
                  <p className="py-2">Youtube</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium mb-4 text-gray-900">Menu</p>
            <div className="text-2xl font-semibold text-neutral-500">
              <p className="py-1 transition-all hover:scale-125">Services</p>
              <p className="py-1 transition-all hover:scale-125">Projects</p>
              <p className="py-1 transition-all hover:scale-125">About</p>
              <p className="py-1 transition-all hover:scale-125">Contact</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
