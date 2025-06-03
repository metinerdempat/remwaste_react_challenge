import { MapPin, ShieldIcon, Trash, Truck } from 'lucide-react';

const STEPS = [
  {
    id: 1,
    title: 'Post Code',
    path: '/steps/post-code',
    Icon: MapPin,
  },
  {
    id: 2,
    title: 'Waste Type',
    path: '/steps/waste-type',
    Icon: Trash,
  },
  {
    id: 3,
    title: 'Select Skip',
    path: '/steps/select-skip',
    Icon: Truck,
  },
  {
    id: 4,
    title: 'Permit Check',
    path: '/steps/permit-check',
    Icon: ShieldIcon,
  },
];

export default STEPS;
