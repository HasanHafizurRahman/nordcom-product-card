import React from "react";

const IconRealEstate = ({ size = 24, color }) => {
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          clipPath="url(#a)"
        >
          <path
            stroke="#ADADAD"
            d="M19.714 9.612V4a1 1 0 0 0-1-1h-1.857a1 1 0 0 0-1 1v2.306"
          />
          <path
            stroke="#ADADAD"
            d="m3 10.714 7.698-6.598a2 2 0 0 1 2.603 0L21 10.714"
          />
          <path stroke="#ADADAD" d="M4.286 9.612V19a2 2 0 0 0 2 2H11" />
          <path stroke="#000" d="m21 21-1.639-1.639" />
          <path stroke="#68D237" d="m18.173 16-1.811 1.811-1.087-1.087" />
        </g>
      </svg>
    </div>
  );
};

export default IconRealEstate;
