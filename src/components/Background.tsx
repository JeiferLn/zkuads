import React from 'react'

interface BackgroundProps {
    className?: string
    modalBackground?: boolean
}

const Background: React.FC<BackgroundProps> = ({ className, modalBackground }) => {
    return (
        !modalBackground ? (
            <div className={`${className ? className : "fixed"} bg-gradient-to-br from-degrade-dark to-degrade-light w-full h-screen z-[-1]`}>
                <div className='w-52 lg:w-96 h-52 rounded-full blur-3xl bg-gradient-to-tl to-pink from-pink absolute right-[-5rem] lg:right-[20rem] bottom-24 opacity-40 lg:opacity-50'></div>
                <div className='w-52 lg:w-96 h-52 rounded-full blur-3xl bg-gradient-to-tl to-emerald-400 from-emerald-400 absolute left-[-5rem] lg:left-[20rem] top-24 opacity-20 lg:opacity-30'></div>
            </div>
        ) : <div className={`${className ? className : "fixed"} bg-gradient-to-t from-degrade-dark/90 to-[#021b41] w-full h-screen z-[-1]`}></div>)
        
}

export default Background
