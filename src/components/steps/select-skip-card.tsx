import { type SetStateAction, type FC } from 'react';
import type { SkipWithImage } from '@/interfaces';
import { STEPS } from '@/constants';
import { yardSizeTextifier, moneyFormatter, percentCalculator } from '@/utils';
import clsx from 'clsx';
import { ArrowRightIcon, CarIcon, ContainerIcon, PercentCircleIcon } from 'lucide-react';
import useStepsStore from '@/stores/use-steps';

interface Props {
  skip: SkipWithImage;
  index: number;
  gridView: '3x3' | '2x2';
  selectedSkip: SkipWithImage | null;
  setSelectedSkip(skip: SetStateAction<SkipWithImage | null>): void;
}

const SelectSkipCard: FC<Props> = ({ setSelectedSkip, skip, selectedSkip, index, gridView }) => {
  const setStepperData = useStepsStore((store) => store.setData);

  const onSelectSkip = () => {
    setSelectedSkip(skip.id === selectedSkip?.id ? null : skip);
    setStepperData({
      skip: skip.id === selectedSkip?.id ? null : skip,
    });
  };

  const taxPrice = percentCalculator(skip.price_before_vat, skip.vat);
  const totalPrice = skip.price_before_vat + taxPrice + (skip.transport_cost ?? 0);
  const yardSize = yardSizeTextifier(skip.size);

  return (
    <button
      type="button"
      onClick={onSelectSkip}
      tabIndex={STEPS.length + (index + 1)}
      className={clsx(
        'col-span-12 lg:col-span-6 grid rounded-3xl overflow-hidden shadow-lg shadow-amber-100/10',
        'hover:scale-[1.01] transition-all duration-200 hover:shadow-lg hover:shadow-amber-100/20',
        gridView === '2x2' ? 'xl:col-span-6' : 'xl:col-span-4',
        {
          'ring-4 ring-foreground': selectedSkip && selectedSkip.id === skip.id,
        },
        1,
      )}
    >
      <div className="relative">
        <img src={skip.image} alt={`${skip.size} image`} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-blue-500/30 backdrop-blur-sm px-2 py-1 text-sm text-white rounded-md">
          <p className="text-xs font-bold">{yardSize}</p>
        </div>
        <div className="absolute bottom-3 right-3 bg-blue-500/30 backdrop-blur-sm px-2 py-1 text-sm text-white rounded-md">
          <p className="flex items-center gap-2">
            <span className="text-xs font-bold">{skip.size}</span>
            <span className="text-xs">
              yard<sup>3</sup>
            </span>
          </p>
        </div>
      </div>

      <div className="bg-zinc-700 p-5">
        <div className="text-zinc-200">
          <p className="font-bold">{moneyFormatter(totalPrice)}</p>
          <p className="mt-0.5 text-sm">{skip.hire_period_days} days hire</p>
          {skip.transport_cost && (
            <p className="mt-1 text-xs text-blue-300 flex items-center gap-0.5 justify-center">
              <span>+</span>
              <span>{moneyFormatter(skip.transport_cost)}</span>
              <span>transport</span>
            </p>
          )}
        </div>

        <div className="divider-y my-4 h-px bg-foreground/30"></div>

        <ul className="space-y-2">
          <li className="flex items-center justify-between">
            <div className="text-sm text-white flex items-center gap-2">
              <div className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-md">
                <CarIcon className="w-4 h-4" />
              </div>
              <p>Allowed On Road</p>
            </div>
            <div
              className={clsx('w-3 h-3 rounded-full', {
                'bg-green-500': skip.allowed_on_road,
                'bg-red-500': !skip.allowed_on_road,
              })}
            ></div>
          </li>
          <li className="flex items-center justify-between">
            <div className="text-sm text-white flex items-center gap-2">
              <div className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-md">
                <ContainerIcon className="w-4 h-4" />
              </div>
              <p>Allowed Heavy Wastes</p>
            </div>
            <div
              className={clsx('w-3 h-3 rounded-full', {
                'bg-green-500': skip.allows_heavy_waste,
                'bg-red-500': !skip.allows_heavy_waste,
              })}
            ></div>
          </li>

          <li className="flex items-center justify-between">
            <div className="text-sm text-white flex items-center gap-2">
              <div className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-md">
                <PercentCircleIcon className="w-4 h-4" />
              </div>
              <p>VAT</p>
            </div>
            <p className="text-xs font-bold text-blue-300">%{skip.vat}</p>
          </li>
        </ul>

        <div className="mt-4 p-3 rounded-md bg-zinc-600">
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <p className="text-foreground text-sm">Base Proice</p>
              <p className="text-xs font-bold text-foreground">{moneyFormatter(skip.price_before_vat)}</p>
            </li>
            <li className="flex items-center justify-between">
              <p className="text-foreground text-sm">Vat Price</p>
              <p className="text-xs font-bold text-foreground">{moneyFormatter(taxPrice)}</p>
            </li>
            {skip.transport_cost && (
              <li className="flex items-center justify-between">
                <p className="text-foreground text-sm">Transport Cost</p>
                <p className="text-xs font-bold text-foreground">{moneyFormatter(skip.transport_cost)}</p>
              </li>
            )}
            <li className="my-2">
              <hr className="text-foreground block" />
            </li>
            <li className="flex items-center justify-between">
              <p className="text-foreground text-sm">Total</p>
              <p className="text-xs font-bold text-foreground">{moneyFormatter(totalPrice)}</p>
            </li>
          </ul>
        </div>

        <div
          className={clsx('mt-5 py-3 rounded-md text-sm', 'flex items-center justify-center gap-2.5', {
            'bg-zinc-600 text-white': !selectedSkip || selectedSkip.id !== skip.id,
            'bg-blue-300 text-zinc-800': selectedSkip && selectedSkip.id === skip.id,
          })}
        >
          <p>{selectedSkip && selectedSkip.id === skip.id ? 'Selected' : 'Select this skip'}</p>
          <ArrowRightIcon
            className={clsx('w-4 h-4 transition-auto duration-200 -translate-x-2 ', {
              'opacity-0': !selectedSkip || selectedSkip.id !== skip.id,
              'opacity-100 translate-x-0': selectedSkip && selectedSkip.id === skip.id,
            })}
          />
        </div>
      </div>
    </button>
  );
};

export default SelectSkipCard;
