import {
  PricingBanner,
  Pricing,
  Develop,
  PricingAccordion,
} from '../Components/index';

const PricingScreen = () => {
  return (
    <>
      <PricingBanner />
      <Pricing
        title={'Pricing built for Workspaces'}
        para={
          'Scale your software operations through a custom engineering team. Meet the demand of your company’s'
        }
        priceTitle1={'Personal'}
        priceTitle2={'Startup'}
        priceTitle3={'Business'}
      />

      <Pricing
        title={'Ecommerce Plans'}
        para={
          'Scale your software operations through a custom engineering team. Meet the demand of your company’s'
        }
        priceTitle1={'Personal'}
        priceTitle2={'Startup'}
        priceTitle3={'Business'}
      />

      <Develop
        title={'Custom Enterprise Plan'}
        para={
          'We design new concepts, prototypes and processes for the next generation of services and experiences, ready for the market.'
        }
      />
      <PricingAccordion />
    </>
  );
};

export default PricingScreen;
