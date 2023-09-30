import React from "react";

const IconMoneyBack = ({ size = 24, color }) => {
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
          <path stroke="#000" d="M15.99 17-2 2 2 2" />
          <path
            stroke="#68D237"
            d="M13.414 7.586a2 2 0 1 1-2.779 2.877 2 2 0 0 1 2.779-2.877"
          />
          <path
            stroke="#ADADAD"
            d="M6.5 7.5v3M17.5 7.5v3M11 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"
          />
          <path stroke="#000" d="M18 15h1a2 2 0 0 1 0 4h-5" />
        </g>
      </svg>
    </div>
  );
};

export default IconMoneyBack;
