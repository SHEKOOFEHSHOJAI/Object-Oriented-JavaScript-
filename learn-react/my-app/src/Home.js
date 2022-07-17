import { useState } from "react";
import BlogList from "./BlogList";

const  Home= () => {
    // let name='mario';
     const [blogs, setBlogs] = useState([
       {
         title: "My new website",
         body: "lorem ipsum...",
         author: "mario",
         id: 1,
       },
       {
         title: "Welcome party!",
         body: "lorem ipsum...",
         author: "yoshi",
         id: 2,
       },
       {
         title: "Web dev top tips",
         body: "lorem ipsum...",
         author: "mario",
         id: 3,
       },
     ]);
    
    
    return (  

        <div className="home">
            {/* <h1>Home page</h1> */}
            {/* <p>{name}</p> */}
        
            <BlogList blogs={blogs}/>
           {/* for  pass arg*/}
            {/* <button onClick={()=> handelClickAgain('mario')  }>click</button> */}
              

          

        </div>
    );
}
 
export default Home ;