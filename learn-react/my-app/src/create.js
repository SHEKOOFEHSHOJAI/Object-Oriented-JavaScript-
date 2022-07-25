import { useState } from "react";

const Create = () => {
    const [title,setTitle]=useState('')
    const [body, setBody] = useState("");
    const [auter, setAuter] = useState("");
    const handeleSubmit=(e)=>{
        //don't refresh website
     e.preventDefault()
     const blog={title,body,auter};
     console.log(blog);
        
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
            onChange={(e) =>setBody( e.target.value)}
            required
          ></textarea>

          <label>Blog auter</label>
          <select
          value={auter}
          onChange={(e)=>setAuter(e.target.value)}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          <button>Add Blog</button>
          <p>{title}</p>
          <p>{auter}</p>
        </form>
      </div>
    );
}
 
export default Create;