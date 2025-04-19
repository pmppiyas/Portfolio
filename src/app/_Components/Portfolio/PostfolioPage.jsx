import assets from "@/app/Assets/assets";
import CustomHeading from "@/app/Shared/CustomHeading";
import Image from "next/image"; // Make sure you import the Image component correctly for Next.js

const { myWorks } = assets;
console.log(myWorks);
function PortfolioPage() {
  return (
    <div className="min-h-screen bg-bg-custom py-6 md:py-8 flex flex-col items-center justify-center">
      {/* Heading */}
      <CustomHeading heading={"portfolio"} />

      {/* Portfolio Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-8 mx-auto lg:max-w-6xl">
        {myWorks.map((work, idx) => {
          return (
            <div
              key={idx}
              className="bg-gray-900/80 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center  flex flex-col items-center justify-center group"
            >
              {/* Image */}
              <div className="flex items-center justify-center mb-4 p-3 bg-primary/30 group-hover:bg-primary rounded-full w-max border-3 ring-offset-2 border-primary transition-all duration-300">
                <Image
                  src={work?.photo}
                  width={300}
                  alt={work?.name || "Portfolio item"}
                  className="rounded-lg"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-medium text-white group-hover:text-primary">
                {work.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioPage;
