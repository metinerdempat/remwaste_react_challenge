import StepsHeader from '@/components/steps/header';
import type { FC } from 'react';
import { Outlet } from 'react-router';

const StepsLayout: FC = () => {
  return (
    <div className="w-full h-full bg-zinc-800 px-6 lg:px-0">
      <StepsHeader />
      <Outlet />
    </div>
  );
};

export default StepsLayout;
