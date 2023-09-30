import React from "react";

const IconGlasses = ({ size = 24, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
      >
        <g
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          clipPath="url(#a)"
        >
          <path
            stroke="#ADADAD"
            d="m8 5.402-.896-.299a2 2 0 0 0-2.585 1.464l-1.424 6.407A4 4 0 0 0 3 13.84V16a3 3 0 0 0 3 3h1.285a3 3 0 0 0 2.985-2.701L10.5 14"
          />
          <path stroke="#000" d="M21 14a7.532 7.532 0 0 0-7.5 0" />
          <path stroke="#68D237" d="M10.5 14a2.5 2.5 0 0 1 3 0" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default IconGlasses;
