import Image from "next/image";
import React from "react";
import creationImage from "@/public/creations-image.svg";
import { Book } from "@/constants";
import BuyForm from "@/components/BuyForm";
import Heading from "@/components/Heading";

const PurchasePage = () => {
  const { title, writerName, description, price, options, about }: Book = {
    title: "The Season of Crimson Red",
    writerName: "Ritwik Ghosh",
    description: "Personal revolution, Abyss of corruption,  pursuit of truth",
    price: 499,
    options: [
      {
        name: "Hard copy",
        price: 499,
        inStock: true,
      },
      {
        name: "E-book",
        price: 199,
        inStock: false,
      }
    ],
    about:
      "The book tells the story of a personal revolution against the triad of tyranny, a system plagued by the stench of entrenched rot and an ignorance most grim. It is the story of a young investigative journalist searching for truth in the abyss of corruption and violence. Will she be successful in her endeavour, or will the forces of evil overpower her?",
  };

  return (
    <div className="p-[1px]">
      <div className="main__container h-fit top-1/2 left-1/2 flex flex-col md:flex-row justify-between mt-[50px] md:mt-[132px] mx-auto">
        <div className="w-[200px] md:w-[400px] h-[400px] mx-auto md:mx-0">
          <Image
            src={creationImage}
            alt="creation"
            className=" h-full w-full md:w-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 h-fit flex flex-col justify-between p-4 md:p-0">
          <div className="w-full flex-col flex gap-7 font-outfit  text-xl">
            <h1 className="text-4xl">{title}</h1>
            <p className="font-light">{description}</p>
            <h2 className="font-light">by {writerName}</h2>
            <p className="font-outfit font-semibold">Rs {price}</p>
          </div>
          <BuyForm buyOptions={options} />
        </div>
      </div>

      <div className="h-fit mt-[50px] md:mt-[100px] p-[1px]">
        <Heading heading="About the Book" />
        <p className="font-outfit font-light px-4 md:px-0 text-xl mt-[55px] w-full md:w-[60%] text-center mx-auto mb-[50px] md:mb-[90px]">
          {about}
        </p>
      </div>
    </div>
  );
};

export default PurchasePage;
