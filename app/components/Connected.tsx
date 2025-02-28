import Image from 'next/image';
import React from 'react';

const Connected = () => {
  return (
    <main className="bg-[#f5f1e8] w-full min-h-[60vh] flex flex-col items-center justify-center px-6">
      
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-[#5B1312] text-2xl md:text-4xl tracking-wider uppercase font-semibold">
          Stay Connected
        </h1>

        {/* Separator with Icon */}
        <div className="flex items-center justify-center mt-2">
          <div className="w-12 lg:w-24 h-[1px] bg-[#5B1312]"></div>
          {/* <span className="mx-2 text-[#5B1312] text-lg">🌿</span> */}
          <span className="mx-2 text-[#5B1312] text-lg w-4 lg:w-6"><Image src="/images/rose.svg" alt='rose' width={20} height={20} /> </span>
          <div className="w-12 lg:w-24 h-[1px] bg-[#5B1312]"></div>
        </div>

        {/* Subtitle */}
        <p className="font-light text-[#5B1312] text-sm md:text-lg mt-3 max-w-lg mx-auto">
          Subscribe to our newsletters now and stay up to date with 
          new collections and exclusive offers.
        </p>
      </div>

      {/* Subscribe Form */}
      <div className="w-full max-w-md mt-6">
        <form className="flex border border-[#5B1312] rounded-md overflow-hidden">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 text-[#5B1312] bg-transparent focus:outline-none placeholder-[#5B1312]"
          />
          <button
            type="submit"
            className="bg-[#5B1312] text-[#f5f1e8] px-5 text-sm tracking-wide uppercase font-semibold hover:bg-[#A56D44] transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>

    </main>
  );
};

export default Connected;
