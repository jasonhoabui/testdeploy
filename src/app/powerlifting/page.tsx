'use client';

import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'

export default function Powerlifting() {
  return (
    <div className="max-w-6xl mx-auto px-16">
      <div className="mt-48 flex gap-16">
        {/* Left column - Stats */}
        <div className="flex-1">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl mb-16 text-gray-400"
          >
            i hover around 150-160lbs bw.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl mb-8 text-gray-400">total:</h2>
            <div className="space-y-4 text-2xl text-gray-400">
              <p>squat | 305 lbs</p>
              <p>bench | 225 lbs</p>
              <p>deadlift | 355 lbs</p>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl text-gray-400"
          >
            i plan to register for my first powerlifting meet in 2025 after i get my total up a bit higher.
          </motion.p>
        </div>

        {/* Right column - Instagram Link */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <motion.a
              href="https://www.instagram.com/freedatboyjayson"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 text-gray-400 hover:text-gray-300 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <FaInstagram className="text-8xl mb-4" />
              <span className="text-2xl">follow my lifting journey</span>
              <span className="text-xl">@freedatboyjayson</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 