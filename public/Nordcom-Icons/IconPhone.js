import React from "react";

const IconPhone = ({ size = 24, color }) => {
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
            stroke="#858585"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.856 13.144a12.634 12.634 0 0 1-2.638-3.809.749.749 0 0 1 .166-.827l.819-.818c.671-.671.671-1.62.085-2.206L8.114 4.31a2 2 0 0 0-2.828 0l-.652.652c-.741.741-1.05 1.81-.85 2.87.494 2.613 2.012 5.474 4.461 7.923 2.449 2.449 5.31 3.967 7.923 4.461 1.06.2 2.129-.109 2.87-.85l.651-.651a2 2 0 0 0 0-2.828l-1.173-1.173a1.5 1.5 0 0 0-2.121 0l-.903.904a.75.75 0 0 1-.827.166 12.659 12.659 0 0 1-3.809-2.64v0Z"
          />
        </g>
      </svg>
    </div>
  );
};

export default IconPhone;
