import { STEPS } from '@/constants';
import { useStepsStore } from '@/stores';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';

const useStepPoint = () => {
  const { pathname } = useLocation();
  const stepId = useStepsStore((store) => store.stepId);

  const navigate = useNavigate();

  const navigateToStep = () => {
    const findedStep = STEPS.find((step) => step.id === stepId);

    if (!findedStep) {
      return navigate(STEPS[0].path);
    }

    return navigate(findedStep.path, {
      /**
       * ! We can grab all state from stores but if we need to pass some additional state we can do it here
       * states: {},
       */
    });
  };

  useEffect(() => {
    navigateToStep();
  }, [pathname, stepId]);
};

export default useStepPoint;
