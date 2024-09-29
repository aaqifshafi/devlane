"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { Typography } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { circularRevealVariants, contentVariants, childVariants } from '../components/animations/framer';

export default function Page() {
  const containerRef = useRef(null);

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate="visible"
        style={{ scrollSnapAlign: "start", scrollBehavior: "smooth" }}
        className="flex-grow relative h-[100vh]"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-background" />
        <motion.div
          variants={circularRevealVariants}
          className="absolute inset-0 z-10 bg-transition"
        />

        {/* Content layer */}
        <motion.div
          variants={contentVariants}
          className="absolute inset-0 z-20 bg-background"
        >
          {/* Header Section */}
          <motion.div variants={childVariants}>
            <Header />
          </motion.div>

          {/* Container for About and Team, occupying the same space */}
          <div className="sticky top-0 w-full h-screen flex items-center justify-center">
            <div className='size-4/12'>
              <div className='grid grid-cols-2 antialiased'>

                <div className=''>
                  <div>
                    <p className='text-xs font-medium text-gray-900'>Get in Touch</p>
                    <p className='font-semibold text-sm text-neutral-500'>info@devlane.com</p>

                    <div>
                      <p className='text-xs font-medium mt-6 text-gray-900'>Socials</p>
                      <div className='font-semibold text-sm text-neutral-500'>
                        <p className='py-2'>LinkedIn</p>
                        <p className='py-2'>Github</p>
                        <p className='py-2'>Instagram</p>
                        <p className='py-2'>Youtube</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className='text-xs font-medium mb-4 text-gray-900'>Menu</p>
                  <div className='text-2xl font-semibold text-neutral-500'>
                    <p className='py-1 transition-all hover:scale-125'>Services</p>
                    <p className='py-1 transition-all hover:scale-125'>Projects</p>
                    <p className='py-1 transition-all hover:scale-125'>About</p>
                    <p className='py-1 transition-all hover:scale-125'>Contact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Section */}
      <motion.div variants={childVariants}>
        <Footer />
      </motion.div>
    </div>
  )
}