import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function Home(props) {

  return (
    <div className="Home">
      <Navbar category={props.category} setCategory={props.setCategory} />
      <Outlet />
    </div>
  );
}

export default Home;
