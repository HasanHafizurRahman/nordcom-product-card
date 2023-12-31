import React from "react";

const IconEyeVisible = ({ size = 24, color = "#858585" }) => {
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
          fill={color}
          fillRule="evenodd"
          d="M7.416 7.547C5.96 8.674 4.678 10.223 3.778 11.89l-.66-.357.66.356a.237.237 0 0 0 0 .223c.9 1.665 2.181 3.215 3.639 4.342 1.461 1.13 3.051 1.797 4.583 1.797s3.122-.668 4.584-1.797c1.457-1.127 2.738-2.676 3.638-4.342a.237.237 0 0 0 0-.222c-.9-1.665-2.181-3.215-3.639-4.342C15.123 6.417 13.533 5.75 12 5.75s-3.122.668-4.584 1.797ZM6.5 6.36C8.132 5.1 10.037 4.25 12 4.25c1.963 0 3.868.849 5.5 2.11 1.637 1.266 3.05 2.982 4.042 4.816a1.737 1.737 0 0 1 0 1.648c-.992 1.835-2.405 3.55-4.041 4.816-1.633 1.261-3.538 2.11-5.501 2.11-1.963 0-3.868-.849-5.5-2.11-1.637-1.266-3.05-2.982-4.042-4.816a1.737 1.737 0 0 1 0-1.648C3.45 9.341 4.863 7.625 6.5 6.36Z"
          clipRule="evenodd"
        />
        <path
          fill={color}
          fillRule="evenodd"
          d="M13.616 10.384a2.286 2.286 0 1 0-3.232 3.232 2.286 2.286 0 0 0 3.232-3.232Zm1.01-1.01a3.714 3.714 0 1 0-5.252 5.252 3.714 3.714 0 0 0 5.252-5.252Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IconEyeVisible;
