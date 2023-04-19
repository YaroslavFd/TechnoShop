import { ReactComponent as Camera } from './categories/Camera.svg';
import { ReactComponent as Computers } from './categories/Computers.svg';
import { ReactComponent as Gaming } from './categories/Gaming.svg';
import { ReactComponent as HeadPhones } from './categories/HeadPhones.svg';
import { ReactComponent as Phones } from './categories/Phones.svg';
import { ReactComponent as SmartWatch } from './categories/SmartWatch.svg';

export const CATEGORIES = [
  {
    id: 1,
    name: 'Phones',
    href: '/#',
    svg: <Phones />,
  },
  {
    id: 2,
    name: 'Computers',
    href: '/#',
    svg: <Computers />,
  },
  {
    id: 3,
    name: 'SmartWatch',
    href: '/#',
    svg: <SmartWatch />,
  },
  {
    id: 4,
    name: 'Camera',
    href: '/#',
    svg: <Camera />,
  },
  {
    id: 5,
    name: 'HeadPhones',
    href: '/#',
    svg: <HeadPhones />,
  },
  {
    id: 6,
    name: 'Gaming',
    href: '/#',
    svg: <Gaming />,
  },
];
