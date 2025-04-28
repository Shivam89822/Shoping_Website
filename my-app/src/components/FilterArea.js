import React, { useState } from "react";
import './FilterArea.css'

function FilterArea(props) {

  function maxPriceChange(e){ 
    props.setMaxPrice(dummyValue)
  }
  const[dummyValue,setDummyValue]=useState(100)
  function dummyChange(e){
    let val=e.target.value;
    setDummyValue(val)
  }
  return (
    <div>
    <div id="filterBox">
      <div className="filterItem">
        <h2>Filters</h2>
      </div>
      <div className="filterItem">
        <div id="avText" className="filterAv">Availablity</div>

        <div className="filterAv">
          <label htmlFor="InStock">In Stock</label>
          <input type="checkbox" name="InStock" id="" />
        </div>
        <div className="filterAv">
          <label htmlFor="OutStock">Out Stock</label>
          <input type="checkbox" name="OutStock" id="" />
        </div>
      </div>
      <div className="filterItem">
        <div className="priceSort">Price</div>
        <div className="priceSort"><input onChange={dummyChange} min="0" max="100" type="range" name="" id="" defaultValue={100}/></div>
        <div className="priceSort">{`Max Price:${dummyValue}$`}</div>
      </div>
      <div className="filterItem">
        <div className="ratingSort">Minimum Rating</div>
        <div className="ratingSort"><input  min="0" max="100" type="range" name="" id="" /></div>
        <div className="ratingSort"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span></div>
      </div>
      <div className="filterItem">
        <button id="changeBtn" onClick={maxPriceChange}>apply change</button>
      </div>
    </div>
    </div>
  );
}

export default FilterArea;
