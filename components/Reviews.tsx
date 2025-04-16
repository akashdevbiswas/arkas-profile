"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import comma from "@/public/comma.svg";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import constants from "@/constants";

const Reviews = () => {
  const { reviews } = constants;

  const [translateX, setTranslateX] = useState(0);

  const [disableButton, setDisableButton] = useState({
    right: false,
    left: true,
  });

  const ref = useRef<HTMLParagraphElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const [width,setWidth] = useState(0);


  useEffect(()=>{

    const width = ref.current?.getBoundingClientRect().width;

    if(width){
      setWidth(+width);
    }

  },[]);


  const handleRightClick = () => {
    const width = ref.current?.getBoundingClientRect().width;

    if (width) {
      const totalWidth = width * reviews.length;

      if (translateX === totalWidth) {
        return;
      } else {
        setDisableButton({
          left: false,
          right: false,
        });
      }

      setTranslateX((prev) => {
        const newX = prev - width;
        if (totalWidth + (newX - width) === 0) {
          setDisableButton({
            left: false,
            right: true,
          });
        }

        const percentage = Math.abs(newX)/width;
        setActiveIndex(Math.floor(percentage));

        return newX;
      });
    }
  };

  const handleLeftClick = () => {
    const width = ref.current?.getBoundingClientRect().width;
    if (width) {
      if (translateX === 0) {
        return;
      } else if (translateX + width === 0) {
        setDisableButton({
          left: true,
          right: false,
        });
      } else {
        setDisableButton({
          left: false,
          right: false,
        });
      }
      setTranslateX((prev) => {
        const newX = prev + width;
        const percentage = Math.abs(newX)/width;
        setActiveIndex(Math.floor(percentage));
        return newX;
      });
    }
  };

  //   Apply the fade in animation
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
      id="quotes"
      style={{
        opacity: isVisible ? 1 : 0,
      }}
      className={`scroll__appear w-full h-[300px] md:h-[450px] flex flex-col gap-10 lg:gap-[70px] py-4 md:py-10 mt-[50px] md:mt-[70px]`}
    >
      <div className="w-[60px] md:w-[90px] lg:w-[120px] xl:w-fit mx-auto">
        <Image alt="comma" src={comma} className="w-full object-cover" />
      </div>
      <div className="flex flex-col gap-10 lg:gap-[70px]">
        <div className="relative">
          <button
            disabled={disableButton.left}
            onClick={handleLeftClick}
            className="quote-button left-[4%] md:left-[10%] "
          >
            <MdArrowBackIosNew
              className={`text-xl md:text-5xl ${
                disableButton.left ? "opacity-50" : ""
              } text-[#0D86C8]`}
            />
          </button>
          <button
            disabled={disableButton.right}
            onClick={handleRightClick}
            className=" right-[4%] md:right-[10%] quote-button"
          >
            <MdArrowForwardIos
              className={`text-xl md:text-5xl ${
                disableButton.right ? "opacity-50" : ""
              } text-[#0D86C8]`}
            />
          </button>
          <div
            ref={ref}
            className="main__container mx-auto overflow-hidden h-auto"
          >
            <div
              className="w-fit flex items-center transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {reviews.map((review, index) => (
                <p
                style={{width: `${width}px`}}
                  className="text-xl md:text-[32px] font-italiana text-center px-[40px] md:px-[10px]"
                  key={index}
                >
                  <q>{review}</q>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-fit flex mx-auto gap-[5px]">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`h-[7px] w-[7px] rounded-full ${activeIndex === index ? "bg-[#0D86C8]" : "bg-[#B5B5B5]"} `}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
