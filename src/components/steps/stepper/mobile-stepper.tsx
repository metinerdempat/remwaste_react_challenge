import { type FC } from 'react';
import { STEPS } from '@/constants';
import clsx from 'clsx';

interface Props {
  currentStep: (typeof STEPS)[number];
}

const MobileStepper: FC<Props> = ({ currentStep }) => {
  return (
    <div className="space-y-4 py-6">
      {STEPS.map((step, index) => (
        <div key={step.id} className="flex items-start gap-4">
          <button
            type='button'
            className={clsx('block text-left flex-1', {
              'ml-auto': index === STEPS.length - 1,
              'cursor-no-drop': step.id > currentStep.id,
            })}
          >
            <div
              className={clsx('flex items-center gap-3 p-3 rounded-xl transition-all duration-300', {
                'bg-foreground/10 border-2 border-foreground': step.id === currentStep.id,
                'bg-zinc-600/50': step.id !== currentStep.id,
              })}
            >
              <div
                className={clsx('w-10 h-10 rounded-lg grid place-items-center transition-colors', {
                  'bg-foreground/20': step.id === currentStep.id,
                  'bg-zinc-700': step.id !== currentStep.id,
                })}
              >
                <step.Icon
                  className={clsx('w-5 h-5 transition-colors', {
                    'text-foreground': step.id <= currentStep.id,
                    'text-zinc-400': step.id > currentStep.id,
                  })}
                />
              </div>
              <div className="flex-1">
                <span
                  className={clsx('block text-sm font-medium transition-colors', {
                    'text-foreground': step.id <= currentStep.id,
                    'text-zinc-400': step.id > currentStep.id,
                  })}
                >
                  {step.title}
                </span>
                {step.id === currentStep.id && (
                  <span className="text-xs text-foreground/60 mt-0.5 block">
                    {index + 1} of {STEPS.length}
                  </span>
                )}
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default MobileStepper;
