import React from "react";

const BrandTags = () => {
  // List of brand tags
  const brandTags = [
    "Apple",
    "Dell",
    "Casio",
    "Samsung",
    "Mi",
    "Symphony",
    "Tesla",
    "Togg",
    "Bmw",
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Brand</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          {brandTags.slice(0, 3).map((tag, index) => (
            <div
              key={index}
              className="py-1 px-4 inline-flex justify-center items-center border rounded-full bg-primary-31 text-black text-sm"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          {brandTags.slice(3, 6).map((tag, index) => (
            <div
              key={index}
              className="py-1 px-4 inline-flex justify-center items-center border rounded-full bg-primary-31 text-black text-sm"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          {brandTags.slice(6, 10).map((tag, index) => (
            <div
              key={index}
              className="py-1 px-4 inline-flex justify-center items-center border rounded-full bg-primary-31 text-black text-sm"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandTags;
