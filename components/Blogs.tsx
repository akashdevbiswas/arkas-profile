"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import constants from "@/constants";
import Heading from "./Heading";

const Blogs = () => {
  const { blogs } = constants;

  return (
    <section className="mt-[50px] md:mt-[150px]">
      <Heading heading="Posts and Blogs" />
      <div
        id="posts"
        className="main__container mx-auto "
      >
        <div className="grid md:grid-cols-3 gap-5 justify-items-center mt-[50px] md:mt-[100px]">
          {blogs.map(({ title, writerName, image, url }, index) => (
            <BlogsCard
              url={url}
              key={index}
              title={title}
              writerName={writerName}
              image={image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogsCard = ({
  className,
  title,
  image,
  url
}: {
  className?: string;
  image: StaticImageData;
  title: string;
  writerName: string;
  index: number;
  url:string
}) => {
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
    <a
      href={url}
      ref={elementRef}
      style={{ opacity: `${isVisible ? 1 : 0}` }}
      className={`scroll__appear md:w-[260px] w-full md:min-h-[326px] md:h-fit pb-5 md:pb-0 rounded-md flex flex-col ${className} drop-shadow-xl bg-white`}
    >
      <div className="w-full h-fit rounded-md">
        <Image
          width={200}
          height={120}
          src={image}
          alt="card"
          className="h-[252px] w-full md:w-[260px] object-cover rounded-t-lg"
        />
      </div>
      <div className="h-full flex flex-col px-4">
        <h2  className="text-lg md:text-xl w-fit mx-auto font-outfit font-semibold text-center ">
          {title}
        </h2>
      </div>
    </a>
  );
};

export default Blogs;
