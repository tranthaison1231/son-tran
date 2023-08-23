import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import useMobile from '@/hooks/useMobile';

const ComputersCanvas = () => {
  const isMobile = useMobile();

  const computer = useGLTF('/desktop_pc/scene.gltf');

  return (
    <Canvas
      frameloop="demand"
      shadows
      className="absolute top-0 z-10"
      dpr={[1, 2]}
      camera={{ position: [10, 20, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
        <pointLight intensity={1} />
        <primitive
          object={computer.scene}
          position={isMobile ? [0, -1.4, -1] : [0, -1.8, -1]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
