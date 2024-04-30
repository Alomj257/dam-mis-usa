import React, { useEffect, useState } from "react";
import TaskTable from "../../components/Mechanic/TaskTable_Mechanic";
// import data from "../../MechanicData";
import useFetch from "../../Hooks/useFetch";
import { useAuth } from "../../context/AuthContext";
const TaskPendingPage = () => {
  // const { data } = useFetch("/appointment/");
  const [auth] = useAuth();
  const { data } = useFetch(`/appointment/requests/assign/${auth?.user?._id}`);
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    setAppointment(data);
  }, [data]);

  return (
    <>
      <TaskTable myData={appointment} taskStatus={"Pending"} />
    </>
  );
};

export default TaskPendingPage;
