import IconLike from "@/public/Nordcom-Icons/IconLike";
import IconMessage from "@/public/Nordcom-Icons/IconMessage";
import Image from "next/image";
import React from "react";

const ReviewComment = ({
  rating,
  title,
  content,
  imageSrc,
  author,
  isCertifiedBuyer,
  location,
  likes,
  comments,
}) => {
  return (
    <div className="p-6 border border-primary-31 mt-[-1px]">
      <div className="flex">
        <div className="inline-flex items-center py-[0.125rem] pr-1 pl-[0.375rem] bg-primary-19 mb-2 rounded-md text-white">
          <span className="text-xs font-medium">{rating}</span>
          <span className="text-xs">★</span>
        </div>
        <div>
          <p className="text-sm font-medium pl-[12px]">{title}</p>
        </div>
      </div>
      <p className="text-sm py-[2px]">{content}</p>
      <Image
        width={62}
        height={62}
        src={imageSrc}
        alt=""
        className="my-2 rounded-[5px]"
      />
      <div className="flex justify-between items-center">
        <div className="flex">
          <p className="text-xs font-medium mr-2 text-primary-34">{author}</p>
          {isCertifiedBuyer && (
            <div className="flex">
              {" "}
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
          )}
          <p className="text-xs text-primary-34 mr-2">{location}</p>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <IconLike />
            <p className="text-xs text-primary-34">{likes}</p>
          </div>
          <div className="flex gap-2 items-center">
            <IconMessage />
            <p className="text-xs text-primary-34">{comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewComment;
