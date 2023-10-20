import { StarsCanvas, PlanetCanvas } from '../../components/canvas'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import Planets from '../../components/elements/Planets'
import { SectionWrapper } from '../../components/ho_components'

const CosmosWebsite = () => {
  return (
    <section id="cosmos">
      <div className='w-full h-screen flex justify-around items-center gap-2 md:gap-10'>
        <div
        className='flex flex-col flex-wrap gap-5 md:gap-10'>
          <p className='text-lg md:text-2xl font-extralight tracking-widest'>SO, YOU WANT TO TRAVEL TO</p>
          <h1 className='text-5xl md:text-9xl'>SPACE</h1>
          <p className='leading-loose tracking-widest text-sm md:text-md font-light'>
            Let's face it; if you want to go to space,  
            you might as well genuinely go to outer space  
            and not to hover kind of on the edge of it.  
            Well sit back, and relax  because we'll give 
            you a truly out of this world experience!
          </p>
        </div>
        <div>
          <a    
            href='#space'
            className='flex items-center justify-center w-[180px] md:w-[220px] h-[180px] md:h-[220px] bg-blue-300 rounded-full shadow-2xl shadow-black hover:bg-blue-600 hover:scale-105 mr-5'>
            <p
              className='text-xl md:text-3xl font-light tracking-wider'>EXPLORE</p>
          </a>
        </div>
      </div>
      <div 
        id="space"
        className='relative z-0 w-full h-screen bg-black'>
        <StarsCanvas />
        <PlanetCanvas />
      </div>
      <div>
        <Planets />
      </div>
    </section>
  )
}

export default SectionWrapper(CosmosWebsite, "cosmos")