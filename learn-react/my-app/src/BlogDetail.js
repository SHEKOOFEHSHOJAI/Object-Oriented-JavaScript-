import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

//Route Parameters
const  BlogDetails= () => {
    const {id}=useParams()
    const {
      data: blog,
      error,
      isPending,
    } = useFetch(" http://localhost:8000/blogs/" + id);
    
    return ( 
        <div className="blog-detail">
            {isPending && <div>loading...!!!</div>}
            {error && <div>{error}</div>}
            {blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            {/* <h2>Blog Details-{id}</h2> */}
           
        </div>
     );
}
 
export default BlogDetails ;