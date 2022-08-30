import React from 'react'
import Navbar from './Navbar'
export default function Header() {
    return (
        <div id="main">
           <Navbar/>
           <div className="name">
               <h1><span>Lanuch Your App</span> With confidence and creativity</h1>
               <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               <a  href="#"className="cv-btn">Download</a>
           </div>
        </div>
    )
}
