import Draggable from "../components/elements/Draggable";
import Box from "../components/elements/Box";
import { motion, useAnimation, useMotionValue, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { boxVariant } from "../utils/motion"
import * as React from 'react';
import Fire from "../components/elements/Fire";
import { PlanetCanvas,MarsCanvas,StarsCanvas,CosmosCanvas } from '../components/canvas';
import { 
  mercuryTexture,
  marsTexture,
  earthTexture,
  venusTexture,
  jupiterTexture,
  saturnTexture,
  uranusTexture,
  neptuneTexture
} from '../assets/planets';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  }
};

const TestsPage = () => {
  return (
    <div className='flex flex-col items-center w-full h-fit mx-auto justify-center'>
      <motion.ul
        className="w-[150px] h-[150px] grid grid-cols-2 list-none gap-5 p-5 bg-lighter"
        variants={container}
        initial="hidden"
        animate="visible"
        
      >
        {[0, 1, 2, 3].map((index) => (
          <motion.li 
            key={index}
            className="bg-white rounded-full"
            variants={item}
          />
        ))}
      </motion.ul>

      <div className="flex justify-center items-center">
          <div className="absolute opacity-90">
            <Fire duration={4}/>
          </div>
          <div className="absolute top-24 opacity-70 ">
            <Fire duration={5}/>
          </div>
          <div className="absolute top-28 opacity-50">
            <Fire duration={6}/>
          </div>
      </div>
      
      <div className="planet">
        <MarsCanvas planetScale={1} imageTexture={mercuryTexture} />
      </div>
      <div className="planet">
        <MarsCanvas planetScale={1.5} imageTexture={marsTexture} />
      </div>
      <div className="planet">
        <MarsCanvas planetScale={1.5} imageTexture={earthTexture} />
      </div>
      <div className="planet">
        <MarsCanvas planetScale={1.5} imageTexture={venusTexture} />
      </div>
      <div className="planet">
        <MarsCanvas planetScale={3} imageTexture={jupiterTexture} />
      </div>
      <div className="planet">
        <MarsCanvas planetScale={2.5} imageTexture={saturnTexture} />
      </div>
      <div className="planet">
        <MarsCanvas planetScale={1.5} imageTexture={uranusTexture} />
      </div>
      <div className="planet">
        <MarsCanvas planetScale={1.5} imageTexture={neptuneTexture} />
      </div>
    </div>
  )
}

export default TestsPage