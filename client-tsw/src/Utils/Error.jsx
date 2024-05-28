import React from "react";

const ErrorCustom = ({ name }) => {
  return (
    <div className="w-100 my-4 text-center mx-auto">
      <span className="text-danger">{name} fetching error occured</span>
    </div>
  );
};

export default ErrorCustom;
