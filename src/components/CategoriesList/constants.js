import { ReactComponent as Camera } from './icons/Camera.svg';
import { ReactComponent as Computers } from './icons/Computers.svg';
import { ReactComponent as Gaming } from './icons/Gaming.svg';
import { ReactComponent as HeadPhones } from './icons/HeadPhones.svg';
import { ReactComponent as Phones } from './icons/Phones.svg';
import { ReactComponent as SmartWatch } from './icons/SmartWatch.svg';

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
