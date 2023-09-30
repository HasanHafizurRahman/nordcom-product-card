import React from "react";

const IconSupport = ({ size = 24, color }) => {
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
          d="M19 17h-1a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2z"
          stroke="#ADADAD"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 17H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1z"
          stroke="#ADADAD"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 10v-.5a6.5 6.5 0 1 0-13 0v.5"
          stroke="#ADADAD"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.875 20H16a2 2 0 0 0 2-2v-1"
          stroke="#000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.625 21.25h-1.25a1.25 1.25 0 0 1 0-2.5h1.25a1.25 1.25 0 0 1 0 2.5v0z"
          stroke="#68D237"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default IconSupport;
