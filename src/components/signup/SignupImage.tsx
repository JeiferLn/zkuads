import Image from 'next/image'
import React from 'react'
import ZkuadsLogo from '../zquads/ZkuadsLogo'

const SignupImage = () => {
    return (
        <div className='lg:grid absolute left-0 top-0 w-full h-80 lg:h-full items-center text-center select-none lg:relative'>
            <Image className='absolute top-0 left-0 w-full h-full object-cover opacity-100 brightness-[0.4] rounded-l-2xl' src={'/example-img.jpg'} width={1080} height={1080} alt='image' />
            <div className='relative hidden lg:inline-block'>
                <p className='text-2xl mb-4'>Welcome to</p>
                <ZkuadsLogo className='h-20 inline-block' initial='visible'></ZkuadsLogo>
                <p className='mt-6 text-lg'>Where Gaming Meets P2P Betting!</p>
            </div>
        </div>
    )
}

export default SignupImage
