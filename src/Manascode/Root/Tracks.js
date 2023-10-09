import React from 'react'
import {  Outlet } from 'react-router-dom';
import Trackinfo from './Trackinfo';
const Tracks=()=>{
  
    return(
        <>
        <Trackinfo/>
        <Outlet/>
        
        </>
        
    )

}
export default Tracks;