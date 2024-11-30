import "./taskItem.css";

const TaskItem = (props) => {
  return (
    <div className="taskItem">
      <div className="taskItem-title">{props.title}</div>
      <div className="dadlineLabel">Deadline:</div>
      <div className="taskItem-deadline">{props.deadline}</div>
      <div className="createdLabel">Created:</div>
      <div className="taskItem-createdAt">{props.createDate}</div>
      <div className="taskItem-status">{props.status}</div>
      <div className="taskItem-assignee">{props.assignee}</div>
    </div>
  );
};

export default TaskItem;
