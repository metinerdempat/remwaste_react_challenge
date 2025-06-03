import Stepper from '@/components/steps/stepper';
import type { FC } from 'react';
import { Outlet } from 'react-router';

const StepsLayout: FC = () => {
  return (
    <div className="w-full h-full bg-zinc-800 px-6 xl:px-0 py-8">
      <Stepper />
      <Outlet />
    </div>
  );
};

export default StepsLayout;
