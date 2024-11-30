import "./dashboard.css";
import NavigationBar from "../../component/navigationBar/navigationBar";
import Server from "../../component/server/server";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <NavigationBar title="NightFury" flag={true} />
      <div className="dashboard-main">
        <div className="dashboard-main-created">
          Server Created
          <Server servername="Ximon's Server" membercount="10" />
          <Server servername="Ximon's Server" membercount="0" />
          <Server servername="Ximon's Server" membercount="0" />
          <Server servername="Ximon's Server" membercount="0" />
          <Server servername="Ximon's Server" membercount="0" />
        </div>
        <div className="dashboard-main-created">
          Server Invited
          <Server servername="Ximon's Server" membercount="0" />
          <Server servername="Ximon's Server" membercount="0" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
