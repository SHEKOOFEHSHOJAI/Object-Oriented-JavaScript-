

import React from "react";
import Navbar from "./Navbar";
import Home from './Home';

function App() {
  const title='welcome to the new blog'
  // const likes=50;
  // const link="http://www.google.com";
 
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>{title}</h1>
        {/* <p>liked {likes} times</p> */}

         {/* <p>{10}</p> */}

         {/* <p>{"hello ninja"}</p>
         <p>{[1,2,3,4,5]}</p>
         <p>{Math.random()*20}</p>
         <a href={link}>Google Site</a> */}
         <Home/>

      </div>

     
    </div>
  );
}

export default App;
