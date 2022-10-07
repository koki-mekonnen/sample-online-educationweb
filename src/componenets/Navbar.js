import React, { useState } from 'react'
import "./Navbar.css"

function myfun(){
  

}



const Navbar = () => {

 return (
    <div  >

   <nav   className='header'>
   
    <ul className='menu'>
    <li>
    
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/allcourses">All Courses</a>
        <a href="/team">Team</a>
        <a href="/contact">Contact</a>
        </li>
       </ul>
    <div className="start">
      <div className='button'>GET CERTIFICATE</div>
    </div>
    <div className='hamburger'>
    <i  id="bar" class="bi bi-list"></i>
    </div>
   </nav>
   


    </div>
  )
}

export default Navbar