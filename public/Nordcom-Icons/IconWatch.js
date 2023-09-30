import React from "react";

const IconWatch = ({ size = 24, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
      >
        <g
          clipPath="url(#a)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m7.289 17.435.73 2.817a2 2 0 0 0 1.936 1.5h4.089a2 2 0 0 0 1.936-1.5l.732-2.819"
            stroke="#ADADAD"
          />
          <path d="M12 14v-4" stroke="#68D237" />
          <path
            d="m16.711 6.565-.73-2.817a2 2 0 0 0-1.936-1.5H9.956a2 2 0 0 0-1.936 1.5l-.732 2.818"
            stroke="#ADADAD"
          />
          <path
            d="M7.834 17.5h8.333a2.256 2.256 0 0 0 2.333-2.169V8.669A2.257 2.257 0 0 0 16.166 6.5H7.834A2.256 2.256 0 0 0 5.5 8.669v6.661a2.252 2.252 0 0 0 2.334 2.17v0z"
            stroke="#000"
          />
          <path d="M15 14v-2M9 14v-1" stroke="#68D237" />
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

export default IconWatch;
