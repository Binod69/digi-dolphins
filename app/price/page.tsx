import { Metadata } from 'next';
import About from '../screen/AboutScreen';
export const metadata: Metadata = {
  title: 'Pricing - Digi Dolphins',
  description: 'About digi dolphins',
};
const page = () => {
  return (
    <>
      <About />
    </>
  );
};

export default page;
