import React from "react";

const IconPlus = ({ size = 24, color }) => {
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
          d="M12 5a.82.82 0 0 1 .82.82v12.36a.82.82 0 1 1-1.64 0V5.82A.82.82 0 0 1 12 5Z"
          clipRule="evenodd"
        />
        <path
          fill="#858585"
          fillRule="evenodd"
          d="M19 12a.82.82 0 0 1-.82.82H5.82a.82.82 0 0 1 0-1.64h12.36A.82.82 0 0 1 19 12Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IconPlus;
