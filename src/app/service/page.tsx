import ProjectPage from '@/components/module/project/ProjectPage';
import ServicePage from '@/components/module/service/ServicePage';
import StringArt from '@/components/wrapper/StringArt';
import React from 'react';

const page = () => {
  return (
    <div>
      <StringArt>
        <ServicePage />
        <ProjectPage />
      </StringArt>
    </div>
  );
};

export default page;
