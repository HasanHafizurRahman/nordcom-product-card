import React from "react";

const IconDoubleLeft = ({ size = 24, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
      >
        <path
          fill="#858585"
          fillRule="evenodd"
          d="M11.03 16.53a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 1 1 1.06 1.06L7.56 12l3.47 3.47a.75.75 0 0 1 0 1.06ZM18.03 17.53a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06L13.56 12l4.47 4.47a.75.75 0 0 1 0 1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IconDoubleLeft;
