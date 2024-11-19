import Image from 'next/image'
import React from 'react'

function TournamentCard() {
  return (
    <div className='mb-3 p-6 bg-gradient-to-b from-[#021024] to-[#052659] rounded-xl'>
      <div className='flex items-center'>
        <Image src={'/example-img.jpg'} alt='TournamentImage' width={50} height={50} className='rounded-full mr-5'/>
        <div className='w-full'>
          <h1 className='text-2xl'>Tournament</h1>
          <p className='w-full flex justify-between'>Play 50 Games <span>1000 exp</span></p>
        </div>
      </div>

      <div className='mt-2'>
        <div className='relative w-full bg-white h-2 rounded-full'>
            <div className='absolute left-0 top-0 bg-green-500 w-[46%] h-2 rounded-full'/>
        </div>

        <div className='flex justify-around'>
            <p>23/50</p>
            <p>46%</p>
            <p>27 left</p>
        </div>
      </div>
    </div>
  )
}

export default TournamentCard
