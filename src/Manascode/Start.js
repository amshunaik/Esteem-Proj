import React, { useContext } from 'react'
import { codecontext } from './Quescover'
import { useNavigate } from 'react-router-dom'
import './Start.css'
const Start = () => {
  const {setstart}=useContext(codecontext);
  const navigate=useNavigate();
  const starthandler=()=>{
    setstart(true);
    navigate('/ques')
  }
  return (
    <div>
      <button onClick={starthandler} className='but2'>Start Assesment</button>
      
    </div>
  )
}

export default Start
