import "./TaskContainer.css";

import { TaskData } from "./TaskData";

export const TaskContainer = ({ todoList, deleteItem, editItem }) => {
  return (
    <div className="taskContainer">
      {todoList.length === 0 ? (
        <div className="noTaskWrap">
          <div className="line"></div>
          <p className="taskTextStyle"> No tasks</p>
          <div className="line"></div>
        </div>
      ) : (
        <div className="showTask">
          <TaskData
            todoList={todoList}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        </div>
      )}
    </div>
  );
};
