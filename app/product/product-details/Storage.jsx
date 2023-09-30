import React from "react";

const Storage = () => {
  return (
    <div>
      <p className="text-xl font-medium mb-4">Storage:</p>
      <div className="flex gap-4">
        <div className="py-3 text-center border w-[103px] border-primary-34 rounded-[0.3125rem]">
          128 GB
        </div>
        <div className="py-3 text-center border w-[103px] border-primary-34 rounded-[0.3125rem]">
          256 GB
        </div>
        <div className="py-3 text-center border w-[103px] border-primary-34 rounded-[0.3125rem]">
          512 GB
        </div>
      </div>
    </div>
  );
};

export default Storage;
