import {
  AboutGrowth,
  Developing,
  PricingBanner,
  Leader,
} from '../Components/index';
import about from '../../public/img/about.webp';
const AboutScreen = () => {
  return (
    <>
      <PricingBanner image={about} />
      <AboutGrowth />
      <Developing />
      <Leader />
    </>
  );
};

export default AboutScreen;
