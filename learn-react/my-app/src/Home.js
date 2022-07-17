import { useState } from "react";

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
            <h1>Home page</h1>
            {/* <p>{name}</p> */}
        
             {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written byt {blog.author}</p>
                </div>

             ))}
           {/* for  pass arg*/}
            {/* <button onClick={()=> handelClickAgain('mario')  }>click</button> */}
              

          

        </div>
    );
}
 
export default Home ;