import React, { useState } from "react";

const RejectionForm = ({ onReject }) => {
  const [reason, setReason] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onReject(reason);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div
          className="modal-background"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              position: "relative",
              height: "400px",
              width: "600px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid black",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              X
            </button>
            <span
              style={{ fontWeight: "500", fontSize: "28px", margin: "10px" }}
            >
              Reason for Rejection:
            </span>
            <textarea
              value={reason}
              onChange={handleChange}
              placeholder="Enter Reason"
              style={{ width: "80%", height: "150px", margin: "10px" }}
            />
            <button
              type="submit"
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                margin: "30px",
                backgroundColor: "rgba(5, 72, 87, 1)",
                color: "white",
                width: "150px",
                padding: "10px",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default RejectionForm;
