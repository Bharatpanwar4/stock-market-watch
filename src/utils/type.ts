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
