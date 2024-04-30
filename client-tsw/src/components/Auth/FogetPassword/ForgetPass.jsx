import React, { useState } from "react";
import "./ForgetPass.css";
import TruckLogo from "../../../assets/Auth/Truck_logo";
import Frame from "../../../assets/ForgetPassword/Frame.png";
import Plant from "../../../assets/ForgetPassword/Plant.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { sendOtpService } from "../../../APIServices/Auth/AuthService";

function ForgetPass() {
  const nevigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await sendOtpService({ email });
      if (data.message) {
        toast.error(data?.message);
        return;
      }
      nevigate("/forget-password/otp", { state: email });
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="main_containeer forget ">
      <div className="form_side d-flex flex-column justify-content-center align-items-center">
        <div className="form_containeer d-flex flex-column justify-content-center align-items-center ">
          <div className="logo_div d-flex align-items-center text_field">
            <TruckLogo />
            <h2 className="logo_title">DAM MIS</h2>
          </div>
          <div className="text_field d-flex flex-column align-items-center">
            <h2>Forgot Your Password?</h2>
            <h5 className="mt-3">We have your back! </h5>
          </div>
          <form action="" className="d-flex flex-column" onSubmit={handleOtp}>
            <div class="container">
              <div class="group">
                <input
                  type="email"
                  placeholder="Email"
                  className="from_input"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <small
                style={{
                  FontWeight: "300",
                  fontSize: "13px",
                  marginLeft: "17px",
                }}
              >
                A link will be sent to your email to reset your password
              </small>
            </div>

            <div className="btm_group d-flex flex-column p-3">
              <button
                className="btn_"
                style={{ fontWeight: "500px", fontSize: "15px" }}
              >
                Send Recovery Link
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="image_side img3 d-flex">
        <img src={Frame} alt="" srcset="" className="frame" />
        <img src={Plant} alt="" className="plant" />
      </div>
    </div>
  );
}

export default ForgetPass;
