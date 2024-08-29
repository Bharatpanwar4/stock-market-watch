"use client";
import { Input } from "@/lib/ui/input";
import { useGetSearchQuery } from "@/src/redux/services/commonApi";
import { ITickerSearchResponseProps } from "@/src/utils/type";
import { Search } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import landmarkIcon from "@/public/assets/landmarkIcon.svg";
const GlobalSearch = () => {
  const [query, setQuery] = useState("");

  const { data: searchData } = useGetSearchQuery({
    exchange: "BSE",
    limit: 10,
    query: query,
  });
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchResults(searchData);
    }, 300);

    return () => clearTimeout(delayDebounceFn); // Cleanup on unmount
  }, [query]);

  // console.log("ssssssssssssssssss", searchResults);

  return (
    <div className="w-1/3 relative">
      <Search className="text-[#7c7e8c] w-4 h-4 absolute top-3.5 left-2" />
      <Input
        className="border border-borderColor pl-8 dark:border-darkBorderColor placeholder:text-[#7c7e8c] placeholder:text-xs"
        placeholder="What are you looking at today?"
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
      />

      {/* Display search results */}
      {searchResults?.length > 0 && query?.length > 0 && (
        <ul className="absolute z-10 bg-[#fff] dark:bg-darkBorderColor border rounded-lg hideScrollbar border-borderColor dark:border-darkBorderColor mt-1 w-full max-h-fit overflow-y-auto">
          {searchResults?.map((result: ITickerSearchResponseProps) => (
            <li
              key={result.symbol}
              className="p-2 hover:bg-gray-200  dark:hover:bg-darkCard/10 cursor-pointer flex items-center  gap-3 "
            >
              <div className=" rounded   ">
                <Image
                  width={900}
                  height={900}
                  src={`https://financialmodelingprep.com/image-stock/${result.symbol}.png`}
                  // src={`https://assets-netstorage.groww.in/stock-assets/logos/GIDXNIFTYFIN.png`}

// src={landmarkIcon}
                  alt="img"
                  className="w-12 h-12 rounded-full text-subActiveColor"
                />
              </div>{" "}

              <div className="flex flex-col text-xs text-subActiveColor dark:text-[#fff] ">
            <p>  {result.name}
            </p>       

            <p className="font-medium"> {result.symbol.split(".")[0]}</p>    
              
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GlobalSearch;
