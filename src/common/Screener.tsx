"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../utils/hooks";

const StockScreener = () => {
  // const [stocks, setStocks] = useState([]);
  // const apiKey = 'kZ6IexHXuUjq6Att1Zks89KXSy2VMvy2';
  // const apiUrl = `https://financialmodelingprep.com/api/v3/stock-screener?exchange=BSE&apikey=${apiKey}`;

  // useEffect(() => {
  //     const fetchStocks = async () => {
  //         try {
  //             const response = await fetch(apiUrl);
  //             if (!response.ok) {
  //                 throw new Error('Network response was not ok');
  //             }
  //             const data = await response.json();
  //             setStocks(data);
  //         } catch (error) {
  //             console.error('Error fetching the stock data:', error);
  //         }
  //     };

  //     fetchStocks();
  // }, [apiUrl]);
  const { stockListData } = useAppSelector((state) => state.common);
  return (
    <div>
      <h1>Stock Screener</h1>
      <div className="grid grid-cols-5 gap-2">
        {stockListData?.map((stock) => (
          <div key={stock.symbol} className="flex  col-span-1 gap-3 items-center transition-all duration-200   border border-borderColor p-4 rounded bg-cardBorder">
            <p className=" rounded-lg   ">
              <Image
                width={1400}
                height={1400}
                src={`https://financialmodelingprep.com/image-stock/${stock.symbol}.png`}
                alt="img"
                className="w-12 h-12 rounded-lg"
              />
            </p>{" "}
            {stock?.symbol?.split(".")[0]}: {stock.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockScreener;
