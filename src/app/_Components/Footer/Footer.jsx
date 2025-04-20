import React from "react";

// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SlArrowUp } from "react-icons/sl";
import Link from "next/link";
import SocialButton from "@/app/_ActionButton/SocialButton";
import { HashLink } from "react-router-hash-link";

const ResponsiveFooter = () => {
  return (
    <footer className="bg-bg-custom shadow-md  w-full p-3 md:p-4 relative mx-auto ">
      <div className="w-full flex items-center justify-center  flex-col pb-[60px]  md:pb-[110px] space-y-6">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-evenly   text-center space-x-4  w-full ">
          <div className="flex items-center ">
            <span className="text-primary/90"></span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
              Royally Inspired
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-primary/90"></span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
              Engagingly Crafted
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-primary/90"></span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent border-2">
              Seamlessly Optimized
            </span>
          </div>
        </div>

        <SocialButton></SocialButton>
      </div>

      <div className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full">
        <p className="text-[0.9rem] text-gray-300">
          © 2021 All Rights Reserved
        </p>

        <Link href="#home">
          <SlArrowUp className="p-2 rounded-full border border-gray-300 cursor-pointer text-[2rem] text-gray-300" />
        </Link>
      </div>

      <img
        src="https://i.ibb.co/zNk7XT4/Rectangle-97.png"
        alt="background/image"
        className="absolute bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl mx-auto"
      />
      <img
        src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
        alt="background/image"
        className="absolute bottom-0 left-0 right-0 z-10 rounded-b-xl mx-auto"
      />
    </footer>
  );
};

export default ResponsiveFooter;
