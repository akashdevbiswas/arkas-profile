import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Button from './Button'
import constants from '@/constants'

const Blogs = () => {

  const {blogs} = constants;

  return (
    <div id='posts' className='main__container mx-auto mt-[150px]'>
      <div className='grid md:grid-cols-3 gap-5 justify-items-center'>
        {blogs.map(({title, writerName, image}, index) => (
          <BlogsCard key={index} title={title} writerName={writerName} image={image} index={index}/>
        ))}
      </div>
    </div>
  )
}

const BlogsCard = ({
  className,
  title,
  writerName,
  image,
  index
}:{
  className?:string,
  image:StaticImageData,
  title:string,
  writerName:string,
  index:number
  
}) => {
  return (
    <div className={`w-full h-[320px] flex flex-col ${className} justify-between drop-shadow-xl p-2 bg-white`}>
      <div className='w-full h-fit'>
      <Image src={image} alt="card" className="h-[200px] w-full object-cover"/>
      <h3 className='text-lg md:text-xl font-outfit'>{title}</h3>
      <p className='text-sm md:text-lg font-outfit'>{writerName}</p>
      </div>
      <Button btnType='primary' buttonName='Read more' className='w-full' url={`/blog/${index}`}/>
    </div>
  )
}

export default Blogs