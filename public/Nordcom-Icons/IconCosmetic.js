import React from "react";

const IconCosmetic = ({ size = 24, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
        stroke-linecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clip-path="url(#a)"
      >
        <path
          stroke="#68D237"
          d="M5 10.383V5a1 1 0 0 1 .553-.894l2-1A1 1 0 0 1 9 4v6.382"
        />
        <path
          stroke="#ADADAD"
          d="M5 10.383h4a1 1 0 0 1 1 1V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.617a1 1 0 0 1 1-1ZM16 12h2a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2v0Z"
        />
        <path stroke="#000" d="M10 15H4" />
      </svg>
    </div>
  );
};

export default IconCosmetic;
