import React from "react";

import myData from "../../MechanicData";
import TaskTable from "./TaskTable_Mechanic";
import TaskDetails from "./TaskDetails_Mechanics";
import CompletionForm from "./CompletionForm";

function Body_Mechanic({ page }) {
  return (
    <>
      {page}

      {/* <TaskTable myData={myData} taskStatus={status} /> */}

      {/* <TaskDetails status={status} /> */}

      {/* <CompletionForm /> */}
    </>
  );
}

export default Body_Mechanic;
