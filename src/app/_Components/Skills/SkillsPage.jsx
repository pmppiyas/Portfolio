import assets from "@/app/Assets/assets";
import CustomHeading from "@/app/Shared/CustomHeading";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
const { skills } = assets;

function SkillsPage() {
  return (
    <div className="min-h-screen bg-bg-custom py-6 md:py-8 flex flex-col items-center justify-center">
      {/* Heading */}
      <CustomHeading heading={"My Skills"}></CustomHeading>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mx-auto lg:max-w-6xl  items-end justify-between sm:px-6 md:px-8 ">
        {/* Left Side */}
        <div className="text-white space-y-8 lg:w-1/2 w-full px-6">
          <h2 className="text-3xl md:text-4xl font-normal leading-relaxed text-center lg:text-left">
            All the skills that I have in that field of work are mentioned.
          </h2>

          <div className="space-y-6">
            {/* Frontend Skills */}
            <div className="flex flex-wrap gap-4 bg-gray-900 p-4 rounded-xl transition-transform duration-300 ease-in-out items-center justify-start">
              {skills?.frontend?.map((skill, idx) => (
                <Image
                  src={skill}
                  alt={`Frontend Skill ${idx}`}
                  height={40}
                  key={idx}
                  className="rounded-full transform hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              ))}
            </div>

            {/* Backend Skills */}
            <div className="flex flex-wrap gap-4 bg-gray-900 p-4 rounded-xl transition-transform duration-300 ease-in-out items-center justify-start">
              {skills?.backend?.map((skill, idx) => (
                <Image
                  src={skill}
                  alt={`Backend Skill ${idx}`}
                  height={40}
                  key={idx}
                  className="rounded-full transform hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              ))}
            </div>

            {/* Database Skills */}
            <div className="flex flex-wrap gap-4 bg-gray-900 p-4 rounded-xl transition-transform duration-300 ease-in-out items-center justify-start">
              {skills?.database?.map((skill, idx) => (
                <Image
                  src={skill}
                  alt={`Database Skill ${idx}`}
                  height={40}
                  key={idx}
                  className="rounded-full transform hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 w-full">
          <ProgressBar></ProgressBar>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
