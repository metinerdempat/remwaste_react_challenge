import type { SkipWithImage } from '@/interfaces';
import { type FC } from 'react';
import { ArrowLeft } from 'lucide-react';
import clsx from 'clsx';
import { moneyFormatter, percentCalculator } from '@/utils';

interface Props {
  skip: SkipWithImage;
}

const NextStep: FC<Props> = ({ skip }) => {
  const taxPrice = percentCalculator(skip.price_before_vat, skip.vat);
  const totalPrice = skip.price_before_vat + taxPrice + (skip.transport_cost ?? 0);
  return (
    <div
      className={clsx(
        'fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 shadow-2xl z-[999]',
        'transition-all duration-500 ease-in-out',
        skip ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0',
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-2 text-center">
          <p className="mt-3 text-xs text-zinc-400">
            Imagery and information shown throughout this website may not reflect the exact shape or size specification,
            colours may vary, options and/or accessories may be featured at additional cost.
          </p>
        </div>

        <div className="py-4 flex items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{skip.size} Yard Skip</h3>
            <div className="mt-1 flex items-center gap-2 text-zinc-400">
              <span className="text-foreground font-medium">{moneyFormatter(totalPrice)}</span>
              <span>/ {skip.hire_period_days} day hire</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              tabIndex={16}
              className={clsx(
                'flex items-center gap-2 px-4 py-2 rounded-xl transition-colors',
                'text-zinc-400 hover:text-white',
                'border border-zinc-700 hover:border-zinc-600',
              )}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              type="button"
              tabIndex={17}
              className={clsx(
                'px-6 py-2 rounded-xl transition-colors',
                'bg-foreground text-black font-medium',
                'hover:bg-foreground/90',
              )}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStep;
