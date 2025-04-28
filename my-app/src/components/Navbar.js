import React from "react";
import './Navbar.css'
import whishlist from '../images/whislist.png'
import cart from '../images/cart.png'
import { useNavigate } from "react-router-dom";
function Navbar(props) {
  const navigate=useNavigate()
  function traverse() {
    let val=document.getElementById('searchBox').value
    props.setCategory(val)
    if (window.location.pathname === '/home') {
    navigate('/home/searchpage')
      
    }
  }
  

  function changeCategory(){
    let val=document.getElementById('searchBox').value
    props.setCategory(val)
  }
  return (
    <div className="navCont">
      <nav className="navBox">
        <div className="navItem">
          <div className="siteName" id="webName">
            <span id="first">Shivam</span><span id="sec">ify</span>
          </div>
          <div className="siteName" id="tagName">Shivam Ecommerce</div>
        </div>
        <div className="navItem">
            <div id="searchCont">
            <input list="catagorySuggestions" type="search" name="" id="searchBox" placeholder="Search.."/>
            <datalist id="catagorySuggestions">
              <option value="Electronics"></option>
              <option value="Furniture"></option>
              <option value="Shoes"></option>
              <option value="Miscellaneous"></option>
              <option value="General"></option>

            </datalist>
              <button onClick={() => {
  // changeCategory();
  traverse();
}}
 >
            Search
               </button>
            </div>
        </div>
        <div className="navItem">
          <div>
            <img className="cartIcon" src={whishlist} alt="" />
            <img className="cartIcon" src={cart} alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
