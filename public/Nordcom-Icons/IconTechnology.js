import React from "react";

const IconTechnology = ({ size = 24, color }) => {
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
          clipPath="url(#a)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M14.285 7.714H9.714a2 2 0 0 0-2 2v4.571a2 2 0 0 0 2 2h4.571a2 2 0 0 0 2-2V9.714a2 2 0 0 0-2-2z"
            stroke="#000"
          />
          <path
            d="M10.286 10.286h3.429v3.429h-3.429v-3.429z"
            stroke="#68D237"
          />
          <path
            d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5z"
            stroke="#ADADAD"
          />
          <path
            d="M18 10h-1.714M18 14h-1.714M7.714 10H6M7.714 14H6M10 6v1.714M14 6v1.714M10 16.286V18M14 16.286V18"
            stroke="#000"
          />
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

export default IconTechnology;
