import {
  CounterService,
  Outstanding,
  ServiceBanner,
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
    </>
  );
};

export default Service;
