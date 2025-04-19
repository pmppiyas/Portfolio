import SocialButton from "@/app/_ActionButton/SocialButton";

import bannerImage from "@/app/Assets/banner.jpg";

function Banner() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage.src})`,
          backgroundColor: "#0a101e",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-5xl  font-semibold text-center flex flex-col gap-4">
          Hi, <br></br>
          <span>
            {" "}
            I am{" "}
            <span className="text-primary lg:text-6xl font-bold ">
              Prince Mahmud Piyas
            </span>
          </span>
        </h1>
        <p className="text-sm font-thin  mt-5  md:text-start  leading-7 -tracking-tight mx-5 text-center">
          I am a fullstack web developer. I can provide clean code and pixel
          perfect design and a strong backend fetures.
          <br></br>
          <span>And most prioty for SEO</span>
          <br></br>
          <span>
            I also make website more & more interactive with web animations.
          </span>
        </p>
        <p className="text-md font-thin  max-w-2xl text-center mb-8"></p>

        <SocialButton></SocialButton>
      </div>
    </div>
  );
}

export default Banner;
