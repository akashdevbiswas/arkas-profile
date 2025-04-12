import React from "react";

const Heading = ({heading}:{heading:string}) => {
  return (
    <div className="relative h-fit">
      <hr className="w-full border-black absolute top-1/2 -translate-y-1/2 -z-10" />
      <h2 className="italiana-regular text-2xl md:text-4xl lg:text-5xl bg-white mx-auto w-fit px-5">
        {heading}
      </h2>
    </div>
  );
};

export default Heading;
