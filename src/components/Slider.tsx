"use client"

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import ClassNames from 'embla-carousel-class-names'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'


interface slidesInterface {
    image: string
    text?: string
  }



const Slide= ({image, text} : slidesInterface) => {
    return (
        <div className='embla__slide px-2 lg:px-4 embla__class-names group'>
            <div className='rounded-2xl overflow-hidden h-full w-full relative text-center'>
                <Image className='w-full h-full object-cover object-center relative' src={image} width={1500} height={1500} alt='Example-img' priority/>
               
                <p className='absolute bottom-4 lg:left-[-1rem] w-full text-xl px-6 text-white lg:opacity-0 lg:group-hover:left-0 group-hover:opacity-100 duration-200 select-none'>{text}</p>
            </div>
        </div>
    )
}

const EmblaCarousel = () => {
    const sliderTranslation = useTranslations('Index.Slider');
    let slides: slidesInterface[] = [
    {
        image: '/slider/slide1.png',
    },
    {
        image: '/slider/slide2.png',
    },
    {
        image: '/slider/slide3.png',
    },
    {
        image: '/slider/slide4.png',
    },
    {
        image: '/slider/slide5.png',
    }
    ]

    slides.forEach((slide, index) => {
    slide.text = sliderTranslation(`Slide${index + 1}`)
    })
    const [emblaRef, emblaApi] = useEmblaCarousel({}, [
        Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
        ClassNames(),
    ])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)
        onSelect()
    }, [emblaApi, setScrollSnaps, onSelect])

    return (
        <motion.div 
        className="relative select-none z-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.2, }}
        >
            <div className="overflow-hidden h-[40vh] w-[100vw] ml-[-5vw] lg:ml-[-7.5vw] border-none" ref={emblaRef}>
                <div className="embla__container h-full">
                    {slides.map((slide, index) => (
                        <Slide key={index} image={slide.image} text={slide.text} />
                    ))}
                </div>
            </div>
            <div className="relative text-center w-full mt-2">
                {scrollSnaps.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 inline-block mx-1 rounded-full bg-[#5F9BFF] transition-colors ${index === selectedIndex ? 'opacity-100' : 'opacity-10'}`}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default EmblaCarousel