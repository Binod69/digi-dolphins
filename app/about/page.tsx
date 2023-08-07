import type { Metadata } from 'next';
import AboutScreen from '../screen/AboutScreen';

export const metadata: Metadata = {
  title: 'About-Digi Dolphins',
  description: 'About digi dolphins',
};
const page = () => {
  return (
    <>
      <AboutScreen />
    </>
  );
};

export default page;
