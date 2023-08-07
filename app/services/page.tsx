import { Metadata } from 'next';
import Service from '../screen/ServiceScreen';

export const metadata: Metadata = {
  title: 'Services-Digi Dolphins',
  description: 'About digi dolphins',
};
const page = () => {
  return (
    <>
      <Service />
    </>
  );
};

export default page;
