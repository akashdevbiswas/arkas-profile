import Image, { StaticImageData } from 'next/image'
import React from 'react'
import aboutImage from '@/public/about-image.svg'


const Archive = () => {

    const images:StaticImageData[] = [aboutImage]

  return (
    <div id='archive' className='bg-[#DAC2A0] mt-[50px] md:mt-[100px] pt-4 flex flex-col gap-5'>
        <div className='main__container mx-auto flex flex-col gap-3'>
            <h2 className='w-fit mx-auto text-3xl lg:text-[40px] italiana-regular '>THE ARCHIVE</h2>
            <p className='w-full text-center rubik-regular text-base md:text-[20px]'>Here resides some photos, notes and memoirs associated with the author&apos;s life. As new items become available, this remarkable body of work will evolve while being accessible to all.</p>
        </div>
        <div className='w-full'>
            {
                images.map((image, index) => (
                    <Image width={50} height={50} key={index} src={image} alt="archive" className='object-cover w-auto h-[286px]'/>
                ))
            }
        </div>
    </div>
  )
}

export default Archive