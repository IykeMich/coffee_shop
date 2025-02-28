import data from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const Benefits = () => {
  return (
<main>
  <div id="benefits" className="flex flex-wrap my-24">
        {data.benefits.map((benefit, index) => (
            <div data-aos="zoom-out" data-aos-duration={1000 + index * 1000} key={benefit.id} className="flex flex-col pb-12 items-center w-1/2 md:w-1/4 gap-y-4 px-2">
                    <Image src={benefit.image} alt={benefit.title} height={60} width={60} className='w-full md:w-12 h-8 md:h-12' />
                    <h1 className="title text-coffee text-xs md:text-sm lg:text-lg xl:text-xl uppercase">{benefit.title}</h1>

                    <div className="text-coffee text-center w-full">
                        <p className='text-xs lg:text-base font-extralight'>{benefit.subtitle}</p>
                    </div>

        </div>
        ))}
  </div>
</main>
  )
}

export default Benefits
