import React from "react";

const IconClose = ({ size = 24, color }) => {
  return (
    <div>
      <svg
        width={size}
        height={size}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.47 7.47a.75.75 0 0 1 1.06 0l8 8a.75.75 0 1 1-1.06 1.06l-8-8a.75.75 0 0 1 0-1.06z"
          fill="#858585"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.53 7.47a.75.75 0 0 1 0 1.06l-8 8a.75.75 0 0 1-1.06-1.06l8-8a.75.75 0 0 1 1.06 0z"
          fill="#858585"
        />
      </svg>
    </div>
  );
};

export default IconClose;
