import React from 'react'
import { destinations } from "../constants/data.json";
import { destinationLinks } from '../constants';
import { Link } from 'react-router-dom';

const Crew = () => {

  return (
    <div className='w-full bg-dest-bg-img bg-cover bg-no-repeat bg-center'>
    {destinations.map((destination) => (
        <div 
            key={destination.name}
            id={destination.index}
            className='w-full h-screen flex px-20 justify-evenly items-center text-white'>
        <div className='w-1/3'>
          <img 
            src={destination.images}
            />
        </div>
        <div className='flex flex-col w-1/3 gap-8'>
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
        </div>
      </div>
    ))}
      
    </div>
  )
}

export default Crew