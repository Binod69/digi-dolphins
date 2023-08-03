import Banner from './Components/Banner/Banner';
import Business from './Components/Business/Business';
import Info from './Components/Info/Info';
import Pricing from './Components/Pricing/Pricing';
import Unlimited from './Components/Unlimited/Unlimited';
export default function Home() {
  return (
    <>
      <Banner />
      <Info />
      <Business />
      <Unlimited />
      <Pricing />
    </>
  );
}
