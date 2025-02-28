import Image from 'next/image'
import React from 'react'

const BrewGuide = () => {
  return (
    <main className='bg-coffee w-full'>
        <div className="flex flex-col items-center justify-center pt-24 md:pt-32 pb-12 md:pb-24 space-y-8 mx-auto">
            <h1 className='text-[#f2f2f2] text-2xl lg:text-6xl tracking-wider leading-2.5 uppercase'>BREW GUIDE</h1>
            <Image src="/Images/Best Seller.svg" alt="Best Sellers" width={200} height={200} />
        </div>

        {/* Video Player Section */}
        <div className="flex justify-center items-center cursor-pointer mx-2 pb-8">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/g2OurULdW6U?si=XNLyal5MwFXYikd3" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full max-w-3xl h-64 md:h-96 rounded-lg shadow-lg cursor-pointer"
          ></iframe>
        </div>
    </main>
  )
}

export default BrewGuide

// src="https://www.youtube.com/embed/g2OurULdW6U?si=XNLyal5MwFXYikd3"
