import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ToDoForm = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput("");
  };

  const todo = useSelector((state) => state);

  const addTask = () => {
    dispatch({
      type: "addTask",
      payload: {
        id: Math.random().toString(36).substr(2, 9),
        text: userInput,
      },
    });
  };

  const removeAdd = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  return (
    <div>
      <div>
        <div></div>
        <form onClick={handleSubmit} className="del">
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.currentTarget.value)}
            type="text"
            placeholder="Введите значение"
          />
          <button className="btn" onClick={addTask}>
            Добавить
          </button>
        </form>
      </div>
      <ul>
        {todo.map((item) => {
          return (
            <div key={item.id} className="item-todo">
              <li>{item.text}</li>
              <button className="item-delete" onClick={() => removeAdd(item.id)}>
                удалить
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoForm;