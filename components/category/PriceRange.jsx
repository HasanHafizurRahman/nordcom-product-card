import React from "react";

const PriceRange = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Price</h2>
      <div className="w-[16.875rem]">
        <div className="flex justify-between">
          <span>$0</span>
          <span>$1.000.000</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000000"
          step="1"
          className="[&::-webkit-slider-thumb]:bg-green-600 w-[16.875rem] h-[1rem] flex-shrink-0"
        />
      </div>
    </div>
  );
};

export default PriceRange;
