import { lazy, Suspense } from 'react';

import useIsMounted from '@/hooks/useIsMounted';

import CanvasLoader from './Loader';

const ComputerCanvas = lazy(() => import('./ComputersCanvas'));

const LazyComputersCanvas = () => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <Suspense fallback={<CanvasLoader />}>
      <ComputerCanvas />
    </Suspense>
  );
};

export default LazyComputersCanvas;
