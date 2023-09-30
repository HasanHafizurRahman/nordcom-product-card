import Image from "next/image";
import React, { useState } from "react";

const Product_Description = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <div className="p-6 border border-primary-31 mt-[-1px] rounded-tl-sm rounded-tr-sm">
        <h2 className="font-medium">Product Description</h2>
      </div>
      {/* Descriptions */}

      <div className="flex items-center p-6 border border-primary-31 mt-[-1px]">
        <div className="w-[600px]">
          <h3 className="mb-2">Upto 4 GB RAM and 64 GB ROM</h3>
          <p className="text-sm text-left">
            The Infinix SMART 7 HD has 64 GB of internal storage and up to 4 GB
            of RAM (2 GB RAM + 2 GB Virtual RAM). In order to accommodate
            possibly all of your multitasking demands, this phone is engineered
            to allow you to store anything you need and run programmes any way
            you choose.
          </p>
        </div>
        <div className="w-[10.5rem] h-[7.875rem]">
          <Image
            layout="responsive"
            width={10.5 * 16}
            height={7.875 * 16}
            src="https://i.ibb.co/4dP6mM5/52417a7439f94eaa952bc620654b8686-187b23577f6-1-Smart-7-HD-RPD-Memory-jpg.webp"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex items-center p-6 border border-primary-31 mt-[-1px]">
        <div className="w-[10.5rem] h-[7.875rem]">
          <Image
            layout="responsive"
            width={10.5 * 16}
            height={7.875 * 16}
            src="https://i.ibb.co/4dP6mM5/52417a7439f94eaa952bc620654b8686-187b23577f6-1-Smart-7-HD-RPD-Memory-jpg.webp"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="max-w-[600px] pl-6">
          <h3 className="mb-2">Wave Pattern Design</h3>
          <p className="text-sm">
            When you go around with this smartphone, everyone starts to stare at
            the superior Wave pattern Design with the anti-bacterial coating on
            the rear. It elevates your sense of style by having a high-end
            appearance and a wonderful feel in the hands.
          </p>
        </div>
      </div>
      {showMore && (
        <>
          <div className="flex items-center p-6 border border-primary-31 mt-[-1px]">
            <div className="max-w-[600px]">
              <h3 className="mb-2">Versatile Security</h3>
              <p className="text-sm text-left">
                Choose from a reliable and fast fingerprint scanner and a
                convenient and quick face unlock feature on the SMART 7 HD. This
                makes unlocking and using the phone a breeze, no matter the
                condition.
              </p>
            </div>
            <div className="w-[10.5rem] h-[7.875rem]">
              <Image
                layout="responsive"
                width={10.5 * 16}
                height={7.875 * 16}
                src="https://i.ibb.co/4dP6mM5/52417a7439f94eaa952bc620654b8686-187b23577f6-1-Smart-7-HD-RPD-Memory-jpg.webp"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex items-center p-6 border border-primary-31 mt-[-1px]">
            <div className="w-[10.5rem] h-[7.875rem]">
              <Image
                layout="responsive"
                width={10.5 * 16}
                height={7.875 * 16}
                src="https://i.ibb.co/4dP6mM5/52417a7439f94eaa952bc620654b8686-187b23577f6-1-Smart-7-HD-RPD-Memory-jpg.webp"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="max-w-[600px] pl-6">
              <h3 className="mb-2">Dazzling Display</h3>
              <p className="text-sm">
                This smartphone's 16.76 cm (6.6) HD+ Display, which is vivid and
                large, makes entertainment appear to be occurring in front of
                you. The display is moreover bright enough to be clearly seen
                even in direct sunlight.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6 border border-primary-31 mt-[-1px]">
            <div className="w-[600px]">
              <h3 className="mb-2">Unmatched Camera Setup</h3>
              <p className="text-sm text-left">
                The smart AI Camera is equipped with an 8 MP Dual AI Camera and
                dual LED flash to handle all of your photography demands. It is
                capable of identifying scene and lighting circumstances to
                provide you with the optimum results each time you snap a
                picture.
              </p>
            </div>
            <div className="w-[10.5rem] h-[7.875rem]">
              <Image
                layout="responsive"
                width={10.5 * 16}
                height={7.875 * 16}
                src="https://i.ibb.co/4dP6mM5/52417a7439f94eaa952bc620654b8686-187b23577f6-1-Smart-7-HD-RPD-Memory-jpg.webp"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex items-center p-6 border border-primary-31 mt-[-1px]">
            <div className="w-[10.5rem] h-[7.875rem]">
              <Image
                layout="responsive"
                width={10.5 * 16}
                height={7.875 * 16}
                src="https://i.ibb.co/4dP6mM5/52417a7439f94eaa952bc620654b8686-187b23577f6-1-Smart-7-HD-RPD-Memory-jpg.webp"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-[600px] pl-6">
              <h3 className="mb-2">Stunning Selfies</h3>
              <p className="text-sm">
                This smartphone has a 5 MP Selfie Camera with LED Flash so you
                can step up your social media game. Selfies therefore always
                turn out clear and crisp, regardless of the hour.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6 border border-primary-31 mt-[-1px]">
            <div className="w-[600px]">
              <h3 className="mb-2">Monstrous Battery</h3>
              <p className="text-sm text-left">
                Thanks to the powerful 5000 mAh battery equipped with this
                phone, you can seamlessly stay ahead of the curve without any
                hassle. Also, the Power Marathon Technology of this phone helps
                to extend your battery capability by up to 25%, helping you to
                accomplish whatever you are doing without any interruptions.
              </p>
            </div>
            <div className="w-[10.5rem] h-[7.875rem]">
              <Image
                layout="responsive"
                width={10.5 * 16}
                height={7.875 * 16}
                src="https://i.ibb.co/4dP6mM5/52417a7439f94eaa952bc620654b8686-187b23577f6-1-Smart-7-HD-RPD-Memory-jpg.webp"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex items-center p-6 border border-primary-31 mt-[-1px]">
            <div className="w-[10.5rem] h-[7.875rem]">
              <Image
                layout="responsive"
                width={10.5 * 16}
                height={7.875 * 16}
                src="https://i.ibb.co/4dP6mM5/52417a7439f94eaa952bc620654b8686-187b23577f6-1-Smart-7-HD-RPD-Memory-jpg.webp"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-[600px] pl-6">
              <h3 className="mb-2">Smooth Performanc</h3>
              <p className="text-sm">
                This phone's powerful octa-core CPU keeps up with your hectic
                schedule and aids in finishing difficult chores. Regardless of
                whether you are browsing, streaming, or switching between apps,
                enabling you to multitask with ease.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6 border border-primary-31 mt-[-1px]">
            <div className="w-[600px]">
              <h3 className="mb-2">Triple Card Slot</h3>
              <p className="text-sm text-left">
                With this phone's triple card slots, which can accommodate two
                4G SIM cards and a microSD card with up to 1 TB of storage, you
                can store all of your entertainment needs and effortlessly
                remain in touch with your friends.
              </p>
            </div>
            <div className="w-[10.5rem] h-[7.875rem]">
              <Image
                layout="responsive"
                width={10.5 * 16}
                height={7.875 * 16}
                src="https://i.ibb.co/4dP6mM5/52417a7439f94eaa952bc620654b8686-187b23577f6-1-Smart-7-HD-RPD-Memory-jpg.webp"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex items-center p-6 border border-primary-31 mt-[-1px]">
            <div className="w-[10.5rem] h-[7.875rem]">
              <Image
                layout="responsive"
                width={10.5 * 16}
                height={7.875 * 16}
                src="https://i.ibb.co/4dP6mM5/52417a7439f94eaa952bc620654b8686-187b23577f6-1-Smart-7-HD-RPD-Memory-jpg.webp"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-[600px] pl-6">
              <h3 className="mb-2">A Plethora of Features</h3>
              <p className="text-sm">
                With the amazing XOS 12, which runs on the Infinix SMART 7HD and
                is based on Android 12GO, features keep coming to mesmerise you
                with their impeccable capabilities. Make use of a tonne of great
                extras, like Video Assistant, Game Mode, Social Turbo, Eye Care,
                AI Gallery, OTG Support, and more.
              </p>
            </div>
          </div>
        </>
      )}

      {showMore || (
        <div className="p-6 border border-primary-31 mt-[-1px]">
          <button
            onClick={() => setShowMore(true)}
            className="text-primary-19 font-medium hover:underline"
          >
            View All Features
          </button>
        </div>
      )}
    </div>
  );
};

export default Product_Description;
