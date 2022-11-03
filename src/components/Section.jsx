import React from 'react'
import {motion} from "framer-motion"

function Section({h3,text,hasBtn = true,btnText,imgSrc,imgSize="70%" , backgroundColor,headingColor,textColor,btnBgColor,btnColor}) {

  const headingOptions={
    initial:{
      y:'100%',
      opacity:0,
    },
    whileInView:{
      y:0,
      opacity:1,
    }
  }

  const textOptions = {
    ...headingOptions,
    initial:{
      y:"100%",
      opacity:0,
    },
    transition:{
      delay:.3,
      type: 'spring'
  
    }
  }

  const buttonOptions = {
    ...headingOptions,
    initial:{
      y:"100%",
      opacity:0,
    },
    transition:{
      delay:.2,
      type: 'spring',
      ease:"circIn"
  
    }
  }

  const imageOptions={
    initial:{
      scale:0.1,
      opacity:0,
    },
    whileInView:{
      scale:1,
      opacity:1,  
    },
    transition:{
      delay:.3,
      type:"spring",
    },
  }

  return (
    <section className='section' style={{backgroundColor:backgroundColor}}>
        <div>
            <motion.h3 style={{color:headingColor}} 
           {...headingOptions}
            >{h3}</motion.h3>
            <motion.p {...textOptions}  style={{color:textColor}}>{text}</motion.p>
            {
                hasBtn && <motion.button {...buttonOptions} data-cursorpointer={true}  style={{color:btnColor,backgroundColor:btnBgColor}}>{btnText}</motion.button>
            }
            <div>
                <motion.img {...imageOptions} src={imgSrc} alt="SrcI" style={{width:imgSize}}/>
            </div>
        </div>
    </section>
  )
}

export default Section