import myPhoto from "@/assets/myphoto.png";
import { Download, } from "lucide-react";
import Image from "next/image";
import { CustomHeading } from '../../../../public/Heading';


function AboutPage() {
  return (
    <div id="about" className="min-h-screen bg-custom text-background not-[]:py-6 md:py-8">
      <CustomHeading heading='About Me' />
      <div className="min-h-screen bg-custom py-6 md:py-8 flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto font-thin">
        {/* Photo Section */}
        <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-16">
          <Image
            alt="myPhoto"
            src={myPhoto}
            width={400}
            height={400}
            className="rounded-full mx-auto"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1  px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          {/* Heading Section */}
          <h1 className="text-3xl sm:text-4xl font-medium text-center lg:text-left">
            Hi There! I&apos;m Prince Mahmud Piyas
          </h1>
          <h3 className="text-2xl sm:text-3xl  font-normal   text-center lg:text-left">
            Full Stack Web Developer
          </h3>

          {/* Description Section */}
          <p className="text-base sm:text-lg leading-relaxed font-thin tracking-wide text-center lg:text-left">
            I am a Junior Full Stack Web Developer skilled in backend and
            frontend development, focused on creating seamless and efficient web
            solutions.
          </p>

          {/* Details Table Section */}
          <div className="bg-transparent rounded-lg shadow-md text-base sm:text-lg leading-relaxed font-thin tracking-tight">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-primary">
                  <td className="p-2 sm:p-3 font-bold text-chart-4">
                    Birthday
                  </td>
                  <td className="p-2 sm:p-3 ">July 13, 2002</td>
                </tr>
                <tr className="border-b border-primary">
                  <td className="p-2 sm:p-3 font-bold text-chart-4">Phone</td>
                  <td className="p-2 sm:p-3 ">
                    <a
                      href="callto:+8801777233703"
                      className="hover:underline"
                    >
                      +8801777233703
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-primary">
                  <td className="p-2 sm:p-3 font-bold text-chart-4">Email</td>
                  <td className="p-2 sm:p-3 ">
                    <a
                      href="mailto:princemahmudpiyas@gmail.com"
                      className=" hover:underline"
                    >
                      princemahmudpiyas@gmail.com
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-primary">
                  <td className="p-2 sm:p-3 font-bold text-chart-4">From</td>
                  <td className="p-2 sm:p-3 text-white">
                    5740 Gobindoganj, Rangpur Division, Bangladesh
                  </td>
                </tr>
                <tr>
                  <td className="p-2 sm:p-3 font-bold text-chart-4">
                    Language
                  </td>
                  <td className="p-2 sm:p-3 text-white">Bangla, English</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CV Download Section */}
          <div className="flex items-center gap-2 bg-mine/90 hover:bg-mine text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-yellow-300/20 w-max mx-auto lg:mx-0">
            <a
              href="/resume.pdf"
              download="PrinceMahmudPiyas_CV"
              className="flex items-center gap-2"
              rel="noopener noreferrer"
            >
              <Download size={18} className="animate-pulse" />
              <p className='font-normal'>Download Resume</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
