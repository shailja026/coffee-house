import React from 'react'
import "../Styles/func.css"
import video from "../assests/production_id_4786576 (1080p).mp4"
import nes from "../assests/nestely.jpg"
import { FiPlayCircle } from "react-icons/fi";
function Functional() {
  return (
    <div>
        <div className='funVideo'>
         
        </div>
  
         <div className='secVideo'>
          <div style={{marginLeft:"-300px"}}><h1 style={{color:"wheat" , fontSize:"25px"}}><span style={{color:"brown"}}>COFFEE</span> MUG/CUP</h1>
          <p>Lorem ipsum dolor sit amet.</p>

          <p style={{backgroundColor:"white" , padding:"3px"}}>Enjoy coffee , enjoy your life</p></div>
          <FiPlayCircle style={{fontSize:"50px" , color:"wheat" , marginTop:"20px"}}/>
        </div>
        <div className='ourConMug' style={{width:"500px"}}>
            <p>Lorem ipsum dolor sit amet.</p>
            <h1>FUNCTIONAL STYLE , <span>PERFECT SIZE</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam explicabo libero laboriosam quia officia quis maxime mollitia, amet cumque iusto dolores modi maiores cum sed nulla? Qui voluptas dolorem sint.</p>
            <button id='btn1' style={{color:"white" , backgroundColor:"brown" }}>TESTY COFFEE</button>
           <button id='btn2' style={{color:"black"}}>READ MORE</button>
        </div>
    </div>
  )
}

export default Functional