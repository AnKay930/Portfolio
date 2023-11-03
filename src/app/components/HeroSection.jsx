"use client"

import React from 'react'
import Image from 'next/image'
import portfolioImage from '/images/portfolio.png';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
             <h1 className="font-extrabold mb-4 text-4xl sm:text-5xl lg:text-6xl">
                <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>
                Hello I'm, {" "} 
                </span>
                <br />
                <TypeAnimation
      sequence={[
        'Naz',
        1000, 
        'Web Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                </h1>
    <p className='text-white text-base sm:text-lg lg:text-xl mb-6'>
        Web Developer, Designer, Student, Gamer
    </p>
    <div>
        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black font-bold'>Hire Me</button>
        <button className='border border-white mt-3 px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-white hover:text-black font-bold'>Download CV</button>
    </div>
        </div>
       <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
        <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] mt-4 relative'>
        <Image 
        src={portfolioImage}
        alt='Naz'
        width={300}
        height={300}
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        />
        </div>
       </div>
    </div>
    
    </>
  )
}

export default HeroSection