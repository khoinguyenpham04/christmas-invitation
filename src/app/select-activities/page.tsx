'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Snowfall } from 'react-snowfall'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { Footer } from '../../components/Footer'
import dynamic from 'next/dynamic'
const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false })

const activities = [
  { name: 'Hot Chocolate', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=300&q=80' },
  { name: 'Waffles', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=300&q=80' },
  { name: 'Watch Movies', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=300&q=80' },
  { name: 'Ice Skating', image: 'https://images.unsplash.com/photo-1608422050646-a6f9e4b74f7e?auto=format&fit=crop&w=300&q=80' },
  { name: 'Christmas Shopping', image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=300&q=80' },
  { name: 'Carousel Ride', image: 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?auto=format&fit=crop&w=300&q=80' },
  { name: 'Gingerbread Making', image: 'https://images.unsplash.com/photo-1607920592519-bab4d7db727d?auto=format&fit=crop&w=300&q=80' },
  { name: 'Carol Singing', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=300&q=80' },
  { name: 'Gift Wrapping', image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=300&q=80' },
]

export default function SelectActivities() {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])
  const router = useRouter()
  const [showConfetti, setShowConfetti] = useState(false)

  const toggleActivity = (activity: string) => {
    setSelectedActivities(prev => 
      prev.includes(activity) 
        ? prev.filter(a => a !== activity)
        : [...prev, activity]
    )
  }

  const handleSubmit = () => {
    console.log('Selected activities:', selectedActivities)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000) // Stop confetti after 5 seconds
    router.push('/confirmation')
  }

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
        <h1 className="text-3xl font-bold text-red-500 mb-6 text-center">Choose Our Activities</h1>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.name}
              className={`relative cursor-pointer rounded-lg overflow-hidden ${
                selectedActivities.includes(activity.name) ? 'ring-4 ring-red-500' : ''
              }`}
              onClick={() => toggleActivity(activity.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={activity.image}
                alt={activity.name}
                width={300}
                height={200}
                className="object-cover w-full h-40"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <p className="text-white text-center font-semibold">{activity.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <Button 
          onClick={handleSubmit}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Confirm Activities
        </Button>
      </motion.div>
      <Footer />
      {showConfetti && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
        />
      )}
    </main>
  )
}

