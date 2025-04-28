import React from 'react'
import Navbar from './components/Navbar';
import IntroPage from './components/IntroPage';
import MiddleIntro from './components/MiddleIntro';
import Category from './components/Category';
import './Main.css'
function Main(props) {
  return (
    <div>
    <IntroPage/>
    <MiddleIntro/>
    <Category setCategory={props.setCategory}/> 
    </div>
  )
}

export default Main
