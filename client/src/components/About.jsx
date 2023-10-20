import React from 'react'
import { CosmosCanvas } from './canvas'
import { techStack } from '../constants'
import BallCanvas from './canvas/Ball'
import Scroll from './elements/Scroll'

const About = () => {
  return (
    <div className='w-full h-fit'>
      <div className='w-full h-screen'>
        <div className='flex flex-col'>
          <h1 className='bigHeader'>Hello there,</h1>
          <h2 className='smallHeader'>so you want to know <br/> something about me?</h2>
        </div>
        <br/>
        <p className='bigParagraph'>
        I am Lukasz Fojt and I am learning web development.
        Actually I live, work and thrive in my motherland Poland, but I also worked in Germany for some time.
        </p>
        <br/>
        <ul className='flex flex-col gap-1 bigParagraph'>My interests include: 
          <li className='smallParagraph'>Web Development</li>
          <li className='smallParagraph'>Game Development</li>
          <li className='smallParagraph'>3D Modeling</li>
          <p className='mt-1'>and I am trying to include everything I learned so far into creation of my webistes.</p>
        </ul>
        <Scroll link="techStack"/>
      </div>
      
      <div 
        id="techStack"
        className='relative right-6'>
        <div 
          className='grid grid-cols-3'>
          {techStack.map((tech) => (
          <div className='w-24 h-24 m-10' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
          ))}
        </div>
      </div> 
    </div>
    
  )
}

export default About