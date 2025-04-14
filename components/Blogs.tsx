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
          {blogs.map(({ title, writerName, image }, index) => (
            <BlogsCard
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
}: {
  className?: string;
  image: StaticImageData;
  title: string;
  writerName: string;
  index: number;
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
    <div
      ref={elementRef}
      style={{ opacity: `${isVisible ? 1 : 0}` }}
      className={`scroll__appear w-[90%] md:w-full h-[324px] pb-5 rounded-md flex flex-col ${className} justify-between drop-shadow-xl bg-white`}
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
      <div className="h-full flex flex-col py-2 px-4">
        <h3 className="text-lg md:text-xl w-fit mx-auto font-outfit font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Blogs;
