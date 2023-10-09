import React, { useContext } from 'react'
import { codecontext } from './Quescover'
const Analysis = () => {
  const {tot}=useContext(codecontext)
  return (
    <div >
      <h1>Your Self Esteem score is </h1>
      <h2>{tot}</h2>
      
    </div>
  )
}

export default Analysis
