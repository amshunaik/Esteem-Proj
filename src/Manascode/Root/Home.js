
import React from "react";
import Start from "../Start";
const Home = () => {
  return(
    <div>
    <div className="cover">
   
    <div className="part1">
            <h2>About :</h2>
            <p> According to census Self-esteem has a strong relation to happiness.
            Self-esteem is an evaluation of how we view ourselves overall, positively or negatively.
             Someone who regards themselves positively has high self-esteem, while those who view themselves negatively have low self-esteem

            </p>
        </div>
        <div className="part2">
            <h2>Why not you determine your self-esteem score ?</h2>
        </div>
     <Start/>
   



    </div>
    </div>
  )
}

export default Home

// {
//   start==false?<Start/>:<Questions/>
// }