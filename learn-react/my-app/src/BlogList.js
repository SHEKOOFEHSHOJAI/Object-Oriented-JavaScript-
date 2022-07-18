const BlogList = ({blogs,title,handelDelete}) => {

    //CAN DISTRACCHER
    // const blogs=props.blogs
    // const title=props.title
    // console.log(props)
    
    return (
        <div className="blog-list">
          <h1>{title}</h1>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>written byt {blog.author}</p>
            <button onClick={()=>handelDelete(blog.id)}>delete blog</button>
          </div>
        ))}
      </div>
    );
}
 
export default BlogList;