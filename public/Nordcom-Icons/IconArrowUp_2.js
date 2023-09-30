import React from "react";

const IconArrowUp_2 = ({ size = 24, color }) => {
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
          d="M11.75 18.713a.75.75 0 0 1-.75-.75v-12a.75.75 0 0 1 1.5 0v12a.75.75 0 0 1-.75.75Z"
          clipRule="evenodd"
        />
        <path
          fill="#858585"
          fillRule="evenodd"
          d="M16.567 10.78a.75.75 0 0 1-1.06 0L11.75 7.024 7.994 10.78a.75.75 0 1 1-1.06-1.06l4.286-4.287a.75.75 0 0 1 1.06 0l4.287 4.287a.75.75 0 0 1 0 1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IconArrowUp_2;
