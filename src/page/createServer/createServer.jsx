import "./createServer.css";
import NavigationBar from "../../component/navigationBar/navigationBar";
const CreateServer = () => {
  return (
    <div className="createServer">
      <div className="navgationBarFix">
        <NavigationBar title="Create Server" />
      </div>
      <div className="createServerContainer">
        <input
          className="input-servername"
          type="text"
          placeholder="Servername"
          required
        />
        <div className="createButton">Create</div>
      </div>
    </div>
  );
};

export default CreateServer;
