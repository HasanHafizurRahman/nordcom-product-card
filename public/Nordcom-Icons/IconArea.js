import React from "react";

const IconArea = ({ size = 24, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
      >
        <g
          fill="#858585"
          fillRule="evenodd"
          clipPath="url(#a)"
          clipRule="evenodd"
        >
          <path d="M7.955 15.02a.75.75 0 0 1 0-1.06l6.364-6.364a.75.75 0 0 1 1.06 1.06L9.017 15.02a.75.75 0 0 1-1.06 0ZM12.905 15.727a.75.75 0 0 1 0-1.06l2.121-2.122a.75.75 0 0 1 1.06 1.061l-2.12 2.121a.75.75 0 0 1-1.061 0Z" />
        </g>
      </svg>
    </div>
  );
};

export default IconArea;
