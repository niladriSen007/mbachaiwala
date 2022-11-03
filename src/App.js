import React, { useEffect } from 'react'
import IntroVideo from './components/IntroVideo'
import Section from './components/Section'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import freshTopicImg from "./assets/academy.png"
import freshTopicImg2 from "./assets/story.png"
import tedTalksImg from "./assets/in-the-news.gif"
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import bharatImg from "./assets/image1.png";
import chaiWalaImg from "./assets/image3.png";
import iconicChaiwalaImg from "./assets/con-1-1-768x768.png"
import data from "./data/data.json"

import './styles/App.scss'
import "./styles/Intro.scss"
import "./styles/Section.scss"
import "./styles/Footer.scss"

import "./styles/Cursor.scss"
import "./styles/MediaQuery.scss"

// $yellow: 


const yellow = "#fff100"
const pink= '#ed1e79'
const red ='#d20120'
const white= '#fff'
const brown= '#6d3d0f'

function App() {

  const {freshTopic,freshTopic2,tedTalks,franchise,courses,map,album,bharat,chaiwala,ICONICCHAIWALA} = data;

  const dotCursor = (e) =>{
      const cursor = document.querySelector(".cursor")
      cursor.style.top = `${e.pageY - 14}px`
      cursor.style.left = `${e.pageX - 14}px`

      if(e.target.getAttribute("data-cursorpointer"))
      {
           cursor.classList.add("cursorHover")
      }
      else if(e.target.getAttribute("data-cursorpointermini"))
      {
            cursor.classList.add("cursorHoverMini")
      }
      else
      {
            cursor.classList.remove("cursorHover")
            cursor.classList.remove("cursorHoverMini")
      }
      
  }

      useEffect(()=>{
            window.addEventListener("mousemove",dotCursor)
            return ()=> window.removeEventListener("mousemove",dotCursor)
      })

  return (
    <>
      <IntroVideo />
      <Section 
      h3={freshTopic.heading}
       text={freshTopic.text} 
       btnText={freshTopic.btn}
       imgSrc={freshTopicImg}
       backgroundColor={pink}
       headingColor={yellow}
       textColor={yellow}
       btnBgColor={yellow}
       btnColor={pink}
       />

<Section 
      h3={ICONICCHAIWALA.heading}
       text={ICONICCHAIWALA.text} 
       btnText={ICONICCHAIWALA.btn}
       imgSrc={iconicChaiwalaImg}
       backgroundColor={white}
       headingColor={yellow}
       textColor={pink}
       btnBgColor={yellow}
       btnColor={pink}
       />

       <Section 
      h3={freshTopic2.heading}
       text={freshTopic2.text} 
       btnText={freshTopic2.btn}
       imgSrc={freshTopicImg2}
       backgroundColor={pink}
       headingColor={yellow}
       textColor={yellow}
       btnBgColor={yellow}
       btnColor={pink}
       />



<Section 
      h3={tedTalks.heading}
       text={tedTalks.text} 
       btnText={tedTalks.btn}
       imgSrc={tedTalksImg}
       backgroundColor={yellow}
       headingColor={pink}
       textColor={pink}
       btnBgColor={pink}
       btnColor={yellow}
       />

<Section 
      h3={franchise.heading}
       text={franchise.text} 
       btnText={franchise.btn}
       imgSrc={franchiseImg}
       backgroundColor={white}
       headingColor={pink}
       textColor={brown}
       btnBgColor={brown}
       btnColor={yellow}
       />

<Section 
      h3={map.heading}
       text={map.text}      
       imgSrc={mapImg}
       backgroundColor={pink}
       headingColor={yellow}
       textColor={yellow}    
       btnBgColor={pink}
       btnColor={yellow}
       hasBtn={false}
       />

<Section 
      h3={courses.heading}
       text={courses.text} 
       btnText={courses.btn}
       imgSrc={coursesImg}
       imgSize={"30%"}
       backgroundColor={yellow}
       headingColor={pink}
       textColor={pink}
       btnBgColor={pink}
       btnColor={yellow}
       />



<Section 
      h3={album.heading}
       text={album.text} 
       btnText={album.btn}
       imgSrc={albumImg}
       backgroundColor={white}
       headingColor={pink}
       textColor={brown}
       btnBgColor={brown}
       btnColor={yellow}
       />

<Section 
      h3={bharat.heading}
       text={bharat.text} 
       btnText={bharat.btn}
       imgSrc={bharatImg}
       backgroundColor={pink}
       headingColor={yellow}
       textColor={yellow}
       btnBgColor={yellow}
       btnColor={pink}
       />


<Section 
      h3={chaiwala.heading}
       text={chaiwala.text} 
       btnText={chaiwala.btn}
       imgSrc={chaiWalaImg}
       backgroundColor={white}
       headingColor={pink}
       textColo   r={brown}
       btnBgColor={brown}
       btnColor={yellow}
       />

       <Footer />
       <Cursor />
    </>
  )
}

export default App