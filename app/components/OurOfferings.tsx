import data from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const OurOfferings = () => {
  return (
    <main className='w-full'>
      <div className="flex">
        <div className="flex flex-col items-center justify-center pt-40 pb-24 space-y-8 mx-auto">
          <h1 className='text-[#A56D44] text-2xl lg:text-6xl tracking-wider leading-2.5 uppercase'>OUR OFFERINGS</h1>
          <Image src="/Images/Best Seller.svg" alt="Best Sellers" width={200} height={200} />
        </div>
      </div>

      <div className="grid items-center justify-center md:justify-between gap-6 md:flex mx-12 lg:mx-24 mb-12">
        {data.offerings.map((offer) => (
            <div 
            data-aos="zoom-in" data-aos-duration="1500"
                key={offer.id} 
                className="relative w-48 h-48 md:w-full lg:h-120 overflow-hidden group cursor-pointer"
                >
                {/* Background Image with Scaling Effect */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                    style={{ backgroundImage: `url("/Images/${offer.image}")` }}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 w-full"></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex items-center justify-center text-[#f2f2f2] my-auto
                text-xl lg:text-4xl font-normal leading-2.5 lg:leading-7 tracking-wide text-center">
                    {offer.title}
                </div>
            </div>


        ))}
      </div>
    </main>
  );
}

export default OurOfferings;


              // style={{ backgroundImage: "url('/images/offerings/offering 1.svg')" }}