import React from "react";

const IconFacebook = ({ size = 24, color }) => {
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
          d="M7.5 3.75A3.75 3.75 0 0 0 3.75 7.5v9.004a3.746 3.746 0 0 0 3.746 3.746h9.008a3.746 3.746 0 0 0 3.746-3.745V7.496a3.747 3.747 0 0 0-3.746-3.746H7.5Zm0-1.5A5.25 5.25 0 0 0 2.25 7.5v9.004a5.246 5.246 0 0 0 5.246 5.246h9.008a5.246 5.246 0 0 0 5.246-5.245V7.496a5.247 5.247 0 0 0-5.246-5.246H7.5Z"
          clipRule="evenodd"
        />
        <path
          fill="#858585"
          fillRule="evenodd"
          d="M10.35 12.9a.75.75 0 0 1 .75-.75h5.4a.75.75 0 0 1 0 1.5h-5.4a.75.75 0 0 1-.75-.75Z"
          clipRule="evenodd"
        />
        <path
          fill="#858585"
          fillRule="evenodd"
          d="M13.147 8.647a3.405 3.405 0 0 1 2.408-.997h.945a.75.75 0 0 1 0 1.5h-.945a1.905 1.905 0 0 0-1.905 1.905V21a.75.75 0 0 1-1.5 0v-9.945c0-.903.359-1.77.997-2.408Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IconFacebook;
