/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

import { FaQuoteRight } from "react-icons/fa";

const Testimonial = ({ name, title, description, image }: { name: string, title: string, description: string, image: any }) => {
  return (
    <div className=" w-full h-[220px] md:h-[250px] bg-bg-custom text-white shadow-2xl rounded-lg px-4 relative border-1 group hover:border-mine transition-all duration-300 flex flex-col justify-center items-start ">
      <FaQuoteRight className="text-[4rem] text-[#e9e9e959] group-hover:text-mine absolute top-[10%] right-[10%]" />
      <div className="flex items-center gap-4 mt-4">
        <Image
          src={image}
          alt={name}
          className="w-[40px] h-[40px] object-cover rounded-full"
        ></Image>
        <div className="z-10 ">
          <h2 className="text-[1rem] font-[500] opacity-80">{name}</h2>
          <p className="text-[0.9rem] opacity-80">{title}</p>
        </div>
      </div>

      <p className=" md:text-xl leading-relaxed font-thin tracking-wide  lg:text-left text-center text-[#e9e9e9]/90 mt-10">
        {" "}
        {description}
      </p>
    </div>
  );
};

export default Testimonial;
