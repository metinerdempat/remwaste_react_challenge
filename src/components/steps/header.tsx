import { type FC } from 'react';
import { STEPS } from '@/constants';
import clsx from 'clsx';
import { useLocation } from 'react-router';

const StepsHeader: FC = () => {
  const path = useLocation();
  const findedStep = STEPS.find((step) => step.path === path.pathname)!;

  return (
    <header className="flex items-center justify-between gap-6 py-3 max-w-7xl mx-auto bg-zinc-700 mt-4 rounded-md px-5">
      {STEPS.map((step, index) => (
        <button
          type="button"
          tabIndex={index + 1}
          key={step.id}
          className={clsx(
            'flex flex-1 items-center gap-2 p-2 rounded-md',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f9f871] focus-visible:ring-offset-zinc-800',
            {
              'text-foreground': step.id <= findedStep.id,
              'text-gray-400 cursor-no-drop': step.id > findedStep.id,
            },
          )}
          disabled={step.id > findedStep.id}
        >
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-zinc-800 rounded-md grid place-items-center">
              <step.Icon className="w-4 h-4 text-foreground" />
            </div>
            <p className="text-sm text-foreground mt-2">
              <span>{step.title}</span>
            </p>
          </div>
          {index < STEPS.length - 1 && (
            <div
              className={clsx('ml-4 h-px flex-1 w-full min-w-12', {
                'bg-foreground': step.id < findedStep.id,
                'bg-gray-300': step.id >= findedStep.id,
              })}
            ></div>
          )}
        </button>
      ))}
    </header>
  );
};

export default StepsHeader;
