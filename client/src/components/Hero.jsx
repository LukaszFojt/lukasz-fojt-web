import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { SectionWrapper } from './ho_components'
import { styles } from '../styles'
import { logoReaper, solarSystemSvg, arrow } from '../assets/index'
import { Link } from 'react-router-dom'
import Scroll from './elements/Scroll'
import { CosmosCanvas } from './canvas'
import { heroInfo } from "../constants/data.json";
import Skills from './elements/Skills'
import { sfGenerator } from '../assets/models-icons';

const Hero = () => {
  return (
    <section
    id="hero">
      <motion.div
      variants={fadeIn("right", "spring", 0.5, 1.5)}
      className='flex flex-col items-center w-full h-fit mx-auto z-10'>

        {/* HERO SECTION */}

        <div className='mt-8 md:mt-60 mb-20 flex flex-col gap-5 md:gap-20 w-4/5'>
        <CosmosCanvas />
        <div className='grid grid-cols-2'>
          <motion.h1
          variants={fadeIn("up", "spring", 1, 2.5)} 
          className='bigHeader'>Hi, I am Łukasz Nice to meet you</motion.h1>
      </div>
          <div className='grid grid-cols-2 w-full h-[154px] items-center border-2 border-violet-300 rounded-full'>
            <div className='w-[150px] h-[150px] flex items-center justify-center rounded-full border-2 border-blue-300 mx-auto'>
            <img 
              className='w-12 h-12 md:w-24 md:h-24  bg-white rounded-full'
              src={logoReaper}
              alt="logo"
            />
            </div>
            <div className='w-4/5 h-[150px] flex items-center justify-center rounded-full border-2 border-blue-300 mx-auto p-4 md:p-6'>
              <p className='smallParagraph'>I am a beginner frontend web developer from Poland. </p>
            </div>
            
          </div>
          <Scroll link="about" />
        </div>

        {/* SOMETHING ABOUT */}

        <motion.div 
        variants={fadeIn("right", "spring", 0.5, 1.5)}
        id="about"
        className='flex flex-col gap-5 w-4/5 h-screen md:h-fit'>
          <div className="flex">
          {heroInfo.map((heroInfo) => (
            <div 
            key={heroInfo.id}
            className={`${styles.pText}`}>
            <p className={`${styles.headerText}`}>{heroInfo.title}</p>
            <img className='w-[200px] md:w-[500px] h-[150px] md:h-[350px] float-left mr-5 md:mr-10 mb-5 md:mb-10 shadow-md shadow-blue-300'
            src={sfGenerator}
            alt="image"
            />
              {heroInfo.description}
            </div>
          ))}
          </div>
          <Link 
            to="/about"
            onClick={() => {
              window.scrollTo(0,0)
            }}
          >
          {/*  */}
          
            <button
              className='flex justify-center items-center gap-1 w-32 md:w-48 h-10 md:h-16 cursor-pointer bg-red-500'>
              <p className='text-white text-sm md:text-2xl'>Read More</p>
              <img 
              className='w-8 md:w-12 h-8 md:h-12 bg-white rounded-full'
              src={arrow}
              alt="arrow-svg" />
            </button>
            </Link>
            <div>
            <img 
                className='relative bottom-40 md:bottom-32 left-40 md:left-48 w-44 md:w-60 h-44 md:h-60 opacity-30'
                src={solarSystemSvg}
                alt="svg"
              />
            </div>
            <div className='relative bottom-32 gap-5 flex flex-col'>
              <Scroll link="projects" />
              <hr className='bottom-20 border-1 border-red-500'/>
            </div>
        </motion.div>
        {/* PROJECTS VIEW */}

        <div 
          id="projects"
          className='flex flex-col justify-center items-center first-line:md:w-4/5 h-fit mt-12'
        >
          <Skills />
        </div>
        <Link 
            to="/about"
            onClick={() => {
              window.scrollTo(0,0)
            }}
        >
        <button
          className='flex justify-center items-center gap-1 w-32 md:w-48 h-10 md:h-16 cursor-pointer bg-red-500 mt-8'>
          <p className='text-white text-sm md:text-2xl'>Read More</p>
          <img 
          className='w-8 md:w-12 h-8 md:h-12 bg-white rounded-full'
          src={arrow}
          alt="arrow-svg" />
        </button>
        </Link>
      </motion.div>
    </section>
  )
}

export default SectionWrapper(Hero, "hero")