'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Snowfall } from 'react-snowfall'
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Heart, Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Footer } from '../../components/Footer'

export default function SelectDateTime() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState<string>('18:00')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Selected date:', date)
    console.log('Selected time:', time)
    router.push('/select-activities')
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
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
      >
        <h1 className="text-3xl font-bold text-red-500 mb-6 text-center">Choose Our Date</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 flex flex-col items-center">
            <label className="block text-sm font-medium text-gray-700">Select a Date</label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border mx-auto"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Select a Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
            <Heart className="mr-2 h-4 w-4" /> Confirm Our Date
          </Button>
        </form>
      </motion.div>

      <motion.div
        className="mt-4 text-red-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Heart className="h-6 w-6" />
      </motion.div>
      <Footer />
    </main>
  )
}

