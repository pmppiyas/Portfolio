import assets from "@/app/Assets/assets";
import CustomHeading from "@/app/Shared/CustomHeading";
import Image from "next/image";
const { services } = assets;
function ServicePage() {
  return (
    <div className="min-h-screen bg-bg-custom py-6 md:py-8 flex flex-col items-center justify-center">
      <CustomHeading heading={"services"}></CustomHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto lg:max-w-6xl px-8 ">
        {services.map((service, idx) => {
          return (
            <div
              key={idx}
              className="bg-gray-900/80 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center max-w-sm flex flex-col items-center justify-center group"
            >
              <div className="flex items-center justify-center  mb-4 p-3 bg-primary/30 group-hover:bg-primary rounded-full w-max border-3 ring-offset-2 border-primary transition-all duration-300">
                <Image
                  src={service.icon}
                  height={40}
                  width={40}
                  alt={service.name}
                ></Image>
              </div>
              <h3 className="text-2xl font-medium text-white group-hover:text-primary">
                {service.name}
              </h3>
              <p className="text-sm text-gray-200 mt-3">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicePage;
