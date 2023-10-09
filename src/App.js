

import React from "react";
import Questions from "./Manascode/Questions";
import './App.css'

import Root from "./Manascode/Root/Root";
import Recomend from "./Manascode/Recomend";
import { createHashRouter,RouterProvider } from "react-router-dom";
import Tracks from "./Manascode/Root/Tracks";
import Home from "./Manascode/Root/Home";
import Pass1 from "./Manascode/Root/Audiotrack/Pass1";
import Pass2 from "./Manascode/Root/Audiotrack/Pass2";
import Pass3 from "./Manascode/Root/Audiotrack/Pass3";
const router=createHashRouter([
  {path:'/',element:<Root/>, children:[
    
  {path:'/',element:<Home/>},
  {path:'/ques',element:<Questions/>},
  {path:'/recomend',element:<Recomend/>},
  {path:'/tracks',element:<Tracks/>},
  {path:'/aud1',element:<Pass1/>},
  {path:'/aud2',element:<Pass2/>},
  {path:'/aud3',element:<Pass3/>},

]},


])
function App(){
  return(
    <div className="go">
    <RouterProvider router={router}/>
    
    </div>
  )

}
export default App;
