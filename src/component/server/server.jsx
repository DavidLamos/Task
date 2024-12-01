import "./server.css";
import { useNavigate } from "react-router-dom";

const Server = (props) => {
  const dataToPass = props.servername;
  const navigate = useNavigate(); // Use useNavigate hook

  const handleNavigate = () => {
    if (props.flag)
      navigate("/manage", {
        state: { data: dataToPass },
      }); // Programmatic navigation
    else navigate("/taskmanage", { state: { data: dataToPass } }); // Programmatic navigation
  };

  return (
    <div className="server" onClick={handleNavigate}>
      <div className="server-name">Servername: {props.servername}</div>
      <div className="server-member">Member: {props.membercount}</div>
    </div>
  );
};

export default Server;
