import * as React from 'react';
import { skills } from "../../constants"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import { Tilt } from 'react-tilt';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5
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

const SkillCard = ({index, name, svg, content}) => {
  return (
    <Tilt
        options={{
          max: 30,
          scale: 1,
          speed: 300
        }}
      >
    <motion.div
      variants={item}
      whileHover={{ 
        scale: 1.05,
        }} 
      className="w-[210px] h-[280px] items-center border-2 border-blue-300 bg-slate-100 shadow-md shadow-blue-300 text-black rounded-xl">
      <motion.div
        className='w-[210px] h-[280px]'
        whileHover={{
          y: 20,
        }}>
        <img 
        className='mx-auto w-10 h-10 my-2'
        src={svg} />
        <h1 className='text-center'>{name}</h1>
        <br />
        <p>{content}</p>
      </motion.div>
    </motion.div>
    </Tilt>
  )
}
const Skills = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if(inView) {
      control.start("visible");
    } else {
      control.start("hidden")
    }
  }, [control, inView]);

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate={control}
      ref={ref}
      className='grid grid-cols-2 md:grid-cols-3 gap-5'>
        {skills.map((skill, index) => (
            <SkillCard 
              key={`skill-${index}`}
              index={index}
              {...skill}
            />
        ))}
    </motion.div>
  )
}

export default Skills