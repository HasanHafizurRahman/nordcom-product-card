import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import IconHeart from "@/public/Nordcom-Icons/IconHeart";
import IconHeartFill from "@/public/Nordcom-Icons/IconHeartFill";

const ProductImageSlider = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isLiked, setIsLiked] = useState(false); // Initialize as not liked

  // Function to handle the click event on the heart icon
  const handleHeartClick = () => {
    setIsLiked(!isLiked); // Toggle the like state
  };

  return (
    <div>
      <div className="relative border border-primary-31 px-10 py-4 rounded-lg w-[23rem] h-[23rem] flex-shrink-0">
        <div
          className="absolute top-4 right-2 cursor-pointer"
          onClick={handleHeartClick}
        >
          {isLiked ? <IconHeartFill /> : <IconHeart />}
        </div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-full"
        >
          <SwiperSlide>
            <Image
              width={23 * 16}
              height={23 * 16}
              src="https://i.ibb.co/jvQ4VFV/original-imagp279xqv69rjq.webp"
              alt=""
              loading="lazy"
              className="h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={23 * 16}
              height={23 * 16}
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt=""
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={23 * 16}
              height={23 * 16}
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              alt=""
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={23 * 16}
              height={23 * 16}
              src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
              alt=""
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        // spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="flex space-x-4 mt-[0.75rem] h-[5.19rem]"
      >
        <SwiperSlide>
          <Image
            fill
            src="https://i.ibb.co/jvQ4VFV/original-imagp279xqv69rjq.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductImageSlider;
