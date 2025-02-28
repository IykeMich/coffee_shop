import { Button } from "@/components/ui/button"
import Image from "next/image"

const OurCafe = () => {
  return (
    <main className='h-100vh flex'>
        <div className='OurCafe bg-coffee md:flex-2'>
            <div className=" flex flex-col mx-8 md:mx-12 lg:mx-24 my-10 lg:my-24 text-center justify-center items-center space-y-8">
                <h1 className='text-[#f2f2f2] text-xl lg:text-6xl leading-3.5 tracking-wider font-semibold'>OUR CAFE</h1>
                <Image src="/Images/Best Seller.svg" alt="Best Sellers" width={200} height={200} />

                <div data-aos="fade-down" data-aos-duration="2000" className="pg-4 md:py-8">
                    <p className='font-medium text-[#f2f2f2] text-base md:text-xl tracking-wider leading-relaxed'>
                    Find Roastery coffee house near you to experience finest coffee selections, 
                    live roasting spaces and cafes that are designed to give calming  coffee estate banglow experience.
                    </p>
                </div>

                <Button data-aos="fade-up" data-aos-duration="1500" className='border border-gray-100 text-[#f2f2f2] animate-pulse cursor-pointer
                font-normal leading-3.5 tracking-wide p-4 md:!p-6'>
                    <p> EXPLORE CAFES &gt; </p>
                </Button>
            </div>
        </div>
        <div className="hidden: md:flex-1 bg-cover bg-center" 
        style={{backgroundImage: "url('/images/ourcafe.svg')"}}>

        </div>
    </main>
  )
}

export default OurCafe
