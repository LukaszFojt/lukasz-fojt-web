import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from '.././Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.05]} />
      
      <mesh castShadow receiveShadow scale={3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff'
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;