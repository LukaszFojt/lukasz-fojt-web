import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei'; 
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../Loader';

const Planet = ({ scale, position}) => {
    //creating new scene for objects
    const scene = new THREE.Scene();

    //geometry and material of planets
    const geometry = new THREE.SphereGeometry(16, 16, 16)
    const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true });
    
    <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
    //creating planet
    const planet = new THREE.Mesh(geometry, material);
    
    //and adding to scene
    scene.add(planet);

    return (
        <primitive 
            object={scene}          //3D object or scene you're rendering
            scale={scale}           //scale the object's size
            position-y={position}   //position object along y-axis
            position-x={position}   //position object along x-axis
            rotation-y={0}          //rotate object along y-axis
        />
    )
}

//Putting Planets into Canvas
const PlanetCanvas = () => {

    //scale and position props for planets
    const scale = 2;
    const position = 0.3;
    
    return (
        <Canvas
            shadows                             //enable shadows in the scene
            frameloop='demand'                  //control when the frame updates occur
            camera={{                           //camera settings
                fov: 60,                        //field of view (angle of what's visible)
                near: 30,                      //near clipping plane (close distance)
                far: 6000,                      //far clipping plane (far distance)
                position: [-50, 50, 5]          //camera position in 3D space (x, y, z)
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    autoRotate                  //automatically rotate the camera around the target
                    enableZoom={true}           //allow zooming in and out with the mouse scroll
                    maxPolarAngle={Math.PI / 2} //maximum angle the camera can tilt upwards (in radians)
                    minPolarAngle={Math.PI / 2} //minimum angle the camera can tilt upwards (in radians)
                />

                {/* Full scale solar system */}
                <Planet scale={scale * 0.7} position={position * 0}/>
                <Planet scale={scale * 0.005} position={position * 58}/>
                <Planet scale={scale * 0.012} position={position * 108}/>
                <Planet scale={scale * 0.013} position={position * 150}/>
                <Planet scale={scale * 0.007} position={position * 228}/>
                <Planet scale={scale * 0.143} position={position * 778}/>
                <Planet scale={scale * 0.121} position={position * 1427}/>
                <Planet scale={scale * 0.051} position={position * 2871}/>
                <Planet scale={scale * 0.050} position={position * 4498}/>
            </Suspense>
        </Canvas>
    )
}

export default PlanetCanvas;