import NextStep from '@/components/steps/next-step';
import Stepper from '@/components/steps/stepper';
import useStepPoint from '@/hooks/use-step-point';
import type { SkipWithImage } from '@/interfaces';
import useStepsStore from '@/stores/use-steps';
import type { FC } from 'react';
import { Outlet } from 'react-router';

const StepsLayout: FC = () => {
  const stepsData = useStepsStore((store) => store.data);

  const selectedSkip = (stepsData as any)?.skip as SkipWithImage | null;

  useStepPoint();

  return (
    <div className="w-full h-full bg-zinc-800 px-6 xl:px-0 py-8">
      <Stepper />
      <Outlet />
      {selectedSkip && <NextStep skip={selectedSkip} />}

      <div className='pb-48'></div>
    </div>
  );
};

export default StepsLayout;
