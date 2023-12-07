import React from 'react'
import "../Styles/mugadvertise.css"
import img from "../assests/mugadv.jpg"
import OurMugs from './OurMugs'
function MugAdvertise() {
  return (
    <div className='mugAdvertiser'> 
         <img src={img} alt="" className='mugAdv' />
         <div className='content advCon' style={{color:"black",}}>
         
            <p style={{color:"black",marginBottom:"-40px"}}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <h1 style={{textAlign:"right"}}>SPILL PROOF <span>TRAVEL MUG</span> WITH LEAKPROOF LID</h1>
           <p style={{color:"black", marginTop:"-40px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, mollitia ad rem neque expedita odit omnis aliquam eaque ipsa deserunt perferendis officia inventore sapiente sequi temporibus. Libero nisi numquam molestiae?</p>
         
           <button id='btn1' style={{color:"white" , backgroundColor:"brown" }}>TESTY COFFEE</button>
           <button id='btn2' style={{color:"black"}}>READ MORE</button>
         </div>
        
    </div>
  )
}

export default MugAdvertise