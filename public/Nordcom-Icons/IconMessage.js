import React from "react";

const IconMessage = ({ size = 24, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#858585"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 3.744a1.25 1.25 0 0 0-1.25 1.25v10A1.25 1.25 0 0 0 5 16.244h2a.75.75 0 0 1 .75.75v2.998c0 .216.255.33.416.187l4.21-3.745a.75.75 0 0 1 .499-.19H19a1.25 1.25 0 0 0 1.25-1.25v-10A1.25 1.25 0 0 0 19 3.744H5Zm-1.945-.695A2.75 2.75 0 0 1 5 2.244h14a2.75 2.75 0 0 1 2.75 2.75v10a2.75 2.75 0 0 1-2.75 2.75h-5.84l-3.996 3.555c-1.13 1.005-2.914.203-2.914-1.307v-2.248H5a2.75 2.75 0 0 1-2.75-2.75v-10c0-.73.29-1.429.805-1.945Z"
        />
        <path
          fill="#858585"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.25 7.49A.75.75 0 0 1 7 6.74h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM6.25 11.99a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z"
        />
      </svg>
    </div>
  );
};

export default IconMessage;
