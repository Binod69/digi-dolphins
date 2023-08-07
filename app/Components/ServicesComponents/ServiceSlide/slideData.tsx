import avatar2 from '../../../../public/img/avatar-2.webp';

interface MockData {
  id: number;
  image: any;
  name: string;
  rating: number;
  description: string;
  jobtitle: string;
}

const slideData: MockData[] = [
  {
    id: 1,
    image: avatar2,
    name: 'John Doe',
    rating: 4.5,
    description:
      'Outstanding dedication to excellence, exceptional support received. Impressive service!',
    jobtitle: 'Software Engineer',
  },
  {
    id: 2,
    image: avatar2,
    name: 'Jane Smith',
    rating: 4.2,
    description:
      'Expertise made all the difference, absolute pleasure to work with. Exceeded our expectations.',
    jobtitle: 'Project Manager',
  },
  {
    id: 3,
    image: avatar2,
    name: 'Michael Johnson',
    rating: 3.8,
    description:
      'I highly recommend this agency. Testing for our project was done everything top-notch',

    jobtitle: 'UI/UX Designer',
  },
  {
    id: 4,
    image: avatar2,
    name: 'Emily Williams',
    rating: 4.7,
    description:
      'Expertise made all the difference, absolute pleasure to work with. Exceeded our expectations.',

    jobtitle: 'Marketing Manager',
  },
  {
    id: 5,
    image: avatar2,
    name: 'Robert Lee',
    rating: 4.0,
    description:
      'An ambitious sales professional with a customer-centric approach.',
    jobtitle: 'Sales Representative',
  },
  {
    id: 6,
    image: avatar2,
    name: 'Sarah Brown',
    rating: 4.9,
    description:
      'A dedicated customer support specialist who goes the extra mile.',
    jobtitle: 'Customer Support Specialist',
  },
];

export default slideData;
