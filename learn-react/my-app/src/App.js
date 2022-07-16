
import './App.css';
import React from "react";
function App() {
  const title='welcome eo the new blog'
  const likes=50;
  const link="http://www.google.com";
 
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>liked {likes} times</p>

         {/* <p>{10}</p> */}

         <p>{"hello ninja"}</p>
         <p>{[1,2,3,4,5]}</p>
         <p>{Math.random()*20}</p>
         <a href={link}>Google Site</a>
      </div>

     
    </div>
  );
}

export default App;
