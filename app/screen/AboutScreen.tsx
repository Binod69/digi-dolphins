import {
  AboutGrowth,
  Developing,
  PricingBanner,
  Leader,
  FeaturesAbout,
  NewsLetter,
} from '../Components/index';
import about from '../../public/img/about.webp';
const AboutScreen = () => {
  return (
    <>
      <PricingBanner image={about} />
      <AboutGrowth />
      <Developing />
      <Leader />
      <FeaturesAbout />
      <NewsLetter />
    </>
  );
};

export default AboutScreen;
