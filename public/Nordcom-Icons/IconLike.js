import React from "react";

const IconLike = ({ size = 24, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 24 24"
      >
        <path
          fill="#858585"
          fillRule="evenodd"
          d="M5.306 10.25a.306.306 0 0 0-.306.306v7.388a.306.306 0 0 0 .306.306h1.888a.306.306 0 0 0 .306-.306v-7.388a.306.306 0 0 0-.306-.306H5.306Zm-1.806.306c0-.997.809-1.806 1.806-1.806h1.888C8.191 8.75 9 9.559 9 10.556v7.388c0 .997-.809 1.806-1.806 1.806H5.306A1.805 1.805 0 0 1 3.5 17.944v-7.388Z"
          clipRule="evenodd"
        />
        <path
          fill="#858585"
          fillRule="evenodd"
          d="M8.092 11.679a1.5 1.5 0 0 1-.286-2.102l3.65-4.8A3.24 3.24 0 0 1 13.97 3.5a3.22 3.22 0 0 1 2.556 1.19c.487.595.748 1.34.748 2.101v1.805h1.596a3.286 3.286 0 0 1 2.747 1.478l.329.496a3.332 3.332 0 0 1 .426 2.755l-1.359 4.77a3.32 3.32 0 0 1-1.182 1.733 3.288 3.288 0 0 1-1.99.672h-6.29a3.287 3.287 0 0 1-2.422-1.064l-1.233-1.34A1.5 1.5 0 0 1 9 15.58v1.5l1.232 1.34a1.8 1.8 0 0 0 1.319.58h6.29c.39 0 .77-.129 1.082-.366a1.82 1.82 0 0 0 .648-.95l1.359-4.77a1.835 1.835 0 0 0-.234-1.515l-.33-.496a1.786 1.786 0 0 0-1.496-.807h-3.096V6.791c0-.42-.144-.828-.41-1.153A1.737 1.737 0 0 0 13.996 5a1.72 1.72 0 0 0-1.346.685L9 10.485v1.5c-.317 0-.636-.1-.908-.306Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IconLike;