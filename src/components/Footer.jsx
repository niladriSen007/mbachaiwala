import React from 'react'
import {motion} from "framer-motion"
function Footer() {

  const footerLinks = (elem) =>{
      const allFooterLinks = document.querySelectorAll(".footerLinks");
      switch(elem)
      {
        case 0:
          allFooterLinks.forEach((item,index)=>index === elem ? item.style.opacity = 1 :  item.style.opacity = .3)
          break;
          case 1:
            allFooterLinks.forEach((item,index)=>index === elem ? item.style.opacity = 1 :  item.style.opacity = .3)
            break;
         case 2:
              allFooterLinks.forEach((item,index)=>index === elem ? item.style.opacity = 1 :  item.style.opacity = .3)
              break;
            case 3:
                allFooterLinks.forEach((item,index)=>index === elem ? item.style.opacity = 1 :  item.style.opacity = .3)
                break;
            case 4:
                  allFooterLinks.forEach((item,index)=>index === elem ? item.style.opacity = 1 :  item.style.opacity = .3)
                  break;
             case 5:
                    allFooterLinks.forEach((item,index)=>index === elem ? item.style.opacity = 1 :  item.style.opacity = .3)
                    break;       
          default:
            allFooterLinks.forEach((item) => (item.style.opacity = 1));
            break;
      }
  }

  const linksBackToNormal = () =>{
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    allFooterLinks.forEach((item) => (item.style.opacity = 1));
  }


  const headingOptions={
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
    <>
    <footer>
        <motion.h1 {...headingOptions}>
          Let's
          <br />
          #ConnectOnCutting?
        </motion.h1>
        <aside onMouseLeave={linksBackToNormal}>
            <a href="/" className="footerLinks" onMouseOver={()=>footerLinks(0) }data-cursorpointermini={true}>Home</a>
            <a href="/story" className="footerLinks"  onMouseOver={()=>footerLinks(1)} data-cursorpointermini={true}>Story</a>
            <a href="/media" className="footerLinks"  onMouseOver={()=>footerLinks(2)} data-cursorpointermini={true}>Media</a>
            <a href="/franchise" className="footerLinks"  onMouseOver={()=>footerLinks(3)} data-cursorpointermini={true}>Franchise</a>
            <a href="/events" className="footerLinks" onMouseOver={()=>footerLinks(4)} data-cursorpointermini={true}>Events</a>
            <a href="/chaiwalacares" className="footerLinks"  onMouseOver={()=>footerLinks(5)} data-cursorpointermini={true}>Chai Wala Cares</a>
        </aside>

        <div>
            <h5>Email</h5>
            <a href="mailto: info@chaiwala.com">Info@chaiwala.com</a>
            <a href="mailto: franchise@chaiwala.com">Franchise@chaiwala.com</a>
        </div>

        <div>
            <h5>Phone</h5>
            <a href="tel: +918584071291">+91-8584071291</a>
        </div>

        <p>© COPYRIGHT 2022 MBA CHAIWALA. MADE BY NILADRI SEN</p>
    </footer>
    <div className="footer"></div>
    </>
  )
}

export default Footer