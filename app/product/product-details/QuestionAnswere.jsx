import IconLike from "@/public/Nordcom-Icons/IconLike";
import IconMessage from "@/public/Nordcom-Icons/IconMessage";
import IconSearch from "@/public/Nordcom-Icons/IconSearch";
import React from "react";

const QuestionAnswere = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between">
        <div className="flex-1 p-6 border border-primary-31 mt-[-1px] rounded-tl-sm rounded-tr-sm">
          <h2 className="font-medium">Questions and Answere</h2>
        </div>
        <div className="p-6 border border-primary-31 mt-[-1px] ml-[-1px] w-[9%] py-6 flex items-center cursor-pointer">
          <IconSearch size={20} />
        </div>
      </div>
      <div className="p-6 border border-primary-31 mt-[-1px]">
        <p className="text-sm font-medium mb-[6px]">
          <span className="mr-1">Q:</span>Volte support hai ya nhi...?
        </p>
        <p className="text-sm">
          <span className="font-medium mr-1">A:</span>Yes
        </p>
        <p className="text-xs font-medium mt-3 mb-1">Anonymous</p>
        <div className="flex justify-between items-center">
          <div className="flex">
            <svg
              width="14"
              height="14"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1"
            >
              <g>
                <circle cx="6" cy="6" r="6" fill="#878787"></circle>
                <path
                  stroke="#FFF"
                  strokeWidth="1.5"
                  d="M3 6l2 2 4-4"
                  fill="#878787"
                ></path>
              </g>
            </svg>
            <p className="text-xs text-primary-34">Certified Buyer</p>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <IconLike />
              <p className="text-xs text-primary-34">20</p>
            </div>
            <div className="flex gap-2 items-center">
              <IconMessage />
              <p className="text-xs text-primary-34">3</p>
            </div>
          </div>
        </div>
        <button className="text-sm text-primary-19 font-medium hover:underline mt-2">
          Read Other Answeres
        </button>
      </div>

      <div className="p-6 border border-primary-31 mt-[-1px]">
        <p className="text-sm font-medium mb-[6px]">
          <span className="mr-1">Q:</span>Volte support hai ya nhi...?
        </p>
        <p className="text-sm">
          <span className="font-medium mr-1">A:</span>Yes
        </p>
        <p className="text-xs font-medium mt-3 mb-1">Anonymous</p>
        <div className="flex justify-between items-center">
          <div className="flex">
            <svg
              width="14"
              height="14"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1"
            >
              <g>
                <circle cx="6" cy="6" r="6" fill="#878787"></circle>
                <path
                  stroke="#FFF"
                  strokeWidth="1.5"
                  d="M3 6l2 2 4-4"
                  fill="#878787"
                ></path>
              </g>
            </svg>
            <p className="text-xs text-primary-34">Certified Buyer</p>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <IconLike />
              <p className="text-xs text-primary-34">20</p>
            </div>
            <div className="flex gap-2 items-center">
              <IconMessage />
              <p className="text-xs text-primary-34">3</p>
            </div>
          </div>
        </div>
        <button className="text-sm text-primary-19 font-medium hover:underline mt-2">
          Read Other Answeres
        </button>
      </div>

      <div className="p-6 border border-primary-31 mt-[-1px]">
        <p className="text-sm font-medium mb-[6px]">
          <span className="mr-1">Q:</span>Volte support hai ya nhi...?
        </p>
        <p className="text-sm">
          <span className="font-medium mr-1">A:</span>Yes
        </p>
        <p className="text-xs font-medium mt-3 mb-1">Anonymous</p>
        <div className="flex justify-between items-center">
          <div className="flex">
            <svg
              width="14"
              height="14"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1"
            >
              <g>
                <circle cx="6" cy="6" r="6" fill="#878787"></circle>
                <path
                  stroke="#FFF"
                  strokeWidth="1.5"
                  d="M3 6l2 2 4-4"
                  fill="#878787"
                ></path>
              </g>
            </svg>
            <p className="text-xs text-primary-34">Certified Buyer</p>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <IconLike />
              <p className="text-xs text-primary-34">20</p>
            </div>
            <div className="flex gap-2 items-center">
              <IconMessage />
              <p className="text-xs text-primary-34">3</p>
            </div>
          </div>
        </div>
        <button className="text-sm text-primary-19 font-medium hover:underline mt-2">
          Read Other Answeres
        </button>
      </div>
      <div className="p-6 border border-primary-31 mt-[-1px]">
        <button className="text-sm text-primary-19 font-medium hover:underline mt-2">
          All Questions
        </button>
      </div>
    </div>
  );
};

export default QuestionAnswere;
