import Link from "next/link";
import { SlArrowUp } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="bg-custom shadow-md  w-full py-8 px-4 relative mx-auto container pt-12 space-y-6">
      <div className="w-full flex items-center justify-center  flex-col pb-[16px]  md:pb-[20px] ">
        <div className="text-xl md:text-3xl lg:text-4xl font-bold flex items-center justify-evenly   text-center space-x-3  w-full ">
          <div className="flex items-center ">
            <span className="text-primary/90"></span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
              Royally Inspired
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-primary/90"></span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent text-center">
              Engagingly Crafted
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-primary/90"></span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
              Seamlessly Optimized
            </span>
          </div>
        </div>
      </div>
      <hr />

      <div className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full mx-auto ">
        <p> {""}</p>
        <p className="text-[0.9rem] text-gray-400 text-center ">
          © 2025 All Rights Reserved || Prince Mahmud Piyas
        </p>

        <Link href="#home">
          <SlArrowUp className="p-2 rounded-full border border-gray-100 cursor-pointer text-[2rem] font-bold text-gray-100" />
        </Link>
      </div>


    </footer>
  );
};

export default Footer;
