import "./serverManage.css";
import { useLocation } from "react-router-dom";
import NavigationBar from "../../component/navigationBar/navigationBar";
import TaskItem from "../../component/taskItem/taskItem";

const ServerManage = () => {
  const location = useLocation();
  const data = location.state?.data; // Access the passed data

  return (
    <div className="serverManage">
      <div className="navgationBarFix">
        <NavigationBar title={data} />
      </div>
      <div className="serverManage-container">
        <div className="serverManage-container-memberlist-member">
          Tasklist
          <TaskItem
            title="To do list"
            deadline="2023-09-15"
            deadlineTime="12:00"
            createDateTime="12:00"
            createDate="2023-09-10"
            status="NotCompleted"
            assignee="John Doe"
            isServer={true}
          />
          <TaskItem
            title="To do list"
            deadline="2023-09-15"
            deadlineTime="12:00"
            createDateTime="12:00"
            createDate="2023-09-10"
            status="NotCompleted"
            assignee="John Doe"
            isServer={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ServerManage;
