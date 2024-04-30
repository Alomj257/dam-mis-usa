import React, { useEffect, useState } from "react";
import TaskTable from "../../components/Mechanic/TaskTable_Mechanic";
// import data from "../../MechanicData";
import { useAuth } from "../../context/AuthContext";
import useFetch from "../../Hooks/useFetch";

const TaskProgressPage = () => {
  const [auth] = useAuth();
  const { data } = useFetch(`/appointment/status/${auth?.user?._id}/Confirm`);
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    setAppointment(data);
  }, [data]);
  return (
    <>
      <TaskTable myData={appointment} taskStatus={"In Progress"} />
    </>
  );
};

export default TaskProgressPage;
