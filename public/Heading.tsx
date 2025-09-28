export const CustomHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="relative bg-transparent flex items-center justify-center ">
      {/* Main Heading */}
      <h1 className="text-[60px] md:text-[70px] lg:text-[120px]  font-bold text-center text-gray-900 uppercase">
        {heading}
      </h1>

      {/* Subheading */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 md:space-y-4">
        <h3 className="text-4xl  text-mine font-normal uppercase">
          {heading}
        </h3>
        <div className="flex items-center justify-center">
          <div className="border-2 border-gray-700 w-16"></div>
          <div className="border-2 border-mine w-16"></div>
          <div className="border-2 border-gray-700 w-16"></div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};
