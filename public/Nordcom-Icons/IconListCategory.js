import React from "react";

const IconListCategory = ({ size = 24, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.249 6.437a.75.75 0 0 1 .75-.75h11.004a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75zM8.249 12a.75.75 0 0 1 .75-.75h11.004a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75zM8.249 17.563a.75.75 0 0 1 .75-.75h11.004a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75zM3.247 6.437a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zM3.247 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zM3.247 17.563a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"
          fill="#858585"
        />
      </svg>
    </div>
  );
};

export default IconListCategory;
