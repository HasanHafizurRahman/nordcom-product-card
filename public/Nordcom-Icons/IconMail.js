import React from "react";

const IconMail = ({ size = 24, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#a)">
          <path
            fill="#858585"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.818 18.274h16.364c.084 0 .151-.07.151-.156V5.883a.155.155 0 0 0-.152-.157H3.818a.155.155 0 0 0-.151.157v12.235a.156.156 0 0 0 .093.145.15.15 0 0 0 .058.011zm0 1.726h16.364C21.186 20 22 19.158 22 18.118V5.883C22 4.843 21.186 4 20.181 4H3.818C2.814 4 2 4.843 2 5.883v12.235c0 .247.047.492.138.72.091.229.225.436.394.611s.37.313.59.408c.22.095.457.143.696.143z"
          />
          <path
            d="m3.119 6.075 7.694 5.503a2 2 0 0 0 2.325.002l7.738-5.519"
            stroke="#858585"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default IconMail;
