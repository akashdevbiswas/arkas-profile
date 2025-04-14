"use client";

import { BuyOption } from "@/constants";
import React, { useState } from "react";
import Button from "./Button";

const BuyForm = ({ buyOptions }: { buyOptions: BuyOption[] }) => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOnClick = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className="w-full flex flex-col gap-10 mt-[20px]">
      <div className="h-auto flex flex-wrap gap-4">
        {buyOptions.map((bO, index) => (
          <Options
            key={index}
            buyOptions={bO}
            onClick={() => handleOnClick(index)}
            selected={index === selectedOption}
          />
        ))}
      </div>
      <Button btnType="secondary" buttonName="Purchase" className="w-full" />
    </div>
  );
};

const Options = ({
  buyOptions,
  onClick,
  selected,
}: {
  buyOptions: BuyOption;
  onClick: () => void;
  selected: boolean;
}) => {
  const { name, price, inStock } = buyOptions;
  return (
    <div
      onClick={onClick}
      className={`border ${
        selected ? "border-[#87CEEB] border-2" : "border-[#D0D0D0]"
      } w-[150px] flex flex-col items-center rounded-md`}
    >
        
      <p className="font-outfit text-xl font-semibold w-fit pt-[10px]">
        {name}
      </p>
      <p className="w-fit">Rs {price}</p>
      <p
        className={`font-outfit text-[16px] font-light bottom-0 right-[10%] w-full text-right px-2  ${
          inStock ? "text-green-600" : "text-red-600"
        }`}
      >
        {inStock ? "In stock" : "Out of stock"}
      </p>
    </div>
  );
};

export default BuyForm;
