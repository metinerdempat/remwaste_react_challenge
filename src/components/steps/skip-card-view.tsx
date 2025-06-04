import type { FC, SetStateAction } from 'react';
import { Grid3x3, Grid2x2 } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  gridView: '3x3' | '2x2';
  setGridView(value: SetStateAction<'3x3' | '2x2'>): void;
}

const SkipCardView: FC<Props> = ({ setGridView, gridView = '3x3' }) => {
  return (
    <div className="hidden xl:flex items-center rounded-md overflow-hidden">
      <button
        type="button"
        tabIndex={-1}
        onClick={() => setGridView('3x3')}
        className={clsx(
          'w-10 h-10 bg-zinc-700/50 border border-zinc-600/50 hover:border-blue-400/50 flex items-center justify-center',
          {
            '!bg-blue-400': gridView === '3x3',
          },
        )}
      >
        <Grid3x3 className="w-5 h-5 text-white" />
      </button>
      <button
        type="button"
        tabIndex={-1}
        onClick={() => setGridView('2x2')}
        className={clsx(
          'w-10 h-10 bg-zinc-700/50 border border-zinc-600/50 hover:border-blue-400/50 flex items-center justify-center',
          {
            '!bg-blue-400': gridView === '2x2',
          },
        )}
      >
        <Grid2x2 className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default SkipCardView;
