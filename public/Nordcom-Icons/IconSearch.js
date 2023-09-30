import React from "react";

const IconSearch = ({ size = 24, color }) => {
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
          d="M15.184 7.369a5.526 5.526 0 1 0-7.815 7.815 5.526 5.526 0 0 0 7.815-7.815Zm1.06-1.061a7.026 7.026 0 1 0-9.936 9.936 7.026 7.026 0 0 0 9.936-9.936Z"
          clipRule="evenodd"
        />
        <path
          fill="#858585"
          fillRule="evenodd"
          d="M15.18 15.18a.75.75 0 0 1 1.06 0l3.29 3.29a.75.75 0 0 1-1.06 1.06l-3.29-3.29a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IconSearch;
