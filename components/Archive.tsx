"use client";
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import constants from '@/constants';


const Archive = () => {


    const {gallery} = constants;

    const [isVisible, setIsVisible] = useState(false);
      const elementRef = useRef(null);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.1 }
        );
    
        if (elementRef.current) {
          observer.observe(elementRef.current);
        }
    
        return () => observer.disconnect();
      }, []);

  return (
    <div ref={elementRef} style={{opacity: `${isVisible?1:0}`}} id='archive' className='bg-[#DAC2A0] mt-[50px] md:mt-[100px] pt-4 flex flex-col gap-5 lg:gap-12 scroll__appear '>
        <div className='main__container mx-auto flex flex-col gap-5'>
            <h2 className='w-fit mx-auto text-3xl lg:text-[40px] italiana-regular mt-5 '>THE ARCHIVE</h2>
            <p className='w-[90%] lg:w-[646] mx-auto text-center rubik-regular text-base md:text-[20px] leading-5 '>Here resides some photos, notes and memoirs associated with the author&apos;s life. As new items become available, this remarkable body of work will evolve while being accessible to all.</p>
        </div>
        <div className='w-full h-auto md:h-[286px] flex flex-col md:flex-row '>
            {
                gallery.map((image, index) => (
                    <Image width={200} height={200} key={index} src={image} alt="archive" className='object-cover h-full w-auto'/>
                ))
            }
        </div>
    </div>
  )
}

export default Archive