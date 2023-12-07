import React from 'react'
import "../Styles/ourmug.css"
import mug1 from "../assests/travellady1.jpg"
function OurMugs() {
  return (
    <div className='ourPro'>
     <div className='allMugs'>
       <img src="https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
       <img src="https://images.pexels.com/photos/1476329/pexels-photo-1476329.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
       <img src="https://images.pexels.com/photos/343665/pexels-photo-343665.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
       <img src={mug1} alt="" />
     </div>
     <div className='ourConMug'> 
        <p style={{marginBottom:"-10px" , color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <h1>MADE OF HIGH QUALITY <span>304 STAINLESS STEEL</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut corporis voluptate blanditiis soluta voluptas molestias repellendus quibusdam ipsum libero, optio qui delectus impedit, similique accusantium ducimus omnis rerum itaque nesciunt.</p>
        <button id='btn1' style={{color:"white" , backgroundColor:"brown" }}>TESTY COFFEE</button>
           <button id='btn2' style={{color:"black"}}>READ MORE</button>
     </div>
    </div>
  )
}

export default OurMugs