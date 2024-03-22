import { useState } from "react";
import "./TaskData.css";
import Info from "../assets/info.png";
import Delete from "../assets/delete.png";
import Edit from "../assets/edit.png";

export const TaskData = ({ todoList, deleteItem, editItem }) => {
  const [showButton, setShowButton] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemIndex, setItemIndex] = useState(null);
  const onInfoClick = () => {
    setShowButton(true);
  };
  const onDelete = (index) => {
    setShowDeleteModal(true);
    setItemIndex(index);
  };
  const handleConfirmDelete = () => {
    deleteItem(itemIndex);
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      {todoList.map((item, index) => {
        return (
          <div className="taskDataContainer" key={item.id}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ marginLeft: "10px" }}>
                <div style={{ color: "white", height: "26px" }}>
                  {item.title}
                </div>
                <div style={{ color: "white", height: "16px" }}>
                  {item.description}
                </div>
              </div>
              {showButton ? (
                <div
                  style={{ display: "flex", marginRight: "5px", gap: "10px" }}
                >
                  <img
                    style={{ color: "#1B1A17" }}
                    src={Edit}
                    onClick={() => editItem(item.id)}
                  ></img>
                  <img src={Delete} onClick={() => onDelete(index)}></img>
                </div>
              ) : (
                <img
                  style={{ marginRight: "10px" }}
                  src={Info}
                  onClick={onInfoClick}
                ></img>
              )}
              {showDeleteModal && (
                <div className="modal">
                  <div className="modal-content">
                    <p style={{ color: "white" }}>Delete this task?</p>
                    <button
                      className="buttonStyle"
                      onClick={handleConfirmDelete}
                    >
                      Yes
                    </button>
                    <button
                      className="buttonStyle"
                      onClick={handleCancelDelete}
                    >
                      No
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
