import { useState } from "react";
import { Header } from "./components/Header";
import { InputFields } from "./components";
import { TaskContainer } from "./screens";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [toggleButton, setToggleButton] = useState(false);
  const [editState, setEditState] = useState("");
  const [editItemId, setEditItemId] = useState(null);

  const addTodoList = (title, description) => {
    if (toggleButton) {
      setTodoList(
        todoList.map((elem) => {
          if (elem.id === editItemId) {
            return { ...elem, title: title, description: description };
          }
        })
      );
      setToggleButton(false);
    } else {
      let newTodoItems = {
        id: new Date().getTime().toString(),
        title: title,
        description: description,
      };
      let updateTodoArr = [...todoList];
      updateTodoArr.push(newTodoItems);
      setTodoList(updateTodoArr);
    }
  };

  const deleteItem = (index) => {
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList([...newTodoList]);
  };
  const editItem = (id) => {
    setToggleButton(true);
    let newEditItem = todoList.find((elem) => {
      return elem.id === id;
    });
    setEditState(newEditItem);
    setEditItemId(id);
  };

  return (
    <div>
      <Header />
      <InputFields
        addTodoList={addTodoList}
        toggleButton={toggleButton}
        editState={editState}
      />
      <TaskContainer
        todoList={todoList}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}

export default App;
