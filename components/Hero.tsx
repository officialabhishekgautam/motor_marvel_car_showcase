"use client";

import Image from 'next/image'
import CustomButton from './CustomButton'


const Hero = () => {
  const handleScroll = () => {
    
  }


  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>Find, book, or rent a car <span className='hero__title2'>quickly and easily!</span></h1>

            <p className='hero__subtitle'>Streamline your car rental experince with our effortless booking process.</p>

            <CustomButton
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-12"
                handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src='/hero.png' alt='hero' fill className='object-contain'/>
            </div>
            <div className='hero__image-overlay'></div>  
        </div>
    </div>
  )
}

export default Hero