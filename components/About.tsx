"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import aboutImage from "@/public/about-image.svg";

const About = () => {
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
      id="about"
      className="scroll__appear flex flex-col-reverse md:flex-row w-full main__container -mt-[30px] md:-mt-[30px] h-fit md:h-[550px] mx-auto"
    >
      <div className="w-full md:w-1/2">
        <Image
          height={300}
          width={150}
          alt="about"
          src={aboutImage}
          className=" w-full h-full max-h-[450px] md:max-h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center gap-4 md:gap-8 py-[10px] md:pt-[40px] h-full">
        <h2 className="text-3xl md:text-[32px] italiana-regular mt-10 md:mt-0">
          About Me
        </h2>
        <div className="w-[85%] flex flex-col gap-3 md:gap-5">
          <p className="font-rubik font-light text-base lg:text-[18px] text-center leading-5">
            The author is a novelist, doctor & environmentalist who writes on
            issues most relevant but yet underrepresented in the current social
            and political discourse. His focus on love, loss & everything in
            between brings to the front, a vibrant riot of colourful emotions ;
            somewhat leaning towards the darker tones. The author said of his
            own writing :
          </p>
          <p className="font-rubik italic font-light text-base lg:text-[18px] text-center leading-5">
            “My writing is a testament to my relentless belief in portrayal of
            stories that matter. Through writing I express my most threadbare
            thoughts, emotions and aspirations.”{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
