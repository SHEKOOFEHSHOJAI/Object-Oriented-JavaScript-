import { useState,useEffect } from "react";
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
    


    const handelDelete = (id) => {
        // if == false filter  =>remove 
        // if !=true=> we want keep in arry
        const newBlog=blogs.filter((blog)=>blog.id !==id )
        setBlogs(newBlog)
      console.log(blogs);
    };

//render for each change data or refresh broweser 
    useEffect(()=>{
        console.log('USEEFECT RUN');
    })
    return (
      <div className="home">
        {/* <h1>Home page</h1> */}
        {/* <p>{name}</p> */}

        <BlogList
          blogs={blogs}
          title="All Blogs!"
          handelDelete={handelDelete}
        />

        {/* <BlogList
          blogs={blogs.filter((blog) => blog.author === "mario")}
          title="Mario Blogs!"
        /> */}
        {/* for  pass arg*/}
        {/* <button onClick={()=> handelClickAgain('mario')  }>click</button> */}
      </div>
    );
}
 
export default Home ;