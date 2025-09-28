import assets from '@/assets/assets';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import Link from "next/link";
import { CustomHeading } from '../../../../public/Heading';

const { myWorks } = assets;

function ProjectPage() {
  return (
    <div
      id="portfolio"
      className="min-h-screen bg-custom text-background not-[]:py-6 md:py-8 space-y-8"
    >
      {/* Heading */}
      <CustomHeading heading={"portfolio"} />

      {/* Portfolio Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8  md:gap-12  w-full lg:max-w-6xl mx-auto  overflow-hidden">
        {myWorks.map((work, idx) => {
          return (
            <div
              key={idx}
              className="bg-gray-900/80 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center  flex flex-col items-center justify-center group w-full "
            >
              {/* Image */}
              <div className="flex items-center justify-center mb-4 p-3 bg-primary/30 group-hover:bg-primary rounded-full w-max border-3 ring-offset-2 border-primary transition-all duration-300">
                <Image
                  src={work?.photo}
                  width={350}
                  alt={work?.name || "Portfolio item"}
                  className="rounded-lg"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-medium text-white group-hover:text-mine">
                {work.name}
              </h3>
            </div>
          );
        })}
      </div>

      <div className='flex items-center justify-center '>
        <Link href={"/projects"}><Button variant={"link"} className='text-background hover:text-mine' >See More
        </Button></Link>
      </div>
    </div>
  );
}

export default ProjectPage;
