import React, { useState } from 'react'
import furniture from '../images/furniture.png'
import shoes from '../images/shoes.png'
import cloth from '../images/cloth.png'
import headphone from '../images/headphone.png'
import mislinious from '../images/mislineous.png'
import { useNavigate} from 'react-router-dom'
import "./Category.css"
function Category(props) {
    const navigate=useNavigate()
    function sendSearchPage(e){
        const selectedCategory = e.currentTarget.children[1].textContent;
        props.setCategory(selectedCategory);
        navigate('/home/searchpage')
    }


  
  return (
    <div>
        <div className='BrowseCont'>
        <h1 >Browse Category</h1>

        </div>
        <div id='categoryBox'>
            <div className="categoryCards" onClick={sendSearchPage}>
                <div><img src={furniture} alt="" /></div>
                <div className='categoryTitle' >Furniture</div>
            </div>
            <div className="categoryCards" onClick={sendSearchPage}>
                <div><img src={shoes} alt="" /></div>
                <div className='categoryTitle' >Shoes</div>
            </div>
            <div className="categoryCards" onClick={sendSearchPage}>
                <div><img src={cloth} alt=""  /></div>
                <div className='categoryTitle'>General</div>
            </div>
            <div className="categoryCards" onClick={sendSearchPage}>
                <div><img src={headphone} alt="" /></div>
                <div className='categoryTitle'>Electronics</div>
            </div>
            <div className="categoryCards" onClick={sendSearchPage}>
                <div><img src={mislinious} alt="" /></div>
                <div className='categoryTitle'>Miscellaneous</div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Category
