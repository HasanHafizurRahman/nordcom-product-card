import React from "react";

const ColorSection = () => {
  // Define an array of color objects with their styles
  const colors = [
    {
      name: "White",
      style: {
        width: "2rem",
        height: "2rem",
        flexShrink: 0,
        fill: "var(--White, #fff)",
      },
    },
    {
      name: "Black",
      style: {
        width: "2rem",
        height: "2rem",
        flexShrink: 0,
        fill: "var(--Black, #000)",
      },
    },
    {
      name: "Red-6",
      style: {
        width: "2rem",
        height: "2rem",
        flexShrink: 0,
        fill: "var(--red-6, #FF5A1F)",
      },
    },
    {
      name: "Red-5",
      style: {
        width: "2rem",
        height: "2rem",
        flexShrink: 0,
        fill: "var(--red-5, #FF8154)",
      },
    },
    {
      name: "Yellow-5",
      style: {
        width: "2rem",
        height: "2rem",
        flexShrink: 0,
        fill: "var(--yellow-5, #FFE923)",
      },
    },
    {
      name: "Green-6",
      style: {
        width: "2rem",
        height: "2rem",
        flexShrink: 0,
        fill: "var(--green-6, #479622)",
      },
    },
    {
      name: "Blue-5",
      style: {
        width: "2rem",
        height: "2rem",
        flexShrink: 0,
        fill: "var(--blue-5, #3581EA)",
      },
    },
    {
      name: "Purple-6",
      style: {
        width: "2rem",
        height: "2rem",
        flexShrink: 0,
        fill: "var(--purple-6, #8F77AD)",
      },
    },
    {
      name: "Purple-3",
      style: {
        width: "2rem",
        height: "2rem",
        flexShrink: 0,
        fill: "var(--purple-3, #E3D3EF)",
      },
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Color</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          {colors.slice(0, 6).map((color, index) => (
            <div
              key={index}
              className=""
              style={{
                width: color.style.width,
                height: color.style.height,
                flexShrink: color.style.flexShrink,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="16" fill={color.style.fill} />
              </svg>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          {colors.slice(6, 9).map((color, index) => (
            <div
              key={index}
              className=""
              style={{
                width: color.style.width,
                height: color.style.height,
                flexShrink: color.style.flexShrink,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="16" fill={color.style.fill} />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorSection;
