import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <main
      id="journal"
      className="bg-coffee h-[30vh] md:h-[45vh] relative overflow-x-hidden overflow-y-hidden"
    >
      <div className="mx-8 lg:mx-16 xl:mx-36">
        <div className="flex flex-col md:mx-8 lg:mx-42 space-x-8">
          <div className="my-4 lg:my-12 space-y-8">
            <h4 className="text-[#f2f2f2] text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-medium">
              Coffee House
            </h4>

            <Button
              className="border border-gray-100 text-[#f2f2f2] animate-pulse cursor-pointer
                    font-normal leading-3.5 tracking-wide p-4 md:!p-6"
            >
              <p> VIEW JOURNALS &gt; </p>
            </Button>
          </div>
          <div className="hidden md:block absolute md:-right-60 lg:-right-42 xl:right-12 -top-12 translate-1.5">
            {" "}
            {/* Adjusted top position to allow overflow */}
            <Image
              src="/images/banner.svg"
              alt="banner"
              height={150}
              width={150}
              className="md:w-[51%] lg:w-[66%] xl:w-[74%] h-auto object-cover bg-center"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
