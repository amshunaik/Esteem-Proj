import { Outlet } from "react-router-dom";
import React from 'react'
import Navcome from "./Navcome";
const Root = () => {
  return (
    <div className="make">
        <Navcome/>
        <Outlet/>
      
    </div>
  )
}

export default Root
