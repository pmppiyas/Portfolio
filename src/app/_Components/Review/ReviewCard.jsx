import Image from "next/image";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = ({ name, title, heading, description, image }) => {
  return (
    <div className="w-full h-[300px] bg-bg-custom text-white shadow-2xl rounded-lg px-4 relative border-1 group">
      <FaQuoteRight className="text-[4rem] text-[#e9e9e959] group-hover:text-primary/70 absolute top-[10%] right-[10%]" />
      <div className="flex items-center gap-4 mt-4">
        <Image
          src={image}
          alt={name}
          className="w-[40px] h-[40px] object-cover rounded-full"
        ></Image>
        <div className="z-10 ">
          <h2 className="text-[1rem] font-[500] ">{name}</h2>
          <p className="text-[0.9rem] text-[#e9e9e9]/70">{title}</p>
        </div>
      </div>
      <h2 className="text-[1.5rem] capitalize font-[500] mt-5 leading-[30px] group-hover:text-primary/70 mb-4">
        {heading}
      </h2>
      <p className="text-base leading-relaxed font-thin tracking-wide  lg:text-left">
        {" "}
        {description}
      </p>
    </div>
  );
};

export default Testimonial;
