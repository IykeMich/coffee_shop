"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for open/close
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#5b1312] lg:hidden p-2 focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-3/4 bg-[#5b1312] text-[#f2f2f2] p-6 shadow-lg z-50"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#f2f2f2]"
            >
              <X size={28} />
            </button>

            {/* Nav Links */}
            <nav className="flex flex-col items-center space-y-6 mt-16 text-lg">
              <Link href="/#menu" className="hover:text-[#f5f1e8]" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="#menu" className="hover:text-[#f5f1e8]" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="#offerings" className="hover:text-[#f5f1e8]" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="#footer" className="hover:text-[#f5f1e8]" onClick={() => setIsOpen(false)}>Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
