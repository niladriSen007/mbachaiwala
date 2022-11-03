import React from 'react'
import introVideo from "../assets/MBA_Chai_Wala.mp4"


function IntroVideo() {
  return (
    <div className='intro'>
        <video src={introVideo} muted autoPlay controlsList='nodownload'></video>
        <div></div>
    </div>
  )
}

export default IntroVideo