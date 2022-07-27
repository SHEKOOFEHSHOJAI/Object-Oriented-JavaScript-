import { useState } from "react";
//for go to the other page
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title,setTitle]=useState('')
    const [body, setBody] = useState("");
    const [auter, setAuter] = useState("");
      const [isPending, setIspending] = useState(false);
       const history = useHistory();
    
      // SUBMITN AND SEND OBJECT
    const handeleSubmit=(e)=>{
        //don't refresh website
     e.preventDefault()
     const blog={title,body,auter};
     setIspending(true)
     console.log(blog);

     fetch("http://localhost:8000/blogs",{
      method:"post",
      //send data json
      headers:{"content-Type":"application/json"},
      // data real
      //convert object to json
      body:JSON.stringify(blog)
     }).then(()=>{
      
      console.log("New Blog Add")
      setIspending(false)
      // go to back page
          history.go(-1);
          //go to forward page
          history.go(1);
          //go to this route
          history.push('/')
    })
    }
    return (
      <div className="create">
        <h2>Add new Blog</h2>
        <form onSubmit={handeleSubmit}>
          <label>Blog title</label>
          <input
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Blog body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>

          <label>Blog auter</label>
          <select value={auter} onChange={(e) => setAuter(e.target.value)}>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          {/* //if false */}
          {!isPending && <button>Add Blog</button>}
          {/* if true */}
          {isPending && <button disabled>Adding Blog....</button>}
          <p>{title}</p>
          <p>{auter}</p>
        </form>
      </div>
    );
}
 
export default Create;