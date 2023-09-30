import React from "react";

const IconDrink = ({ size = 24, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
      >
        <g
          stroke-linecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          clip-path="url(#a)"
        >
          <path stroke="#68D237" d="M5 5.25h4" />
          <path
            stroke="#000"
            d="m3.739 10.962 1.141.713a4 4 0 0 0 4.24 0l1.141-.713"
          />
          <path
            stroke="#ADADAD"
            d="M6.5 2h1a1 1 0 0 1 1 1v2.085c0 1.908.518 3.78 1.5 5.415a10.522 10.522 0 0 1 1.5 5.415V20a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4.085c0-1.908.518-3.78 1.5-5.415a10.522 10.522 0 0 0 1.5-5.415V3a1 1 0 0 1 1-1Z"
          />
          <path stroke="#000" d="M18 17v5M16 22h4" />
          <path
            stroke="#ADADAD"
            d="M18 17a3.494 3.494 0 0 1-3.459-4.023l.947-6.13c.075-.487.496-.847.991-.847h3.262a1 1 0 0 1 .995.882l.739 6.215A3.494 3.494 0 0 1 18 17Z"
          />
          <path stroke="#68D237" d="M21.11 10H15" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default IconDrink;
