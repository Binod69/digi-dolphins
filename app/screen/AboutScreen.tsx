import { AboutGrowth, PricingBanner } from '../Components/index';
import about from '../../public/img/about.webp';
const AboutScreen = () => {
  return (
    <>
      <PricingBanner image={about} />
      <AboutGrowth />
    </>
  );
};

export default AboutScreen;
