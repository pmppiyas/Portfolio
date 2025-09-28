"use client";

import bannerImage from "@/assets/banner.jpg";
import lottie1 from "@/assets/react.json";
import SocialButton from '@/components/ActionButton/SocialButton';
import Lottie from "lottie-react";

function Banner() {
  return (
    <div id="home" className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage.src})`,
          backgroundColor: "#0a101e",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Lottie Animation */}
        <div className="absolute top-17/20 lg:top-18/20 left-1/2 transform -translate-x-1/2 -translate-y-1/2   w-[100px] h-[100px] opacity-60">
          <Lottie animationData={lottie1} loop={true} />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-center flex flex-col gap-4">
          Hi, I am <br />
          <span className=" text-5xl lg:text-7xl font-bold text-center">
            Prince Mahmud Piyas
          </span>
        </h1>
        <p className="text-lg leading-relaxed font-thin my-5 -tracking-tight mx-5 text-center">
          A junior web developer. I can provide clean code and pixel-perfect
          design and strong backend features.
          <br />
          <span>And most priority for SEO</span>
          <br />
          <span>
            I also make websites more interactive with web animations.
          </span>
        </p>

        <SocialButton />
      </div>
    </div>
  );
}

export default Banner;
