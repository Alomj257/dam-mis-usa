import React from "react";
import UserTable from "../../Component/Users/UserTable";
import Navbar from "../../Component/Navbar/Navbar";

const UserPage = () => {
  return (
    <>
      <Navbar title="Users" />
      <div className="my-4">
        <UserTable data={dummyData} />
      </div>
    </>
  );
};

export default UserPage;

const dummyData = [
  {
    name: "Mohammad Hasseb",
    email: "mhsb123@gmail.com",
    phone: "+98765423456",
    role: "role",
    status: "Enabled",
  },
  {
    name: "Mohammad Hasseb",
    email: "mhsb123@gmail.com",
    phone: "+98765423456",
    role: "role",
    status: "Enabled",
  },
  {
    name: "Mohammad Hasseb",
    email: "mhsb123@gmail.com",
    phone: "+98765423456",
    role: "role",
    status: "Enabled",
  },
  {
    name: "Mohammad Hasseb",
    email: "mhsb123@gmail.com",
    phone: "+98765423456",
    role: "role",
    status: "Enabled",
  },
  {
    name: "Mohammad Hasseb",
    email: "mhsb123@gmail.com",
    phone: "+98765423456",
    role: "role",
    status: "Enabled",
  },
  {
    name: "Mohammad Hasseb",
    email: "mhsb123@gmail.com",
    phone: "+98765423456",
    role: "role",
    status: "Enabled",
  },
  {
    name: "Mohammad Hasseb",
    email: "mhsb123@gmail.com",
    phone: "+98765423456",
    role: "role",
    status: "Enabled",
  },
  {
    name: "Mohammad Hasseb",
    email: "mhsb123@gmail.com",
    phone: "+98765423456",
    role: "role",
    status: "Enabled",
  },
  {
    name: "Mohammad Hasseb",
    email: "mhsb123@gmail.com",
    phone: "+98765423456",
    role: "role",
    status: "Enabled",
  },
  {
    name: "Mohammad Hasseb",
    email: "mhsb123@gmail.com",
    phone: "+98765423456",
    role: "role",
    status: "Enabled",
  },
  {
    name: "Mohammad Hasseb",
    email: "mhsb123@gmail.com",
    phone: "+98765423456",
    role: "role",
    status: "Enabled",
  },
  {
    name: "Mohammad Hasseb",
    email: "mhsb123@gmail.com",
    phone: "+98765423456",
    role: "role",
    status: "Enabled",
  },
  {
    name: "Mohammad Hasseb",
    email: "mhsb123@gmail.com",
    phone: "+98765423456",
    role: "role",
    status: "Enabled",
  },
];
