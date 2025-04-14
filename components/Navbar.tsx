"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();



  return (
    <nav className={`main__container mx-auto h-auto md:items-center flex justify-between px-4`}>
      <Link href={"/"} className="cursor-pointer mt-4 md:mt-[27px]">
        <h1 className={`text-[27px] ml-3 italiana-regular italiana-regular `}>
          Ritwik Ghosh
        </h1>
      </Link>

      { pathname !=='/purchase' && <span
        className="mt-4 md:mt-[27px] md:hidden"
        onClick={() =>{
          setOpen(true);
          document.body.style.overflow= "hidden";
        }}
      >
        <GiHamburgerMenu className="text-3xl" />
      </span>}

      <div className="nav__links md:mt-[27px]">
        <a href="#about">About</a>
        <a href="#quotes">Quotes</a>
        <a href="#books">Books</a>
        <a href="#posts">Posts</a>
        <a href="#archive">Archive</a>
      </div>
      <div className={`transition-all absolute h-screen -z-10 bg-white opacity-40 ease-in-out right-0 duration-1000 ${open? 'translate-x-0 w-full':'translate-x-full w-0'}`}>

      </div>

      <div
        onClick={()=>{
          console.log("Hell")
          setOpen(pre=>!pre)
          document.body.style.overflow = "auto";
        }}
        className={`${
          open ? "w-[80%]" : "translate-x-full"
        } w-0 flex right-0 absolute flex-col items-end gap-20 transition-all duration-1000 h-screen py-8 bg-[#282626] overflow-hidden text-white`}
      >
        <div className="w-fit mr-6">
          <IoMdClose className="text-4xl"/>
        </div>
        <div className="flex flex-col items-center font-outfit ham__nav mx-auto w-full gap-8">
          <a href="#about">About</a>
          <a href="#quotes">Quotes</a>
          <a href="#books">Books</a>
          <a href="#posts">Posts</a>
          <a href="#archive">Archive</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
