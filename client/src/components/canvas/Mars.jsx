import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei'; 
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../Loader';
import { normalMap } from '../../assets';

const Mars = ({ scale, position, texture}) => {
    //creating new scene for objects
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 100, 1000);

    camera.position.setZ(30);
    scene.add(camera);

    const imageTexture = new THREE.TextureLoader().load(texture);
    const normalTexture = new THREE.TextureLoader().load(normalMap);
    //geometry and material of planets
    const mars = new THREE.Mesh(
      new THREE.SphereGeometry(16, 32, 32),
      new THREE.MeshStandardMaterial( {
        map: imageTexture,
        normalMap: normalTexture
      })
    );
   
    //and adding to scene
    scene.add(mars);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(7, 7, 10);

   const ambientLight = new THREE.AmbientLight(0xffffff);
   scene.add(pointLight, ambientLight);
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
const MarsCanvas = ({ imageTexture, planetScale }) => {

    //scale and position props for planets
    const texture = imageTexture
    const scale = planetScale;
    const position = 0.3;
    
    return (
        <Canvas
            shadows                             //enable shadows in the scene
            frameloop='demand'                  //control when the frame updates occur
            camera={{                           //camera settings
                fov: 60,                        //field of view (angle of what's visible)
                near: 10,                      //near clipping plane (close distance)
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
                <Mars scale={scale * 0.7} position={position * 0}
                texture={texture}
                />
            </Suspense>
        </Canvas>
    )
}

export default MarsCanvas;