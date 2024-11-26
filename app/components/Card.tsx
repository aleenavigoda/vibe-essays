"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

interface CardProps {
  front: string
  back: string
}

export default function Card({ front, back }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  const handleReadClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open('#', '_blank')
  }

  return (
    <div className="w-64 h-96 perspective-1000">
      <motion.div
        className="w-full h-full rounded-xl shadow-lg bg-white flex flex-col items-center justify-center p-4 border-2 border-purple-200 cursor-pointer"
        onClick={handleCardClick}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="absolute w-full h-full flex items-center justify-center backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h2 className="text-2xl font-bold text-purple-600">{front}</h2>
        </motion.div>
        <motion.div
          className="absolute w-full h-full flex flex-col items-center justify-between p-4 backface-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="text-lg text-center mb-4">{back}</p>
          <Button
            onClick={handleReadClick}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-colors duration-200"
          >
            Read More
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

