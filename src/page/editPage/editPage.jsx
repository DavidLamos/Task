import "./editPage.css";
import NavigationBar from "../../component/navigationBar/navigationBar";

import { useState } from "react";
import { useLocation } from "react-router-dom";

const EditPage = () => {
  const location = useLocation();
  const data = location.state?.data; // Access the passed data
  const [selectedItem, setSelectedItem] = useState(
    data.status ? data.status : "OnProgress"
  );

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };
  return (
    <div className="editPage">
      <div className="navgationBarFix">
        <NavigationBar title={data.isCreate ? "Task Create" : "Task Edit"} />
      </div>
      <div className="editPage-container">
        <div className="editPage-title-label">Title:</div>
        <input
          type="text"
          className="editPage-title-content"
          value={data.title}
        />
        <div className="editPage-create-label">Created:</div>
        <input
          type="date"
          className="editPage-create-content-date"
          value={data.createDate}
        />
        <input
          type="time"
          className="editPage-create-content-time"
          value={data.createDateTime}
        />
        <div className="editPage-deadline-label">Deadline:</div>
        <input
          type="date"
          className="editPage-deadline-content-date"
          value={data.deadline}
        />
        <input
          type="time"
          className="editPage-deadline-content-time"
          value={data.deadlineTime}
        />
        <div className="editPage-status-label">Status:</div>
        <select
          className="comboBox"
          value={selectedItem}
          onChange={handleChange}
        >
          <option className="option" value="OnProgress">
            OnProgress
          </option>
          <option className="option" value="NotCompleted">
            NotCompleted
          </option>
          <option className="option" value="Completed">
            Completed
          </option>
        </select>
      </div>
    </div>
  );
};

export default EditPage;
