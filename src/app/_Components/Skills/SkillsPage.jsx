import assets from "@/app/Assets/assets";
import CustomHeading from "@/app/Shared/CustomHeading";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
const { skills } = assets;
console.log(skills.frontend);
function SkillsPage() {
  return (
    <div className="min-h-screen bg-bg-custom py-6 md:py-8 flex flex-col items-center justify-center">
      <CustomHeading heading={"My Skills"}></CustomHeading>
      <div className="flex flex-col lg:flex-row  gap-8 mx-auto lg:max-w-6xl px-8 items-center justify-end">
        {/* Left Side */}
        <div className="text-white space-y-8 ">
          <h2 className="text-4xl font-normal leading-10 ">
            All the skills that I have in that field of work are mentioned.
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4 flex-wrap  bg-gray-900 p-3 rounded-xl  md:w-max transition-transform duration-300 ease-in-out items-start justify-start">
              {skills?.frontend?.map((skill, idx) => (
                <Image
                  src={skill}
                  alt={idx}
                  height={40}
                  key={idx}
                  className="rounded-full transform hover:scale-110 transition-transform duration-300 ease-in-out"
                ></Image>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap bg-gray-900 p-3 rounded-xl w-max transition-transform duration-300 ease-in-out">
              {skills?.backend?.map((skill, idx) => (
                <Image
                  src={skill}
                  height={40}
                  key={idx}
                  className="rounded-full transform hover:scale-110 transition-transform duration-300 ease-in-out"
                ></Image>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap bg-gray-900 p-3 rounded-xl w-max transition-transform duration-300 ease-in-out">
              {skills?.database?.map((skill, idx) => (
                <Image
                  src={skill}
                  height={40}
                  key={idx}
                  className="rounded-full transform hover:scale-110 transition-transform duration-300 ease-in-out"
                ></Image>
              ))}
            </div>
          </div>
        </div>
        {/* Right Side */}

        <div className="flex-1border-amber-400 w-full">
          <ProgressBar></ProgressBar>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
