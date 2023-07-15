import { IconType } from 'react-icons';
import {
  AiOutlineRocket,
  AiOutlineDashboard,
  AiOutlineAlignLeft,
} from 'react-icons/ai';

interface Info {
  id: number;
  title: string;
  description: string;
  link: string;
  icon: IconType;
}

const mockData: Info[] = [
  {
    id: 1,
    title: 'Design-led digital transformation',
    description:
      'We combine business opportunities with customer expectations to design, transform, and deliver useful products and unique brand experiences.',
    link: 'Learn More',
    icon: AiOutlineRocket,
  },
  {
    id: 2,
    title: 'Transition to sustainable futures',
    description:
      'We combine business opportunities with customer expectations to design, transform, and deliver useful products and unique brand experiences.',
    link: 'Learn More',
    icon: AiOutlineDashboard,
  },
  {
    id: 3,
    title: 'We empower our partners',
    description:
      'We combine business opportunities with customer expectations to design, transform, and deliver useful products and unique brand experiences.',
    link: 'Learn More',
    icon: AiOutlineAlignLeft,
  },
];

export default mockData;
