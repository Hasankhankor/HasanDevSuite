'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'

const WORDS = [
  {
    text: 'Convertor',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#34d399] to-[#10b981]' // Green gradient
  },
  {
    text: 'Calculator',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#6366f1]' // Blue to Indigo gradient
  },
  {
    text: 'Generator',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] to-[#d946ef]' // Purple to Pink gradient
  },
  {
    text: 'Tester',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#06b6d4] to-[#0ea5e9]' // Cyan to Light Blue gradient
  }
]


export function Hero() {
  return (
<div className='my-12 space-y-8 bg-neutral-800 p-8 rounded-lg shadow-lg'>
  <motion.div
    className='will-change-[transform,opacity] space-y-4'
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className='text-3xl md:text-4xl font-bold tracking-wide space-x-2 text-white'>
      <span>Collection of</span>
      <FlipWords words={WORDS} />
    </h1>
    <p className='leading-8 text-muted-foreground tracking-wide text-gray-300'>
      Explore our curated selection of highly recommended online tools, available for free.
    </p>
    <Button
      variant='gooeyLeft'
      size='lg'
      className='text-lg font-semibold tracking-wider'
    >
      <Link href='#get-started'>Get Started</Link>
    </Button>
  </motion.div>
</div>


  )
}
