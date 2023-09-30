import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NewBadge from "../badge/NewBadge";
import DealBadge from "../badge/DealBadge";
import SoldOutBadge from "../badge/SoldOutBadge";
import WatchALotBadge from "../badge/Watch_A_Lot_Badge";
import IconHeart from "@/public/Nordcom-Icons/IconHeart";
import IconEyeVisible from "@/public/Nordcom-Icons/IconEyeVisible";
import IconShuffle from "@/public/Nordcom-Icons/IconShuffle";
import IconCart from "@/public/Nordcom-Icons/IconCart";
import IconStar_Filled from "@/public/Nordcom-Icons/IconStar_Filled";
import IconTruck from "@/public/Nordcom-Icons/IconTruck";

const Product = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate the product route URL based on its id
  const productRoute = `/product/${product.id}`;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col relative rounded-[5px]">
      <div className="flex gap-2 absolute top-2 left-2 z-10">
        {product.badges?.includes("New") && <NewBadge />}
        {product.badges?.includes("Deal") && <DealBadge />}
        {product.badges?.includes("Sold Out") && <SoldOutBadge />}
        {product.badges?.includes("Watch a lot") && <WatchALotBadge />}
      </div>

      <div
        className=""
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && (
          <div className="absolute top-2 right-0 h-full flex flex-col gap-1.5 p-2 z-10">
            <button className="bg-slate-200 p-1 rounded-full">
              <IconHeart size={18} color="black" />
            </button>
            <button className="bg-slate-200 p-1 rounded-full">
              <IconEyeVisible size={18} color="black" />
            </button>
            <button className="bg-primary-25 p-1 rounded-full">
              <IconShuffle size={18} color="white" />
            </button>
          </div>
        )}
        <Link href={productRoute}>
          {/* Wrap the product in a Link */}
          <Image
            src={product.image}
            alt={product.title}
            width={10.75 * 16}
            height={10.75 * 16}
            loading="lazy"
            className="w-full h-full object-cover mb-2"
          />
        </Link>
      </div>
      <div className="flex justify-center mt-2">
        <p className="text-xs bg-slate-200 rounded-[5px] px-3 py-1.5">
          Free Delivery
        </p>
      </div>
      <div className="mt-3 px-2">
        <p className="text-base text-primary-34">{product.company}</p>
        <h3 className="font-semibold line-clamp-2">{product.title}</h3>
        {/* reviews */}
        <div className="flex gap-2 items-center mt-1">
          <div className="flex">
            <IconStar_Filled size={15} />
            <IconStar_Filled size={15} />
            <IconStar_Filled size={15} />
            <IconStar_Filled size={15} />
            <IconStar_Filled size={15} />
          </div>
          <div>
            <p className="text-sm">186</p>
          </div>
        </div>
        {/* delivery date */}
        <div className="flex gap-2 mt-1">
          <div>
            <IconTruck size={14} />
          </div>
          <div>
            <p className="text-xs text-primary-34">Thursday, 23 Dec</p>
          </div>
        </div>
        {/* price-cart */}
        <div className="flex justify-between items-center">
          <span>
            <h3 className="font-semibold my-2">${product.price}</h3>
          </span>
          <span>
            <IconCart size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
