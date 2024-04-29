import React from "react";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import ForgetPass from "./components/Auth/FogetPassword/ForgetPass";
import OTPvalidation from "./components/Auth/OTPvalidation/OTPvalidation";
import ResetPass from "./components/Auth/ResetPass/ResetPass";
function Main() {
  return (
    <div>
      <Login />
      <Register />
      <ForgetPass />
      <OTPvalidation />
      <ResetPass />
    </div>
  );
}

export default Main;
