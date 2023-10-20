import React, { useState } from 'react'
import { dataSlider } from '../../constants/index'

const Slider = () => {

const [currentImage, setCurrentImage] = useState(0)

const NextImage = () => {
  if(currentImage > dataSlider.length - 2) {
    setCurrentImage(0)
  } else if(currentImage < (dataSlider.length - 1)) {
    setCurrentImage(currentImage + 1);
  } else {
    console.log("error")
  }
}

const PreviousImage = () => {
  if(currentImage < 1) {
    setCurrentImage(dataSlider.length - 1)
  } else if(currentImage > 0) {
    setCurrentImage(currentImage - 1);
  } else {
    console.log("error")
  }
}

console.log(currentImage)

  return (
    <div className='w-full h-[1000px] flex items-center justify-center'>
       <div className='w-4/5 h-[500px] bg-slate-500'>
      <div className='w-full h-full'>
         <img src={dataSlider[currentImage].img} />
         <div
         onClick={() => {
          PreviousImage();
         }} 
         className='cursor-pointer w-10 h-10 bg-black opacity-30'>

         </div>
         <div className='w-4/5'>

         </div>
         <div
         onClick={() => {
          NextImage();
         }}  
         className='cursor-pointer w-10 h-10 bg-green-700 opacity-50'>

         </div>
      </div>
      </div>
    </div>
    
  )
}

export default Slider