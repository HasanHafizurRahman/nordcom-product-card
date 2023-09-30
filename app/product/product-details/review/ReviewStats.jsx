import IconStar_Filled from "@/public/Nordcom-Icons/IconStar_Filled";
import React from "react";
import UserProfileImage from "./UserProfileImage";
import { userData } from "./userData";

const ReviewStats = () => {
  return (
    <div className="p-6 border border-primary-31 mt-[-1px]">
      <div className="flex justify-between">
        <span>
          <h2 className="font-medium">Ratings & Reviews</h2>
        </span>
        <span>
          <button className="text-sm font-medium py-4 px-9 shadow-md cursor-pointer">
            Rate Product
          </button>
        </span>
      </div>
      <div className="flex gap-8">
        <div className="max-w-[110px]">
          <div className="flex justify-center items-center">
            <span className="text-[2rem]">4.3</span>
            <span className="text-[1.75rem] pl-1">★</span>
          </div>
          <p className="text-sm text-center text-primary-34">
            27763 Ratings & 12343 Reviews
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <div className="flex justify-center items-center">
              <span className="text-xs font-medium py-[2px]">5</span>
              <span className="text-xs pl-[2px]">★</span>
            </div>

            <div className="flex justify-center items-center">
              <span className="text-xs font-medium py-[2px]">4</span>
              <span className="text-xs pl-[2px]">★</span>
            </div>

            <div className="flex justify-center items-center">
              <span className="text-xs font-medium py-[2px]">3</span>
              <span className="text-xs pl-[2px]">★</span>
            </div>

            <div className="flex justify-center items-center">
              <span className="text-xs font-medium py-[2px]">2</span>
              <span className="text-xs pl-[2px]">★</span>
            </div>

            <div className="flex justify-center items-center">
              <span className="text-xs font-medium py-[2px]">1</span>
              <span className="text-xs pl-[2px]">★</span>
            </div>
          </div>
          {/* colors */}
          <div className="flex flex-col mt-[-4px] w-[120px]">
            <div className="relative py-[10px] ml-[7px] bg-white">
              <span className="absolute h-[5px] rounded-[100px] left-0 w-[100%] bg-[#388e3c]"></span>
            </div>

            <div className="relative py-[10px] ml-[7px] bg-white">
              <span className="absolute h-[5px] rounded-[100px] left-0 w-[24.661%] bg-[#388e3c]"></span>
            </div>

            <div className="relative py-[10px] ml-[7px] bg-white">
              <span className="absolute h-[5px] rounded-[100px] left-0 w-[12.1034%] bg-[#388e3c]"></span>
            </div>

            <div className="relative py-[10px] ml-[7px] bg-white">
              <span className="absolute h-[5px] rounded-[100px] left-0 w-[5.1088%] bg-[#ff9f00]"></span>
            </div>

            <div className="relative py-[10px] ml-[7px] bg-white">
              <span className="absolute h-[5px] rounded-[100px] left-0 w-[10.5834%] bg-[#ff6161]"></span>
            </div>
          </div>
          {/* text */}
          <div className="flex flex-col mt-[-4px]">
            <div className="h-[20px]">
              <span className="text-xs text-primary-34">15,855</span>
            </div>
            <div className="h-[20px]">
              <span className="text-xs text-primary-34">5,855</span>
            </div>
            <div className="h-[20px]">
              <span className="text-xs text-primary-34">1,855</span>
            </div>
            <div className="h-[20px]">
              <span className="text-xs text-primary-34">855</span>
            </div>
            <div className="h-[20px]">
              <span className="text-xs text-primary-34">15,855</span>
            </div>
          </div>
          <div className="h-[100px] bg-primary-32 w-[1px]"></div>
        </div>

        <div className="flex mt-3">
          <div className="flex flex-col items-center pr-4">
            <div className="pt-[12px] pr-[12px] pl-[12px]">
              <svg class="w-full stroke-linecap-round" viewBox="0 0 100 100">
                <path
                  class="stroke-[#f0f0f0]"
                  d="M50,4 A 46,46,0,1,1,49.9999,4"
                  strokeWidth="8"
                  fill-opacity="0"
                ></path>
                <path
                  class="stroke-[#388e3c]"
                  d="M50,4 A 46,46,0,1,1,8.377955586563111,69.58584741199336"
                  strokeWidth="8"
                  fill-opacity="0"
                ></path>
                <text class="text-3xl font-medium fill-black" x="50" y="50">
                  3.4
                </text>
              </svg>
            </div>
            <div>
              <span>Camera</span>
            </div>
          </div>
          <div className="flex flex-col items-center pr-4">
            <div className="pt-[12px] pr-[12px] pl-[12px]">
              <svg class="w-full stroke-linecap-round" viewBox="0 0 100 100">
                <path
                  class="stroke-[#f0f0f0]"
                  d="M50,4 A 46,46,0,1,1,49.9999,4"
                  strokeWidth="8"
                  fill-opacity="0"
                ></path>
                <path
                  class="stroke-[#388e3c]"
                  d="M50,4 A 46,46,0,1,1,4.814786466480321,41.38045952905668"
                  strokeWidth="8"
                  fill-opacity="0"
                ></path>
                <text
                  class="fill-black text-3xl font-medium text-center"
                  x="50"
                  y="50"
                >
                  3.9
                </text>
              </svg>
            </div>
            <div>
              <span>Battery</span>
            </div>
          </div>
          <div className="flex flex-col items-center pr-4">
            <div className="pt-[12px] pr-[12px] pl-[12px]">
              <svg
                className="w-full stroke-linecap-round"
                viewBox="0 0 100 100"
              >
                <path
                  className="stroke-[#f0f0f0]"
                  d="M50,4 A 46,46,0,1,1,49.9999,4"
                  strokeWidth="8"
                  fill-opacity="0"
                ></path>
                <path
                  class="stroke-[#388e3c]"
                  d="M50,4 A 46,46,0,1,1,4.090770492299505,47.11163610165161"
                  strokeWidth="8"
                  fill-opacity="0"
                ></path>
                <text
                  class="fill-[#212121] text-3xl font-semibold pr-[12px]"
                  x="50"
                  y="50"
                >
                  3.8
                </text>
              </svg>
            </div>
            <div>
              <span>Display</span>
            </div>
          </div>
          <div className="flex flex-col items-center pr-4">
            <div className="pt-[12px] pr-[12px] pl-[12px]">
              <svg class="w-full stroke-linecap-round" viewBox="0 0 100 100">
                <path
                  class="stroke-[#f0f0f0]"
                  d="M50,4 A 46,46,0,1,1,49.9999,4"
                  strokeWidth="8"
                  fill-opacity="0"
                ></path>
                <path
                  class="stroke-[#388e3c]"
                  d="M50,4 A 46,46,0,1,1,8.377955586563097,30.41415258800666"
                  strokeWidth="8"
                  fill-opacity="0"
                ></path>
                <text
                  class="fill-black text-3xl text-center font-medium"
                  x="50"
                  y="50"
                >
                  4.1
                </text>
              </svg>
            </div>
            <div>
              <span>Design</span>
            </div>
          </div>
        </div>
      </div>

      {/* UserProfileImage list */}
      <div className="flex flex-wrap mt-8">
        {userData.map((user, index) => (
          <UserProfileImage
            key={index}
            imageUrl={user.imageUrl}
            showText={user.showText}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewStats;
