"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import constants from "@/constants";

const Archive = () => {
  const { gallery } = constants;

  const imageGallary = [...gallery, ...gallery, ...gallery];

  const [translateX, setTranslateX] = useState(0);

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const currWidth = elementRef.current?.getBoundingClientRect().width

    let thresHold;
    if(currWidth && currWidth>1024){
      thresHold = 0.1;
    }else{
      thresHold = 0.01;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: thresHold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [elementRef]);



  const screenWidthElement = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const width = screenWidthElement.current?.getBoundingClientRect().width;

    if (width && width > 900) {
      const interval = setInterval(() => {
        setTranslateX((pre) => pre - 1);
      }, 40);

      return () => clearInterval(interval);
    }

  }, [screenWidthElement]);

  useEffect(() => {
    setInterval(() => {
      setTranslateX(0);
    }, 60000)
  }, [])

  return (
    <div
      ref={elementRef}
      style={{ opacity: `${isVisible ? 1 : 0}` }}
      id="archive"
      className="bg-[#DAC2A0] mt-[50px] md:mt-[153px] pt-4 flex flex-col gap-5 lg:gap-[51px] scroll__appear h-auto"
    >
      <div
        className="main__container mx-auto flex flex-col gap-2">
        <h2 className="w-fit mx-auto text-3xl lg:text-[40px] font-italiana mt-5 ">
          THE ARCHIVE
        </h2>
        <p className="w-[90%] lg:w-[646] mx-auto text-center font-rubik italic font-[300] text-base md:text-xl leading-6">
          Here resides some photos, notes and memoirs associated with the
          author&apos;s life. As new items become available, this remarkable
          body of work will evolve while being accessible to all.
        </p>
      </div>
      <div ref={screenWidthElement} className="w-full md:overflow-hidden">
        <div
          style={{
            transform: `translateX(${translateX}px)`,
          }}
          className="w-full h-auto md:w-auto  md:h-[286px] flex flex-col md:flex-row transition-transform ease-linear"
        >
          {imageGallary.map((image, index) => (
            <Image
              width={200}
              height={200}
              key={index}
              src={image}
              alt="archive"
              className="object-cover h-full w-full md:w-auto "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archive;
