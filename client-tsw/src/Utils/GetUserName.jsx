import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

const GetUserName = ({ id }) => {
  const { data } = useFetch(`/auth/users/${id}`);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(data);
  }, [data]);
  return <>{user?.name}</>;
};

export default GetUserName;
