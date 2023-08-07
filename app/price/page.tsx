import { Metadata } from 'next';
import PricingScreen from '../screen/PricingScreen';
export const metadata: Metadata = {
  title: 'Pricing - Digi Dolphins',
  description: 'About digi dolphins',
};
const page = () => {
  return (
    <>
      <PricingScreen />
    </>
  );
};

export default page;
