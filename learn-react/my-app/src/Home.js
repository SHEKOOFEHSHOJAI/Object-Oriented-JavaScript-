import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const  Home= () => {
    // let name='mario';
     const [blogs, setBlogs] = useState(null);
     const [isPending,setPending]=useState(true)
     const[error,setError]=useState(null)
    
      // const [name,setName]=useState('mario')

    // const handelDelete = (id) => {
    //     // if == false filter  =>remove 
    //     // if !=true=> we want keep in arry
    //     const newBlog=blogs.filter((blog)=>blog.id !==id )
    //     setBlogs(newBlog)
    //   console.log(blogs);
    // };

//render for each change data or refresh broweser 
    useEffect(()=>{
      setTimeout(() => {


         fetch(" http://localhost:8000/blogs")
           .then((res) => {
            //show in catch and can't get data in API
            if(!res.ok){
              throw Error('clould not fetch the data for that resource')
            }
             return res.json();
           })
           .then((data) => {
             console.log(data);
             setBlogs(data);
             //when data has load not show
             setPending(false);
             // if get data don't show error
             setError(null)
           })
           .catch((err)=>{
                // console.log(err.message);
                //show error in browser
                setPending(false)
                setError(err.message)
                 
           })



        
      },1000);
      //[] dependency arry  => the seconed argument just run one and run just with render no chenge data
      //no dependency arry run for each change in page
      //[name ]=>run for change useState
      //  console.log(name);   
    },[])

    return (
      <div className="home">
        {/* <h1>Home page</h1> */}
        {/* <p>{name}</p> */}

        {/* show error in browser */}

        {error && <div>{error}</div>}
        
        {isPending && <div>loading....</div>}
        { blogs &&<BlogList
          blogs={blogs}
          title="All Blogs!"
          // handelDelete={handelDelete}
        />  }
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