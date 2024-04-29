import React from "react";

function NewAppointmentsSvg({ color }) {
  return (
    <div>
      <svg
        width="22"
        height="22"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 18H18V20H10V18ZM10 13H22V15H10V13ZM10 23H15V25H10V23Z"
          fill={color}
        />
        <path
          d="M25 5H22V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2H12C11.4696 2 10.9609 2.21071 10.5858 2.58579C10.2107 2.96086 10 3.46957 10 4V5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V28C5 28.5304 5.21071 29.0391 5.58579 29.4142C5.96086 29.7893 6.46957 30 7 30H25C25.5304 30 26.0391 29.7893 26.4142 29.4142C26.7893 29.0391 27 28.5304 27 28V7C27 6.46957 26.7893 5.96086 26.4142 5.58579C26.0391 5.21071 25.5304 5 25 5ZM12 4H20V8H12V4ZM25 28H7V7H10V10H22V7H25V28Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export default NewAppointmentsSvg;
