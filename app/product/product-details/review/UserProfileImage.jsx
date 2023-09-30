// components/UserProfile.js

import React from "react";

const UserProfileImage = ({ imageUrl, showText }) => {
  return (
    <div className="w-[89px] h-[89px] bg-gray-300 rounded-md bg-center bg-no-repeat bg-cover relative cursor-pointer mr-2 mb-2">
      <div
        className={`${
          showText
            ? "absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white font-semibold text-xl"
            : ""
        }`}
      >
        {showText && "+12"}
      </div>
    </div>
  );
};

export default UserProfileImage;
