import "./taskItem.css";
import { useNavigate } from "react-router-dom";

const TaskItem = (props) => {
  const dataToPass = {
    title: props.title,
    deadline: props.deadline,
    deadlineTime: props.deadlineTime,
    createDate: props.createDate,
    createDateTime: props.createDateTime,
    status: props.status,
    assignee: props.assignee,
    isCreate: false,
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (!props.isServer)
      navigate("/edit", {
        state: { data: dataToPass },
      });
  };

  return (
    <div className="taskItem" onClick={handleNavigate}>
      <div className="taskItem-title">{props.title}</div>
      <div className="dadlineLabel">Deadline:</div>
      <div className="taskItem-deadline">
        {props.deadline}&nbsp;{props.deadlineTime}
      </div>
      <div className="createdLabel">Created:</div>
      <div className="taskItem-createdAt">
        {props.createDate}&nbsp;{props.createDateTime}
      </div>
      <div className="taskItem-status">{props.status}</div>
      <div className="taskItem-assignee">{props.assignee}</div>
    </div>
  );
};

export default TaskItem;
