"use client";
import { MarketIndice } from "@/src/utils/data";
import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";

const MarketIndexes = () => {
  const [activeArea, setActiveArea] = useState<string>("asia");
  const MarketRegions = ["asia", "us", "europe", "currencies", "crypto"];
  console.log("market", MarketIndice.asia);

  useEffect(() => {
    console.log("a", activeArea);
  }, [activeArea]);
  return (
    <div className="w-full p-4 bg-[#F8F9FA] rounded-2xl ">
      <div className="flex items-center  gap-1 md:gap-4 lg:gap-8">
        <p className="text-sm text-subActiveColor font-medium hidden md:block">Markets</p>
        {MarketRegions?.map((item) => (
          <div
            key={item}
            className={`px-2 lg:px-4 cursor-pointer py-0.5 border  border-[#dadce0]  dark:border-darkCard rounded-full  text-xs font-medium  ${
              activeArea == item
                ? "text-activeColor border-activeColor/10 bg-activeColor/10"
                : "text-subActiveColor"
            } `}
            onClick={() => setActiveArea(item)}
          >
            {item}
          </div>
        ))}
      </div>

      {/* indices */}

      <div className="flex items-center gap-4 overflow-auto hideScrollbar mt-4  ">
        {MarketIndice[activeArea]?.map((item) => (
          <div
            key={item.stock}
            className="p-2 border border-borderColor bg-[#fff] dark:bg-darkCard whitespace-nowrap rounded-md transition-all duration-400 transform hover:scale-105  "
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4"
            >
              {/* <p className="font-medium">{item.name}</p>
          <p>Price: {item.price}</p>
          <p>
            {item.price_movement.movement === "Up" ? (
              <span className="text-green-500">▲</span>
            ) : (
              <span className="text-red-500">▼</span>
            )}{" "}
            {item.price_movement.value} ({(item.price_movement.percentage * 100).toFixed(2)}%)
          </p> */}
              <div className="flex items-stretch text-xs gap-2">
                <div
                  className={`
                    flex items-center justify-center
                    ${
                    item.price_movement.movement == "Up"
                      ? "bg-activeColor/10 text-activeColor"
                      : "bg-negativeColor/10 text-negativeColor"
                  } rounded-md px-2`}
                >
                  {item.price_movement.movement == "Up" ? (
                    <ArrowUp className="w-4 h-4" />
                  ) : (
                    <ArrowDown className="w-4 h-4" />
                  )}
                </div>
                <div className="flex flex-col justify-between text-[#373737]">
                  <p className="font-semibold">{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </div>
              <div className={` text-xs text-right  transition-colors duration-300 ${
                    item.price_movement.movement == "Up"
                      ? " text-activeColor"
                      : " text-negativeColor"
                  }`}>
                    <p className="flex items-center  font-medium ">
                {item.price_movement.movement == "Up" ? '+' :'-'}    {item.price_movement.percentage?.toFixed(2)}%
                    </p>
                    <p>
                    {item.price_movement.movement == "Up" ? '+' :'-'}        {item.price_movement.value?.toFixed(2)}
                    </p>
              
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketIndexes;
