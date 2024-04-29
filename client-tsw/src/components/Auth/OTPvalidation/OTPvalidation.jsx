import React, { useState, useEffect, useRef } from "react";
import "./OTPvalidation.css";
import TruckLogo from "../../../assets/Auth/Truck_logo";
import Frame3 from "../../../assets/OTPvalidation/Frame3.png";
import { useLocation, useNavigate } from "react-router-dom";
import {
  otpVerifyService,
  sendOtpService,
} from "../../../APIServices/Auth/AuthService";
import { toast } from "react-toastify";
function ForgetPass() {
  const nevigate = useNavigate();
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const handleOtpValidation = async (e) => {
    e.preventDefault();

    try {
      const { data } = await otpVerifyService({ email: state, otp });
      if (data.message) {
        toast.error(data?.message);
        return;
      }
      nevigate("/forget-password/reset-password", { state: state });
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(interval);
            setIsActive(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  // function to start timer
  const handleStart = () => {
    setIsActive(true);
    setTimer(120);
  };
  const ResendOtp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await sendOtpService({ email: state });
      if (data.message) {
        toast.error(data?.message);
        return;
      }
      toast.success(data);
      handleStart();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    if (timer >= 0) {
      handleStart();
    }
  }, [timer]);

  return (
    <div className="main_containeer ">
      <div className="form_side d-flex flex-column justify-content-center align-items-center">
        <div className="form_containeer d-flex flex-column justify-content-center align-items-center ">
          <div className="logo_div d-flex align-items-center text_field">
            <TruckLogo />
            <h2 className="logo_title">DAM MIS</h2>
          </div>
          <div className="text_field d-flex flex-column align-items-center">
            <h2>Check Your Email</h2>
            <h5 className="mt-3">We just sent a recovery code</h5>
          </div>
          <form
            action=""
            className="d-flex flex-column"
            onSubmit={handleOtpValidation}
          >
            <div className="container">
              <div
                className="group"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <OtpInputBox getOtp={setOtp} />

                <div
                  style={{
                    fontWeight: "500",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "40px",
                  }}
                >
                  {formatTime(timer)}
                </div>
              </div>

              <small
                style={{
                  FontWeight: "300",
                  fontSize: "13px",
                  marginLeft: "17px",
                  display: "flex",
                  justifyContent: "center",
                  padding: "30px",
                }}
              >
                Didnt get a code?{" "}
                <span style={{ fontWeight: "600" }} onClick={ResendOtp}>
                  {" "}
                  Resend
                </span>
              </small>
            </div>

            <div className="btm_group d-flex flex-column ps-2">
              <button
                className="btn_"
                style={{ fontWeight: "500px", fontSize: "15px" }}
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="image_side img1 d-flex">
        <img src={Frame3} alt="" srcset="" className="frame3" />
      </div>
    </div>
  );
}

export default ForgetPass;

function OtpInputBox({ getOtp }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[index] = value;

    if (value !== "" && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }

    if (
      value === "" &&
      e.nativeEvent.inputType === "deleteContentBackward" &&
      index > 0
    ) {
      inputsRef.current[index - 1].focus();
    }

    setOtp(newOtp);
    getOtp(newOtp.join(""));
  };

  return (
    <div className="otp-input-container">
      {[...Array(6)].map((_, index) => (
        <input
          key={index}
          type="text"
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          className="otp-input"
          ref={(input) => (inputsRef.current[index] = input)}
          maxLength={1}
        />
      ))}
    </div>
  );
}
