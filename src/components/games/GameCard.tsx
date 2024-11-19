'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { motion } from 'framer-motion'

interface GameCardProps {
  width?: string
  delay?: number
  image: string
  name: string
}

const GameCard: React.FC<GameCardProps> = ({ width, delay, image, name }) => {
  const router = useRouter()

  return (
    <motion.div 
    className={`relative inline-block ${width ? '' : 'w-44'} h-72 overflow-hidden rounded-[40px] cursor-pointer`} onClick={() => router.push('/game/'+name)}
    initial = {{ opacity: 0, y: 20 }}
    animate = {{ opacity: 1, y: 0 }}
    transition = {{ delay: delay, duration: 0.2 }}
    >
      <Image src={image} className='w-full h-full rounded-xl object-cover absolute' width={500} height={500} alt='default image' />
      <div className='absolute bottom-0 w-full bg-black/60 px-4 py-2 flex justify-between [&>div>p]:text-sm'>
        <div>
          <h1 className='mb-1 text-2xl'>Trickybricks</h1>
          <p>5.000 Pts</p>
          <p>50.000 Pts \ User 1</p>
        </div>
        <div className='text-center'>
          <Image src="/default-pfp.jpg" width={65} height={65} alt='user image' className='rounded-full' />
          <p>User 1</p>
        </div>
      </div>
    </motion.div>
  )
}

export default GameCard