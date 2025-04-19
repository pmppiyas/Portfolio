import CustomHeading from "@/app/Shared/CustomHeading";
import Image from "next/image";
import myPhoto from "@/app/Assets/myphoto.png";
import { Download, Phone } from "lucide-react";

function AboutPage() {
  return (
    <div id="about" className="min-h-screen bg-bg-custom py-6 md:py-8 ">
      <CustomHeading heading={"About me"}></CustomHeading>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:max-w-6xl mx-auto gap-8">
        <div className="flex-1 px-8">
          <Image alt="myPhoto" src={myPhoto} width={400}></Image>
        </div>
        <div className="flex-1 text-white px-8 space-y-8 ">
          {/* Heading Section */}
          <h1 className="text-4xl font-semibold">
            Hi There! I'm Prince Mahmud Piyas
          </h1>
          <h3 className="text-3xl text-primary font-medium">
            Full Stack Web Developer
          </h3>

          {/* Description Section */}
          <p className="text-lg leading-relaxed font-thin  mt-5 -tracking-tight ">
            I am a Visual Designer with a strong focus on digital branding.
            Visual design seeks to attract, inspire, create desires, and
            motivate people to respond to messages, with a view to making a
            favorable impact.
          </p>

          {/* Details Table Section */}
          <div className=" bg-secondary rounded-lg shadow-md text-lg leading-relaxed font-thin -tracking-tight ">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-primary">
                  <td className="p-3 font-bold text-primary">Birthday</td>
                  <td className="p-3 text-white">July 13, 2002</td>
                </tr>
                <tr className="border-b border-primary">
                  <td className="p-3 font-bold text-primary">Phone</td>
                  <td className="p-3 text-white">
                    <a
                      href="callto:+8801777233703"
                      className="text-white hover:underline "
                    >
                      +8801777233703
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-primary">
                  <td className="p-3 font-bold text-primary">Email</td>
                  <td className="p-3 text-white hover:underline">
                    <a
                      href="mailto:princemahmudpiyas@gmail.com"
                      className="text-white hover:underline "
                    >
                      princemahmudpiyas@gmail.com
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-primary">
                  <td className="p-3 font-bold text-primary">From</td>
                  <td className="p-3 text-white">
                    5740 Gobindoganj, Rangpur Division, Bangladesh
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-primary">Language</td>
                  <td className="p-3 text-white">Bangla, English</td>
                </tr>
              </tbody>
            </table>
            <div className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-yellow-300/20 w-max ml-auto mr-0">
              <a
                href="/path-to-your-cv-file.pdf"
                download="PrinceMahmudPiyas_CV"
                className="flex items-center gap-2"
              >
                <Download size={18} className="animate-pulse" />
                <p>Download CV</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
