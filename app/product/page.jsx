"use client";
import React from "react";
import ProductList from "@/components/product/ProductList";
import CategoryItem from "@/components/category/CategoryItem";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import BrandTags from "@/components/category/BrandTags";
import ColorSection from "@/components/category/ColorSection";
import PriceRange from "@/components/category/PriceRange";

const page = () => {
  const paths = [
    { label: "Home", href: "/" },
    { label: "Technology", href: "/technology" },
    { label: "Laptop", href: "/technology/laptop" },
    { label: "Apple" },
  ];
  return (
    <div className="container mx-auto">
      <div>
        <Breadcrumb paths={paths} />
      </div>
      <div className="flex gap-[7rem]">
        <div className="">
          <CategoryItem />
          <BrandTags />
          <ColorSection />
          <PriceRange />
        </div>
        <div className="flex-1">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default page;
