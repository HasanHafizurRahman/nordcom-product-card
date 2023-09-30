import React from "react";

const Condition = () => {
  return (
    <div>
      <p className="text-xl font-medium mb-4">Condition:</p>
      <div className="flex gap-4">
        <div className="py-3 text-center border w-[103px] border-primary-34 rounded-[0.3125rem]">
          New
        </div>
        <div className="py-3 text-center border w-[103px] border-primary-34 rounded-[0.3125rem]">
          Grade A
        </div>
        <div className="py-3 text-center border w-[103px] border-primary-34 rounded-[0.3125rem]">
          Grade B
        </div>
        <div className="py-3 text-center border w-[103px] border-primary-34 rounded-[0.3125rem]">
          Grade C
        </div>
      </div>
    </div>
  );
};

export default Condition;
