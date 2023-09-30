import React from "react";

const IconArrowRight = ({ size = 24, color }) => {
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
          d="M9.231 16.769a.79.79 0 0 1 0-1.117L12.883 12 9.232 8.348a.79.79 0 0 1 1.117-1.117l4.21 4.21a.79.79 0 0 1 0 1.117l-4.21 4.21a.79.79 0 0 1-1.117 0Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IconArrowRight;
