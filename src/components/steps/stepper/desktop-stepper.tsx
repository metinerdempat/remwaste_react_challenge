import { STEPS } from '@/constants';
import clsx from 'clsx';
import { type FC } from 'react';

interface Props {
  currentStep: (typeof STEPS)[number];
}

const DesktopStepper: FC<Props> = ({ currentStep }) => {
  return (
    <div className="shadow-lg hidden md:flex bg-zinc-900 rounded-xl px-3  z-[999] flex-col items-center py-6 fixed top-12 left-4">
      {STEPS.map((step, index) => (
        <button
          type="button"
          key={step.id}
          className={clsx('min-w-18 justify-center flex flex-col items-center', {
            'cursor-no-drop': step.id > currentStep.id,
          })}
        >
          <div className="relative flex flex-col items-center">
            <div
              className={clsx(
                'w-10 h-10 rounded-xl grid place-items-center transition-all duration-300',
                'border-2 shadow-lg',
                {
                  'border-foreground bg-foreground/10 scale-110': step.id === currentStep.id,
                  'border-foreground/50 bg-foreground/5': step.id < currentStep.id,
                  'border-zinc-600 bg-zinc-800': step.id > currentStep.id,
                },
              )}
            >
              <step.Icon
                className={clsx('w-5 h-5 transition-colors', {
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
            <div className="w-px h-6 my-4 relative">
              <div
                className={clsx('absolute inset-0 transition-colors duration-300', {
                  'bg-foreground': step.id < currentStep.id,
                  'bg-zinc-600': step.id >= currentStep.id,
                })}
              />
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default DesktopStepper;
