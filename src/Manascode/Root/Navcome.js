import React,{useContext} from 'react'
import {  useNavigate } from 'react-router-dom'
import './Navcome.css'
import { codecontext } from '../Quescover'
import yog from './img1.jpg'
const Navcome = () => {
  
  const {settot}=useContext(codecontext);
  const navigate=useNavigate();
  const homehand=()=>{
    navigate('/')
    settot(0);
    
  }
  const trackhand=()=>{
    navigate('/tracks')
  }
  return (
    
    <div className='divnav'>
        <ul className='ul'>
        <li><div className='tag'>
          <img src={yog} alt="" />
          <h2>Med-Esteem</h2>
          </div>
        </li>
        <ul class='nav2'>
          
        <li className='li' onClick={homehand}>Home</li>
        <li className='li'onClick={trackhand}>Tracks</li>

        </ul>
       
        </ul>
      
    </div>
  )
}

export default Navcome
