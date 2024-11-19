import Image from 'next/image'
import React from 'react'

interface GameCardSquareProps {
  classname: string
}

const GameCardSquare: React.FC<GameCardSquareProps> = ({classname}) => {
  return (
    <div className={`${classname} aspect-square rounded-xl relative overflow-hidden`}>
      <Image src="/example-img.png" className='w-full h-full object-cover' width={400} height={400} alt='game-img'></Image>
      <p className='lg:hidden w-full text-center absolute bottom-0 py-1 text-sm bg-black bg-opacity-40'>Tricky Bricks</p>
    </div>
  )
}

export default GameCardSquare
