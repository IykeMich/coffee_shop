import { Button } from "@/components/ui/button";
import data from "@/lib/data";
import { BadgePlus, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <main className="flex flex-col bg-[#f5f1e8]">
      <div className="empty bg-coffee h-2 md:h-5 w-full"></div>
      <nav className=" nav-contents hidden md:flex justify-between my-4 mx-8">
        <div className="Logo_and_Links flex space-x-4 items-center">
          <Image src="./images/Logo.svg" alt="Logo" height={50} width={50} />
          <div className="links space-x-4 lg:space-x-8">
            {data.navLinks.map((link) => (
              <Link key={link.name} href={link.url}
              className="cursor-pointer text-black hover:text-coffee hover:underline
              text-sm lg:text-lg font-semibold transition-color duration-100 ease"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="logins flex space-x-3 lg:space-x-8 items-center">
            <Search className="cursor-pointer" />
            <BadgePlus className="cursor-pointer" />
            <Button className="custom-button md:text-sm text-base">LOG IN</Button>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
