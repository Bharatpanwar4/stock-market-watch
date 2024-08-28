import { Button } from "@/lib/ui/button";
import StockScreener from "@/src/common/Screener";
import ThemeController from "@/src/common/ThemeController";
import MarketIndexes from "@/src/screens/markets";
import Ticker from "@/src/screens/ticker";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container  ">
  {/* <StockScreener/> */}
  <MarketIndexes/>

{/* <Ticker/> */}
    </main>
  );
}
