import { STEPS } from '@/constants';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface StepsState {
  stepId: number;
  data: unknown;
  /* doesn't need setStepId because of just simulating the stepper */
  // setStepId: (stepId: number) => void;
  setData: (data: unknown) => void;
}

const useStepsStore = create<StepsState>()(
  persist(
    (set) => ({
      stepId: STEPS[2].id,
      data: null,
      setStepId: (stepId: number) => set({ stepId }),
      setData: (data: unknown) => set({ data }),
    }),
    {
      name: '@remwaste/steps',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useStepsStore;
