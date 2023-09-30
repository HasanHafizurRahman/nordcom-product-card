import React, { useState } from "react";

const ColorSection = () => {
  return (
    <div>
      <p className="text-xl font-medium mb-4">Color:</p>
      <div className="flex gap-4">
        {/* Primary-31 Color Box */}
        <div className="bg-primary-31 w-[103px] h-[50px] rounded-[0.3125rem]"></div>

        {/* Primary-33 Color Box */}
        <div className="bg-primary-33 w-[103px] h-[50px] rounded-[0.3125rem]"></div>

        {/* Primary-8 Color Box */}
        <div className="bg-primary-8 w-[103px] h-[50px] rounded-[0.3125rem]"></div>

        {/* Primary-2 Color Box */}
        <div className="bg-primary-2 w-[103px] h-[50px] rounded-[5px]"></div>
      </div>
    </div>
  );
};

export default ColorSection;
