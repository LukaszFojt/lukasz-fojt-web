import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from '../styles';
import { cageSvg } from '../assets';
import { SectionWrapper } from './ho_components';
import { articles } from '../constants'
import { fadeIn } from '../utils/motion'

const ArticleCard = ({ index, name, content, image, link_to}) => {
  return (
    <motion.div 
    className="z-40"
    variants={fadeIn
    //they will come up one by one after 0.5 with duration of 0.75
    ("up", "spring", index * 2, 2)}>
      <Link to={link_to}>
        <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="grid grid-cols-2 w-full h-[250px] md:h-[400px] border-2 border-white rounded-l-2xl hover:bg-slate-500">
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-xl rounded-r-none'
          />

          <div className="p-2">
          <h3 className={`${styles.pText} text-xl`}>{name}</h3>
          <p className={`${styles.pText}`}>{content}</p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

const Articles = () => {
  return (
    <section id="articles">
      <motion.div
      variants={fadeIn("right", "spring", 0.5, 1.5)}
      className='flex flex-col items-center w-full h-fit mx-auto pt-20 p-5 gap-5'>
        <div className="absolute">
          <img 
          className="w-full h-screen opacity-30"
          src={cageSvg} />
          <img 
          className="h-screen opacity-30"
          src={cageSvg} />
        </div>
        <div className='mt-12 mb-12 flex flex-col md:gap-20 z-40'>
          <motion.h1
            variants={fadeIn("up", "spring", 1, 2.5)} 
            className={`${styles.headText}`}
          >
            Articles
          </motion.h1>
        </div>
        <div 
          className="flex flex-col md:grid md:grid-cols-2 gap-10 ">
          {articles.map((project, index) => (
            <ArticleCard 
              key={`project-${index}`}
              index={index}
              {...project}
            />    
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default SectionWrapper(Articles, "");