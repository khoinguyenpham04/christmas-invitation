'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Snowfall } from 'react-snowfall'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Footer } from '../components/Footer'

const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false })

export default function InvitationPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const router = useRouter()

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true)
    }
  }

  return (
    <main className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <Snowfall 
        color="white"
        snowflakeCount={250}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />

      {/* Envelope container */}
      <div 
        className="relative w-full max-w-2xl aspect-[16/9] cursor-pointer" 
        onClick={handleEnvelopeClick}
        style={{ perspective: '1000px' }}
      >
        {/* Envelope body */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg shadow-lg overflow-hidden">
          {/* Texture overlay */}
          <div className="absolute inset-0 bg-repeat opacity-10" 
               style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
                 backgroundSize: '100px 100px'
               }}
          />

          {/* Enhanced shadow */}
          <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
          {/* Bottom left triangle */}
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-pink-300 to-pink-400" 
               style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }} />
          
          {/* Bottom right triangle */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-pink-300 to-pink-400" 
               style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
          
          {/* Center triangle */}
          <div className="absolute inset-0 bg-gradient-to-b from-pink-300 to-pink-400" 
               style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0)' }} />

          {/* Envelope border and address */}
          <div className="absolute inset-0 border border-pink-400 rounded-lg opacity-50" />
          {!isOpen && (
            <div className="absolute top-1/4 left-0 right-0 text-center z-10" aria-hidden={isOpen}>
              <p className="font-bold text-white text-2xl mb-1 text-shadow-sm">To: Maisie</p>
              <p className="font-bold text-white text-2xl text-shadow-sm">From: Noah</p>
            </div>
          )}


          {/* Envelope flap */}
          <motion.div 
            className="absolute inset-x-0 top-0 h-1/2 bg-red-400 origin-top"
            initial={false}
            animate={{ 
              rotateX: isOpen ? -180 : 0,
              zIndex: isOpen ? 1 : 2
            }}
            transition={{ duration: 0.5 }}
            style={{ 
              transformOrigin: 'top',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }}
          >
            {/* Shadow effect for flap */}
            <div className="absolute inset-0 bg-black opacity-10" />
          </motion.div>
        </div>

        {/* Letter/Invitation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="p-4 flex flex-col items-center justify-center text-center w-full h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.5, 
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                <h1 className="text-2xl font-bold text-red-500 mb-2">Dear Maisie</h1>
                <div className="w-[300px] h-[300px] mb-2">
                  <video
                    width="200"
                    height="200"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-lg"
                  >
                    <source src="/theodore-seville-alvin-and-the-chipmunks.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Would you join me for a magical evening at the Christmas Market? 
                  Let&apos;s create some festive memories together! ✨🎄
                </p>
                <motion.button
                  className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-red-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowConfetti(true)
                    setTimeout(() => setShowConfetti(false), 5000) // Stop confetti after 5 seconds
                    router.push('/select-datetime')
                  }}
                >
                  Open Your Invitation
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click prompt */}
      {!isOpen && (
        <motion.p
          className="mt-8 text-red-500 font-medium"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Click to open
        </motion.p>
      )}
      {showConfetti && (
        <ReactConfetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={500}
        />
      )}
      <Footer />
    </main>
  )
}

