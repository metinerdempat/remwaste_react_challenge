import { type FC } from 'react';
import { STEPS } from '@/constants';
import { useLocation } from 'react-router';
import { useMedia } from 'react-use';
import DesktopStepper from './desktop-stepper';
import MobileStepper from './mobile-stepper';

const StepsHeader: FC = () => {
  const path = useLocation();
  const currentStep = STEPS.find((step) => step.path === path.pathname)!;
  const isLargerThan1024px = useMedia('(min-width: 1024px)');

  return (
    <div className="max-w-7xl mx-auto px-4">
      {isLargerThan1024px ? <DesktopStepper currentStep={currentStep} /> : <MobileStepper currentStep={currentStep} />}
    </div>
  );
};

export default StepsHeader;
