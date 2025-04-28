import React from 'react'
import './MiddleIntro.css'
import cart from '../images/cart.png'
import { Link } from 'react-router-dom'

function MiddleIntro() {
  return (
    <div className='intro'>
        <div id='basicIntro'>
            <div className='introTitle'><span>INTRODUCING</span><span> Shivam</span><span id='special'>ify</span><span> BEST OF BEST</span></div>
            <p>But latest gadgets</p>
            <p>Best products at best price</p>
            <Link to='/home/searchpage' className="shopNow"> Shop Now</Link>
      
        </div>
      
    </div>
  )
}

export default MiddleIntro;
