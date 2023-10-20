import React from 'react'
import { destinations } from "../constants/data.json";
import { destinationLinks } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from './ho_components';

const Destinations = () => {

  return (
    <div className='w-full bg-dest-bg-img bg-cover bg-no-repeat bg-center'>
    {destinations.map((destination) => (
        <div 
            key={destination.name}
            id={destination.index}
            className='w-full h-screen flex px-20 justify-evenly items-center text-white'>
        <motion.div 
        variants={fadeIn("right", "spring", 0.5, 1.5)}
        className='w-1/3'>
          <motion.img
           animate={{
                  y: [0, 20, 0],
                  x: [0, 10, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'loop'
            }}
            src={destination.images}
            />
        </motion.div>
        <motion.div
        variants={fadeIn("left", "spring", 0.5, 1.5)}
        className='flex flex-col w-1/3 gap-8'>
        <ul className='flex gap-10'>
            {destinationLinks.map((link) => (
                <a 
                    href={`/projects/#${link.id}`}
                    className='cursor-pointer'
                    key={link.id}
                >
                    {link.title}
                </a>
            ))}
        </ul>
          <h1 className='text-9xl uppercase'>{destination.name}</h1>
          <p className='leading-loose tracking-widest text-md font-light'>{destination.content}</p>
          <hr />
          <div className='grid grid-cols-2'>
            <div>
              <p className='text-xl font-extralight tracking-widest'>Distance</p>
              <h3 className='text-3xl font-light uppercase'>{destination.distance}</h3>
            </div>
            <div>
              <p className='text-xl font-extralight tracking-widest'>Travel</p>
              <h3 className='text-3xl font-light uppercase'>{destination.travel}</h3>
            </div>
          </div>
        </motion.div>
      </div>
    ))}
      
    </div>
  )
}

export default SectionWrapper(Destinations, "destinations");