import AboutPage from '@/components/module/about/AboutPage';
import ContactPage from '@/components/module/contact/ContactPage';
import ReviewPage from '@/components/module/review/ReviewPage';
import SkillsPage from '@/components/module/skills/SkillsPage';
import StringArt from '@/components/wrapper/StringArt';

const page = () => {
  return (
    <div>
      <StringArt>
        <AboutPage />
        <SkillsPage />
        <ReviewPage />
        <ContactPage />
      </StringArt>
    </div>
  );
};

export default page;
