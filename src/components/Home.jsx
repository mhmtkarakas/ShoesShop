import React from 'react'
import homePicture from "../assets/NikeAirForce.jpg"
import { Link } from 'react-router-dom';
import   '../styles/Home.css'

const Home = () => {
  return (
    <div className='mainPage' style ={{backgroundImage:`url(${homePicture})`}}>
      <div className='order'>
        <Link to="/products">
         <button> SIPARIS VER</button>
        </Link>
      </div>
    </div>
  )
}

export default Home