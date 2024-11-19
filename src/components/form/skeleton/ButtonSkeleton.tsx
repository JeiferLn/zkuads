import React from 'react'

interface ButtonSkeleton {
  className?: string
}

const ButtonSkeleton: React.FC<ButtonSkeleton> = ({className}) => {
  return (
    <div className={`${className} bg-white bg-opacity-20 h-12 w-full rounded-xl`}></div>
  )
}

export default ButtonSkeleton
