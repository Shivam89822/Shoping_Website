import React from 'react'
import ShowPage from './components/ShowPage';
import FilterArea from './components/FilterArea';
import { useState } from 'react';
import './SearchPage.css'
function SearchPage(props) {
     const[maxPrice,setMaxPrice]=useState(100);
      const [loader, setLoader] = useState(true);
      const[category,setCategory]=useState("General")
  return (
    <div>
        <div id='itemsSearching'>  
           <FilterArea setLoader={setLoader} maxPrice={maxPrice} setMaxPrice={setMaxPrice}/>
           <ShowPage loader={loader} setLoader={setLoader} maxPrice={maxPrice} category={props.category} setCategory={props.setCategory}/>
      </div>
      
    </div>
  )
}

export default SearchPage
