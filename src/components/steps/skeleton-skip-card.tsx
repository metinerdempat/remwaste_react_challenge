import { type FC } from 'react';
import clsx from 'clsx';

interface Props {
  repeate: number;
  className?: string;
}

const SkeletonSkipCard: FC<Props> = ({ className, repeate }) => {
  return (
    <>
      {Array.from({ length: repeate }).map((_, index) => (
        <div
          key={index}
          className={clsx(
            'col-span-12 lg:col-span-6 xl:col-span-4 grid rounded-3xl overflow-hidden shadow-lg shadow-amber-100/10',
            'bg-zinc-800/50 backdrop-blur-sm',
            className,
          )}
        >
          <div className="relative aspect-[4/3] bg-zinc-700/50 animate-pulse">
            <div className="absolute top-3 left-3 w-20 h-6 bg-zinc-600/50 rounded-md animate-pulse" />
            <div className="absolute bottom-3 right-3 w-16 h-6 bg-zinc-600/50 rounded-md animate-pulse" />
          </div>

          <div className="bg-zinc-700/50 px-4 py-7 space-y-6">
            <div className="space-y-2">
              <div className="h-6 w-24 bg-zinc-600/50 rounded-md animate-pulse" />
              <div className="h-4 w-20 bg-zinc-600/50 rounded-md animate-pulse" />
            </div>

            <div className="h-px bg-zinc-600/50" />

            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-zinc-600/50 rounded-md animate-pulse" />
                    <div className="h-4 w-24 bg-zinc-600/50 rounded-md animate-pulse" />
                  </div>
                  <div className="w-3 h-3 bg-zinc-600/50 rounded-full animate-pulse" />
                </div>
              ))}
            </div>

            <div className="p-3 rounded-md bg-zinc-600/50 space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="h-4 w-20 bg-zinc-500/50 rounded-md animate-pulse" />
                  <div className="h-4 w-16 bg-zinc-500/50 rounded-md animate-pulse" />
                </div>
              ))}
            </div>

            <div className="h-12 bg-zinc-600/50 rounded-md animate-pulse" />
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonSkipCard;
