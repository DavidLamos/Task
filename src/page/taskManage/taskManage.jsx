import "./taskManage.css";

import TaskItem from "../../component/taskItem/taskItem";
import NavigationBar from "../../component/navigationBar/navigationBar";
import { useNavigate } from "react-router-dom";

const TaskManage = () => {
  const dataToPass = {
    title: "",
    deadline: "",
    deadlineTime: "",
    createDate: "",
    createDateTime: "",
    status: "",
    assignee: "",
    isCreate: true,
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/edit", {
      state: { data: dataToPass },
    });
  };
  return (
    <div className="taskManage">
      <NavigationBar title="Task Manage" />
      <div className="serverManage-container taskManage-container">
        <div
          className="serverManage-container-memberlist-member
        taskManage-container-memberlist-member-addmember"
        >
          Tasklist
          <TaskItem
            title="To do list"
            deadline="2023-09-15"
            deadlineTime="12:00"
            createDateTime="12:00"
            createDate="2023-09-10"
            status="NotCompleted"
            assignee="John Doe"
            isServer={false}
          />
          <TaskItem
            title="To do list"
            deadline="2023-09-15"
            deadlineTime="12:00"
            createDateTime="12:00"
            createDate="2023-09-10"
            status="NotCompleted"
            assignee="John Doe"
            isServer={false}
          />
          <TaskItem
            title="To do list"
            deadline="2023-09-15"
            deadlineTime="12:00"
            createDateTime="12:00"
            createDate="2023-09-10"
            status="NotCompleted"
            assignee="John Doe"
            isServer={false}
          />
          <TaskItem
            title="To do list"
            deadline="2023-09-15"
            deadlineTime="12:00"
            createDateTime="12:00"
            createDate="2023-09-10"
            status="NotCompleted"
            assignee="John Doe"
            isServer={false}
          />
        </div>
        <div className="taskManage-create" onClick={handleNavigate}>
          +
        </div>
      </div>
    </div>
  );
};

export default TaskManage;
