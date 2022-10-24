import React from "react";
import TaskPng from "../../assets/TaskPng";

const Header = () => {
  return (
    <div className="d-flex justify-content-evenly align-items-center">
      <TaskPng />
      <h1 className="display-5">TASK TRACKER</h1>
    </div>
  );
};
export default Header;
