import React from "react";

const IconDelivery = ({ size = 24, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
        strokeWidth="1.5"
        clip-path="url(#a)"
      >
        <path
          stroke="#ADADAD"
          stroke-linecap="round"
          strokeLinejoin="round"
          d="M15 7h4.323c.409 0 .777.249.928.629l1.606 4.014c.094.236.143.488.143.742v5.948a1 1 0 0 1-1 1h-1.831"
        />
        <path
          stroke="#ADADAD"
          stroke-linecap="round"
          strokeLinejoin="round"
          d="M22 14h-4v-4h3.2M16 19.42H8.17"
        />
        <path
          stroke="#ADADAD"
          stroke-linecap="round"
          strokeLinejoin="round"
          d="M12.556 5H14a1 1 0 0 1 1 1v9H2"
        />
        <path
          stroke="#ADADAD"
          stroke-linecap="round"
          strokeLinejoin="round"
          d="M5 19.416H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.238"
        />
        <path
          stroke="#000"
          stroke-linecap="round"
          strokeLinejoin="round"
          d="M18.704 18.296a1.584 1.584 0 1 1-2.24 2.24 1.584 1.584 0 0 1 2.24-2.24M7.704 18.296a1.583 1.583 0 1 1-2.238 2.24 1.583 1.583 0 0 1 2.238-2.24"
        />
        <path
          stroke="#000"
          d="M8.397 9.318a4.159 4.159 0 0 1-4.159-4.159C4.238 2.909 6.151.998 8.4 1a4.16 4.16 0 0 1-.003 8.318"
        />
        <path
          stroke="#68D237"
          stroke-linecap="round"
          strokeLinejoin="round"
          d="M10.245 4.235 7.934 6.546 6.548 5.159"
        />
      </svg>
    </div>
  );
};

export default IconDelivery;
