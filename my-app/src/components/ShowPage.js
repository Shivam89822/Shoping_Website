import React, { useEffect, useState } from "react";
import "./ShowPage.css";
import Carditems from "./Carditems";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

function ShowPage(props) {
  const navigate=useNavigate()
  function sendHome(){
    navigate('/home')
    
  }
  const [productData, changeData] = useState([]);

  async function fetchData() {
    props.setLoader(true); 
    
    try {
      console.log("✅⭐")
      console.log(props.category)
      const response = await axios.get("http://localhost:8080/products", {
        params: { price: props.maxPrice ,category:props.category},
      });

      setTimeout(() => {
        changeData(response.data);
        props.setLoader(false); 
      }, 1000);
      
      console.log("Data added ✅");
    } catch (e) {
      console.error("Data not added ❌", e);
      props.setLoader(false); 
    }
  }
  function sortByValue(e){ 
    let val=e.target.value;
    props.setLoader(true)
    setTimeout(()=>{
      const tempData=[...productData]
      if(val==='low'){
        tempData.sort((a,b)=>a.price-b.price)}
        else if(val==='high'){
        tempData.sort((a,b)=>b.price-a.price)
        }
        changeData(tempData)
        props.setLoader(false)
    },1000)
   
  
  }


  useEffect(() => {
   
    fetchData();
  
  }, [props.maxPrice,props.category]);

  return (
    <div id="supremeProductBox">
      <div className="allProductsSec">
        <nav className="productNavbar">
          <h1>All Products</h1>
          <div id="SortByBox">
            <label htmlFor="SortBy">Sort By:</label>
            <select name="Sort_By" id="SortBy" onChange={sortByValue}>
              <option value="low">Low→High</option>
              <option value="high">High→Low</option>
            </select>
          </div>
          <a href="">
            <i onClick={sendHome} className="fa fa-home" style={{ color: "white" }}></i>
          </a>
        </nav>
      </div>
      {props.loader ? (
  <Loader />
) : productData.length === 0 ? (
  <div className="noDataMessage">No such data found ❌</div>
) : (
  <div id="productCardContainer">
    {productData.map((data) => (
      <Carditems
        key={data.id}
        img={data.images[0]}
        title={data.title}
        price={data.price}
      />
    ))}
  </div>
)}

    </div>
  );
}

export default ShowPage;
