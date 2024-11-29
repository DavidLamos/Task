import "./signin.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signin">
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};
export default Signup;
