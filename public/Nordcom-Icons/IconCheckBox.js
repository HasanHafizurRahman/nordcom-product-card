import React from "react";

const IconCheckBox = ({ size = 24, color }) => {
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
          d="M16.28 9.22a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l2.47 2.47 4.47-4.47a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
        <path
          fill="#858585"
          fillRule="evenodd"
          d="M5.314 3.921a1.393 1.393 0 0 0-1.393 1.393v13.372a1.393 1.393 0 0 0 1.393 1.393h13.372a1.393 1.393 0 0 0 1.393-1.393V5.314a1.393 1.393 0 0 0-1.393-1.393H5.314Zm-2.166-.773a3.064 3.064 0 0 1 2.166-.898h13.372a3.064 3.064 0 0 1 3.064 3.064v13.372a3.064 3.064 0 0 1-3.064 3.064H5.314a3.064 3.064 0 0 1-3.064-3.064V5.314c0-.812.323-1.592.898-2.166Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IconCheckBox;
