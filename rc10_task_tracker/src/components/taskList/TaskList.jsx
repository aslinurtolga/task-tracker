import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import axios from "axios";

const TaskList = ({ task, getTask }) => {
  const deleteTask = async (id) => {
    const url = "https://63516c99dfe45bbd55bfd9a2.mockapi.io/api/tasks";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {}
    getTask();
  };

  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div
            key={id}
            className="mt-2 d-flex justify-content-between bg-white rounded-2 p-2"
          >
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <RiDeleteBack2Fill
                onClick={() => deleteTask(id)}
                style={{
                  cursor: "pointer",
                  marginRight: "20px",
                  fontSize: "2rem",
                  boxShadow: "2px 2px 2px #064663",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
