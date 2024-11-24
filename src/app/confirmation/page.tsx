'use client'

import { motion } from 'framer-motion'
import { Snowfall } from 'react-snowfall'
import { Heart } from 'lucide-react'
import { Footer } from '../../components/Footer'

export default function Confirmation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-100 to-pink-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <Snowfall 
        color="white"
        snowflakeCount={200}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full"
      >
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3 
            }}
          >
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-3xl font-bold text-red-500 mb-6">See You There!</h1>
          
          <div className="relative w-full aspect-[4/3] mb-6">
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=1CwE8JXwjRTY-ZYYEKHxMQ_RmlbYvQ2E&ehbc=2E312F" 
              width="100%" 
              height="100%" 
              className="rounded-lg shadow-md"
              style={{ border: 0 }}
            />
          </div>

          <motion.p
            className="text-2xl text-red-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I Love You ❤️
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="absolute"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: '2rem' }}
      >
        <Heart className="text-red-500 w-8 h-8" />
      </motion.div>
      <Footer />
    </main>
  )
}

