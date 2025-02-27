import { Button } from "@/components/ui/button"
import Image from "next/image"

const OurCafe = () => {
  return (
    <main className='h-100vh flex'>
        <div className='OurCafe bg-coffee md:flex-2'>
            <div className=" flex flex-col mx-24 my-24 text-center justify-center items-center space-y-8">
                <h1 className='text-[#f2f2f2] text-xl lg:text-6xl leading-3.5 tracking-wider font-semibold'>OUR CAFE</h1>
                <Image src="/Images/Best Seller.svg" alt="Best Sellers" width={200} height={200} />

                <div className="py-8">
                    <p className='font-medium text-[#f2f2f2] text-base md:text-xl tracking-wider leading-relaxed'>
                    Find Roastery coffee house near you to experience finest coffee selections, 
                    live roasting spaces and cafes that are designed to give calming  coffee estate banglow experience.
                    </p>
                </div>

                <Button className='border border-gray-100 text-[#f2f2f2] animate-pulse cursor-pointer
                font-normal leading-3.5 tracking-wide'>
                    <p> EXPLORE CAFES &gt; </p>
                </Button>
            </div>
        </div>
        <div className="hidden: md:flex-1 relative h-[85vh] bg-cover bg-center" 
        style={{backgroundImage: "url('/images/ourcafe.svg')"}}>

        </div>
    </main>
  )
}

export default OurCafe
