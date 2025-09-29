import AboutPage from '@/components/module/about/AboutPage';
import ContactPage from '@/components/module/contact/ContactPage';
import Footer from '@/components/module/footer/Footer';
import Hero from '@/components/module/home/Hero';
import ProjectPage from '@/components/module/project/ProjectPage';
import ReviewPage from '@/components/module/review/ReviewPage';
import ServicePage from '@/components/module/service/ServicePage';
import SkillsPage from '@/components/module/skills/SkillsPage';


export default function Home() {
  return (
    <div>
      <Hero />
      <AboutPage />
      <SkillsPage />
      <ServicePage />
      <ProjectPage />
      <ReviewPage />
      <ContactPage />
      <Footer />
    </div>
  );
}
