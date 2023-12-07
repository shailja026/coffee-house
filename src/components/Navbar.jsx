import React from 'react'
import  "../Styles/navbar.mudule.css"
import bg1 from "../assests/travellady1.jpg"
import bg2 from "../assests/travelmug1.jpg"
function Navbar() {
  return (
    <div className="secondpage">
        <ul className="navbar">
            <li>FISHIDA</li>
            <li>AirCure</li>
            <li>TIFFANY.CR</li>
            <li>alexizSpa</li>
        </ul>

       <section className='contentsection'>
       <div className='contentPage2'>
          <div className='content' style={{color:"black" , height:"500px"}}>
           <p>12 OZ STAINLESS STEEL VACUUM INSULATED TUMBLER</p>
           <h1>CS COSDDI COFFEE <span>TRAVEL MUG</span></h1>
           <p>double wall vaccum insulated technology foe maximum temperature retention . Leak-proof when lid is in closed position and assempled properly. Easy to carry , wonderfully suitable for most of situation </p>

           <button id='btn1' style={{color:"black"}}>TESTY COFFEE</button>
           <button id='btn2' style={{color:"black"}}>READ MORE</button>
          </div>
        </div>
        <div className='travelMug'>
         <img src={bg1} alt="error" id='firstImg' />
         <img src={bg2} alt="error" id='secondImg' />
        </div>
       </section>

       
    </div>
  )
}

export default Navbar