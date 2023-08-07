import {
  CounterService,
  Outstanding,
  Pricing,
  PricingAccordion,
  ServiceBanner,
  Trusted,
  Unlimited,
} from '../Components';

const Service = () => {
  return (
    <>
      <ServiceBanner />
      <Outstanding />
      <CounterService />
      <Unlimited
        title={'Focus on cutting-edge technologies and cost-quality efficiency'}
        description={'HELPING ENTREPRENEURS MAKE MORE MONEY'}
      />
      <Pricing
        title={'Choose the right plan for you'}
        para={
          'Scale your software operations through a custom engineering team. Meet the demand of your company’s'
        }
        priceTitle1={'Personal'}
        priceTitle2={'StartUp'}
        priceTitle3={'Business'}
      />
      <PricingAccordion />
      <Trusted />
    </>
  );
};

export default Service;
