import "./home.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <nav>
        <ul>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/manage">Server Manage</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
