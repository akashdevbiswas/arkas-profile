import Image from "next/image";
import heroImage from "@/public/hero-image.jpg";
import { About, Archive, Creations, Reviews } from "@/components";
import { Blogs } from "@/components";

export default function HomePage() {
  return (
    <>
      <div className="h-[500px] lg:h-[786px] w-full relative">
        <Image
          className="object-cover w-full h-full"
          alt="hero-image"
          src={heroImage}
          priority
        />
        <div className="fade-in__animation opacity-0 w-fit absolute top-7/12 left-1/2 -translate-1/2 flex flex-col gap-6">
          <h1 className=" mx-auto text-nowrap uppercase md:normal-case text-white font-italiana w-full md:w-fit text-center text-4xl -translate-x-3 md:text-6xl xl:text-[96px]">
            Ritwik Ghosh
          </h1>
        </div>
      </div>
      <div className="relative gradient_bg back w-full -mt-[15px] lg:-mt-[150px] flex-col flex justify-end">
        <About />
        <Reviews />
      </div>
      <Creations />
      <Blogs />
      <Archive />
    </>
  );
}
