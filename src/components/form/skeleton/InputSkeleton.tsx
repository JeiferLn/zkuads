import React from 'react'

const InputSkeleton = () => {
  return (
    <div className='w-full'>
      <div className='w-1/4 h-5 rounded-md bg-white bg-opacity-15 mb-1.5 '></div>
      <div className='w-full h-14 border-2 border-white border-opacity-30 rounded-xl bg-white bg-opacity-20'></div>
    </div>
  )
}

export default InputSkeleton