export type CryptoType = {
  id: string;
  name: string;
  image: string;
  current_price: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  market_cap_change_percentage_24h: number;
  ath: number;
  atl: number;
  circulating_supply: number;
  market_cap: number;
  market_data: {
    price_change_percentage_24h: number;
    market_cap_change_percentage_24h: number;
    market_cap: {
      usd: number;
      eur: number;
      gbp: number;
    };
    total_volume: {
      usd: number;
      eur: number;
      gbp: number;
    };
    current_price: {
      usd: number;
      eur: number;
      gbp: number;
    };
    circulating_supply: number;
    total_supply: number;
    ath: {
      usd: number;
      eur: number;
      gbp: number;
    };
    atl: {
      usd: number;
      eur: number;
      gbp: number;
    };
    sparkline_30d: {
      price: number[];
    };
  };
};

export type CryptoDetailsMapType = {
  [key: string]: CryptoType | undefined;
};

export type CryptoPricesMapType = {
  [key: string]: CryptoPriceType | undefined;
};

export type CryptoSearchByKeyMapType = {
  [key: string]: SearchCryptoType[] | undefined;
};

export type CryptoSearchMapType = {
  [key: string]: SearchCryptoType | undefined;
};

export type CryptoReducerType = {
  coins: CryptoType[];
  coinsDetails: CryptoDetailsMapType;
  coinsPrices: CryptoPricesMapType;
  coinsSearchByKey: CryptoSearchByKeyMapType;
  coinsSearch: CryptoSearchMapType;
};

export type CryptoAPIPriceType = {
  prices: [number, number][];
};

export type CryptoPriceType = {
  date: number;
  price: number;
}[];

export type SearchCryptoType = {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
};
