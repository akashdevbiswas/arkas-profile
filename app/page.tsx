import Image from "next/image";
import heroImage from "@/public/hero-image.jpg";
import { About, Archive, Creations, Reviews } from "@/components";
import { Blogs } from "@/components";
import Link from "next/link";

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
        <div className="fade-in__animation opacity-0 w-fit absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-3">
          <h1 className=" mx-auto text-nowrap text-white italiana-regular w-fit text-center text-5xl md:text-6xl xl:text-[96px]">
            Ritwik Ghosh
          </h1>
          <div className="w-fit flex italica-regular text-white mx-auto md:hidden nav__links-mobile">
            <Link href={"#about"} className="border-r-2 border-white px-2">
              About
            </Link>
            <Link href={"#quotes"} className="border-r-2 border-white px-2">
              Quotes
            </Link>
            <Link href={"#creations"} className="border-r-2 border-white px-2">
              Books
            </Link>
            <Link href={"#posts"} className="border-r-2 border-white px-2">
              Posts
            </Link>
            <Link href={"#archive"} className="px-2">
              Archive
            </Link>
          </div>
        </div>
      </div>
      <div className="relative gradient_bg back w-full -mt-[75px] lg:-mt-[150px] flex-col flex justify-end">
        <About />
        <Reviews />
      </div>
      <Creations />
      <Blogs />
      <Archive />
    </>
  );
}
