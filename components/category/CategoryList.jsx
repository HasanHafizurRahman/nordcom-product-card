import React, { useState } from "react";
import IconArrowLeft from "@/public/Nordcom-Icons/IconArrowLeft";

const CategoryList = () => {
  const categoriesData = {
    Apple: ["iPhone", "Charger", "Case", "Screen Protector", "Accessories"],
    iPhone: [
      "iPhone 15",
      "iPhone 15 Plus",
      "iPhone 15 Pro",
      "iPhone 15 Pro Max",
      "iPhone 14",
      "iPhone 14 Pro",
      "iPhone 14 Pro Max",
      "iPhone 14 Plus",
      "iPhone 13",
      "iPhone SE",
      "Used",
    ],
    // Add more categories as needed
  };

  const [categories, setCategories] = useState(categoriesData);
  const [currentCategory, setCurrentCategory] = useState("Apple");
  const [prevCategories, setPrevCategories] = useState([]);

  const handleCategoryClick = (category) => {
    setPrevCategories([...prevCategories, currentCategory]);
    setCurrentCategory(category);
  };

  const handleGoBack = () => {
    if (prevCategories.length > 0) {
      const previousCategory = prevCategories.pop();
      setCurrentCategory(previousCategory);
      setPrevCategories([...prevCategories]);
    } else {
      // If no previous category, set to "Home"
      setCurrentCategory("Home");
    }
  };

  return (
    <div>
      <div className="flex items-center cursor-pointer" onClick={handleGoBack}>
        <IconArrowLeft className="mr-2" />
        <span className="text-sm">
          {prevCategories.length > 0
            ? prevCategories[prevCategories.length - 1]
            : "Home"}
        </span>
      </div>
      <h4 className="font-bold my-2 ml-2">{currentCategory}</h4>
      <hr className="mb-2 ml-2 bg-black h-0.5" />
      <ul className="font-semibold ml-2">
        {categories[currentCategory]?.map((subcategory) => (
          <li
            key={subcategory}
            className={`cursor-pointer text-sm font-medium bg-primary-31 mb-1 px-2 py-2 rounded-[5px] ${
              currentCategory === subcategory ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategoryClick(subcategory)}
          >
            {subcategory}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
