import { STEPS } from '@/constants';
import clsx from 'clsx';
import { type FC } from 'react';

interface Props {
  currentStep: (typeof STEPS)[number];
}

const DesktopStepper: FC<Props> = ({ currentStep }) => {
  return (
    <div className="hidden md:flex items-center py-6">
      {STEPS.map((step, index) => (
        <div
          key={step.id}
          className={clsx('flex items-center', {
            'flex-1': index < STEPS.length - 1,
            'ml-auto': index === STEPS.length - 1,
          })}
        >
          <div className="relative flex flex-col items-center">
            <div
              className={clsx(
                'w-12 h-12 rounded-xl grid place-items-center transition-all duration-300',
                'border-2 shadow-lg',
                {
                  'border-foreground bg-foreground/10 scale-110': step.id === currentStep.id,
                  'border-foreground/50 bg-foreground/5': step.id < currentStep.id,
                  'border-zinc-600 bg-zinc-800': step.id > currentStep.id,
                },
              )}
            >
              <step.Icon
                className={clsx('w-6 h-6 transition-colors', {
                  'text-foreground': step.id <= currentStep.id,
                  'text-zinc-400': step.id > currentStep.id,
                })}
              />
            </div>
            <span
              className={clsx('mt-3 text-sm font-medium transition-colors', {
                'text-foreground': step.id <= currentStep.id,
                'text-zinc-400': step.id > currentStep.id,
              })}
            >
              {step.title}
            </span>
          </div>

          {index < STEPS.length - 1 && (
            <div className="flex-1 h-0.5 mx-4 relative">
              <div
                className={clsx('absolute inset-0 transition-colors duration-300', {
                  'bg-foreground': step.id < currentStep.id,
                  'bg-zinc-600': step.id >= currentStep.id,
                })}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopStepper;
