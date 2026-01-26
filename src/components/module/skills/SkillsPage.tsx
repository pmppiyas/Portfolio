import assets from '@/assets/assets';
import ProgressBar from '@/components/module/skills/ProgressBar';
import { CustomHeading } from '../shared/Heading';
import SkillOrbit from '@/components/module/skills/SkillOrbit';

const { skills } = assets;

function SkillsPage() {
  return (
    <div id="skills" className="min-h-screen  ">
      <CustomHeading heading={'My Skills'} />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mx-auto max-w-7xl items-center justify-between px-6">
        {/* Left Side: Orbit */}

        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <SkillOrbit
            skills={{
              frontend: skills.frontend?.map((img) => img.src),
              backend: skills.backend?.map((img) => img.src),
              database: skills.database?.map((img) => img.src),
            }}
          />
        </div>
        {/* Right Side: Progress Bar */}
        <div className="lg:w-1/2 w-full space-y-4">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
