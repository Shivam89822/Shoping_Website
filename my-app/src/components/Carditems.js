import React from 'react'
import headphone from '../images/headphone.png'
import './Carditems.css'
function Carditems(props) {
  return (
    <div id='cardBox'>
        <div id='itemBox'><img className='cartImg' src={props.img} alt="" /></div>
        <div className='cardItem'>{props.title}</div>
        <div className='cardItem'>{`Price :${props.price}$`}</div>
        <div className=''>4.2⭐</div>
        <div id='cardBtn' className='cardItem'><button className='veiwCard'>View Product</button></div>
    </div>
  )
}

export default Carditems
