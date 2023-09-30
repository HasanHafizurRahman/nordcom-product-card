import React from "react";

const IconMinus = ({ size = 24, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#858585"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 11.75a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.75-.75Z"
        />
      </svg>
    </div>
  );
};

export default IconMinus;
