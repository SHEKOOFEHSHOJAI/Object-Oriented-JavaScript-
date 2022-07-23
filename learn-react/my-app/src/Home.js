import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const  Home= () => {
  // let name='mario';
  //useState

  //Making a Custom Hook
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(" http://localhost:8000/blogs");

  // const [name,setName]=useState('mario')

  // const handelDelete = (id) => {
  //     // if == false filter  =>remove
  //     // if !=true=> we want keep in arry
  //     const newBlog=blogs.filter((blog)=>blog.id !==id )
  //     setBlogs(newBlog)
  //   console.log(blogs);
  // };

  //render for each change data or refresh broweser
  //useEfect

  return (
    <div className="home">
      {/* <h1>Home page</h1> */}
      {/* <p>{name}</p> */}

      {/* show error in browser */}

      {error && <div>{error}</div>}

      {isPending && <div>loading....</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          // handelDelete={handelDelete}
        />
      )}
      {/* <button onClick={()=>setName('luji')}>change name</button> */}
      {/* <p>{name}</p> */}
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