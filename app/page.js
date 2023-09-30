"use client";
import { Button } from "@/components/ui/button";
import { useGetPokemonByNameQuery } from "@/features/api/apiSlice";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  return (
    <>
      <header>
        <nav className="bg-primary-0">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-2 md:px-4">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 flex-shrink-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M5 2.5A2.5 2.5 0 0 0 2.5 5v6.003A2.497 2.497 0 0 0 4.997 13.5h6.006a2.497 2.497 0 0 0 2.497-2.497V4.997A2.497 2.497 0 0 0 11.003 2.5H5Zm0-1A3.5 3.5 0 0 0 1.5 5v6.003A3.497 3.497 0 0 0 4.997 14.5h6.006a3.497 3.497 0 0 0 3.497-3.497V4.997A3.498 3.498 0 0 0 11.003 1.5H5Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M6.9 8.6a.5.5 0 0 1 .5-.5H11a.5.5 0 1 1 0 1H7.4a.5.5 0 0 1-.5-.5Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M8.765 5.765A2.27 2.27 0 0 1 10.37 5.1H11a.5.5 0 0 1 0 1h-.63A1.27 1.27 0 0 0 9.1 7.37V14a.5.5 0 0 1-1 0V7.37c0-.602.24-1.18.665-1.605Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-4 h-4 flex-shrink-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M4 1.5A2.5 2.5 0 0 0 1.5 4v6.003A2.497 2.497 0 0 0 3.997 12.5h6.006a2.497 2.497 0 0 0 2.497-2.497V3.997A2.497 2.497 0 0 0 10.003 1.5H4Zm0-1A3.5 3.5 0 0 0 .5 4v6.003A3.497 3.497 0 0 0 3.997 13.5h6.006a3.497 3.497 0 0 0 3.497-3.497V3.997A3.498 3.498 0 0 0 10.003.5H4Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M4.413 5.9a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-1 0V6.4a.5.5 0 0 1 .5-.5ZM8.313 6.9a1 1 0 0 0-1 1V10a.5.5 0 0 1-1 0V7.9a2 2 0 0 1 4 0V10a.5.5 0 1 1-1 0V7.9a1 1 0 0 0-1-1ZM4.41 3.725a.65.65 0 1 1 .006 1.3.65.65 0 0 1-.006-1.3Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-4 h-4 flex-shrink-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 12"
                >
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M2.232.734a.5.5 0 0 1 .408.263c.593 1.102 1.62 2.107 2.731 2.57a3.532 3.532 0 0 1 .93-1.833c.623-.636 1.49-1 2.499-1 .666 0 1.228.127 1.703.38.39.208.7.49.954.82H13a.5.5 0 0 1 .416.777l-1.117 1.675c-.029 2.129-.654 3.999-1.85 5.353-1.23 1.394-3.022 2.194-5.249 2.194-1.296 0-2.24-.341-2.975-.861-.72-.51-1.212-1.173-1.629-1.744a.5.5 0 0 1 .265-.775L.87 8.55l.057-.018a78.41 78.41 0 0 0 .822-.274l.18-.06A6.042 6.042 0 0 1 1.793.941a.5.5 0 0 1 .439-.208Zm.727 8.173-.279.094a1245.99 1245.99 0 0 1-.86.288c.29.363.6.695.983.966.555.393 1.293.678 2.397.678 1.973 0 3.48-.7 4.5-1.855 1.027-1.164 1.6-2.837 1.6-4.845a.5.5 0 0 1 .084-.277l.682-1.023H11.2a.5.5 0 0 1-.417-.224 2.053 2.053 0 0 0-.75-.713c-.302-.16-.696-.263-1.233-.263-.759 0-1.362.27-1.784.7-.424.433-.691 1.06-.716 1.817a.5.5 0 0 1-.618.47C4.3 4.382 3.04 3.363 2.204 2.184c-.966 1.894-.682 4.246.951 5.897a.5.5 0 0 1-.196.825Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-4 h-4 flex-shrink-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <g clip-path="url(#a)">
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M2.545 12.183h10.91c.056 0 .1-.047.1-.104V3.922a.103.103 0 0 0-.1-.105H2.544c-.055 0-.1.047-.1.105v8.157a.104.104 0 0 0 .062.096.1.1 0 0 0 .038.008Zm0 1.15h10.91c.669 0 1.212-.561 1.212-1.254V3.922c0-.693-.543-1.255-1.213-1.255H2.545c-.669 0-1.212.562-1.212 1.255v8.157a1.292 1.292 0 0 0 .355.887 1.176 1.176 0 0 0 .857.367Z"
                      clip-rule="evenodd"
                    />
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m2.08 4.05 5.129 3.669a1.333 1.333 0 0 0 1.55.001l5.158-3.68"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="space-x-2">
              {[
                "Introduce",
                "Partner Incentives",
                "Promotion",
                "Contact",
                "Frequently asked questions",
              ].map((item, key) => (
                <>
                  <a
                    href="#"
                    className="text-sm font-medium leading-6 text-primary-text-1"
                  >
                    {item}
                  </a>
                  <span className="text-primary-text-1 items-center inline">
                    ·
                  </span>
                </>
              ))}
            </div>
          </div>
        </nav>
        <div className="bg-primary-0 ">
          <div className="max-w-7xl mx-auto md:px-4 py-4 flex justify-between items-center">
            <div>
              <span className="sr-only">Company Name</span>
              <svg
                width="84"
                height="67"
                viewBox="0 0 84 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.4781 36.482L77.4148 36.4757C77.4148 36.4757 77.4148 36.4757 77.4148 36.482C77.4148 52.9077 63.8975 66.4187 47.4781 66.4187V36.482Z"
                  fill="#68D237"
                />
                <path
                  d="M7.43895 27.719C8.74579 27.719 9.91022 28.0038 10.9322 28.5735C11.971 29.1431 12.7836 29.9473 13.37 30.9861C13.9564 32.0249 14.2496 33.2228 14.2496 34.5799C14.2496 35.937 13.9564 37.1434 13.37 38.1989C12.7836 39.2376 11.971 40.0419 10.9322 40.6115C9.91022 41.1812 8.74579 41.466 7.43895 41.466C5.62947 41.466 4.19697 40.8628 3.14145 39.6565V46.1656H0V27.8698H2.99066V29.629C3.51004 28.9923 4.14671 28.5148 4.90066 28.1965C5.67136 27.8782 6.51746 27.719 7.43895 27.719ZM7.0871 38.7769C8.24316 38.7769 9.18978 38.3916 9.92697 37.6209C10.6809 36.8502 11.0579 35.8365 11.0579 34.5799C11.0579 33.3234 10.6809 32.3097 9.92697 31.539C9.18978 30.7683 8.24316 30.383 7.0871 30.383C6.33316 30.383 5.6546 30.5589 5.05145 30.9107C4.44829 31.2458 3.97079 31.7317 3.61895 32.3684C3.2671 33.005 3.09118 33.7422 3.09118 34.5799C3.09118 35.4177 3.2671 36.1548 3.61895 36.7915C3.97079 37.4282 4.44829 37.9224 5.05145 38.2743C5.6546 38.6094 6.33316 38.7769 7.0871 38.7769Z"
                  fill="white"
                />
                <path
                  d="M23.2604 41.466C21.9033 41.466 20.6803 41.1728 19.5912 40.5864C18.5022 40 17.6477 39.1874 17.0278 38.1486C16.4247 37.0931 16.1231 35.9035 16.1231 34.5799C16.1231 33.2563 16.4247 32.0752 17.0278 31.0364C17.6477 29.9976 18.5022 29.185 19.5912 28.5986C20.6803 28.0122 21.9033 27.719 23.2604 27.719C24.6343 27.719 25.8658 28.0122 26.9548 28.5986C28.0438 29.185 28.8899 29.9976 29.4931 31.0364C30.113 32.0752 30.4229 33.2563 30.4229 34.5799C30.4229 35.9035 30.113 37.0931 29.4931 38.1486C28.8899 39.1874 28.0438 40 26.9548 40.5864C25.8658 41.1728 24.6343 41.466 23.2604 41.466ZM23.2604 38.7769C24.4165 38.7769 25.3715 38.3916 26.1254 37.6209C26.8794 36.8502 27.2564 35.8365 27.2564 34.5799C27.2564 33.3234 26.8794 32.3097 26.1254 31.539C25.3715 30.7683 24.4165 30.383 23.2604 30.383C22.1044 30.383 21.1494 30.7683 20.3955 31.539C19.6583 32.3097 19.2897 33.3234 19.2897 34.5799C19.2897 35.8365 19.6583 36.8502 20.3955 37.6209C21.1494 38.3916 22.1044 38.7769 23.2604 38.7769Z"
                  fill="white"
                />
                <path
                  d="M39.5842 41.466C38.1936 41.466 36.9454 41.1728 35.8396 40.5864C34.7338 40 33.8709 39.1874 33.251 38.1486C32.6311 37.0931 32.3212 35.9035 32.3212 34.5799C32.3212 33.2563 32.6311 32.0752 33.251 31.0364C33.8709 29.9976 34.7254 29.185 35.8145 28.5986C36.9202 28.0122 38.1768 27.719 39.5842 27.719C40.9078 27.719 42.0638 27.9871 43.0523 28.5232C44.0576 29.0594 44.8116 29.8301 45.3142 30.8353L42.9016 32.2427C42.5162 31.6228 42.0303 31.162 41.4439 30.8605C40.8743 30.5421 40.246 30.383 39.5591 30.383C38.3863 30.383 37.4145 30.7683 36.6438 31.539C35.8731 32.293 35.4877 33.3066 35.4877 34.5799C35.4877 35.8533 35.8647 36.8753 36.6187 37.646C37.3894 38.3999 38.3695 38.7769 39.5591 38.7769C40.246 38.7769 40.8743 38.6261 41.4439 38.3245C42.0303 38.0062 42.5162 37.5371 42.9016 36.9172L45.3142 38.3245C44.7948 39.3298 44.0325 40.1089 43.0272 40.6618C42.0387 41.1979 40.891 41.466 39.5842 41.466Z"
                  fill="white"
                />
                <path
                  d="M53.3857 35.5349L51.0485 37.7465V41.2901H47.9071V22.6424H51.0485V33.9014L57.5576 27.8698H61.3273L55.723 33.4993L61.8551 41.2901H58.0351L53.3857 35.5349Z"
                  fill="white"
                />
                <path
                  d="M63.7615 27.8698H66.903V41.2901H63.7615V27.8698ZM65.3448 25.6582C64.7752 25.6582 64.2977 25.4823 63.9123 25.1305C63.527 24.7619 63.3343 24.3095 63.3343 23.7734C63.3343 23.2372 63.527 22.7932 63.9123 22.4414C64.2977 22.0728 64.7752 21.8885 65.3448 21.8885C65.9145 21.8885 66.392 22.0644 66.7773 22.4163C67.1627 22.7513 67.3554 23.1786 67.3554 23.698C67.3554 24.2509 67.1627 24.72 66.7773 25.1053C66.4087 25.4739 65.9312 25.6582 65.3448 25.6582Z"
                  fill="white"
                />
                <path
                  d="M83.6422 34.6553C83.6422 34.8731 83.6254 35.1831 83.5919 35.5852H73.0618C73.2461 36.5737 73.7236 37.3612 74.4943 37.9476C75.2818 38.5172 76.2535 38.802 77.4096 38.802C78.8839 38.802 80.0986 38.3162 81.0536 37.3444L82.7375 39.2795C82.1343 40 81.372 40.5445 80.4505 40.9131C79.529 41.2817 78.4902 41.466 77.3342 41.466C75.8598 41.466 74.5613 41.1728 73.4388 40.5864C72.3162 40 71.445 39.1874 70.8251 38.1486C70.2219 37.0931 69.9203 35.9035 69.9203 34.5799C69.9203 33.2731 70.2136 32.1003 70.8 31.0615C71.4031 30.006 72.2325 29.185 73.288 28.5986C74.3435 28.0122 75.5331 27.719 76.8567 27.719C78.1635 27.719 79.3279 28.0122 80.35 28.5986C81.3887 29.1683 82.1929 29.9809 82.7626 31.0364C83.349 32.0752 83.6422 33.2815 83.6422 34.6553ZM76.8567 30.2322C75.8514 30.2322 74.9969 30.5337 74.2932 31.1369C73.6063 31.7233 73.1875 32.5108 73.0367 33.4993H80.6515C80.5175 32.5275 80.107 31.7401 79.4201 31.1369C78.7332 30.5337 77.8787 30.2322 76.8567 30.2322Z"
                  fill="white"
                />
                <path
                  d="M44.5634 25.1284C44.5634 25.1284 24.2429 20.7181 27.8195 0.97673C27.8195 0.97673 47.179 10.6756 44.5634 25.1284Z"
                  fill="#FFF7AD"
                />
              </svg>
            </div>
            <div className="flex items-center space-x-6 flex-1 max-w-3xl">
              <div className="w-full">
                <input
                  type="text"
                  className="rounded-lg bg-primary-1 w-full py-2.5 px-4"
                  placeholder="Search"
                />
              </div>
              <div>x</div>
              <div>y</div>
            </div>
          </div>
        </div>
        <nav className="bg-primary-1 shadow-[4px_8px_16px_0px_rgba(69,79,89,0.04)]">
          <div className="container max-w-7xl mx-auto py-2 md:px-4 flex justify-between items-center">
            <button className="flex items-center pr-4 py-2">
              <div className="mr-8 flex items-center">
                <span className="w-6 h-6 mr-2 -mb-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 14"
                  >
                    <path
                      fill="#000"
                      fill-rule="evenodd"
                      d="M5.249 1.437a.75.75 0 0 1 .75-.75h11.004a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM5.249 7a.75.75 0 0 1 .75-.75h11.004a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM5.249 12.563a.75.75 0 0 1 .75-.75h11.004a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM.247 1.437a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM.247 7a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM.247 12.563a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span className="font-medium text-sm leading-6 text-primary-text-0">
                  Category
                </span>
              </div>

              <span className="w-6 h-6 flex items-center justify-center -mb-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#858585"
                    fill-rule="evenodd"
                    d="M7.231 9.231a.79.79 0 0 1 1.117 0L12 12.883l3.652-3.652a.79.79 0 0 1 1.117 1.117l-4.21 4.21a.79.79 0 0 1-1.117 0l-4.21-4.21a.79.79 0 0 1 0-1.117Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>

            <div className="flex items-center">
              <div>s</div>
              <div className="flex items-center">
                <span className="mr-2 w-6 h-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2249_2852)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 3.75C9.95445 3.75 8.267 5.45594 8.267 7.517C8.267 9.57068 9.9471 11.25 12 11.25C14.0456 11.25 15.733 9.54406 15.733 7.483C15.733 5.42932 14.0529 3.75 12 3.75ZM6.767 7.517C6.767 4.64206 9.11155 2.25 12 2.25C14.8811 2.25 17.233 4.60068 17.233 7.483C17.233 10.3579 14.8884 12.75 12 12.75C9.1189 12.75 6.767 10.3993 6.767 7.517ZM8 15.75C6.21421 15.75 4.75 17.2142 4.75 19V20C4.75 20.1358 4.86421 20.25 5 20.25H19C19.1358 20.25 19.25 20.1358 19.25 20V19C19.25 17.2142 17.7858 15.75 16 15.75H8ZM3.25 19C3.25 16.3858 5.38579 14.25 8 14.25H16C18.6142 14.25 20.75 16.3858 20.75 19V20C20.75 20.9642 19.9642 21.75 19 21.75H5C4.03579 21.75 3.25 20.9642 3.25 20V19Z"
                        fill="#858585"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2249_2852">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="font-medium text-primary-text-0">
                  Sign In/Register
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}