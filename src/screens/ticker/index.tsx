"use client";
import { toUpdateStockListData } from "@/src/redux/action";
import { useGetFinancialDataQuery } from "@/src/redux/services/commonApi";
import { useAppDispatch, useAppSelector } from "@/src/utils/hooks";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const Ticker = () => {
  
  const {data,isLoading,isError}=useGetFinancialDataQuery({exchange:'BSE'})
  const {stockListData}=useAppSelector((state)=>state.common)
 const dispatch=useAppDispatch()

  useEffect(()=>{
if(data){
  dispatch(toUpdateStockListData(data))
  // console.log('dddddddddddd>>>>>>>>>>>>',data);
  
}
  },[data])

  return (
    <div>
    {
      isLoading ? <div className="ticker-container flex items-center justify-center animate-pulse h-6   text-xs font-semibold"> GOOD MORNING   </div> : 
         <Marquee className="ticker-container  text-xs font-semibold" pauseOnHover>
         {stockListData?.length > 0 &&
              stockListData.map((item, index) => (
                <div key={index} className="px-4 flex items-center gap-2 hover:cursor-pointer">
                  <p
                    className={` ${
                      item.beta > 0 ? "triangle-green text-activeColor" : "triangle-red text-negativeColor"
                    }`}
                  ></p>
                  <p>{item.symbol.split(".")[0]}</p>
    
                  <p
                    className={`${
                      item.beta > 0 ? "text-activeColor" : "text-negativeColor"
                    }  animate-pulse `}
                  >
                    {item?.beta ? item.beta?.toFixed(2) : '0.00'}
                  </p>
                </div>
              ))}
      </Marquee>
    }
    </div>
    


);
}
export default Ticker;
//  "text-[#19AF55]" : "text-[#D82F44]"