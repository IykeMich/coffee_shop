import { Button } from '@/components/ui/button'
import data from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const BestSeller = () => {
  return (
    <main className='bg-[#f6f1e5] mb-8'>
        {/* Partners */}
        <div className="grid grid-cols-2 md:flex gap-4 pt-16 pb:24 md:pt-12 mx-auto items-center justify-between">
            {data.partners.map((partner) => (
                <Image key={partner.name} src={partner.url} alt='partner' height={150} width={150} 
                className='w-full md:w-24 h-24'/>
            ))}
        </div>

        <div className="flex flex-col items-center justify-center pt-40 pb-24 space-y-8">
            <h1 className='text-[#A56D44] text-2xl lg:text-6xl tracking-wider leading-2.5'>OUR BEST SELLERS</h1>
            <Image src="/Images/BestSeller.svg" alt="Best Sellers" width={200} height={200} />
        </div>

        <div id='menu' className="product-row grid grid-cols-2 md:gird-cols-3 lg:grid-cols-4 gap-4 md:gap-8 pt-8 pb-8 justify-between">
            {data.products.map((product, index) => (        
                <div data-aos="zoom-in" data-aos-duration={1000 + index * 500} className="card rounded-md" key={product.id}>
                    <Image src={product.imageUrl} alt={product.name} height={200} width={200} className='w-full border-none' />
                    <div className="productInfo flex-grow pt-6 border-r border-l rounded-b-md">
                        <div className="px-2 md:px-4">  
                            <h6 className='cursor-pointer text-coffee text-base md:text-xl font-semibold line-clamp-1'>{product.name}</h6>

                            <div className="flex justify-between text-coffee py-2 md:py-6 text-lg xl:text-xl font-semibold md:leading-2.5">
                                    <p>${product.price}</p>
                                    <p>{product.size} <span className='text-base xl:text-lg'> mgs</span></p>
                            </div>
                        </div>
                        
                        <Button className="select text-center custom-button w-full mt-3 md:mt-6 rounded-none">
                            <h1 className='text-sm lg:text-lg leading-normal lg:leading-3.5 tracking-tight lg:tracking-wider font-normal'>SELECT OPTION</h1>
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    </main>
  )
}

export default BestSeller
