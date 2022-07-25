import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
          {/* link for can't send request to the server */}
          {/* and match this link with one route in app.js */}
          <Link to="/">Home</Link>
          <Link to="/create" style={{}}>
            New Blog
          </Link>
        </div>
      </nav>
    );
}
 
export default Navbar;
