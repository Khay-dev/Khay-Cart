/* eslint-disable @next/next/no-img-element */

"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { menClothes, size } from "../types";


const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-between gap-y-10 lg:flex-row w-11/12 mx-auto my-20">
        <SideBar />
        <MainBar />
      </div>
      <Footer />
    </div>
  );
};

const SideBar = () => {
  const waistSizes: size[] = [
    {
      value: "36",
    },
    {
      value: "38",
    },
    {
      value: "40",
    },
    {
      value: "42",
    },
    {
      value: "44",
    },
    {
      value: "46",
    },
    {
      value: "48",
    },
    {
      value: "50",
    },
  ];

  const ClothesSizes: size[] = [
    {
      value: "XXS",
    },
    {
      value: "XS",
    },
    {
      value: "S",
    },
    {
      value: "M",
    },
    {
      value: "L",
    },
    {
      value: "XL",
    },
    {
      value: "XXL",
    },
    {
      value: "XXXL",
    },
  ];
  const [showSize, setShowSize] = useState<boolean>(false);

  const handleShowSize = () => {
    setShowSize(!showSize);
  };
  return (
    <div>
      <div className="hidden lg:flex flex-col gap-y-5 basis-1/5 shrink-0 sticky top-5">
        <span className="font-inter font-normal text-xs text-black">
          249 Products
        </span>
        <div className="h-px bg-[#DDDBDC] w-full" />
        <div className="flex flex-col gap-y-5">
          <h1 className="font-inter font-semibold text-sm mb-2">Size</h1>
          <div>
            <p className="font-inter font-normal text-xs text-black">Waist</p>
            <div className="mt-2 grid grid-cols-4 gap-1">
              {waistSizes.map((waistSize) => (
                <button
                  type="button"
                  key={waistSize.value}
                  className="bg-[#F5F4F4] p-3 font-inter font-normal text-xs hover:bg-text hover:text-white"
                >
                  {waistSize.value}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-inter font-normal text-xs text-black">
              Clothing
            </p>
            <div className="mt-2 grid grid-cols-4 gap-1">
              {ClothesSizes.map((clotheSize) => (
                <button
                  type="button"
                  key={clotheSize.value}
                  className="bg-[#F5F4F4] p-3 font-inter font-normal text-xs  hover:bg-text hover:text-white"
                >
                  {clotheSize.value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden flex-col gap-y-5 basis-1/5 shrink-0">
        <span className="font-inter font-normal text-xs text-black">
          249 Products
        </span>
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center justify-between">
            <h1 className="font-inter font-semibold text-sm mb-2 text-black">
              Size
            </h1>
            <button type="button" onClick={handleShowSize}>
              {showSize ? (
                <IoIosArrowDown className="font-inter font-semibold text-sm mb-2 text-black" />
              ) : (
                <IoIosArrowUp className="font-inter font-semibold text-sm mb-2 text-black" />
              )}
            </button>
          </div>
          {showSize && (
            <div className="flex flex-col gap-y-10">
              <div>
                <p className="font-inter font-normal text-xs text-black">
                  Waist
                </p>
                <div className="mt-2 grid grid-cols-4 gap-1">
                  {waistSizes.map((waistSize, index) => (
                    <button
                      type="button"
                      key={waistSize.value}
                      className="bg-[#F5F4F4] p-3 font-inter font-normal text-xs"
                    >
                      {waistSize.value}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-inter font-normal text-xs text-black">
                  Clothing
                </p>
                <div className="mt-2 grid grid-cols-4 gap-1">
                  {ClothesSizes.map((clotheSize, index) => (
                    <button
                      type="button"
                      key={clotheSize.value}
                      className="bg-[#F5F4F4] p-3 font-inter font-normal text-xs"
                    >
                      {clotheSize.value}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MainBar = () => {
  const menClothes: menClothes[] = [
    {
      index: crypto.randomUUID(),
      menImage: "/assets/men1.png",
      menColor: "Black",
      menBrand: "The Waffle Long-Sleeve Crew",
      menPrice: "132",
    },
    {
      index: crypto.randomUUID(),
      menImage: "/assets/men2.png",
      menColor: "Black",
      menBrand: "The Waffle Long-Sleeve Crew",
      menPrice: "132",
    },
    {
      index: crypto.randomUUID(),
      menImage: "/assets/men3.png",
      menColor: "Black",
      menBrand: "The Waffle Long-Sleeve Crew",
      menPrice: "132",
    },
    {
      index: crypto.randomUUID(),
      menImage: "/assets/men4.png",
      menColor: "Black",
      menBrand: "The Waffle Long-Sleeve Crew",
      menPrice: "132",
    },
    {
      index: crypto.randomUUID(),
      menImage: "/assets/men5.png",
      menColor: "Black",
      menBrand: "The Waffle Long-Sleeve Crew",
      menPrice: "132",
    },
    {
      index: crypto.randomUUID(),
      menImage: "/assets/men6.png",
      menColor: "Black",
      menBrand: "The Waffle Long-Sleeve Crew",
      menPrice: "132",
    },
    {
      index: crypto.randomUUID(),
      menImage: "/assets/men7.png",
      menColor: "Black",
      menBrand: "The Waffle Long-Sleeve Crew",
      menPrice: "132",
    },
    {
      index: crypto.randomUUID(),
      menImage: "/assets/men8.png",
      menColor: "Black",
      menBrand: "The Waffle Long-Sleeve Crew",
      menPrice: "132",
    },
    {
      index: crypto.randomUUID(),
      menImage: "/assets/men9.png",
      menColor: "Black",
      menBrand: "The Waffle Long-Sleeve Crew",
      menPrice: "132",
    },
  ];

  return (
    <div className="basis-4/5 shrink-0 w-full">
      <span className="text-gray font-inter font-normal text-xs">
        Home / Women
      </span>
      <h1 className="text-black font-inter font-normal text-[32px]">
        Women’s Clothing & Apparel
      </h1>
      <p>Featured</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
        {menClothes.map((item) => (
          <Link href={`/men/${item.index}`} key={item.index}>
            <div className="w-full cursor-pointer">
              <img
                src={item.menImage}
                alt={item.menBrand}
                className="h-auto w-full"
              />
              <div className="mt-3.5 flex justify-between">
                <div className="flex flex-col gap-y-1.5">
                  <h3 className="text-xs text-primary font-inter font-normal">
                    {item.menBrand}
                  </h3>
                  <p className="text-xs text-gray font-inter font-normal">
                    {item.menColor}
                  </p>
                </div>
                <span className="text-xs font-semibold  font-inter text-primary">
                  ${item.menPrice}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
