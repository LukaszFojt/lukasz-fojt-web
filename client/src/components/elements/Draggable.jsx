import { motion } from "framer-motion";
import * as React from 'react';
import { logoReaper } from "../../assets";
import { styles } from "../../styles";
import { footerLinks } from "../../constants";
const Draggable = () => {

  const constraintsRef = React.useRef(null);

  return (
    <div className="w-full h-fit flex flex-col mb-20">
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <motion.div
          className="flex items-center justify-center w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-white rounded-full"
          ref={constraintsRef}>
            <motion.img
              src={logoReaper}
              className="w-[100px] md:w-[200px] h-[100px] md:h-[200px]"
              drag
              dragConstraints={constraintsRef}
            />
        </motion.div>

        <div>
    
          <div className={`${styles.pText} width-full h-10 flex flex-col`}>
            <div className='flex flex-col gap-5 p-10 '>
              
              <ul className='flex md:flex-row gap-2 md:gap-10'>
                {footerLinks.map((link) => (
                  <li
                    className='flex items-center gap-2'
                    key={link.name}
                  >
                  <a 
                  href={link.link}>
                    <img 
                      src={link.icon} alt="icon"
                      className='w-12 md:w-16 h-12 md:h-16' 
                    />
                  </a> 
                    {link.name}
                  </li>
                ))}
              </ul>
              <div className='md:flex md:items-center md:gap-5'>
                <h3 className='text-2xl font-bold'>Get in touch</h3>
                <a
                className='text-red-500 text-xl md:text-2xl'
                href="mailto:lukaszfojt98@gmail.com">Send email to me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Draggable