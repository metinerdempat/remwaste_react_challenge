import { type FC, type SetStateAction } from 'react';
import { ArrowUpDown } from 'lucide-react';
import clsx from 'clsx';
import type { SortBy } from '@/interfaces';

interface Props {
  sortBy: SortBy;
  setSortBy(value: SetStateAction<SortBy>): void;
}

const options = ['price', 'size'];

const SelectSkipSort: FC<Props> = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex items-center justify-end gap-4">
      <div className="relative group">
        <button
          type="button"
          className={clsx(
            'flex items-center gap-2 px-4 py-2.5 bg-zinc-700/50 text-white transition-colors rounded-xl',
            'border border-zinc-600/50 hover:border-blue-400/50 focus:outline-none focus:ring-1 focus:ring-foreground/50',
          )}
        >
          <ArrowUpDown className="w-5 h-5" />
          <span>Sort by</span>
        </button>

        <div
          className={clsx(
            'z-[999] absolute right-0 top-full mt-2 w-48 bg-zinc-800 rounded-xl border border-zinc-700/50',
            'shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all overflow-hidden',
          )}
        >
          {options.map((option, i) => (
            <button
              key={i}
              type="button"
              className={clsx(
                'w-full px-4 py-2 text-left text-white transition-colors hover:bg-blue-300 hover:text-black',
                {
                  'bg-blue-300 !text-black': sortBy === option,
                },
              )}
              onClick={() =>
                setSortBy((previous) => {
                  if (option !== null && previous === option) {
                    return null;
                  }
                  return option as SortBy;
                })
              }
            >
              Sort by {option[0].toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectSkipSort;
