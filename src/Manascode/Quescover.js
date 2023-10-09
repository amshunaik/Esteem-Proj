
import { createContext } from 'react'
import React, {  useState } from 'react'
const codecontext=createContext();
const list1=[
  {
    "ques":"On the whole, I am satisfied with myself.",
    "a":"Strongly Agree",
    "b":"Agree",
    "c":"Disagree",
    "d":"Strongly Disagree"
  },
  {
    "ques":"At times I think I am no good at all.",
    "a":"Strongly Agree",
    "b":"Agree",
    "c":"Disagree",
    "d":"Strongly Disagree"
  },
  {
    "ques":"I feel that I have a number of good qualities.",
    "a":"Strongly Agree",
    "b":"Agree",
    "c":"Disagree",
    "d":"Strongly Disagree"
  },
  {
    "ques":"I am able to do things as well as most other people. ",
    "a":"Strongly Agree",
    "b":"Agree",
    "c":"Disagree",
    "d":"Strongly Disagree"
  },
  {
    "ques":"I feel I do not have much to be proud of.",
    "a":"Strongly Agree",
    "b":"Agree",
    "c":"Disagree",
    "d":"Strongly Disagree"
  },
  {
    "ques":"I certainly feel useless at times. ",
    "a":"Strongly Agree",
    "b":"Agree",
    "c":"Disagree",
    "d":"Strongly Disagree"
  },
  {
    "ques":"I feel that I'm a person of worth, at least on an equal plane with others. ",
    "a":"Strongly Agree",
    "b":"Agree",
    "c":"Disagree",
    "d":"Strongly Disagree"
  },
  {
    "ques":"I wish I could have more respect for myself. ",
    "a":"Strongly Agree",
    "b":"Agree",
    "c":"Disagree",
    "d":"Strongly Disagree"
  },
  {
    "ques":"All in all, I am inclined to feel that I am a failure. ",
    "a":"Strongly Agree",
    "b":"Agree",
    "c":"Disagree",
    "d":"Strongly Disagree"
  },
  {
    "ques":"I take a positive attitude toward myself. ",
    "a":"Strongly Agree",
    "b":"Agree",
    "c":"Disagree",
    "d":"Strongly Disagree"
  },
]
const Quescover = (props) => {
    const [start,setstart]=useState(false);
    const [analyse,setanalyse]=useState(false);
    const [tot,settot]=useState(0);
  return (
    <codecontext.Provider value={{
      start,analyse,setstart,setanalyse,list1,tot,settot
    }}>
        {props.children}
      
    </codecontext.Provider>
  )
}

export default Quescover;
export {codecontext}
