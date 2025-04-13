"use client";
import React from 'react'
import Link from 'next/link'


const Navbar = () => {


  return (
    <nav className={`main__container mx-auto h-auto flex  items-center justify-between mt-4 md:mt-[27px] px-4 overflow-y-hidden`}>
        <Link href={'/'} className='cursor-pointer'><h1 className={`text-xl md:text-3xl italiana-regular italiana-regular`}>Ritwik Ghosh</h1></Link>
        <div className='nav__links'>
            <a href='#about'>About</a>
            <a href='#quotes'>Quotes</a>
            <a href='#books'>Books</a>
            <a href='#posts'>Posts</a>
            <a href='#archive'>Archive</a>
        </div>
    </nav>
  )
}

export default Navbar