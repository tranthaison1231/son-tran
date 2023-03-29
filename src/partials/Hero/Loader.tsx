import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center className="flex flex-col items-center justify-center">
      <p className="text-sm font-bold text-white">{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
