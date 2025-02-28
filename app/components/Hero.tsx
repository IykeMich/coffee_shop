import React from 'react'
// import {motion} from "motion/react"
// import  {motion}  from "framer-motion";

const Hero = () => {
  return (
    <main>
        <div className="relative h-[85vh] bg-cover bg-center"
        style={{backgroundImage: "url('/images/Hero.svg')"}}
        >
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div 
            className=" leading-2.5 tracking-wide md:tracking-widest
                text-[#f5f1e8]
            relative flex items-center justify-center h-full flex-col">
                <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-6xl md:text-8xl font-bold">
                    ROASTERY
                </h1>
                <h4 data-aos="zoom-in" data-aos-duration="2000"
                className='text-4xl md:text-6xl font-medium'>Coffee House</h4>
            </div>

        </div>
    </main>
  )
}

export default Hero
