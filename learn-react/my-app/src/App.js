

import React from "react";
import Navbar from "./Navbar";
import Home from './Home';
import  Create from "./create";
import{BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import BlogDetails from "./BlogDetail";
import NotFound from "./NotFound";
//browserRouter in Router
//nested in app.js
//each access the router
function App() {
  // const title='welcome to the new blog'
  // const likes=50;
  // const link="http://www.google.com";
 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            {/* each route other error 404 */}
            <Route path="*">
              <NotFound/>
            </Route>

          </Switch>
          {/* <h1>{title}</h1> */}
          {/* <p>liked {likes} times</p> */}

          {/* <p>{10}</p> */}

          {/* <p>{"hello ninja"}</p>
         <p>{[1,2,3,4,5]}</p>
         <p>{Math.random()*20}</p>
         <a href={link}>Google Site</a> */}
        </div>
      </div>
    </Router>
  );
}


//react doesn't request to the server for find link beacuse react has root componnent app.js 
//and pass links 
//switch for one route
export default App;
