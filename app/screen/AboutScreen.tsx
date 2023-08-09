import {
  AboutGrowth,
  Developing,
  PricingBanner,
  Leader,
  FeaturesAbout,
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
    </>
  );
};

export default AboutScreen;
