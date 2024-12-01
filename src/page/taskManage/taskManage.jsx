import "./taskManage.css";

import TaskItem from "../../component/taskItem/taskItem";
import NavigationBar from "../../component/navigationBar/navigationBar";
import { Link } from "react-router-dom";

const TaskManage = () => {
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
            createDate="2023-09-10"
            status="Completed"
            assignee="John Doe"
          />
          <TaskItem
            title="To do list"
            deadline="2023-09-15"
            createDate="2023-09-10"
            status="Completed"
            assignee="John Doe"
          />
          <TaskItem
            title="To do list"
            deadline="2023-09-15"
            createDate="2023-09-10"
            status="Completed"
            assignee="John Doe"
          />
          <TaskItem
            title="To do list"
            deadline="2023-09-15"
            createDate="2023-09-10"
            status="Completed"
            assignee="John Doe"
          />
          <TaskItem
            title="To do list"
            deadline="2023-09-15"
            createDate="2023-09-10"
            status="Completed"
            assignee="John Doe"
          />
          <TaskItem
            title="To do list"
            deadline="2023-09-15"
            createDate="2023-09-10"
            status="Completed"
            assignee="John Doe"
          />
        </div>
        <Link to="/edit" className="taskManage-create">
          +
        </Link>
      </div>
    </div>
  );
};

export default TaskManage;
