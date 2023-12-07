import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import "../Styles/faq.css"
function FAQ() {
    const que = [
        "Where is the pencile made?",
        "Con you refil it with regular refills?",
        "I need to mark up dark mode. is there a white pencil lead for this?",
        "Do I get a full 60-day money-back gurarantee with this product?"
    ]
  return (
    <div className='faqs'>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <div className='ques'>
         {que.map((el, i) =>{
            return <div className='box'>
            <p>{el}</p>
            <CiCirclePlus />
            </div>
         })}
        </div>
    </div>
  )
}

export default FAQ