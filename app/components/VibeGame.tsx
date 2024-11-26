"use client"

import { useState } from 'react'
import { RefreshCw } from 'lucide-react'
import Card from './Card'
import { Button } from "@/components/ui/button"

const vibes = [
  { front: "Chill", back: "Relaxed and easy-going, perfect for a lazy day." },
  { front: "Energetic", back: "Full of life and ready to take on any challenge!" },
  { front: "Creative", back: "Bursting with ideas and artistic inspiration." },
  { front: "Focused", back: "Laser-sharp concentration for getting things done." },
  { front: "Adventurous", back: "Eager to explore and try new experiences." },
  { front: "Reflective", back: "In a thoughtful mood, pondering life's mysteries." }
]

export default function VibeGame() {
  const [cards, setCards] = useState(vibes.slice(0, 3))
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refreshVibes = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      const newVibes = vibes.sort(() => 0.5 - Math.random()).slice(0, 3)
      setCards(newVibes)
      setIsRefreshing(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-purple-600" style={{ fontFamily: "'Pacifico', cursive" }}>
        what's your vibe?
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {cards.map((vibe, index) => (
          <Card key={index} front={vibe.front} back={vibe.back} />
        ))}
      </div>
      <Button
        className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-purple-600 transition-colors"
        onClick={refreshVibes}
      >
        <RefreshCw size={20} className={isRefreshing ? "animate-spin" : ""} />
        Refresh the vibes
      </Button>
    </div>
  )
}

