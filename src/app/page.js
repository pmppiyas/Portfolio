import AboutPage from "./_Components/About/AboutPage";
import ContactPage from "./_Components/Contact/ContactPage";
import Banner from "./_Components/Home/Banner";
import PortfolioPage from "./_Components/Portfolio/PostfolioPage";
import ReviewPage from "./_Components/Review/ReviewPage";
import ServicePage from "./_Components/Service/ServicePage";
import SkillsPage from "./_Components/Skills/SkillsPage";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AboutPage></AboutPage>
      <ServicePage></ServicePage>
      <SkillsPage></SkillsPage>
      <PortfolioPage></PortfolioPage>
      <ReviewPage></ReviewPage>
      <ContactPage></ContactPage>
    </div>
  );
}
