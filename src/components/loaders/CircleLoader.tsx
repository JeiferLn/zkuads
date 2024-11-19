import React from 'react'

interface CircleLoaderProps {
  className?: string
}

const CircleLoader: React.FC<CircleLoaderProps> = ({ className }) => {
  return (
    <div className={`${className} mx-auto inline-block w-8 h-8 border-5 border-blue-800 border-t-light-pink rounded-full animate-spin`}></div>
  )
}

export default CircleLoader