import React from "react";

const IconCheck = ({ size = 24, color = "#858585" }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="#fff"
      >
        <path
          fill={color}
          fillRule="evenodd"
          d="M20.28 6.22a.75.75 0 0 1 0 1.06l-11 11a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l4.47 4.47L19.22 6.22a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IconCheck;
