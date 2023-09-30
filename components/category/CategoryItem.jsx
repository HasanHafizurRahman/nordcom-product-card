import React from "react";
import { categories } from "./CategoryData";
import CategoryList from "./CategoryList";

const CategoryItem = () => {
  return (
    <div className="">
      <h3 className="font-medium pt-[1.5rem] pb-4">Category</h3>

      <CategoryList categories={categories} />
    </div>
  );
};

export default CategoryItem;
