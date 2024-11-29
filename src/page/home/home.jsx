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
        </ul>
      </nav>
    </div>
  );
};

export default Home;