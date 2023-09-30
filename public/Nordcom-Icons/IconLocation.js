import React from "react";

const IconLocation = ({ size = 24, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
      >
        <g
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.447"
          clipPath="url(#a)"
        >
          <path d="M5.127 10.045v-.172a6.873 6.873 0 0 1 13.746 0v.172c0 3.461-4.382 8.671-6.148 10.631a.974.974 0 0 1-1.45 0c-1.766-1.96-6.148-7.17-6.148-10.631v0Z" />
          <path d="M10 9.955a2 2 0 0 0 4 0v-.037a2 2 0 1 0-4 0" />
        </g>
      </svg>
    </div>
  );
};

export default IconLocation;
