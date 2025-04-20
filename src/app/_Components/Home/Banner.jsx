import SocialButton from "@/app/_ActionButton/SocialButton";

import bannerImage from "@/app/Assets/banner.jpg";

function Banner() {
  return (
    <div id="home" className="relative h-screen w-full ">
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
      </div>

      {/* Text Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-5xl  font-semibold text-center flex flex-col gap-4">
          Hi, I am <br></br>
          <span>
            <span className="text-primary text-5xl  lg:text-7xl font-bold text-center">
              Prince Mahmud Piyas
            </span>
          </span>
        </h1>
        <p className="text-lg leading-relaxed font-thin  mt-5 -tracking-tight mx-5 text-center">
          A junior web developer. I can provide clean code and pixel perfect
          design and a strong backend fetures.
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
