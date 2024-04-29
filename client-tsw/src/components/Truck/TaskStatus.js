import React from "react";

function TaskStatus({ icon, status, color }) {
  return (
    <>
      <div style={{ display: "flex" }}>
        {icon}
        <span style={{ color: color, marginLeft: "7px" }}>{status}</span>
      </div>
    </>
  );
}

export default TaskStatus;
