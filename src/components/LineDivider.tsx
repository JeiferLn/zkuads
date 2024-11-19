import React from 'react'

interface LineDivider {
    text?: string;
    className?: string;
}

const LineDivider: React.FC<LineDivider> = ({ text, className }) => {
    return (
        <div className={`${className} relative flex justify-center items-center`}>
            <hr className='border-none w-full h-[1px] bg-white/60 opacity-70' />
            <div className='mx-2 font-normal text-xs'>
                {text}
            </div>
            <hr className='border-none w-full h-[1px] bg-white/60 opacity-70' />
        </div>
    )
}

export default LineDivider