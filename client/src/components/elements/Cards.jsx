import * as React from 'react';
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { Tilt } from "react-tilt"
import { motion, useAnimation } from "framer-motion"
import { boxVariant } from "../../utils/motion"
import { projects } from "../../constants"
import { styles } from "../../styles"
import { githubIcon } from "../../assets"
import { SectionWrapper } from '../ho_components';

const ProjectCard = ({ index, name, content, image, link_to, link_to_github }) => {

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
      variants={boxVariant}
      initial="hidden"
      animate={control}
      ref={ref}>
      <Link
        to={link_to}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='border-2 border-blue-300 rounded-2xl h-[500px] shadow-md shadow-blue-300'
      >
        <div className="relative w-full h-[250px] md:h-[350px]">
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-xl rounded-b-none border-b-2 border-blue-300'
          />
          <div className="z-50 absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(link_to_github, "_blank")}
              className='w-8 h-8 rounded-full flex justify-center items-center cursor-pointer bg-blue-300'
            >
              <img 
                src={githubIcon}
                alt="github"
                className="w-3/4 h-3/4" />
            </div>
          </div>
        </div>

        <div className="p-2">
          <h3 className={`${styles.pText} text-xl`}>{name}</h3>
          <p className={`${styles.pText}`}>{content}</p>
        </div>
      </Tilt>
      </Link>
    </motion.div>
  )
}

const Cards = () => {
  return (
    <div className='flex flex-col w-full h-fit'>
      <div className='flex flex-col md:grid md:grid-cols-2 justify-center items-center gap-20 md:gap-10 h-fit p-5 md:p-10 mt-32 md:mt-24'>
      {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Cards, "cards")