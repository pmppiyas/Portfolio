import SocialButton from "@/app/_ActionButton/SocialButton";

import bannerImage from "@/app/Assets/banner.jpg";

function page() {
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
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Text Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-5xl  font-semibold text-center flex flex-col gap-4">
          <span className="text-primary text-5xl  lg:text-7xl font-bold ">
            Blog Page
          </span>
        </h1>
        <p className="text-lg leading-relaxed font-thin  mt-5 -tracking-tight mx-5 text-center">
          I am working on it.......
        </p>
        <p className="text-md font-thin  max-w-2xl text-center mb-8"></p>

        <SocialButton></SocialButton>
      </div>
    </div>
  );
}

export default page;
