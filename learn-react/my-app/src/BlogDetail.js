import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

//Route Parameters
const  BlogDetails= () => {
  // in serch browser=route
    const {id}=useParams()
    // go to back or forward
    const history=useHistory()
    // castum hook
    const {
      data: blog,
      error,
      isPending,
    } = useFetch(" http://localhost:8000/blogs/" + id);
    

  const handelClick=()=>{
    fetch("http://localhost:8000/blogs/"+blog.id,{
        method:"DELETE",

    }).then(()=>{
        history.push('/')

    })

  }





    return ( 
        <div className="blog-detail">
            {isPending && <div>loading...!!!</div>}
            {error && <div>{error}</div>}
            {blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handelClick}>delete</button>
                </article>
            )}
            {/* <h2>Blog Details-{id}</h2> */}
           
        </div>
     );
}
 
export default BlogDetails ;