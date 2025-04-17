"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import creationsImage from "@/public/creations-image.svg";
import Heading from "./Heading";

const Creations = () => {
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
      style={{ opacity: isVisible ? 1 : 0 }}
      ref={elementRef}
      id="creations"
      className="scroll__appear my-[20px] md:my-[200px]"
    >
      <Heading heading="Creations of the Author"/>
      <div className="mt-[40px] md:mt-[60px] lg:mt-[160px] gradient_bg2 relative py-[40px] md:py-[80px] flex lg:block flex-col items-center gap-5">
        <div className="relative lg:absolute w-[60%] lg:w-[300px] lg:h-[500px] xl:w-[354px] xl:h-[586px] lg:right-[15%] lg:top-1/2 lg:-translate-y-1/2 lg:rotate-[10deg]">
          <div className="w-full h-full relative before:absolute before:w-full before:h-full before:bg-black before:top-0 before:left-0 before:translate-x-[10px] before:-z-10 before:rounded-2xl ">
            <Image
              src={creationsImage}
              alt="creations"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
        <div className="main__container w-fit mx-auto flex flex-col gap-5 my-auto text-center md:text-left px-[10px] md:px-0 ">
          <h3 className="font-outfit font-medium text-xl tracking-[5px]">
            THE FIRST CREATION
          </h3>
          <p className="w-[90%] md:w-[58%] leading-5 md:leading-7 font-outfit text-base md:text-[20px] font-light mx-auto md:mx-0">
            The book tells the story of a personal revolution against the triad
            of tyranny, a system plagued by the stench of entrenched rot and an
            ignorance most grim. It is the story of a young investigative
            journalist searching for truth in the abyss of corruption and
            violence. Will she be successful in her endeavour, or will the
            forces of evil overpower her?
          </p>
          <Button
            btnType="primary"
            buttonName={"Purchase"}
            className="w-[60%]  mx-auto md:mx-0 md:w-[181px]"
            url="/purchase"
          />
        </div>
      </div>
    </div>
  );
};

export default Creations;
