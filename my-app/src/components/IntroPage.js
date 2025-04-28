import React from 'react'
import black from '../images/blackWatch.png'
import white from '../images/whiteWatch.png'
import './Intropage.css'
import { Link } from 'react-router-dom'
function IntroPage() {
  return (
    <div id='introBox'>
      <div className="introItems" id='introDes'>
        <div className='titleName'>
        THE PRODUCT OF THE FUTURE
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate labore saepe commodi
          laborum voluptatem dignissimos nemo omnis! Amet, ex fuga. Repellat vero similique delectus iure at ut laborum ab.
        </p>
        <div>
          <Link to='/home/searchpage' id='buyNow'>Buy Now</Link>
          <button>Learn More</button>
        </div>
      </div>
      <div className="introItems">
        <div className='imgCont'>
        {/* <img className="watch" src={black} alt="" /> */}
        <img className='watch' src={white} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default IntroPage
