export interface IBSETickerResponseProps {
  symbol: string;
  companyName: string;
  marketCap: number;
  sector: string;
  industry: string;
  beta: number;
  price: number;
  lastAnnualDividend: number;
  volume: number;
  exchange: string;
  exchangeShortName: string;
  country: string;
  isEtf: boolean;
  isFund: boolean;
  isActivelyTrading: boolean;
}
export interface IBSETickerInputProps {
  exchange: string;
}

// search
export interface ITickerSearchResponseProps {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
}
export interface ITickerSearchInputProps {
  query: string;
  limit: number;
  exchange: string;
}


// market indice
type PriceMovement = {
  percentage: number;
  value: number;
  movement: "Up" | "Down";
};

type StockInfo = {
  stock: string;
  link: string;
  serpapi_link: string;
  name: string;
  price: number;
  price_movement: PriceMovement;
  currency?: string; // Optional, only used in "futures"
};

export type MarketIndices = {
  us: StockInfo[];
  europe: StockInfo[];
  asia: StockInfo[];
  currencies: StockInfo[];
  crypto: StockInfo[];
  futures: StockInfo[];
  top_news: {
    link: string;
    snippet: string;
    source: string;
    date: string;
  };
};