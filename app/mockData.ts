import svg from '../public/img/rocket-ship-launch-missile-svgrepo-com.svg';
import stock from '../public/img/trophy-svgrepo-com.svg';
import trophy from '../public/img/line-chart-finance-business-svgrepo-com.svg';

interface MockDataItem {
  id: number;
  title: string;
  description: string;
  link: string;
  icon: any;
}

const mockData: MockDataItem[] = [
  {
    id: 1,
    title: 'Design-led digital transformation',
    description:
      'We combine business opportunities with customer expectations to design, transform, and deliver useful products and unique brand experiences.',
    link: 'Learn More',
    icon: svg,
  },
  {
    id: 2,
    title: 'Transition to sustainable futures',
    description:
      'We combine business opportunities with customer expectations to design, transform, and deliver useful products and unique brand experiences.',
    link: 'Learn More',
    icon: trophy,
  },
  {
    id: 3,
    title: 'We empower our partners',
    description:
      'We combine business opportunities with customer expectations to design, transform, and deliver useful products and unique brand experiences.',
    link: 'Learn More',
    icon: stock,
  },
];

export default mockData;
