import React from 'react'
import "../Styles/footer.css"
import { FaTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer'>
    <div className='first'>
        <h1>CC CAFE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam alias sequi sint adipisci excepturi?</p>
        <div className='socialIcons'>
<FaFacebook/>
<GrInstagram/>
<FaTwitter/>
        </div>
    </div>
    <div >
        <h3>Useful Links</h3>
            <ul>
                <li>Privacy</li>
                <li>Returns</li>
                <li>terms & conditions</li>
                <li>our sitemap</li>
                <li>latest news</li>
                <li>bLogs</li>
            </ul>
        
    </div>
    <div>
        <h3>Let's help you</h3>
        <ul>
            <li>Account</li>
            <li>password</li>
            <li>recovery</li>
            <li>get help</li>
            <li>purchase information</li>
            <li>purchase details</li>
        </ul>
    </div>
    <div className='form'>
        <h3>Subscribe</h3>
        <input type="text" />
        <button>Subscribe now</button>
    </div>
    </div>
   
  )
}

export default Footer