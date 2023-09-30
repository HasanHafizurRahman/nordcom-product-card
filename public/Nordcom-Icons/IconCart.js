import React from "react";

const IconCart = ({ size = 24, color = "none" }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 32 32"
      >
        <g
          fill={color}
          stroke="currentColor"
          stroke-linecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M6 6h24l-3 13H9m18 4H10L5 2H2" />
          <circle cx="25" cy="27" r="2" />
          <circle cx="12" cy="27" r="2" />
        </g>
      </svg>
    </div>
  );
};

export default IconCart;
