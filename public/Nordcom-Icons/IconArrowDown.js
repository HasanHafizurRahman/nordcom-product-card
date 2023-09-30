import React from "react";

const IconArrowDown = ({ size = 24, color }) => {
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
          d="M7.231 9.231a.79.79 0 0 1 1.117 0L12 12.883l3.652-3.652a.79.79 0 0 1 1.117 1.117l-4.21 4.21a.79.79 0 0 1-1.117 0l-4.21-4.21a.79.79 0 0 1 0-1.117Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IconArrowDown;
