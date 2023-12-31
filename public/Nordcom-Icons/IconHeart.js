import React from "react";

const IconHeart = ({ size = 24, color = "#858585" }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#a)">
          <path
            fill={color}
            fillRule="evenodd"
            d="M8.304 4.75c-2.652 0-4.554 2.526-4.554 5.005 0 2.59 1.624 4.965 3.587 6.742.97.878 1.99 1.58 2.867 2.06.438.24.83.418 1.154.535.338.123.55.158.642.158.093 0 .304-.035.642-.158a8.482 8.482 0 0 0 1.154-.535 15.411 15.411 0 0 0 2.867-2.06c1.963-1.777 3.587-4.152 3.587-6.742 0-2.479-1.902-5.005-4.554-5.005-1.534 0-2.534.756-3.126 1.448a.75.75 0 0 1-1.14 0c-.592-.692-1.592-1.448-3.126-1.448ZM2.25 9.755c0-3.071 2.356-6.505 6.054-6.505 1.66 0 2.873.66 3.696 1.392a5.445 5.445 0 0 1 3.696-1.392c3.698 0 6.054 3.434 6.054 6.505 0 3.21-1.987 5.959-4.08 7.854a16.914 16.914 0 0 1-3.154 2.264 9.958 9.958 0 0 1-1.364.63c-.397.143-.8.247-1.152.247-.352 0-.755-.104-1.152-.247a9.962 9.962 0 0 1-1.364-.63 16.913 16.913 0 0 1-3.154-2.264c-2.093-1.895-4.08-4.643-4.08-7.854Z"
            clipRule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
};

export default IconHeart;
