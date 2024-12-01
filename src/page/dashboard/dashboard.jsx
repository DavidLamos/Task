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
          <Server servername="Ximon's Server" membercount="10" flag={true} />
          <Server servername="Ximon's Server" membercount="0" flag={true} />
          <Server servername="Ximon's Server" membercount="0" flag={true} />
          <Server servername="Ximon's Server" membercount="0" flag={true} />
          <Server servername="Ximon's Server" membercount="0" flag={true} />
        </div>
        <div className="dashboard-main-created">
          Server Invited
          <Server servername="Ximon's Server" membercount="0" flag={false} />
          <Server servername="Ximon's Server" membercount="0" flag={false} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
