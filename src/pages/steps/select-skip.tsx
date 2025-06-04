import type { Skip, SkipWithImage, SortBy } from '@/interfaces';
import { axios } from '@/lib';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState, type FC } from 'react';
import skipImages from '@/data/skip-images.json';
import SelectSkipCard from '@/components/steps/select-skip-card';
import SkeletonSkipCard from '@/components/steps/skeleton-skip-card';
import SelectSkipSort from '@/components/steps/select-skip-sort';
import { skipQueryBuilder } from '@/utils';
import useStepsStore from '@/stores/use-steps';
import SkipCardView from '@/components/steps/skip-card-view';

const apiQuery = '/skips/by-location?';

const SelectSkipPage: FC = () => {
  // These values are hardcoded for demonstration purposes.
  // In a production environment, they should be managed as state
  // to enable proper query caching and dependency tracking.
  const postCode = 'NR32';
  const area = 'Lowestoft';

  const { data, isLoading, error } = useQuery<Skip[]>({
    queryKey: ['skips', 'by-location', postCode, area],
    queryFn: async () => {
      const response = await axios.get(skipQueryBuilder(apiQuery, postCode, area));
      await new Promise((resolve) => setTimeout(resolve, 500));
      return response.data;
    },
  });
  const [sortBy, setSortBy] = useState<SortBy>(null);
  const [selecetedSkip, setSelectedSkip] = useState<SkipWithImage | null>(null);
  const stepsData = useStepsStore((store) => store.data);
  const [gridView, setGridView] = useState<'3x3' | '2x2'>('3x3');

  const mutatedData = useMemo(() => {
    if (!data) return [];

    const skipsWithImages = data.map((skip, i) => ({
      ...skip,
      image: skipImages[i],
    }));

    return skipsWithImages.sort((a, b) => {
      if (sortBy === 'price') {
        return b.price_before_vat - a.price_before_vat;
      } else if (sortBy === 'size') {
        return a.size - b.size;
      }
      return 0;
    });
  }, [data, sortBy]);

  useEffect(() => {
    if (stepsData && (stepsData as any)?.skip) {
      setSelectedSkip((stepsData as any)?.skip as SkipWithImage);
    }
  }, [stepsData]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <SkeletonSkipCard repeate={9} className="mt-24" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="max-w-7xl mx-auto text-red-400">Error: {error.message}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-12 mb-8 flex justify-end">
        <div className="flex items-center gap-2">
          <SkipCardView gridView={gridView} setGridView={setGridView} />
          <SelectSkipSort sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>

      {mutatedData.length === 0 ? (
        <div className="text-center text-zinc-400 mt-12">
          <SkeletonSkipCard repeate={9} />
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-3 md:gap-6 xl:gap-8">
          {mutatedData.map((skip, i) => (
            <SelectSkipCard
              key={skip.id}
              skip={skip}
              index={i}
              selectedSkip={selecetedSkip}
              setSelectedSkip={setSelectedSkip}
              gridView={gridView}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectSkipPage;
