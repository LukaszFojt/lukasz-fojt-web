import { motion } from "framer-motion"

const Fire = ({duration}) => {

  return (
    <div className="flex">
        <motion.div 
          animate={{
          y: [0, 10, 0, 15, 0]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        className="fire h-[60px] bg-red-500"
        />
        <motion.div 
          animate={{
          y: [0, 20, 0, 10, 0]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop'
        }}
          className="fire h-[80px] bg-orange-500"
        />
        <motion.div
          animate={{
          y: [0, 15, 0, 30, 0]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop'
        }}
          className="fire h-[100px] bg-orange-300"        
        />
        <motion.div 
          animate={{
          y: [0, 35, 0, 50, 0]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop'
        }}
          className="fire h-[120px] bg-orange-100"
        />
        <motion.div 
          animate={{
          y: [0, 25, 0, 35, 0]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop'
        }}
          className="fire h-[100px] bg-orange-300"
        />
        <motion.div 
          animate={{
          y: [0, 10, 0, 20, 0]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop'
        }}
          className="fire h-[80px] bg-orange-500"
        />
        <motion.div 
          animate={{
          y: [0, 15, 0, 10, 0]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop'
        }}
          className="fire h-[60px] bg-red-500"
        />
      </div>
  )
}

export default Fire