import React from 'react'
import Logo from "../assets/logo.png"
import {BsMouse} from "react-icons/bs"

function Cursor() {
  return (
    <>
       <div className="cursor"></div>
       <a href="/" className='logo'>
        <img src={Logo} alt="Logo"  data-cursorpointer={true}/>
       </a>
       <a href="/franchise" className='franchiseBtn' data-cursorpointer={true}>
        GET A FRANCHISE
       </a>
       <BsMouse  className='scrollBtn' data-cursorpointer={true}/>
    </>
  )
}

export default Cursor