import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF,Loader } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Robots = ({ isMobile }) => {
  const robot  = useGLTF("./adamHead/adamHead.gltf");

  return (
    <mesh>
      <ambientLight color="#ffffff" intensity={1} />
      <directionalLight
        color="#FFFFFF"
        intensity={1.8}
        position={[-100, -100, -110]}
      />
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[100, 100, 100]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[50, 50, 50]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} />
      <primitive
        object={robot.scene}
        scale={isMobile ? 0.7 : 1.2}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const RobotsCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1000px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (
    <Canvas
      style={{
        // margin:"auto",
        marginLeft: "auto",
        width: "50%",
      }}
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robots isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RobotsCanvas;