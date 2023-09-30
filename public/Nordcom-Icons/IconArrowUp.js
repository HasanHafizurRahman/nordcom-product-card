import React from "react";

const IconArrowUp = ({ size = 24, color }) => {
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
          d="M16.769 14.769a.79.79 0 0 1-1.117 0L12 11.117l-3.652 3.652a.79.79 0 0 1-1.117-1.117l4.21-4.21a.79.79 0 0 1 1.117 0l4.21 4.21a.79.79 0 0 1 0 1.117Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IconArrowUp;
