import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import FieldTable from "../../Components/Field/FieldTable/FieldTable";
import { useAuth } from "../../../context/AuthContext";

const OwnerFieldPage = () => {
  const [{ user }] = useAuth();
  return (
    <div>
      <Navbar title="Your Fields" />
      <FieldTable url={`owner/${user?._id}`} />
    </div>
  );
};

export default OwnerFieldPage;
