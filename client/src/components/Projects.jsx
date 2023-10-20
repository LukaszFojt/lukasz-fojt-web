import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from '../styles';
import { githubIcon } from '../assets';
import { SectionWrapper } from './ho_components';
import { projects } from '../constants'
import { fadeIn } from '../utils/motion'
import { Link } from "react-router-dom";

const ProjectCard = ({ index, name, content, image, link_to, link_to_github }) => {
  return (
    <motion.div variants={fadeIn
    //they will come up one by one after 0.5 with duration of 0.75
    ("up", "spring", index * 2, 2)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-lighter border-2 rounded-2xl'
      >
      <Link to={link_to}>
        <div className="relative w-full h-[200px]">
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-xl rounded-b-none'
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(link_to_github, "_blank")}
              className='w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={githubIcon}
                alt="github"
                className="w-3/4 h-3/4" />
            </div>
          </div>
        </div>
      </Link>

        <div className="p-2">
          <h3 className={`${styles.headText} text-xl`}>{name}</h3>
          <p className={`${styles.pText}`}>{content}</p>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects">
      <motion.div
      variants={fadeIn("right", "spring", 0.5, 1.5)}
      className='flex flex-col items-center w-full h-fit mx-auto pt-20 p-2 gap-5'>
        <div className='mt-20 md:mt-60 mb-20 flex flex-col gap-5 md:gap-20'>
          <motion.h1
            variants={fadeIn("up", "spring", 1, 2.5)} 
            className={`${styles.headText}`}
          >
            Projects
          </motion.h1>
        </div>

        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </motion.div>
    </section>
  )
}

export default SectionWrapper(Projects, "");