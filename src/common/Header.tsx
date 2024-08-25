import Image from "next/image";
import React from "react";
import { logoIcon } from "../utils/Image";
import { Input } from "@/lib/ui/input";
import { Bell, ShoppingCart, Wallet } from "lucide-react";
import ThemeController from "./ThemeController";

const Header = () => {
  return (
    <div className="border-b border-borderColor dark:border-darkBorderColor">
      <div className="container flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <Image src={logoIcon} alt="logo" className="w-10 h-10 rotate-90" />
          <h1 className="text-mainHeading dark:text-[#fff] text-3xl font-medium">
            Broww
          </h1>
        </div>
        <div>
          <Input className="border border-borderColor  dark:border-darkBorderColor placeholder:text-[#7c7e8c] placeholder:text-xs" placeholder="What are you looking at today?"/>
        </div>
        <div className="flex items-center justify-between gap-8">

<ThemeController/>  

          <div className="hover:bg-darkCard/30 cursor-pointer hover:scale-105 p-2 transition-all duration-200 rounded-full">
            <Bell className="text-mainHeading dark:text-[#fff] " />
          </div>
          <div className="hover:bg-darkCard/30 cursor-pointer hover:scale-105 p-2 transition-all duration-200 rounded-full">
            <Wallet className="text-mainHeading dark:text-[#fff]" />
          </div>
          <div className="hover:bg-darkCard/30 cursor-pointer hover:scale-105 p-2 transition-all duration-200 rounded-full">
            <ShoppingCart className="text-mainHeading dark:text-[#fff]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
