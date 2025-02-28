import { Facebook, Instagram, MessageSquare, Phone, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const email = "ikechukwuogbu321@gmail.com";
    const subject = "Your Subject";
    const body = "Your Message";

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <main id="footer" className='bg-coffee w-full text-[#f5f1e8]'>
        <div>
            <div className="flex flex-col md:flex-row mx-4 md:mx-8 lg:mx-24 pt-24 pb-8 md:pb-12 justify-around gap-12 md:gap-0">
                <div className="logo">
                    <div className="flex space-x-1.5 items-center">
                        <div>
                            <Image src="/images/logo 2.svg" alt='logo' height={60} width={70} 
                            className='text-[#f5f1e8] w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16' /> 
                        </div>
                        <div className='text-[#f5f1e8]'>
                            <h1 className="text-sm md:text-lg lg:text-2xl font-bold tracking-widest">
                                ROASTERY
                            </h1>
                            <h4 className='text-xs md:text-base lg:text-lg font-medium text-center'>Coffee House</h4>
                        </div>
                    </div>
                    <div className="py-4 md:py-8"> <div className="w-28 lg:w-56 h-[1px] bg-[#f5f1e8]"></div> </div>
                    <div className="flex flex-col space-y-1 md:space-y-5 text-[#f5f1e8]">
                        <div className="items-center space-x-3 lg:space-x-5 flex">
                            <Phone className='w-4 md:w-6'/>
                            <Link href="tel:+2349039374531" className='text-xs md:text-sm font-light leading-1 cursor-pointer'>+2349039374531</Link>
                        </div>

                        <div className="items-center space-x-3 lg:space-x-5 flex">
                            <MessageSquare className='w-4 md:w-6'/>
                            
                            <Link href={gmailLink} target="_blank" rel="noopener noreferrer" className='text-xs md:text-sm font-light leading-1 cursor-pointer'>Ikechukwuogbu321@gmail.com</Link>
                        </div>
                            
                    </div>
                    
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="">
                        <h1 className='text-sm md:text-lg lg:text-2xl font-semibold leading-2.5 tracking-wider'>COMPANY</h1>
                    </div>
                    <div className="lists flex flex-col cursor-pointer space-y-1.5">
                        <p className='text-xs lg:text-base'>About us</p>
                        <p className='text-xs lg:text-base'>Media</p>
                        <p className='text-xs lg:text-base'>Cafe Locations</p>
                        <p className='text-xs lg:text-base'>Brew Guide</p>
                        <p className='text-xs lg:text-base'>Contact Us</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="">
                        <h1 className='text-sm md:text-lg lg:text-2xl font-semibold leading-2.5 tracking-wider'>OUR POLICIES</h1>
                    </div>
                    <div className="lists flex flex-col cursor-pointer space-y-1.5">
                        <p className='text-xs lg:text-base'>Terms and Conditions</p>
                        <p className='text-xs lg:text-base'>Privacy Policy</p>
                        <p className='text-xs lg:text-base'>Shipping Policy</p>
                        <p className='text-xs lg:text-base'>Return Policy</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-6 md:mt-0">
                    <div className="">
                        <h1 className='text-sm md:text-lg lg:text-2xl font-semibold leading-2.5 tracking-wider'>GET IN TOUCH</h1>
                    </div>
                    <div className="lists flex cursor-pointer space-x-2 md:space-x-4">
                        <Facebook />
                        <Instagram />
                        <Twitter />
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center w-full mt-2">
            <div className="w-[50%] h-[1px] bg-[#A56D44]"></div>
            {/* <span className="mx-2 text-[#5B1312] text-lg">🌿</span> */}
            <span className="mx-2 text-[#A56D44] text-lg w-4 lg:w-6"><Image src="/images/rose.svg" alt='rose' width={20} height={20} /> </span>
            <div className="w-[50%] h-[1px] bg-[#A56d44]"></div>
        </div>

        <div className="hidden md:flex justify-between items-center py-6 mx-4">
            <p className='text-[8px] lg:text-xs'>Developed with &#x1F9E1; by 
                <span><Link href="tel:+2349039374531">Montana</Link></span></p>
            <p className='text-[8px] lg:text-xs'>© Copyright 2022 | A unit of NISANTPRASHANT</p>
            <p className='text-[8px] lg:text-xs'>Powered by CrawlDepth</p>
        </div>
        <div className="md:hidden">
        <div className="flex justify-between items-center pt-6 pb-3 mx-4 space-x-4">
            <p className='text-[8px] lg:text-xs'>Developed with &#x1F9E1; by Montana</p>
            <p className='text-[8px] lg:text-xs'>Powered by CrawlDepth</p>
        </div>
            <div><p className='text-[8px] lg:text-xs w-full text-center pb-3'>© Copyright 2022 | A unit of NISANTPRASHANT</p></div>
        </div>
    </main>
  )
}

export default Footer
