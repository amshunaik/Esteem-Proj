import React, { useContext, useState } from 'react'
import './Quesblock.css'
import { codecontext } from './Quescover'
import { Link, useNavigate } from 'react-router-dom'
const Quesblock = (props) => {
  const score1={"a":0,"b":1,"c":2,"d":3};
  const score2={"a":3,"b":2,"c":1,"d":0};
  const [scr,setscr]=useState(false);
  const {tot,settot}=useContext(codecontext);
  //const [tot,settot]=useState(0);
  const [ans,setans]=useState(null)
  const [current,setcurrent]=useState(0);
  const {list1}=useContext(codecontext)
  const navigate=useNavigate();
  const savehand=()=>{
    if(ans===''){
      setcurrent(current);
    }
    else{
    if(current===0||current===2||current===3||current===6||current===9){
      settot(tot+score2[ans]);
    }
    else{
      settot(tot+score1[ans]);
    }
    setcurrent(current+1);
    setans('')
    }
    
  }
  const analyse=()=>{
    console.log(ans);
   
      
    setscr(true);
    

  }
  const exithand=()=>{
    settot(0)
    navigate('/')
  }
  console.log(ans);
  return (
    
    <div className='box1'>
        <div className='ques'>{list1[current].ques}</div>
        <div className='option'>
            <div className={`${ans==="a"?'op1':'op'}` } onClick={()=>setans("a")}>A. {list1[current].a}</div>
            <div className={`${ans==="b"?'op1':'op'}` } onClick={()=>setans("b")}>B. {list1[current].b}</div>
            <div className={`${ans==="c"?'op1':'op'}` } onClick={()=>setans("c")}>C. {list1[current].c}</div>
            <div className={`${ans==="d"?'op1':'op'}` } onClick={()=>setans("d")}>D. {list1[current].d}</div>
        </div>

        {current<9?<div className='but3'>
            <div className='but' onClick={exithand}>Exit</div>
            <div className='but' onClick={savehand}>Save & Next</div></div>:
            <div className='but3'>
            <div className='but' onClick={exithand}>Exit</div>
            <button className="next"onClick={analyse}>Next</button></div>}

            
        {scr===true?<div>
          
          
          <Link className="score"to='/recomend'>Score Analysis</Link>
        
        </div>:<></>}
        <div></div>
      
    </div>
  
    
  )
}

export default Quesblock
