import React, { useEffect, useState } from "react";
import Header from "./Header_Mechanic";
import HomeSvg from "../../assets/Appointment/HomeSvg";
import NextIconSvg from "../../assets/Appointment/NextIconSvg";
import { useLocation } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Loader from "../../Utils/Loader";
import ErrorCustom from "../../Utils/Error";
import { completeAppointmentsService } from "../../APIServices/Appointment/AppointmentService";
import { toast } from "react-toastify";

function CompletionForm({ status }) {
  return (
    <div
      style={{
        width: "80%",
        margin: "50px",
      }}
    >
      <Header
        header={"Appointments"}
        subheader={
          <SubHeader2
            text1={"New Appointments"}
            text2={"Appointment"}
            text3="Completion Form"
          />
        }
      />

      <Completion />
    </div>
  );
}

export default CompletionForm;

const SubHeader2 = ({ text1, text2, text3, width }) => {
  return (
    <div
      className="d-flex"
      style={{
        width: { width },
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      <HomeSvg />{" "}
      <span style={{ fontWeight: "500", fontSize: "18", color: "grey" }}>
        {text1}
      </span>
      <NextIconSvg />
      <span style={{ fontWeight: "500", fontSize: "18", color: "grey" }}>
        {text2}
      </span>
      <NextIconSvg />
      <span style={{ fontWeight: "500", fontSize: "18" }}>{text3}</span>
    </div>
  );
};
const Completion = () => {
  const arr = [
    "Windows",
    "Tyres",
    "Battries",
    "Transmission",
    "Alternator",
    "Compressor",
    "Brakes",
    "Radiator",
  ];
  const { state } = useLocation();
  const { data, loading, error } = useFetch(
    `/parts/workshop/${state?.workshop}`
  );
  const [part, setPart] = useState([]);
  const [total, setTotal] = useState(0);
  const [parts, setParts] = useState([]);
  const [extra, setExtra] = useState(0);
  const [paid, setPaid] = useState(0);
  useEffect(() => {
    setPart(data);
  }, [data]);
  const handleComplete = async () => {
    const details = { total, paid, extra, parts };
    try {
      const { data } = await completeAppointmentsService(details, state?._id);
      if (data?.message) {
        return toast.error(data?.message);
      }
      toast.success(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || error?.response?.data);
    }
  };
  return (
    <div style={{ marginTop: "25px" }}>
      <div style={{ width: "100%" }}>
        <h2 style={{ marginBottom: "10px" }}> Completion Form</h2>
      </div>

      <div style={{ width: "106%", marginTop: "10px" }}>
        <p style={{ fontWeight: "500" }}>Parts Fixed</p>
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorCustom />
        ) : (
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Check
              setParts={setParts}
              total={total}
              parts={parts}
              setTotal={setTotal}
              arr={part}
            />
          </div>
        )}
      </div>

      <StatusDetails
        extra={extra}
        total={total}
        paid={paid}
        setPaid={setPaid}
        setExtra={setExtra}
        t1={"Extras"}
        t2={"Total Bill"}
        t3={"Bill Paid"}
      />
      <div
        style={{
          height: "25vh",
          width: "95%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <button
          style={{
            backgroundColor: "transparent",
            borderRadius: "6px",
            border: "1px solid rgba(5, 72, 87, 1)",
            color: "rgba(5, 72, 87, 1)",
            padding: "10px",
            width: "8rem",
            height: "3rem",
            marginRight: "10px",
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => handleComplete()}
          style={{
            backgroundColor: "#054857",
            borderRadius: "6px",
            border: "1px solid #054857",
            color: "white",
            padding: "10px",
            width: "8rem",
            height: "3rem",
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

const StatusDetails = ({
  total,
  setPaid,
  setExtra,
  paid,
  extra,
  t1,
  t2,
  t3,
}) => {
  return (
    <>
      <div>
        <p
          style={{
            fontWeight: "500",
            fontSize: "16px",
            color: "#344054",
            marginTop: "15px",
          }}
        >
          {t1}
        </p>
        <input
          type="text"
          placeholder={"Enter " + t1}
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
          style={{
            width: "95%",
            border: "1px solid rgba(208, 213, 221, 1)",
            borderRadius: "8px",
            height: "35px",
            padding: "10px 14px 10px 14px",
            marginTop: "-15px",
          }}
        />
      </div>

      <div style={{ display: "flex", width: "100%", marginTop: "15px" }}>
        <div style={{ width: "50%" }}>
          <p
            style={{
              fontWeight: "500",
              fontSize: "16px",
              color: "#344054",
            }}
          >
            {t2}
          </p>
          <input
            type="text"
            disabled
            value={total + (parseInt(extra) || 0)}
            placeholder={"Enter Amount"}
            style={{
              width: "90%",
              border: "1px solid rgba(208, 213, 221, 1)",
              borderRadius: "8px",
              height: "35px",
              padding: "10px 14px 10px 14px",
              marginTop: "-15px",
            }}
          />
        </div>
        <div style={{ width: "50%" }}>
          <p
            style={{
              fontWeight: "500",
              fontSize: "16px",
              color: "#344054",
            }}
          >
            {t3}
          </p>
          <input
            type="text"
            onChange={(e) => setPaid(e.target.value)}
            value={paid}
            placeholder={"Enter Amount"}
            style={{
              width: "90%",
              border: "1px solid rgba(208, 213, 221, 1)",
              borderRadius: "8px",
              height: "35px",
              padding: "10px 14px 10px 14px",
              marginTop: "-15px",
            }}
          />
        </div>
      </div>
    </>
  );
};

const Check = ({ arr, parts, total, setParts, setTotal }) => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const price = parseFloat(arr?.find((ele) => ele?._id === value).price || 0);
    if (checked) {
      setParts((prevParts) => [...prevParts, value]);
      setTotal((prevTotal) => prevTotal + price);
    } else {
      setParts((prevParts) => prevParts.filter((part) => part !== value));
      setTotal((prevTotal) => prevTotal - price);
    }
  };
  return (
    <>
      {Array.isArray(arr)
        ? arr.map((val, i) => (
            <label
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "60px",
                marginTop: "-20px",
              }}
            >
              <input
                type="checkbox"
                value={val?._id}
                onChange={handleCheckboxChange}
              />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                {val?.partName}
              </span>
            </label>
          ))
        : ""}
    </>
  );
};
