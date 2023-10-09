import React, { useContext, useState } from 'react'
import './Recomend.css'
import { codecontext } from './Quescover'
import { useNavigate } from 'react-router-dom';
const Recomend = () => {

    const {tot,settot}=useContext(codecontext);
    const [show,setshow]=useState(false);
    const navigate=useNavigate();
    //window.addEventListener('popstate',deletehis)
    const showhand=()=>{
        setshow(!show);


    }
    window.onpopstate=(event)=>{
        //console.log(event);
        settot(0);
        
    }
    const buthand=()=>{
        navigate('/')
    }
  return (
    <div className='div4'>

        <div className='scoreval'>
            <p>Your self-esteem score is (out of 30):</p>
            <h1>{tot}</h1>
            
        <button onClick={showhand}>Ways to Improvise</button>
        </div>

        {show===true?<div className='show1'><h1>Ways to improve Self Esteem :</h1>
        {tot<=10?<div className='d1'>
        
        <ul>
            <li>Prioritize sufficient and balanced sleep.</li>
            <li>Maintain a regular and stable diet.</li>
            <li>Spend time outdoors in green spaces.</li>
            <li>Practice mindfulness and meditation.</li>
            <li>Avoid use of drugs and excessive alcohol (if already in use)</li>
        </ul></div>:<></>}

        {tot>=11&&tot<=15?<div className='d1'>

        <ul>
            <li>Talk to someone you trust.</li>
            <li>Cultivate positive relationships.</li>
            <li>Explore peer support communities.</li>
            
            <li>Practice mindfulness and meditation.</li>
            <li>Realize that you are not your circumstances</li>
           

        </ul>
        </div>:<></>}

        {tot>15&&tot<=20?<div className='d1'>

        <ul>
        <li>Celebrate your successes.</li>
            <li>Accept compliments and save them for difficult times.</li>
            <li>Seek input from others.</li>
            <li>Set small, manageable goals.</li>
            <li>Create a self-appreciation list.</li>
            <li>Learn from your mistakes</li>
        </ul>
            

        </div>:<></>}

        {tot>20&&tot<=22?<div className='d1'>

        <ul>
            <li>Volunteer for a cause you're passionate about.</li>
            <li>Practice forgiveness</li>
            <li>Continuously learn something new.</li>
            
            <li>Accept compliments and save them for difficult times.</li>
            <li>Celebrate you success</li>
        </ul>
            

        </div>:<></>}

        
        

        {tot>=23?<div>
            
            <ul>
                
                <li>Stay Happy as you are</li>
                <li>Do stuffs which make you happy</li>
                <li>Believe in your self and maintain the stability</li>
                <li>Celebrate your success</li></ul></div>
                
        :<></>}</div>:<></>}

        <button className='but4' onClick={buthand}>Return Home</button>



        </div>
  )
}

export default Recomend;


        