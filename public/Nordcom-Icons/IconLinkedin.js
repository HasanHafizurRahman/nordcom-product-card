import React from "react";

const IconLinkedin = ({ size = 24, color }) => {
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
          d="M7.5 3.75A3.75 3.75 0 0 0 3.75 7.5v9.004a3.746 3.746 0 0 0 3.746 3.746h9.008a3.746 3.746 0 0 0 3.746-3.745V7.496a3.747 3.747 0 0 0-3.746-3.746H7.5zm0-1.5A5.25 5.25 0 0 0 2.25 7.5v9.004a5.246 5.246 0 0 0 5.246 5.246h9.008a5.246 5.246 0 0 0 5.246-5.245V7.496a5.247 5.247 0 0 0-5.246-5.246H7.5z"
          fill="#858585"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.12 10.35a.75.75 0 0 1 .75.75v5.4a.75.75 0 0 1-1.5 0v-5.4a.75.75 0 0 1 .75-.75zM13.969 11.85a1.5 1.5 0 0 0-1.5 1.5v3.15a.75.75 0 0 1-1.5 0v-3.15a3 3 0 0 1 6 0v3.15a.75.75 0 0 1-1.5 0v-3.15a1.5 1.5 0 0 0-1.5-1.5zM8.115 7.088a.975.975 0 1 1 .008 1.95.975.975 0 0 1-.008-1.95z"
          fill="#858585"
        />
      </svg>
    </div>
  );
};

export default IconLinkedin;
