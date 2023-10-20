import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { boxVariant } from "../../utils/motion"
import * as React from 'react';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
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

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

const Box = ({num}) => {
  
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if(inView) {
      control.start("visible");
    } else {
      control.start("hidden")
    }
  }, [control, inView]);

  const constraintsRef = React.useRef(null);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div className="flex w-full h-fit justify-center items-center">
      <motion.div
      className="w-4/5 h-[1000px] bg-light rounded-xl
      "
      variants={boxVariant}
      initial="hidden"
      animate={control}
      ref={ref}
      >
      {/*  */}
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
      {/*  */}
        <motion.div
          className="w-[200px] h-[200px]"
          ref={constraintsRef}>
            <motion.div
              className="w-[100px] h-[100px] bg-white"
              drag
              dragConstraints={constraintsRef}
            />
        </motion.div>
      {/*  */}
        <div className="fixed w-[150px] h-[150px]">
          <motion.div
            className="w-[150px] h-[150px] bg-slate-400"
            style={{scale}}
          >
            <motion.div className="w-[100px] h-[100px] bg-white"
            scale={{
              scaleY: scrollYProgress
            }}>
            </motion.div>
          </motion.div>
        </div>
      {/*  */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-3/5 overflow-visible stroke-slate-500 stroke-2"
        >
          <motion.path
            d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 5, ease: "easeInOut" },
              fill: { duration: 3, ease: [1, 0, 0.8, 1] }
            }}>
          </motion.path>
        </motion.svg>
      </motion.div>
    </div>
    
  );
};

export default Box;