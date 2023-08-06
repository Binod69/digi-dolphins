import {
  Banner,
  Business,
  Develop,
  Info,
  Pricing,
  Unlimited,
  Trusted,
  Plan,
} from '../Components/index';
const HomeScreen = () => {
  return (
    <>
      <Banner />
      <Info />
      <Business />
      <Unlimited />
      <Pricing
        title={'Pricing built for businesses of all sizes'}
        para={
          'Scale your software operations through a custom engineering team. Meet the demand of your company’s'
        }
        priceTitle1={'Personal'}
        priceTitle2={'Startup'}
        priceTitle3={'Business'}
      />
      <Develop
        title={'Develop your next business today'}
        para={
          'We design new concepts, prototypes and processes for the next generation of services and experiences, ready for the market.'
        }
      />
      <Trusted />
      <Plan />
    </>
  );
};

export default HomeScreen;
