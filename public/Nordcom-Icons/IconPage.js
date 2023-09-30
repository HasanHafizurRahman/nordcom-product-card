import React from "react";

const IconPage = ({ size = 24, color }) => {
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
          d="M9 11.75a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h6a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25H9ZM7.25 12c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 15 17.75H9A1.75 1.75 0 0 1 7.25 16v-4Z"
          clipRule="evenodd"
        />
        <path
          fill="#858585"
          fillRule="evenodd"
          d="M3.25 5A2.75 2.75 0 0 1 6 2.25h9c.73 0 1.429.29 1.944.806l2.828 2.828a2.75 2.75 0 0 1 .806 1.944V19a2.75 2.75 0 0 1-2.75 2.75H6A2.75 2.75 0 0 1 3.25 19V5ZM6 3.75c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h11.828c.69 0 1.25-.56 1.25-1.25V7.828c0-.33-.132-.65-.366-.884l-2.828-2.828A1.25 1.25 0 0 0 15 3.75H6Z"
          clipRule="evenodd"
        />
        <path
          fill="#858585"
          fillRule="evenodd"
          d="M7.23 8a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 0 1.5H7.98A.75.75 0 0 1 7.23 8ZM7.25 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"
          clipRule="evenodd"
        />
        <path
          fill="#858585"
          fillRule="evenodd"
          d="M13 10.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IconPage;
